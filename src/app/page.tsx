"use client";
import ArticleCard from "@/components/articleCard";
import useArticles from "@/hooks/useArticles";
import { IArticle } from "@/types/article";
import { Grid, Skeleton } from "@radix-ui/themes";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";

const SkeletonCard = () => (
  <Skeleton loading={true} className="!rounded-xl" height={"316px"} />
);

const Index = () => {
  const { getArticles } = useArticles();
  const [articles, setArticles] = useState<IArticle[]>();

  console.log("articles", articles);

  useEffect(() => {
    getArticles().then((articles) => {
      setArticles(articles);
    });
  }, [getArticles]);

  console.log("articles", articles);

  return (
    <Grid columns="3" gap="4">
      {articles ? (
        articles?.map((article) => (
          <Link href={`/article/${article.id}`} key={article.id}>
            <ArticleCard {...article} />
          </Link>
        ))
      ) : (
        <Fragment>
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </Fragment>
      )}
    </Grid>
  );
};

export default Index;
