export function getStringChecksum(str: string): string {
  let checksum = 0;
  for (let i = 0; i < str.length; i++) {
    checksum += str.charCodeAt(i);
  }
  return checksum.toString(16);
}

export async function get32ByteChecksum(str: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(str);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("").slice(0, 32);
  return hashHex;
}
