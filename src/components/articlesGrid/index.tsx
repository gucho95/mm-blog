import { Grid, Skeleton } from "@radix-ui/themes";
import Link from "next/link";
import ArticleCard from "../articleCard";
import { Fragment } from "react";
import { IArticle } from "@/types/article";

interface ArticlesGridProps {
  articles: IArticle[] | undefined;
  showPublishedState: boolean;
}

const SkeletonCard = () => (
  <Skeleton loading={true} className="!rounded-xl" height={"316px"} />
);

const ArticlesGrid = (props: ArticlesGridProps) => {
  const { articles, showPublishedState } = props;

  return (
    <Grid columns="3" gap="4">
      {articles ? (
        articles?.map((article) => (
          <Link href={`/article/${article.id}`} key={article.id}>
            <ArticleCard {...article} showPublishedState={showPublishedState} />
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

export default ArticlesGrid;
