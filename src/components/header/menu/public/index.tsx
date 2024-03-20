import IconButton from "@/components/button/iconButton";
import Link from "@/components/link";
import { AuthAction } from "@/hooks/useAuth";
import { PersonIcon } from "@radix-ui/react-icons";
import { FC } from "react";

type PublicMenuProps = {
  onSignIn: AuthAction;
};

const PublicMenu: FC<PublicMenuProps> = ({ onSignIn }) => {
  return (
    <ul className="flex space-x-4">
      <li className="flex items-center">
        <IconButton
          icon={<PersonIcon className="w-4 h-4" />}
          onClick={() => onSignIn({})}
        >
          Sign-in
        </IconButton>
      </li>
    </ul>
  );
};

export default PublicMenu;
