import type { ImageMetadata } from "astro";
import dummy from '@/assets/dummy.jpg';

const images = import.meta.glob<{ default: ImageMetadata }>('/src/assets/**/*.{jpeg,jpg,png,gif,webp,svg}');

export default function getImageSrc(path?: string) {
  if (!path) {
    return dummy;
  }
  const image = images[path]();

  if (!image) {
    return dummy;
  } else {
    return image;
  }
}