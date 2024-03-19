import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from "react";
import clsx from "clsx";
import classes from "./button.module.css";

export enum ButtonVariant {
  PRIMARY,
  SECONDARY,
  LINK,
  DANGER,
  CUSTOM,
}

export enum ButtonSize {
  BASE,
  CUSTOM,
}

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

const VARIANT_CLASSES = {
  [ButtonVariant.PRIMARY]: classes.primaryButton,
  [ButtonVariant.SECONDARY]: classes.secondaryButton,
  [ButtonVariant.LINK]: classes.linkButton,
  [ButtonVariant.DANGER]: classes.dangerButton,
  [ButtonVariant.CUSTOM]: "",
};

const SIZE_CLASSES = {
  [ButtonSize.BASE]: "px-6 py-2",
  [ButtonSize.CUSTOM]: "",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    className,
    variant = ButtonVariant.PRIMARY,
    size = ButtonSize.BASE,
    ...buttonProps
  } = props;

  const variantClasses = VARIANT_CLASSES[variant];
  const sizeClasses = SIZE_CLASSES[size];

  return (
    <button
      ref={ref}
      className={clsx(classes.button, variantClasses, sizeClasses, className)}
      {...buttonProps}
    />
  );
});

Button.displayName = "Button";

export default Button;
