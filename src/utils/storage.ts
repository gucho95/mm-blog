export const getAbsolutePath = (fullPath: string) => {
  return process.env.NEXT_PUBLIC_STORAGE_BUCKET + fullPath;
};
