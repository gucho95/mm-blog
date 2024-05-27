import { Badge, Box, Card, Flex, Grid, Text } from "@radix-ui/themes";
import Image from "next/image";
import classes from "./articleCard.module.css";
import clsx from "clsx";
import Link from "next/link";
import { IArticle } from "@/types/article";
import Avatar from "../avatar";

type ArticleCardProps = IArticle;

const ArticleCard = (props: ArticleCardProps) => {
  const {
    title,
    shortDescription,
    cover,
    topics = ["sport", "it"],
    createdAt = "20/02/2024",
    author,
    content,
  } = props;

  const createdAtDate = new Date(createdAt).toDateString();

  return (
    <Card variant="ghost" className={clsx(classes.articleCard, "group")}>
      <Grid gap="1">
        <Box className={classes.coverContainer}>
          <Image
            className="w-full h-full group-hover:scale-110 group-hover:rotate-2 transition-all"
            src={cover}
            fill
            objectFit="cover"
            objectPosition="center"
            alt=""
          />
        </Box>
        <Flex gap="2">
          {topics.map((topic) => (
            <Badge key={topic} color="green">
              {topic.toUpperCase()}
            </Badge>
          ))}
        </Flex>

        <Box className={classes.articleDetails}>
          <Flex direction="column" gap="0">
            <Text size="5" weight="medium" truncate>
              {title}
            </Text>

            <Text
              size="2"
              className="line-clamp-2"
              dangerouslySetInnerHTML={{ __html: content }}
            ></Text>
          </Flex>
        </Box>

        <Flex justify="between">
          <Flex gapX="2" align="center">
            <Avatar
              size="1"
              src={author?.photoURL || ""}
              fallback={author?.displayName?.charAt(0) || ""}
            />
            <Link href={`/author/${author?.uid}`} className="hover:underline">
              <Text size="2" className="line-clamp-2">
                Mkrtich Matevosyan
              </Text>
            </Link>
          </Flex>
          <Text size="2">{createdAtDate}</Text>
        </Flex>
      </Grid>
    </Card>
  );
};

export default ArticleCard;
