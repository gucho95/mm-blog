import { Heading } from "@radix-ui/themes";
import { ReactNode } from "react";

type ArticleTitleProps = {
  children: ReactNode;
};

const ArticleTitle = (props: ArticleTitleProps) => {
  return (
    <Heading as="h1" size="8" weight="medium">
      {props.children}
    </Heading>
  );
};

export default ArticleTitle;
