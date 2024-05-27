import { FC, Fragment, MouseEvent } from "react";
import { FormattingMenuAction } from "@/components/richEditor/types";
import classes from "./style.module.css";
import clsx from "clsx";

interface MenuItemProps extends FormattingMenuAction {}

const VerticalDivider = () => {
  return <span className={classes.verticalDivider} />;
};

const MenuItem: FC<MenuItemProps> = ({
  icon,
  name,
  title,
  onSelect,
  selected,
  borderBefore,
  borderAfter,
}) => {
  const onMouseDown = (e: MouseEvent) => {
    e.preventDefault();
    onSelect(name);
  };

  return (
    <Fragment>
      {borderBefore && <VerticalDivider />}

      <button
        className={clsx(classes.menuButton, {
          [classes.menuButtonSelected]: selected && selected?.(),
        })}
        onMouseDown={onMouseDown}
        title={title}
        type="button"
      >
        <span className={classes.menuButtonIcon}>{icon}</span>
      </button>

      {borderAfter && <VerticalDivider />}
    </Fragment>
  );
};

export default MenuItem;
