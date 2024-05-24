import { IAuthor } from "./author";

export interface IArticle {
  id: string;
  title: string;
  cover: string;
  shortDescription: string;
  content: string;
  topics: string[];
  createdAt: string;
  author: IAuthor;
}

export type CreateArticlePayload = Omit<IArticle, "id">;
