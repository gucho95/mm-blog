import { PersonIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import { FC } from "react";
import Image from "../image";

type AvatarSize = "1" | "2";

type AvatarProps = {
  src?: string;
  size?: AvatarSize;
  alt?: string;
};

const SizeClasses = {
  "1": "size-8",
  "2": "size-10",
  "3": "size-16",
};

const Avatar: FC<AvatarProps> = ({ src, size = "1", alt = "avatar" }) => {
  const sizeClasses = SizeClasses[size];
  return (
    <div
      className={clsx(
        "relative rounded-full overflow-hidden border-2 border-black p-1",
        sizeClasses
      )}
    >
      {src ? (
        <Image src={src} fill={true} alt="" className="object-cover" />
      ) : (
        <PersonIcon className="w-full h-full text-black" />
      )}
    </div>
  );
};

export default Avatar;
