export function getImageUrl(name: string) {
  return new URL(`../assets/images/${name}.jpg`, import.meta.url).href;
}
