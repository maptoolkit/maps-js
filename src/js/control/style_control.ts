import { Map } from "../core/map";
import { IControl } from "./control";

import { ControlPosition as maplibreControlPosition, StyleSpecification as maplibreStyleSpecification } from "maplibre-gl";

import { STYLES, createStaticImage } from "../core/styles";

import { getStringChecksum } from "../core/utils";

export type StyleControlOptions = {
  styles?: Array<StyleDefSpecification>;
};

export type StyleDefSpecification = {
  id: string;
  value: string | maplibreStyleSpecification;
  image?: string;
};

export const defaultStyleControlOptions: StyleControlOptions = {
  styles: [
    { id: "Terrain", value: STYLES.TERRAIN },
    { id: "Light", value: STYLES.LIGHT },
    { id: "Dark", value: STYLES.DARK },
    { id: "City", value: STYLES.CITY },
    { id: "Green", value: STYLES.GREEN },
    { id: "Winter", value: STYLES.WINTER },
  ],
};
export class StyleControl implements IControl {
  options: StyleControlOptions;
  _map?: Map;
  _container?: HTMLElement;
  _groups?: HTMLElement;

  constructor(options?: StyleControlOptions) {
    console.log(defaultStyleControlOptions);
    this.options = Object.assign({}, defaultStyleControlOptions, options);

    if (this.options.styles) {
      this.options.styles = this.options.styles.filter((style) => style.id && style.value);
      for (const style of this.options.styles) {
        if (!style.image && typeof style.value === "string" && /^maptoolkit:\/\/styles\/[A-z0-9_-]+\/[A-z0-9_-]+$/.test(style.value)) {
          const [account, name] = style.value.split("/").slice(-2);
          style.image = createStaticImage(account, name);
        }
      }
    }
    console.log(this.options);
  }

  getDefaultPosition(): maplibreControlPosition {
    return "bottom-left";
  }

  onAdd(map: Map) {
    this._map = map;
    this._container = document.createElement("div");
    this._container.classList.add("maplibregl-ctrl", "maplibregl-ctrl-group", "maptoolkit-ctrl", "maptoolkit-ctrl-style", "maptoolkit-ctrl-style-bottom-left");

    /* if (this._map && !this.options.styles?.map((style) => style.value).includes(this._map.mapType)) {
      this.maptypes.unshift({
        id: this.map.mapType,
        image: `${config.staticmapHost}/?maptype=${this.map.mapType}&size=166x166&center=47.329,12.787&zoom=12&api_key=${MTK.apiKey}`,
        value: this.map.mapType,
      });
      MTK.i18n[`styles-style-${this.map.mapType}`] = this.map.mapType.split("-").slice(1).join("-");
    } */

    /* style-groups */
    this._groups = document.createElement("div");
    this._groups.classList.add("maplibregl-ctrl-group", "maptoolkit-ctrl-style-groups");

    /* close button */
    const $closeButton = document.createElement("button");
    $closeButton.classList.add("maptoolkit-ctrl-style-close");
    $closeButton.addEventListener("click", () => this.close());
    this._groups.appendChild($closeButton);

    /* control button - display current style */
    const $styleButton = document.createElement("button");
    $styleButton.classList.add("maptoolkit-ctrl-style-current");

    const $styleImage = document.createElement("div");
    $styleImage.classList.add("maptoolkit-ctrl-style-current-image");
    $styleButton.appendChild($styleImage);

    const $styleName = document.createElement("label");
    $styleName.classList.add("maptoolkit-ctrl-style-current-name");
    $styleButton.appendChild($styleName);

    const _createGroup = ({ id, styles, onClick, isCollapsed }: any) => {
      const $group = document.createElement("div");
      $group.classList.add("maptoolkit-ctrl-style-group");
      if (isCollapsed) $group.classList.add("maptoolkit-ctrl-style-group-collapsed");

      const $groupName = document.createElement("h2");
      $groupName.classList.add("maptoolkit-ctrl-style-group-name");
      $groupName.textContent = map._getUIString(`StyleControl.Group.${id}`) || id;
      $group.appendChild($groupName);

      const $groupList = document.createElement("ul");
      $groupList.classList.add("maptoolkit-ctrl-style-group-list");
      styles.forEach((groupStyle: any) => {
        const $groupItem = document.createElement("li");
        $groupItem.classList.add("maptoolkit-ctrl-style-group-list-item");

        if (this._map?._styleId === getStringChecksum(typeof groupStyle.value === "string" ? groupStyle.value : JSON.stringify(groupStyle.value))) {
          $groupItem.classList.add("maptoolkit-ctrl-style-group-list-item-active");
          if (groupStyle.image) $styleImage.style.setProperty("background-image", `url(${groupStyle.image})`);
          $styleName.textContent = map._getUIString(`StyleControl.Style.${groupStyle.id}`) || groupStyle.id;
        }

        const $groupItemButton = document.createElement("button");

        const $groupItemImage = document.createElement("div");
        $groupItemImage.classList.add("maptoolkit-ctrl-style-group-list-item-image");
        if (groupStyle.image) $groupItemImage.style.setProperty("background-image", `url(${groupStyle.image})`);
        $groupItemButton.appendChild($groupItemImage);

        const $groupItemName = document.createElement("label");
        $groupItemName.classList.add("maptoolkit-ctrl-style-group-list-item-name");
        $groupItemName.textContent = map._getUIString(`StyleControl.Style.${groupStyle.id}`) || groupStyle.id;
        $groupItemButton.appendChild($groupItemName);

        $groupItemButton.addEventListener("click", (ev) => {
          typeof onClick === "function" && onClick({ originalEvent: ev, style: groupStyle });
        });

        $groupItem.appendChild($groupItemButton);
        $groupList.appendChild($groupItem);
      });
      $group.appendChild($groupList);
      return $group;
    };

    /* styles group */
    const $group = _createGroup({
      id: "Styles",
      styles: this.options.styles,
      onClick: (ev: any) => {
        const $ul = ev.originalEvent.target.closest("ul");
        const $targetParent = ev.originalEvent.target.parentElement;
        [...$ul.children].forEach(($li) => {
          if ($li === $targetParent) $li.classList.add("maptoolkit-ctrl-style-group-list-item-active");
          else $li.classList.remove("maptoolkit-ctrl-style-group-list-item-active");
        });
        if (ev.style) {
          if (
            this._map &&
            ev.style.value &&
            this._map._styleId !== getStringChecksum(typeof ev.style.value === "string" ? ev.style.value : JSON.stringify(ev.style.value))
          ) {
            this._map.setStyle(ev.style.value);
          }
          $styleImage.style.removeProperty("background-image");
          if (ev.style.image) $styleImage.style.setProperty("background-image", `url(${ev.style.image})`);
          $styleName.textContent = map._getUIString(`StyleControl.Style.${ev.style.id}`) || ev.style.id;
        }
      },
    });
    this._groups.appendChild($group);

    /* layers group */
    /* if (this.layers.length) {
      let $maptypeGroup = _createGroup({
        id: "layers",
        styles: this.layers,
        isCollapsed: true,
        onClick: (ev) => {
          let $li = ev.originalEvent.target.parentElement;
          if (ev.style && ev.style.value)
            if (!ev.style.value.map) {
              ev.style.value.addTo(this.map);
              $li.classList.add("mtk-control-styles-group-list-item-active");
            } else {
              ev.style.value.remove();
              $li.classList.remove("mtk-control-styles-group-list-item-active");
            }
        },
      });
      $stylesGroups.appendChild($maptypeGroup); */

    /* expand button */
    const $expandButton = document.createElement("button");
    $expandButton.classList.add("maptoolkit-ctrl-style-expand");
    $expandButton.textContent = map._getUIString("StyleControl.Group.Layers");
    $expandButton.addEventListener("click", () => {
      $group.classList.remove("maptoolkit-ctrl-style-group-collapsed");
      if (this._resize) this._resize();
    });
    this._groups.appendChild($expandButton);

    /* control button - click handler */
    $styleButton.addEventListener("click", () => {
      if (this._groups?.classList.contains("maptoolkit-ctrl-style-groups-active")) {
        this.close();
      } else {
        this.open();
      }
    });

    this._resize();
    this._map.on("resize", this._resize.bind(this));

    this._container.appendChild($styleButton);
    this._container.appendChild(this._groups);

    return this._container;
  }

  onRemove() {
    if (this._container?.parentNode) {
      this._container.parentNode.removeChild(this._container);
    }
    this._map = undefined;
  }

  open() {
    if (this._groups) {
      const $allGroups = [...this._groups.querySelectorAll(".maptoolkit-ctrl-style-group")];
      for (const $group of $allGroups) {
        if (!$group.querySelectorAll(".maptoolkit-ctrl-style-group-list-item-active").length) {
          $group.classList.add("maptoolkit-ctrl-style-group-collapsed");
        }
      }
      this._groups.classList.add("maptoolkit-ctrl-style-groups-active");
      if (this._container && this._container.parentElement) {
        this._container.parentElement.style.zIndex = "99";
      }
      if (this._resize) {
        this._resize();
      }
    }
  }

  close() {
    if (this._groups) {
      this._groups.classList.remove("maptoolkit-ctrl-style-groups-active");
      if (this._container && this._container.parentElement) {
        this._container.parentElement.style.zIndex = "";
      }
    }
  }

  /* set max-width and max-height for mobile compatibility on window resize */
  _resize() {
    if (this._map && this._container) {
      const mapRect = this._map.getContainer().getBoundingClientRect();
      const ctrlRect = this._container.getBoundingClientRect();
      const ctrlPosition = {
        top: ctrlRect.top - mapRect.top,
        bottom: mapRect.bottom - ctrlRect.bottom,
        left: ctrlRect.left - mapRect.left,
        right: mapRect.right - ctrlRect.right,
      };
      const ctrlStyle = window.getComputedStyle(this._container);
      let maxWidth = mapRect.width;
      let maxHeight = mapRect.height;
      for (const position in this._map._controlPositions) {
        if (this._map._controlPositions[position as maplibreControlPosition]?.contains(this._container)) {
          if (/^top/.test(position)) maxHeight -= ctrlPosition.top + parseFloat(ctrlStyle.marginTop);
          if (/^bottom/.test(position)) maxHeight -= ctrlPosition.bottom + parseFloat(ctrlStyle.marginBottom);
          if (/left$/.test(position)) maxWidth -= ctrlPosition.left + parseFloat(ctrlStyle.marginLeft);
          if (/right$/.test(position)) maxWidth -= ctrlPosition.right + parseFloat(ctrlStyle.marginRight);
          break;
        }
      }
      if (!window.matchMedia("only screen and (max-width: 768px)").matches) maxWidth -= ctrlRect.width;
      if (this._groups) {
        this._groups.style.setProperty("max-width", `${maxWidth}px`);
        this._groups.style.setProperty("max-height", `${maxHeight}px`);
      }
    }
  }
}
