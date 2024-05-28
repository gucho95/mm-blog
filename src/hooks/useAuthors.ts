import useFireStore from "./useFirestore";
import { useCallback } from "react";
import { IAuthor, SetAuthorPayload } from "@/types/author";
import { User } from "firebase/auth";

const COLLECTION = "authors";

function useAuthors() {
  const { setDocument, getDocument } = useFireStore();

  const setAuthor = useCallback(
    (user: User) => {
      const uid = user.uid;

      const payload: SetAuthorPayload = {
        displayName: user.displayName,
        photoURL: user.photoURL,
        uid: user.uid,
      };

      setDocument(COLLECTION, uid, payload);
    },
    [setDocument]
  );

  const getAuthor = useCallback(
    (authorId: string) => getDocument<IAuthor>(COLLECTION, authorId),
    [getDocument]
  );

  return { setAuthor, getAuthor };
}

export default useAuthors;
