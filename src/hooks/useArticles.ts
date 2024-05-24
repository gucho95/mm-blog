import { IArticle, CreateArticlePayload } from "@/types/article";
import useFireStore from "./useFirestore";
import { useCallback } from "react";

const COLLECTION = "articles";

function useArticles() {
  const { addDocument, getDocument, getDocuments } = useFireStore();

  const addArticle = useCallback(
    (payload: CreateArticlePayload) => addDocument(COLLECTION, payload),
    [addDocument]
  );

  const getArticles = useCallback(
    () => getDocuments<IArticle[]>(COLLECTION),
    [getDocuments]
  );

  const getArticle = useCallback(
    (articleId: string) => getDocument<IArticle>(COLLECTION, articleId),
    [getDocument]
  );

  return { addArticle, getArticles, getArticle };
}

export default useArticles;
