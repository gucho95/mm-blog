import { Flex, Text } from "@radix-ui/themes";
import Avatar from "../avatar";
import Link from "next/link";
import { IAuthor } from "@/types/author";

type ArticleAuthorProps = {
  author: IAuthor;
  createdAt: string;
};

const ArticleAuthor = (props: ArticleAuthorProps) => {
  const { author, createdAt } = props;

  return (
    <Flex gapX="2" align="center">
      <Avatar
        size="2"
        src={author?.photoURL || ""}
        fallback={author?.displayName?.charAt(0) || ""}
      />

      <Flex direction="column" gapY="1">
        <Link href={`/author/${author?.uid}`} className="hover:underline">
          <Text>{author?.displayName}</Text>
        </Link>

        <Text size="1" color="gray">
          {createdAt}
        </Text>
      </Flex>
    </Flex>
  );
};

export default ArticleAuthor;
