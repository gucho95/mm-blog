import { Button, Dialog, TextField } from "@radix-ui/themes";
import { FC, useState } from "react";

type DialogProps = {};

interface InsertYoutubeEmbedDialogProps {
  dialogProps: Omit<DialogProps, "children">;
  onSuccess: (src: string) => void;
}

const InsertYoutubeEmbedDialog: FC<InsertYoutubeEmbedDialogProps> = ({
  dialogProps,
  onSuccess,
}) => {
  const [value, setValue] = useState("https://youtu.be/u1TP7RosLww");

  return (
    <Dialog.Root {...dialogProps} className="max-w-md">
      <TextField.Root
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="mb-2"
        placeholder="Video URL"
        tabIndex={1}
      />
      <div className="grid grid-cols-2 gap-2">
        <Button onClick={dialogProps?.onClose}>Cancel</Button>
        <Button onClick={() => onSuccess(value)}>Submit</Button>
      </div>
    </Dialog.Root>
  );
};

export default InsertYoutubeEmbedDialog;
