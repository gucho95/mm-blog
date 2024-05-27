import classes from "./style.module.css";
import { FormattingMenuAction } from "@/components/richEditor/types";
import { FC } from "react";
import MenuItem from "./MenuItem";

type MenuProps = {
  actions: FormattingMenuAction[];
};

const Menu: FC<MenuProps> = ({ actions }) => {
  return (
    <div className={classes.menu}>
      {actions.map((action) => (
        <MenuItem key={action.name} {...action} />
      ))}
    </div>
  );
};

export default Menu;
