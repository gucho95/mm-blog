import Button, { ButtonProps } from "../base";
import { FC, ReactNode } from "react";
import clsx from "clsx";
import classes from "./iconButton.module.css";

interface IconButtonProps extends ButtonProps {
  icon: ReactNode;
}

const IconButton: FC<IconButtonProps> = ({
  icon,
  children,
  className,
  ...buttonProps
}) => {
  return (
    <Button className={clsx(classes.iconButton, className)} {...buttonProps}>
      <span className={classes.iconWrapper}>{icon}</span>
      {children}
    </Button>
  );
};

export default IconButton;
