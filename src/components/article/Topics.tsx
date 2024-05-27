import { Badge, Flex } from "@radix-ui/themes";
import Link from "next/link";

type ArticleTopicsProps = {
  topics: string[];
};

const ArticleTopics = (props: ArticleTopicsProps) => {
  const { topics } = props;

  return (
    <Flex gap="2" wrap="wrap">
      {topics?.map((topic) => (
        <Link key={topic} href={"/"}>
          <Badge variant="soft" className="hover:bg-opacity-25">
            #{topic.toUpperCase()}
          </Badge>
        </Link>
      ))}
    </Flex>
  );
};

export default ArticleTopics;
