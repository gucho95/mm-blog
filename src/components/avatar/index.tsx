import {
  Avatar as RadixAvatar,
  AvatarProps as RadixAvatarProps,
} from "@radix-ui/themes";

type AvatarProps = {
  size: RadixAvatarProps["size"];
  src: RadixAvatarProps["src"];
  fallback: RadixAvatarProps["fallback"];
};

const Avatar = (props: AvatarProps) => {
  return <RadixAvatar variant="soft" radius="full" {...props} />;
};

export default Avatar;
