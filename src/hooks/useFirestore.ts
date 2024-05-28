import { useCallback } from "react";
import { firestoreDb } from "@/services/firebase";
import {
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  addDoc,
  where,
  query,
  FieldPath,
  WhereFilterOp,
} from "firebase/firestore";

interface GetDocumentsParams {
  fieldName: string | FieldPath;
  filter: WhereFilterOp;
  fieldValue: unknown;
}

function useFireStore() {
  const addDocument = useCallback(
    async (collectionName: string, payload: any) => {
      try {
        const ref = collection(firestoreDb, collectionName);
        const docRef = await addDoc(ref, payload);
        return docRef;
      } catch (e) {
        console.error("Error creating document: ", e);
      }
    },
    []
  );

  const setDocument = useCallback(
    async (collectionName: string, documentName: string, payload: any) => {
      try {
        const ref = collection(firestoreDb, collectionName);
        const docRef = await setDoc(doc(ref, documentName), payload, {
          merge: true,
        });
        return docRef;
      } catch (e) {
        console.error("Error setting document: ", e);
      }
    },
    []
  );

  const getDocuments = useCallback(
    async <T>(collectionName: string, params?: GetDocumentsParams[]) => {
      try {
        const documentsRef = collection(firestoreDb, collectionName);

        const querySnapshot = params?.length
          ? await getDocs(
              query(
                documentsRef,
                ...params.map((param) =>
                  where(param.fieldName, param.filter, param.fieldValue)
                )
              )
            )
          : await getDocs(documentsRef);

        const docs = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        })) as T;
        console.log("docs", docs);
        return docs;
      } catch (e) {
        console.error("Error fetchings collection documents: ", e);
      }
    },
    []
  );

  const getDocument = useCallback(
    async <T>(collectionName: string, documentId: string) => {
      try {
        const docRef = doc(firestoreDb, collectionName, documentId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          return docSnap.data() as T;
        } else {
          // docSnap.data() will be undefined in this case
          console.log("No such document!");
        }
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
    []
  );

  return {
    addDocument,
    setDocument,
    getDocuments,
    getDocument,
  };
}

export default useFireStore;
