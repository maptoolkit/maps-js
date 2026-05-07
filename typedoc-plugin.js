// @ts-check
import { Converter, ReflectionKind, ReflectionFlag, Comment, CommentTag } from "typedoc";
import * as fs from "fs";
import * as path from "path";

// ──────────────────────────────────────────────────────────────────────────────
// Centralised group mapping — every public export is assigned to exactly one
// documentation group. This keeps the index page cleanly organised regardless
// of what @group tags MapLibre's own source files carry (or don't carry).
// ──────────────────────────────────────────────────────────────────────────────

/** @type {Record<string, string>} */
const GROUP_MAP = {
  // ── Map ────────────────────────────────────────────────────────────────────
  Map: "Map",
  MapOptions: "Map",

  // ── Controls ───────────────────────────────────────────────────────────────
  AttributionControl: "Controls",
  CompassControl: "Controls",
  FullscreenControl: "Controls",
  GeolocateControl: "Controls",
  GlobeControl: "Controls",
  IsochroneControl: "Controls",
  LogoControl: "Controls",
  NavigationControl: "Controls",
  PitchControl: "Controls",
  ScaleControl: "Controls",
  StyleControl: "Controls",
  TerrainControl: "Controls",
  IControl: "Controls",
  ControlPosition: "Controls",
  AttributionControlOptions: "Controls",
  CompassControlOptions: "Controls",
  FullscreenControlOptions: "Controls",
  GeolocateControlOptions: "Controls",
  IsochroneControlOptions: "Controls",
  IsochroneType: "Controls",
  LogoControlOptions: "Controls",
  NavigationControlOptions: "Controls",
  PitchControlOptions: "Controls",
  ScaleControlOptions: "Controls",
  StyleControlOptions: "Controls",
  StyleDefSpecification: "Controls",
  TerrainControlOptions: "Controls",

  // ── Markers and Popups ─────────────────────────────────────────────────────
  Marker: "Markers and Popups",
  Popup: "Markers and Popups",
  MarkerOptions: "Markers and Popups",
  PopupOptions: "Markers and Popups",

  // ── Sources ────────────────────────────────────────────────────────────────
  CanvasSource: "Sources",
  GeoJSONSource: "Sources",
  ImageSource: "Sources",
  RasterDEMTileSource: "Sources",
  RasterTileSource: "Sources",
  VectorTileSource: "Sources",
  VideoSource: "Sources",

  // ── Coordinates ─────────────────────────────────────────────────────────────
  LngLat: "Coordinates",
  LngLatBounds: "Coordinates",
  MercatorCoordinate: "Coordinates",
  EdgeInsets: "Coordinates",
  Point: "Coordinates",
  LngLatLike: "Coordinates",
  LngLatBoundsLike: "Coordinates",
  PointLike: "Coordinates",

  // ── Events ─────────────────────────────────────────────────────────────────
  Evented: "Events",
  MapMouseEvent: "Events",
  MapTouchEvent: "Events",
  MapWheelEvent: "Events",
  MapLibreZoomEvent: "Events",
  MapLibreEvent: "Events",
  MapDataEvent: "Events",
  MapProjectionEvent: "Events",
  MapLayerEventType: "Events",
  MapEventType: "Events",
  MapLayerMouseEvent: "Events",
  MapLayerTouchEvent: "Events",
  MapContextEvent: "Events",
  MapSourceDataEvent: "Events",
  MapStyleDataEvent: "Events",
  MapStyleImageMissingEvent: "Events",
  MapTerrainEvent: "Events",

  // ── User Interaction Handlers ───────────────────────────────────────────────
  BoxZoomHandler: "User Interaction Handlers",
  DragPanOptions: "User Interaction Handlers",
  CooperativeGesturesHandler: "User Interaction Handlers",
  DoubleClickZoomHandler: "User Interaction Handlers",
  DragPanHandler: "User Interaction Handlers",
  DragRotateHandler: "User Interaction Handlers",
  KeyboardHandler: "User Interaction Handlers",
  ScrollZoomHandler: "User Interaction Handlers",
  TwoFingersTouchPitchHandler: "User Interaction Handlers",
  TwoFingersTouchRotateHandler: "User Interaction Handlers",
  TwoFingersTouchZoomHandler: "User Interaction Handlers",
  TwoFingersTouchZoomRotateHandler: "User Interaction Handlers",

  // ── Configuration ──────────────────────────────────────────────────────────
  Config: "Configuration",
  config: "Configuration",
  locale: "Configuration",
  LocaleSpecification: "Configuration",
  STYLES: "Configuration",
  TERRAIN: "Configuration",

  // ── Properties and Options ─────────────────────────────────────────────────
  version: "Properties and Options",
  addSourceType: "Properties and Options",
  setRTLTextPlugin: "Properties and Options",
  getRTLTextPluginStatus: "Properties and Options",
  prewarm: "Properties and Options",
  clearPrewarmedResources: "Properties and Options",
  getVersion: "Properties and Options",
  getWorkerCount: "Properties and Options",
  setWorkerCount: "Properties and Options",
  getMaxParallelImageRequests: "Properties and Options",
  setMaxParallelImageRequests: "Properties and Options",
  getWorkerUrl: "Properties and Options",
  setWorkerUrl: "Properties and Options",
  addProtocol: "Properties and Options",
  removeProtocol: "Properties and Options",
  importScriptInWorkers: "Properties and Options",
  CameraOptions: "Properties and Options",
  AnimationOptions: "Properties and Options",
  RequestParameters: "Properties and Options",
  CustomLayerInterface: "Properties and Options",
  StyleImageInterface: "Properties and Options",
  PaddingOptions: "Properties and Options",
  FlyToOptions: "Properties and Options",
  FitBoundsOptions: "Properties and Options",
  EaseToOptions: "Properties and Options",
  JumpToOptions: "Properties and Options",
  AroundCenterOptions: "Properties and Options",
  CameraForBoundsOptions: "Properties and Options",
  CoveringTilesOptions: "Properties and Options",
  StyleOptions: "Properties and Options",
  StyleSwapOptions: "Properties and Options",
  StyleSetterOptions: "Properties and Options",
  QueryRenderedFeaturesOptions: "Properties and Options",
  QuerySourceFeatureOptions: "Properties and Options",
  UpdateImageOptions: "Properties and Options",
  SetClusterOptions: "Properties and Options",
  RequestTransformFunction: "Properties and Options",
  CameraUpdateTransformFunction: "Properties and Options",
  TransformConstrainFunction: "Properties and Options",
};

/**
 * Custom TypeDoc plugin for the Maptoolkit SDK documentation:
 *
 * 1. Promotes `const` arrow-function variables to proper Functions so they
 *    appear in the "Functions" section rather than "Variables".
 * 2. Cleans `@group` tags that contain leaked markdown content (e.g. the
 *    RasterTileSource note from MapLibre).
 * 3. Assigns every public export to a documentation group using the
 *    centralised GROUP_MAP, ensuring no items fall into generic TypeDoc
 *    default groups.
 *
 * @param {import("typedoc").Application} app
 */
export function load(app) {
  // ── 0. Ensure all GROUP_MAP items survive excludeNotDocumented ────────────
  // TypeDoc's CommentPlugin removes undocumented items during RESOLVE_BEGIN
  // (before user plugins can act in that phase). We hook CREATE_DECLARATION
  // instead — fired per-reflection during conversion, well before any
  // resolution — and stamp a placeholder Comment on whitelisted items that
  // have none, so they are never considered "not documented".
  const allowedNames = new Set(Object.keys(GROUP_MAP));
  app.converter.on(Converter.EVENT_CREATE_DECLARATION, (_context, reflection) => {
    if (!allowedNames.has(reflection.name)) return;
    if (!reflection.comment || (reflection.comment.summary.length === 0 && reflection.comment.blockTags.length === 0)) {
      reflection.comment = new Comment([{ kind: "text", text: reflection.name }]);
    }
  });

  app.converter.on(Converter.EVENT_RESOLVE_END, (context) => {
    const project = context.project;

    // ── 1. Promote const arrow-function variables to Functions ────────────
    for (const reflection of project.getReflectionsByKind(ReflectionKind.Variable)) {
      const type = /** @type {any} */ (reflection).type;
      if (type?.type === "reflection" && type.declaration?.signatures?.length) {
        reflection.kind = ReflectionKind.Function;
        reflection.setFlag(ReflectionFlag.Const, false);
        /** @type {any} */ (reflection).signatures = type.declaration.signatures;
        for (const sig of type.declaration.signatures) {
          sig.parent = reflection;
          sig.name = reflection.name;
        }
        /** @type {any} */ (reflection).type = undefined;
      }
    }

    // ── 2. Clean leaked markdown in @group tags ──────────────────────────
    for (const id in project.reflections) {
      const ref = project.reflections[id];
      if (!ref.comment) continue;

      for (const tag of ref.comment.blockTags) {
        if (tag.tag !== "@group") continue;
        const fullText = tag.content.map((part) => part.text).join("");
        const firstLine = fullText.split("\n")[0].trim();
        if (firstLine && firstLine !== fullText.trim()) {
          tag.content = [{ kind: "text", text: firstLine }];
        }
      }
    }

    // ── 3. Filter: keep only top-level items in the GROUP_MAP whitelist ──
    const allowedNames = new Set(Object.keys(GROUP_MAP));
    if (project.children) {
      // Collect items to remove first, then remove them
      // (removeReflection modifies project.children in place)
      const toRemove = project.children.filter((child) => !allowedNames.has(child.name));
      for (const child of toRemove) {
        project.removeReflection(child);
      }
      if (toRemove.length) {
        app.logger.info(`[maptoolkit] Removed ${toRemove.length} items not in whitelist`);
      }
    }

    // ── 4. Assign groups from the centralised mapping ────────────────────
    for (const id in project.reflections) {
      const ref = project.reflections[id];

      // Skip the project/module-level reflections
      if (ref.kindOf(ReflectionKind.Project | ReflectionKind.Module)) continue;

      const targetGroup = GROUP_MAP[ref.name];
      if (!targetGroup) continue;

      // Ensure the reflection has a comment object
      if (!ref.comment) {
        ref.comment = new Comment();
      }

      // Remove any existing @group tags (from source or MapLibre)
      ref.comment.blockTags = ref.comment.blockTags.filter((t) => t.tag !== "@group");

      // Add the assigned group
      ref.comment.blockTags.push(new CommentTag("@group", [{ kind: "text", text: targetGroup }]));
    }

    // ── 5. Collect @maptoolkit-tagged items ──────────────────────────────
    /** @type {Set<string>} */
    const maptoolkitItems = new Set();
    for (const id in project.reflections) {
      const ref = project.reflections[id];
      if (ref.kindOf(ReflectionKind.Project | ReflectionKind.Module)) continue;

      // Only process "owning" reflections, not their sub-signatures
      const skipKinds =
        ReflectionKind.CallSignature |
        ReflectionKind.ConstructorSignature |
        ReflectionKind.GetSignature |
        ReflectionKind.SetSignature |
        ReflectionKind.Parameter |
        ReflectionKind.TypeParameter;
      if (ref.kindOf(skipKinds)) continue;

      // Gather all comment objects that could carry the @maptoolkit tag
      /** @type {(import("typedoc").Comment | undefined)[]} */
      const comments = [ref.comment];
      if (/** @type {any} */ (ref).signatures) {
        for (const sig of /** @type {any} */ (ref).signatures) comments.push(sig.comment);
      }
      if (/** @type {any} */ (ref).getSignature) comments.push(/** @type {any} */ (ref).getSignature.comment);
      if (/** @type {any} */ (ref).setSignature) comments.push(/** @type {any} */ (ref).setSignature.comment);

      let found = false;
      for (const comment of comments) {
        if (!comment) continue;
        const idx = comment.blockTags.findIndex((t) => t.tag === "@maptoolkit");
        if (idx !== -1) {
          comment.blockTags.splice(idx, 1);
          found = true;
        }
      }

      if (found) {
        // Walk up past anonymous __type parents (e.g. properties inside intersection types)
        let parentRef = ref.parent;
        while (parentRef && parentRef.name === "__type") {
          parentRef = parentRef.parent;
        }
        let qualName = ref.name;
        if (parentRef != null && !parentRef.kindOf(ReflectionKind.Project | ReflectionKind.Module)) {
          qualName = `${parentRef.name}.${ref.name}`;
        }
        maptoolkitItems.add(qualName);
      }
    }

    if (maptoolkitItems.size) {
      app.logger.info(`[maptoolkit] Found ${maptoolkitItems.size} @maptoolkit-tagged items`);
    }

    // Store for the single-page generator
    /** @type {any} */ (app).__maptoolkitItems = maptoolkitItems;
  });

  // ── 6. Per-group markdown generation ─────────────────────────────────────
  // After the markdown plugin writes individual files, parse the generated
  // README.md index and write one .md file per documentation group.
  // Cross-group links are rewritten to relative Hugo URLs; same-group links
  // become in-page anchors.
  app.renderer.on("endRender", (event) => {
    const outDir = event.outputDirectory;
    const indexPath = path.join(outDir, "README.md");

    if (!fs.existsSync(indexPath)) return;

    const indexContent = fs.readFileSync(indexPath, "utf-8");
    const BADGE = `<img src="https://static.maptoolkit.net/admin/app/images/o-logo.svg" width="22" height="32" style="display:inline;width:22px;height:32px;margin:0" alt="Maptoolkit" />`;
    const badgedItems = /** @type {Set<string>} */ (/** @type {any} */ (app).__maptoolkitItems) || new Set();

    // Parse group headings and item links from the index
    /** @type {{ name: string, slug: string, items: { name: string, filePath: string, anchor: string }[] }[]} */
    const groups = [];
    /** @type {{ name: string, slug: string, items: { name: string, filePath: string, anchor: string }[] } | null} */
    let currentGroup = null;

    for (const line of indexContent.split("\n")) {
      const groupMatch = line.match(/^## (.+)$/);
      if (groupMatch) {
        const name = groupMatch[1];
        const slug = name
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^a-z0-9-]/g, "");
        currentGroup = { name, slug, items: [] };
        groups.push(currentGroup);
        continue;
      }

      const itemMatch = line.match(/^- \[(.+?)\]\((.+?)\)$/);
      if (itemMatch && currentGroup) {
        currentGroup.items.push({ name: itemMatch[1], filePath: itemMatch[2], anchor: "" });
      }
    }

    // Build anchor slugs per item (collision-aware, replicating Hugo's auto-slug logic)
    // and a global map filePath → { groupSlug, anchor } for cross-page link rewriting.
    /** @type {Map<string, { groupSlug: string, anchor: string }>} */
    const fileToTarget = new Map();
    const globalSlugCount = new Map();

    for (const group of groups) {
      for (const item of group.items) {
        const base = item.name
          .replace(/[^a-zA-Z0-9]+/g, "-")
          .replace(/^-|-$/g, "")
          .toLowerCase();
        const count = globalSlugCount.get(base) || 0;
        item.anchor = count === 0 ? base : `${base}-${count}`;
        globalSlugCount.set(base, count + 1);

        fileToTarget.set(item.filePath, { groupSlug: group.slug, anchor: item.anchor });
        fileToTarget.set(`../${item.filePath}`, { groupSlug: group.slug, anchor: item.anchor });
        const basename = item.filePath.split("/").pop();
        if (basename) fileToTarget.set(basename, { groupSlug: group.slug, anchor: item.anchor });
      }
    }

    const groupNames = new Set(Object.values(GROUP_MAP));

    /** Split a parameter string at top-level commas (ignoring commas inside nested parens). */
    function splitTopLevelParams(/** @type {string} */ str) {
      const parts = [];
      let depth = 0,
        start = 0;
      for (let i = 0; i < str.length; i++) {
        if (str[i] === "(") depth++;
        else if (str[i] === ")") depth--;
        else if (str[i] === "," && depth === 0) {
          parts.push(str.slice(start, i));
          start = i + 1;
        }
      }
      parts.push(str.slice(start));
      return parts;
    }

    /** Strip parameter type annotations from call-signature blockquote lines, keeping names and return type. */
    function simplifyCallSignatures(/** @type {string} */ content) {
      return content
        .split("\n")
        .map((/** @type {string} */ line) => {
          if (!/^> \*\*/.test(line)) return line;
          // Skip past optional \<...\> generic before locating the parameter list '('
          const sigMatch = line.match(/^(> \*\*[^*]+\*\*)(?:\\<.*?\\>)?(\([\s\S]*)$/);
          if (!sigMatch) return line;
          const prefix = sigMatch[1];
          const rest = sigMatch[2]; // starts with '('
          let depth = 0,
            parenEnd = -1;
          for (let i = 0; i < rest.length; i++) {
            if (rest[i] === "(") depth++;
            else if (rest[i] === ")" && --depth === 0) {
              parenEnd = i;
              break;
            }
          }
          if (parenEnd === -1) return line;
          const names = splitTopLevelParams(rest.slice(1, parenEnd)).map((p) => p.trim().match(/^(`[^`]+`\??)/)?.[1] ?? p.trim());
          return prefix + "(" + names.join(", ") + rest.slice(parenEnd);
        })
        .join("\n");
    }

    /** Rewrite markdown links to in-page hash anchors. */
    function rewriteLinks(/** @type {string} */ markdown) {
      return markdown.replace(/(?<!!)\[([^\]]+)\]\(([^)]+)\)/g, (/** @type {string} */ match, /** @type {string} */ text, /** @type {string} */ href) => {
        if (href.startsWith("http") || href.startsWith("#")) return match;

        const hashIndex = href.indexOf("#");
        const filePart = hashIndex !== -1 ? href.slice(0, hashIndex) : href;
        const fragment = hashIndex !== -1 ? href.slice(hashIndex + 1) : null;
        const normalised = filePart.replace(/^(?:\.\.\/)+/, "");

        const target = fileToTarget.get(normalised) ?? fileToTarget.get(filePart);
        if (target) {
          const ref = fragment ?? target.anchor;
          return `[${text}](#${ref})`;
        }

        return match;
      });
    }

    // Write a single API.md with a TOC followed by all content
    const generatedSlugs = new Set();
    const { version } = JSON.parse(fs.readFileSync(new URL("./package.json", import.meta.url), "utf-8"));
    const allParts = [`# API Reference\n\n*v${version}*\n`];

    // TOC grouped by category
    for (const group of groups) {
      allParts.push(`**${group.name}**\n`);
      allParts.push(group.items.map((item) => `- [${item.name}](#${item.anchor})`).join("\n"));
      allParts.push("");
    }

    // Full content for every item
    for (const group of groups) {
      for (const item of group.items) {
        const filePath = path.join(outDir, item.filePath);
        if (!fs.existsSync(filePath)) {
          app.logger.warn(`[maptoolkit] Missing file ${item.filePath}`);
          continue;
        }

        let content = fs.readFileSync(filePath, "utf-8");

        // Strip breadcrumb line
        content = content.replace(/^\[.+?\]\(.+?\)\s*\/\s*.+\n+/, "");

        // Strip "Extends" / "Implements" sections
        content = content.replace(/^#{1,6} Extends\n\n(?:- .+\n)+\n?/gm, "");
        content = content.replace(/^#{1,6} Implements\n\n(?:- .+\n)+\n?/gm, "");

        // Strip "Inherited from" / "Implementation of" / "Overrides" single-line sections
        content = content.replace(/^#{1,6} Inherited from\n\n.+\n\n?/gm, "");
        content = content.replace(/^#{1,6} Implementation of\n\n.+\n\n?/gm, "");
        content = content.replace(/^#{1,6} Overrides\n\n.+\n\n?/gm, "");

        // Strip class-level @param sections (redundant with constructor parameters table)
        content = content.replace(/^#{1,6} Param\n\n.+\n\n?/gm, "");

        // Strip ## headings that duplicate top-level group names
        content = content.replace(/^## (.+)\n/gm, (match, heading) => {
          return groupNames.has(heading.trim()) ? "" : match;
        });

        // Strip the duplicate native constructor section
        content = content.replace(/^(#{1,6}) function Object\(\) \{ \[native code\] \}\n[\s\S]*?(?=\n\1 |\n#{1,2} |$)/gm, "");

        // Remove Call/Get/Set Signature label headings (keep their content)
        content = content.replace(/^#{1,6} Call Signature\n\n/gm, "");
        content = content.replace(/^#{1,6} Get Signature\n\n/gm, "");
        content = content.replace(/^#{1,6} Set Signature\n\n/gm, "");

        // Expand generic type parameters (e.g. T) throughout each overload block
        // and remove the now-redundant Type Parameters section.
        const overloadBlocks = content.split(/\n(?=> \*\*)/);
        content = overloadBlocks
          .map(
            /** @param {string} block */ (block) => {
              const tpMatch = block.match(/\| `(\w+)` \*extends\* ([^|]+?) \|/);
              if (!tpMatch) return block;
              const paramName = tpMatch[1];
              const constraint = tpMatch[2].trim();
              block = block.replace(/\n\n#{1,6} Type Parameters\n\n\| Type Parameter \|\n\| --+ \|\n(?:\| [^\n]+\n)+\n/, "\n\n");
              return block.split(`\`${paramName}\``).join(constraint);
            },
          )
          .join("\n");

        content = simplifyCallSignatures(content);

        // Rewrite all cross-file links to in-page hash anchors
        content = rewriteLinks(content);

        // Inject @maptoolkit badges into headings
        if (badgedItems.size > 0) {
          const isTopLevelBadged = badgedItems.has(item.name);
          content = content.replace(/^(#{1,6}) (.+)$/gm, (/** @type {string} */ match, /** @type {string} */ hashes, /** @type {string} */ heading) => {
            const cleanName = heading
              .replace(/\(.*\)$/, "")
              .replace(/\?$/, "")
              .trim();
            if (cleanName === item.name && isTopLevelBadged) return `${hashes} ${heading} ${BADGE}`;
            if (badgedItems.has(`${item.name}.${cleanName}`)) return `${hashes} ${heading} ${BADGE}`;
            return match;
          });
        }

        // Adjust heading levels:
        //   #   (item name)          → h2  — appears in Hugo right-sidebar TOC
        //   ##  (TypeDoc sections)   → h3
        //   ### (individual members) → h4
        content = content.replace(/^(#{1,6}) (.+)$/gm, (_match, /** @type {string} */ hashes, /** @type {string} */ heading) => {
          const level = hashes.length === 1 ? 2 : Math.min(hashes.length + 1, 6);
          return `${"#".repeat(level)} ${heading}`;
        });

        allParts.push(content.trim());
        allParts.push("");
      }
    }

    const finalContent = allParts
      .join("\n")
      .replace(/\n{3,}/g, "\n\n")
      .replace(/\bMap\$1\b/g, "Map");
    fs.writeFileSync(path.join(outDir, "API.md"), finalContent);
    generatedSlugs.add("API.md");
    app.logger.info(`[maptoolkit] API.md written`);

    // Remove TypeDoc's intermediate files; keep only our per-group files
    for (const entry of fs.readdirSync(outDir)) {
      if (generatedSlugs.has(entry)) continue;
      fs.rmSync(path.join(outDir, entry), { recursive: true, force: true });
    }

    const totalItems = groups.reduce((n, g) => n + g.items.length, 0);
    app.logger.info(`[maptoolkit] ${groups.length} pages, ${totalItems} items total`);
  });
}
