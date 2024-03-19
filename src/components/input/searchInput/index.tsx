"use client";
import {
  DetailedHTMLProps,
  FocusEvent,
  InputHTMLAttributes,
  forwardRef,
  useState,
} from "react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import classes from "./searchInput.module.css";

interface SearchInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  iconClassName?: string;
  containerClassName?: string;
  inputClassName?: string;
}
type Ref = HTMLInputElement;

const SearchInput = forwardRef<Ref, SearchInputProps>((props, ref) => {
  const [focused, setFocused] = useState(false);
  const {
    iconClassName,
    containerClassName,
    className,
    onFocus,
    onBlur,
    ...inputProps
  } = props;

  const onInputFocus = (event: FocusEvent<HTMLInputElement>) => {
    onFocus?.(event);
    setFocused(true);
  };

  const onInputBlur = (event: FocusEvent<HTMLInputElement>) => {
    onBlur?.(event);
    setFocused(false);
  };

  return (
    <label
      className={clsx(
        classes.inputContainer,
        containerClassName,
        focused ? "w-60" : "w-40"
      )}
    >
      <MagnifyingGlassIcon
        className={clsx(classes.searchIcon, iconClassName)}
        tabIndex={-1}
      />

      <input
        className={clsx(classes.input, className)}
        ref={ref}
        onFocus={onInputFocus}
        onBlur={onInputBlur}
        {...inputProps}
      />
    </label>
  );
});

SearchInput.displayName = "SearchInput";
export default SearchInput;
