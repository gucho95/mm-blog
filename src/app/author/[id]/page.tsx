"use client";
import Avatar from "@/components/avatar";
import useAuthors from "@/hooks/useAuthors";
import { IAuthor } from "@/types/author";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Author = () => {
  const params = useParams();
  const authorId = params?.id as string;
  const [author, setAuthor] = useState<IAuthor | undefined>(undefined);

  const { getAuthor } = useAuthors();

  useEffect(() => {
    getAuthor(authorId).then((resp) => {
      setAuthor(resp);
    });
  }, [authorId, getAuthor]);

  console.log("author", author);

  return (
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
  );
};

export default Author;
