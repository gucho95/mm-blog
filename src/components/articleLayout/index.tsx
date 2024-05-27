import { ReactNode } from "react";
import { Box } from "@radix-ui/themes";
import ArticleContainer from "../container/ArticleContainer";
import classes from "./articleLayout.module.css";

type ArticleLayoutProps = {
  components?: {
    Cover?: ReactNode;
    Title?: ReactNode;
    Topics?: ReactNode;
    Author?: ReactNode;
    Content?: ReactNode;
  };
};

const ArticleLayout = (props: ArticleLayoutProps) => {
  const { components } = props;

  const { Cover, Title, Topics, Author, Content } = components || {};

  return (
    <ArticleContainer className={classes.container}>
      {Cover ? <Box className={classes.coverContainer}>{Cover}</Box> : null}
      {Title ? <Box className={classes.titleContainer}>{Title}</Box> : null}
      {Topics ? (
        <Box className={classes.topicsContainer}> {Topics} </Box>
      ) : null}
      {Author ? (
        <Box className={classes.authorContainer}> {Author} </Box>
      ) : null}
      {Content ? (
        <Box className={classes.contentContainer}> {Content} </Box>
      ) : null}
    </ArticleContainer>
  );
};

export default ArticleLayout;
