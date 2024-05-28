import { IArticle, CreateArticlePayload } from "@/types/article";
import useFireStore from "./useFirestore";
import { useCallback } from "react";
import useAuth from "./useAuth";

const COLLECTION = "articles";

function useArticles() {
  const { user } = useAuth();
  const { addDocument, getDocument, getDocuments } = useFireStore();

  const addArticle = useCallback(
    (payload: CreateArticlePayload) => addDocument(COLLECTION, payload),
    [addDocument]
  );

  const getPubslishedArticles = useCallback(() => {
    console.log("run");
    return getDocuments<IArticle[]>(COLLECTION, [
      {
        fieldName: "published",
        filter: "==",
        fieldValue: true,
      },
    ]);
  }, [getDocuments]);

  const getAuthorArticles = useCallback(
    (uid: string) =>
      getDocuments<IArticle[]>(COLLECTION, [
        { fieldName: "author.uid", filter: "==", fieldValue: uid },
        { fieldName: "published", filter: "==", fieldValue: true },
      ]),
    [getDocuments]
  );

  const getMyArticles = useCallback(() => {
    console.log("try");
    return getDocuments<IArticle[]>(COLLECTION, [
      {
        fieldName: "author.uid",
        filter: "==",
        fieldValue: user?.uid || "",
      },
    ]);
  }, [getDocuments, user]);

  const getArticle = useCallback(
    (articleId: string) => getDocument<IArticle>(COLLECTION, articleId),
    [getDocument]
  );

  return {
    addArticle,
    getPubslishedArticles,
    getMyArticles,
    getAuthorArticles,
    getArticle,
  };
}

export default useArticles;
