"use client";
import ArticlesGrid from "@/components/articlesGrid";
import useArticles from "@/hooks/useArticles";
import { IArticle } from "@/types/article";
import { useEffect, useState } from "react";

const Index = () => {
  const { getPubslishedArticles } = useArticles();
  const [articles, setArticles] = useState<IArticle[]>();

  useEffect(() => {
    getPubslishedArticles().then((articles) => {
      setArticles(articles);
    });
  }, [getPubslishedArticles]);

  return <ArticlesGrid articles={articles} showPublishedState={false} />;
};

export default Index;
