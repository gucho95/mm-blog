import Link from "@/components/link";
import { AuthAction } from "@/hooks/useAuth";
import { PersonIcon, TrackPreviousIcon } from "@radix-ui/react-icons";
import { Button, Text } from "@radix-ui/themes";
import { FC } from "react";

type PublicMenuProps = {
  onSignIn: AuthAction;
};

const PublicMenu: FC<PublicMenuProps> = ({ onSignIn }) => {
  return (
    <ul className="flex space-x-4">
      <li className="flex items-center">
        <Button onClick={() => onSignIn({})}>
          <PersonIcon />
          <Text weight="light">Sign-in</Text>
        </Button>
      </li>
    </ul>
  );
};

export default PublicMenu;
