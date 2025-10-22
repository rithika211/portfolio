// Return an absolute URL that maps to the `public/assets/...` folder after build.
// For production builds, move your `assets/` folder into `public/` so files are
// copied into `dist/assets/...` and can be referenced by `/assets/...`.
export const getImageUrl = (path) => {
  return `/assets/${path}`;
};
