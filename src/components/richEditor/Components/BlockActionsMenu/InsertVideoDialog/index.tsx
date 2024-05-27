import { Button, Dialog, TextField } from "@radix-ui/themes";
import { FC, useState } from "react";

type DialogProps = {};

interface InsertVideoDialogProps {
  dialogProps: Omit<DialogProps, "children">;
  onSuccess: (src: string) => void;
}

const InsertVideoDialog: FC<InsertVideoDialogProps> = ({
  dialogProps,
  onSuccess,
}) => {
  const [value, setValue] = useState(
    "https://file-examples.com/storage/fe0275ec7165ef4cb9b4af6/2017/04/file_example_MP4_1920_18MG.mp4"
  );

  const onSubmit = () => {
    onSuccess(value);
  };

  return (
    <Dialog.Root {...dialogProps} className="max-w-lg">
      <Dialog.Content>
        <TextField.Root
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="mb-2"
          placeholder="Video URL"
          tabIndex={1}
        />

        <div className="grid grid-cols-2 gap-2">
          <Button onClick={dialogProps?.onClose}>Cancel</Button>
          <Button onClick={onSubmit}>Submit</Button>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default InsertVideoDialog;
