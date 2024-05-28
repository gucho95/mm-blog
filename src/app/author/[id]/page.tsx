"use client";
import ArticlesGrid from "@/components/articlesGrid";
import Avatar from "@/components/avatar";
import Container from "@/components/container";
import useArticles from "@/hooks/useArticles";
import useAuthors from "@/hooks/useAuthors";
import { IArticle } from "@/types/article";
import { IAuthor } from "@/types/author";
import { Box, Card, Flex, Heading, Text } from "@radix-ui/themes";
import { useParams } from "next/navigation";
import { Fragment, useEffect, useState } from "react";

const Author = () => {
  const params = useParams();
  const authorId = params?.id as string;
  const [author, setAuthor] = useState<IAuthor | undefined>(undefined);
  const [authorArticles, setAuthorArticles] = useState<IArticle[] | undefined>(
    undefined
  );

  const { getAuthor } = useAuthors();
  const { getAuthorArticles } = useArticles();

  useEffect(() => {
    getAuthor(authorId).then((resp) => {
      setAuthor(resp);
    });

    getAuthorArticles(authorId).then((resp) => {
      setAuthorArticles(resp);
    });
  }, [authorId, getAuthor, getAuthorArticles]);

  console.log("author", author);

  return (
    <Container>
      <Card>
        <Flex align="center" gapX="4">
          <Avatar
            size="4"
            src={author?.photoURL || ""}
            fallback={author?.displayName?.charAt(0) || ""}
          />
          <Text>
            <Heading>{author?.displayName}</Heading>
          </Text>
        </Flex>
      </Card>
      <Box mt="2">
        <ArticlesGrid articles={authorArticles} showPublishedState={false} />
      </Box>
    </Container>
  );
};

export default Author;
