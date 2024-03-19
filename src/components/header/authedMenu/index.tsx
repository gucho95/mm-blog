import Avatar from "@/components/avatar";
import Button, { ButtonSize, ButtonVariant } from "@/components/button/base";
import IconButton from "@/components/button/iconButton";
import Link from "@/components/link";
import { Pencil2Icon } from "@radix-ui/react-icons";

const AuthedMenu = () => {
  return (
    <ul className="flex space-x-4 m-0 p-0 h-full">
      <li className="flex items-center">
        <Link href={"/write"}>
          <IconButton icon={<Pencil2Icon className="w-4 h-4" />}>
            Write
          </IconButton>
        </Link>
      </li>
      <li className="flex items-center">
        <Button size={ButtonSize.CUSTOM} variant={ButtonVariant.LINK}>
          <Avatar size="1" />
        </Button>
      </li>
    </ul>
  );
};

export default AuthedMenu;
