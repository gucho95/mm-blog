import { FC } from "react";
import { Images } from "../../../../../services/ImageService/types";
import classes from "./style.module.css";
import clsx from "clsx";
import { Button } from "@radix-ui/themes";

type GridGalleryProps = {
  images: Images;
  loading: boolean;
  onSelect: (value: string) => void;
};

const Skeleton = () => {
  return (
    <div className={clsx(classes.gridContainer, "animate-pulse")}>
      {Array.from({ length: 20 })
        .fill(0)
        .map((_i, index) => (
          <div key={index} className={classes.skeletonItem} />
        ))}
    </div>
  );
};

const GridGallery: FC<GridGalleryProps> = ({ images, onSelect, loading }) => {
  if (loading) {
    return <Skeleton />;
  }

  return (
    <div className={classes.gridContainer}>
      {images?.map((image) => (
        <div className={clsx(classes.gridItem, "group")} key={image.id}>
          <div
            className={clsx(classes.gridItemOverlay, "group-hover:opacity-100")}
          >
            <Button onClick={() => onSelect(image.urls.regular)}>
              Click to select
            </Button>
          </div>
          <img src={image.urls.thumb} className={classes.gridItemImg} />
        </div>
      ))}
    </div>
  );
};

export default GridGallery;
