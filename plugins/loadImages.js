import { defineNuxtPlugin } from 'nuxt/app';


export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide('images', () => {
    // Dynamically import images from a directory
    // Note: Adjust the path as necessary based on your project structure
    const images = import.meta.globEager('../public/martina/*.{jpg,png,svg,heic}');

    // Convert the imported images to an array of URLs
    const imageUrls = Object.values(images).map(image => image.default);

    return imageUrls;
  });
});
