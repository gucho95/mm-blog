import Avatar from "@/components/avatar";

import { AuthAction } from "@/hooks/useAuth";
import { Pencil2Icon } from "@radix-ui/react-icons";
import { Button, DropdownMenu, Text } from "@radix-ui/themes";
import { User } from "firebase/auth";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

type AuthedMenuProps = {
  onSignOut: AuthAction;
  user: User;
};

const AuthedMenu: FC<AuthedMenuProps> = ({ onSignOut, user }) => {
  const pathname = usePathname();
  const showWriteButton = pathname !== "/write";

  return (
    <ul className="flex space-x-4 m-0 p-0">
      {showWriteButton && (
        <li className="flex items-center">
          <Link href="/write" prefetch={true}>
            <Button>
              <Pencil2Icon />
              <Text weight="light">Write</Text>
            </Button>
          </Link>
        </li>
      )}

      <li className="flex items-center">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Text>
              <Avatar
                size="2"
                src={user.photoURL || ""}
                fallback={user.displayName?.charAt(0) || ""}
              />
            </Text>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Item className="brd" asChild>
              <Link href="/my-articles" prefetch={true}>
                My Articles
              </Link>
            </DropdownMenu.Item>

            <DropdownMenu.Item>Profile</DropdownMenu.Item>
            <DropdownMenu.Item>Settings</DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item onClick={() => onSignOut({})}>
              Sign Out
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </li>
    </ul>
  );
};

export default AuthedMenu;
