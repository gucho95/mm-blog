"use client";
import Avatar from "@/components/avatar";
import ArticleContainer from "@/components/container/ArticleContainer";
import useArticles from "@/hooks/useArticles";
import { IArticle } from "@/types/article";

import {
  Badge,
  Box,
  Flex,
  Grid,
  Heading,
  Skeleton,
  Text,
} from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Article = () => {
  const { getArticle } = useArticles();
  const [article, setArticle] = useState<IArticle | undefined>(undefined);

  const params = useParams();
  const articleId = params?.id as string;

  useEffect(() => {
    getArticle(articleId).then((resp) => {
      setArticle(resp);
    });
  }, [articleId, getArticle]);

  const createdAt = article?.createdAt
    ? new Date(article.createdAt).toDateString()
    : "";

  const loading = !article;

  return (
    <ArticleContainer className="grid gap-y-6">
      <Skeleton loading={loading}>
        <div className="relative h-[60vh]">
          {article?.cover ? (
            <Image
              src={article?.cover}
              fill={true}
              objectFit="cover"
              alt=""
              className="rounded-xl"
            />
          ) : null}
        </div>
      </Skeleton>

      <Grid gapY="1">
        <Skeleton loading={loading}>
          <Heading size={"8"} className="text-4xl font-medium" as="h1">
            {article?.title}
          </Heading>
        </Skeleton>

        <Skeleton loading={loading}>
          <Flex gap="2" wrap="wrap">
            {article?.topics?.map((topic) => (
              <Link key={topic} href={"/"}>
                <Badge variant="soft" className="hover:bg-opacity-25">
                  #{topic.toUpperCase()}
                </Badge>
              </Link>
            ))}
          </Flex>
        </Skeleton>
      </Grid>

      <Flex gapX="2" align="center">
        <Skeleton loading={loading}>
          <Avatar
            size="2"
            src={article?.author?.photoURL || ""}
            fallback={article?.author?.displayName?.charAt(0) || ""}
          />
        </Skeleton>

        <Flex direction="column" gapY="1">
          <Skeleton loading={loading}>
            <Link
              href={`/author/${article?.author?.uid}`}
              className="hover:underline"
            >
              <Text>{article?.author?.displayName}</Text>
            </Link>
          </Skeleton>

          <Skeleton loading={loading}>
            <Text size="1" color="gray">
              {createdAt}
            </Text>
          </Skeleton>
        </Flex>
      </Flex>

      <div dangerouslySetInnerHTML={{ __html: article?.content || "" }}></div>
    </ArticleContainer>
  );
};

export default Article;
