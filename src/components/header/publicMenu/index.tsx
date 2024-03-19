import Avatar from "@/components/avatar";
import { ButtonSize } from "@/components/button/base";
import IconButton from "@/components/button/iconButton";
import Link from "@/components/link";
import { PersonIcon } from "@radix-ui/react-icons";

const PublicMenu = () => {
  return (
    <ul className="flex space-x-4">
      <li className="flex items-center">
        <Link href={"/sign-in"}>
          <IconButton icon={<PersonIcon className="w-4 h-4" />}>
            Sign-in
          </IconButton>
        </Link>
      </li>
    </ul>
  );
};

export default PublicMenu;
