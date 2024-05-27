import { ChangeEvent, Fragment } from "react";
import { Box, Flex, IconButton, Spinner, Text } from "@radix-ui/themes";
import Image from "next/image";
import { TrashIcon, UploadIcon } from "@radix-ui/react-icons";

type ArticleFormCover = {
  url: string;
  onDelete: () => void;
  onUpload: (file: File) => void;
  uploadLoading: boolean;
  deleteLoading: boolean;
};

const ArticleFormCover = (props: ArticleFormCover) => {
  const { url, onDelete, uploadLoading, onUpload, deleteLoading } = props;

  const onCoverUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    const file = files?.item(0);
    file && onUpload(file);
  };

  return (
    <Fragment>
      {url ? (
        <Box className="h-full w-full relative group">
          <Image
            src={url}
            fill={true}
            alt=""
            objectFit="cover"
            objectPosition="center"
          />

          <Box className="absolute inset-0 bg-black/30">
            <Flex className=" absolute right-2 top-2 group-hover:visible invisible">
              <IconButton
                color="gray"
                variant="surface"
                radius="full"
                onClick={onDelete}
                loading={deleteLoading}
              >
                <TrashIcon />
              </IconButton>
            </Flex>
          </Box>
        </Box>
      ) : (
        <label className="h-full border-dashed border-2 border-violet-100 rounded-xl flex justify-center items-center hover:border-violet-300">
          <Flex justify="center" align="center" direction="column" gapY="2">
            {uploadLoading ? (
              <Fragment>
                <Spinner size="3" />
                <Text size="4">Uploading...</Text>
              </Fragment>
            ) : (
              <Fragment>
                <UploadIcon width="40px" height="40px" />
                <Text size="4">Click to upload cover image</Text>
              </Fragment>
            )}
          </Flex>
          <input type="file" onChange={onCoverUpload} className="hidden" />
        </label>
      )}
    </Fragment>
  );
};

export default ArticleFormCover;
