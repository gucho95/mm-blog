import clsx from "clsx";
import { ContainerProps } from ".";

interface ArticleContainerProps extends ContainerProps {}

const ArticleContainer = (props: ArticleContainerProps) => {
  const { className, ...containerProps } = props;

  return (
    <article
      className={clsx(className, "max-w-5xl mx-auto")}
      {...containerProps}
    />
  );
};

export default ArticleContainer;
