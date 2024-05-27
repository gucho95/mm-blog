import { ChangeEvent, useState } from "react";
import { Heading } from "@radix-ui/themes";
import classes from "./articleForm.module.css";

type ArticleFormTitleProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
};

const ArticleFormTitle = (props: ArticleFormTitleProps) => {
  const { value, onChange, placeholder } = props;
  const [focused, setFocused] = useState(false);

  const onInput = (event: ChangeEvent<HTMLHeadingElement>) => {
    const value = event.target.innerText;
    onChange(value);
  };

  return (
    <Heading
      as="h1"
      size="8"
      weight="medium"
      contentEditable="plaintext-only"
      className={classes.title}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
      onInput={onInput}
      data-placeholder={value ? "" : placeholder}
      data-focused={focused}
    />
  );
};

export default ArticleFormTitle;
