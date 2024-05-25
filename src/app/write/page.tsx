"use client";
import useArticles from "@/hooks/useArticles";
import useAuth from "@/hooks/useAuth";

import {
  Box,
  Button,
  Flex,
  Grid,
  Select,
  TextArea,
  TextField,
} from "@radix-ui/themes";
import { useForm } from "react-hook-form";

type WriteArticleFormValues = {
  title: string;
  shortDescription: string;
  content: string;
};

const Write = () => {
  const { addArticle } = useArticles();
  const { user } = useAuth();

  const { handleSubmit, register } = useForm<WriteArticleFormValues>();

  const onFormSuccess = (values: WriteArticleFormValues) => {
    if (!user) {
      return;
    }

    const author = {
      displayName: user.displayName,
      uid: user.uid,
      photoURL: user.photoURL,
    };

    const createdAt = new Date().toUTCString();

    const payload = {
      ...values,
      topics: ["sport", "it", "music", "javascript"],
      author,
      createdAt,
      cover:
        "https://stablo.web3templates.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fe60f8ab265df3c22fdde5469de54d225017b7323-4000x5000.jpg%3Fw%3D2000%26auto%3Dformat&w=640&q=75",
    };

    addArticle(payload);

    console.log("values", payload);
  };

  return (
    <Box className="max-w-3xl mx-auto p-4 rounded-lg bg-purple-50 shadow-sm">
      <form noValidate onSubmit={handleSubmit(onFormSuccess)}>
        <Grid gap="2">
          <Grid columns="2" gap="2">
            <TextField.Root placeholder="Title" {...register("title")} />
            <TextField.Root
              placeholder="Short Description"
              {...register("shortDescription")}
            />
          </Grid>

          <TextArea placeholder="Content" size="3" {...register("content")} />

          <Grid columns="2">
            {/* <Select.Root>
                <Select.Trigger></Select.Trigger>
            </Select.Root> */}
          </Grid>

          <Flex justify="end" gap="2">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit">Submit</Button>
          </Flex>
        </Grid>
      </form>
    </Box>
  );
};

export default Write;
