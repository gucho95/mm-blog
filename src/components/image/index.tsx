import NextImage, { ImageProps as NextImageProps } from "next/image";

interface ImageProps extends NextImageProps {}

const Image = (props: ImageProps) => {
  return <NextImage {...props} />;
};

export default Image;
