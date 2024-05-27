import { Dispatch, SetStateAction } from "react";
import ImageIcon from "./Icons/Image";
import YoutubeIcon from "./Icons/Youtube";
import GifIcon from "./Icons/Gif";
import VideoIcon from "./Icons/Video";

export const getBlockActions = ({
  onMenuClose,
  setImageDialogOpen,
  setYoutubeDialogOpen,
  setGifDialogOpen,
  setVideoDialogOpen,
}: {
  onMenuClose: () => void;
  setImageDialogOpen: Dispatch<SetStateAction<boolean>>;
  setYoutubeDialogOpen: Dispatch<SetStateAction<boolean>>;
  setGifDialogOpen: Dispatch<SetStateAction<boolean>>;
  setVideoDialogOpen: Dispatch<SetStateAction<boolean>>;
}) => [
  {
    name: "image",
    title: "Insert image",
    icon: <ImageIcon />,
    onSelect: () => {
      onMenuClose();
      setImageDialogOpen(true);
    },
  },
  {
    name: "gif",
    title: "Insert gif",
    icon: <GifIcon />,
    onSelect: () => {
      onMenuClose();
      setGifDialogOpen(true);
    },
  },
  {
    name: "youtube embed",
    title: "Insert youtube video by ur",
    icon: <YoutubeIcon />,
    onSelect: () => {
      onMenuClose();
      setYoutubeDialogOpen(true);
    },
  },

  {
    name: "video",
    title: "Insert video by url",
    icon: <VideoIcon />,
    onSelect: () => {
      onMenuClose();
      setVideoDialogOpen(true);
    },
  },
];
