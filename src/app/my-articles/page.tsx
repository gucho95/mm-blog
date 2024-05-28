"use client";
import ArticlesGrid from "@/components/articlesGrid";
import useArticles from "@/hooks/useArticles";
import { IArticle } from "@/types/article";
import { useEffect, useState } from "react";

const MyArticles = () => {
  const { getMyArticles } = useArticles();
  const [myArticles, setMyArticles] = useState<IArticle[] | undefined>(
    undefined
  );

  useEffect(() => {
    getMyArticles().then((resp) => {
      setMyArticles(resp);
    });
  }, [getMyArticles]);

  return <ArticlesGrid articles={myArticles} showPublishedState={true} />;
};

export default MyArticles;
