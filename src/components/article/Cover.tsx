import Image from "next/image";

type ArticleCoverProps = {
  coverSrc?: string;
  coverAltText?: string;
};

const ArticleCover = (props: ArticleCoverProps) => {
  return props.coverSrc ? (
    <Image
      src={props.coverSrc}
      fill={true}
      objectFit="cover"
      className="rounded-xl"
      alt={props.coverAltText || ""}
    />
  ) : null;
};

export default ArticleCover;
