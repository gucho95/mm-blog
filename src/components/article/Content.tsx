import { Box } from "@radix-ui/themes";

type ArticleContentProps = {
  content: string;
};

const ArticleContent = (props: ArticleContentProps) => {
  return <Box dangerouslySetInnerHTML={{ __html: props.content || "" }}></Box>;
};

export default ArticleContent;
