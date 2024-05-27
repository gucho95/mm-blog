import clsx from "clsx";
import { FC, MouseEvent } from "react";
import AddIcon from "./Icons/Add";
import classes from "./style.module.css";

type MenuTriggerProps = {
  menuOpen: boolean;
  isEditorFocused?: boolean;
  onMenuOpen: () => void;
  onMenuClose: () => void;
};

const MenuTrigger: FC<MenuTriggerProps> = ({
  menuOpen,
  onMenuClose,
  onMenuOpen,
  isEditorFocused,
}) => {
  const onMouseDown = (e: MouseEvent) => {
    e.preventDefault();

    if (menuOpen) {
      onMenuClose();
    } else {
      onMenuOpen();
    }
  };

  return isEditorFocused ? (
    <button
      onMouseDown={onMouseDown}
      className={clsx(
        classes.menuTrigger,
        menuOpen ? "rotate-45" : "rotate-0 sca"
      )}
    >
      <AddIcon />
    </button>
  ) : null;
};

export default MenuTrigger;
