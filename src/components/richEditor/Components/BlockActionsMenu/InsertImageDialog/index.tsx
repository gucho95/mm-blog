import { FC, useEffect, useState } from "react";

import GridGallery from "./GridGallery";
import imageService from "../../../../../services/ImageService";
import { Images } from "../../../../../services/ImageService/types";
import classes from "./style.module.css";
import useDebounce from "@/hooks/useDebounce";
import { Dialog, TextField } from "@radix-ui/themes";

type DialogProps = {};

interface InsertImageDialogProps {
  dialogProps: Omit<DialogProps, "children">;
  onSuccess: (src: string) => void;
}

const InsertImageDialog: FC<InsertImageDialogProps> = ({
  dialogProps,
  onSuccess,
}) => {
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState("");
  const [images, setImages] = useState<Images>([]);
  const debouncedValue = useDebounce(value);

  // listen to keyword change with debounce and query
  // useEffect(() => {
  //   if (!dialogProps.isOpen) {
  //     return;
  //   }

  //   const search = async () => {
  //     setLoading(true);
  //     const data = await imageService.search.getPhotos({
  //       query: debouncedValue || "random",
  //       perPage: 20,
  //     });

  //     setImages(data.response?.results);
  //     setLoading(false);
  //   };

  //   search();
  // }, [debouncedValue, dialogProps.isOpen]);

  // reset state variables on unmount
  // useEffect(() => {
  //   return () => {
  //     setImages([]);
  //     setValue("");
  //     setLoading(true);
  //   };
  // }, [dialogProps.isOpen]);

  return (
    <Dialog.Root {...dialogProps}>
      <Dialog.Content>
        <TextField.Root
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={classes.searchInput}
          placeholder="Keyword"
          tabIndex={1}
        />

        <GridGallery images={images} onSelect={onSuccess} loading={loading} />
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default InsertImageDialog;
