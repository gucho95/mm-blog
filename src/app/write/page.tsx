"use client";
import ArticleFormCover from "@/components/articleForm/Cover";
import ArticleFormTitle from "@/components/articleForm/Title";
import ArticleFormTopics from "@/components/articleForm/Topics";
import ArticleLayout from "@/components/articleLayout";
import ArticleContainer from "@/components/container/ArticleContainer";
import RichEditor from "@/components/richEditor";
import useArticles from "@/hooks/useArticles";
import useAuth from "@/hooks/useAuth";
import useFileManager from "@/hooks/useFileUpload";
import { getAbsolutePath } from "@/utils/storage";
import {
  CheckIcon,
  ClipboardIcon,
  CodeSandboxLogoIcon,
  Cross1Icon,
  Cross2Icon,
  Crosshair1Icon,
  PaperPlaneIcon,
  RocketIcon,
  UploadIcon,
} from "@radix-ui/react-icons";

import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  IconButton,
  ScrollArea,
  Select,
  Spinner,
  Text,
  TextArea,
  TextField,
  Tooltip,
} from "@radix-ui/themes";
import { StorageReference } from "firebase/storage";
import { useRouter } from "next/navigation";
import { ChangeEvent, ChangeEventHandler, Fragment } from "react";
import { useController, useForm } from "react-hook-form";

type WriteArticleFormValues = {
  title: string;
  shortDescription: string;
  content: { html: string; text: string };
  topics: string[];
  cover: {
    ref: StorageReference | undefined;
    url: string;
  };
};

const Write = () => {
  const { user } = useAuth();
  const { addArticle } = useArticles();
  const { uploadFile, uploadLoading, deleteFile, deleteLoading } =
    useFileManager();
  const { handleSubmit, control, formState } = useForm<WriteArticleFormValues>({
    mode: "onChange",
  });

  console.log("formState", formState.errors);

  const navigate = useRouter();

  const { field: coverField } = useController({
    control,
    name: "cover",
    defaultValue: { ref: undefined, url: "" },
    rules: {
      validate: (val) => !!val.url,
      required: "Required",
    },
  });

  const { field: titleField } = useController({
    control,
    name: "title",
    defaultValue: "",
    rules: { required: "Title is required" },
  });

  const { field: contentField } = useController({
    control,
    name: "content",
    defaultValue: { html: "", text: "" },
    rules: { validate: (val) => !!val.text.trim() },
  });

  const { field: topicsField } = useController({
    control,
    name: "topics",
    defaultValue: [],
    rules: { required: "Topics is required" },
  });

  const onFormSuccess = async (values: WriteArticleFormValues) => {
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
      author,
      createdAt,
      content: contentField.value.html,
      cover: coverField.value.url,
    };

    await addArticle(payload);
    console.log("values", payload);
    navigate.push("/");
  };

  const onCoverUpload = async (file: File) => {
    const snapshot = await uploadFile(file, "covers");

    if (snapshot) {
      const { downloadUrl, ref } = snapshot;
      coverField.onChange({
        url: downloadUrl,
        ref,
      });
    }
  };

  const onCoverDelete = async () => {
    if (!coverField.value.ref) {
      return;
    }

    await deleteFile(coverField.value.ref);

    coverField.onChange({
      ref: undefined,
      url: "",
    });
  };

  console.log("titlefiel", titleField.value);
  return (
    <form
      noValidate
      onSubmit={handleSubmit(onFormSuccess)}
      className="h-full max-h-full"
    >
      <ArticleLayout
        components={{
          Cover: (
            <ArticleFormCover
              onUpload={onCoverUpload}
              uploadLoading={uploadLoading}
              onDelete={onCoverDelete}
              deleteLoading={deleteLoading}
              url={coverField.value.url}
            />
          ),

          Title: (
            <ArticleFormTitle
              placeholder="Your article title "
              value={titleField.value}
              onChange={titleField.onChange}
            />
          ),
          Topics: (
            <ArticleFormTopics
              value={topicsField.value}
              onChange={topicsField.onChange}
            />
          ),
          Content: <RichEditor onChange={contentField.onChange} />,
        }}
      />

      <Flex className="fixed bottom-8 right-8">
        <Flex direction="column" gap="4">
          <Tooltip content="Cancel">
            <IconButton
              type="button"
              variant="outline"
              radius="full"
              className="!p-3"
              size="4"
              onClick={() => navigate.back()}
            >
              <Cross2Icon width="100%" height="100%" />
            </IconButton>
          </Tooltip>

          {formState.isValid && (
            <Fragment>
              <Tooltip content="Save as draft">
                <IconButton
                  type="submit"
                  variant="outline"
                  radius="full"
                  className="!p-3"
                  size="4"
                >
                  <ClipboardIcon width="100%" height="100%" />
                </IconButton>
              </Tooltip>
              <Tooltip content="Publish">
                <IconButton
                  type="submit"
                  variant="solid"
                  radius="full"
                  className="!p-3"
                  size="4"
                >
                  <CheckIcon width="100%" height="100%" />
                </IconButton>
              </Tooltip>
            </Fragment>
          )}
        </Flex>
      </Flex>
    </form>
  );
};

export default Write;
