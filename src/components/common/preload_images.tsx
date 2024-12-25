import { useEffect, useState } from 'react';

function preloadImage(src: string) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = function () {
      resolve(img);
    };
    img.onerror = img.onabort = function () {
      reject(src);
    };
    img.src = src;
  });
}

export default function useImagePreloader(images: string[]) {
  const [imagesPreloaded, setImagesPreloaded] = useState<boolean>(false);
  useEffect(() => {
    let isDone = false;
    async function effect() {
      if (isDone) {
        return;
      }
      const imagesPromiseList: Promise<any>[] = [];
      for (const i of images) {
        imagesPromiseList.push(preloadImage(i));
      }
      await Promise.all(imagesPromiseList);
      if (isDone) {
        return;
      }
      setImagesPreloaded(true);
    }
    effect();
    return () => {
      isDone = true;
    };
  }, []);  // [] to only run once
  return { imagesPreloaded };
}
