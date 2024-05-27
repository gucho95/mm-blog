"use client";
import ArticleAuthor from "@/components/article/Author";
import ArticleContent from "@/components/article/Content";
import ArticleCover from "@/components/article/Cover";
import ArticleTitle from "@/components/article/Title";
import ArticleTopics from "@/components/article/Topics";
import ArticleLayout from "@/components/articleLayout";
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

  if (!article) {
    return;
  }

  return (
    <ArticleLayout
      components={{
        Cover: <ArticleCover coverSrc={article.cover} />,
        Title: <ArticleTitle>{article.title}</ArticleTitle>,
        Topics: <ArticleTopics topics={article.topics} />,
        Author: <ArticleAuthor author={article.author} createdAt={createdAt} />,
        Content: <ArticleContent content={article.content} />,
      }}
    />
  );
};

export default Article;
