import { storage } from "@/services/firebase";
import {
  deleteObject,
  getDownloadURL,
  ref,
  StorageReference,
  uploadBytes,
} from "firebase/storage";
import { useState } from "react";

function useFileManager() {
  const [uploadLoading, setUploadLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const uploadFile = async (file: File, folder?: string) => {
    setUploadLoading(true);

    try {
      const fileName = file.name;
      const storageRef = ref(
        storage,
        folder ? `${folder}/${fileName}` : fileName
      );
      const snapshot = await uploadBytes(storageRef, file);
      const downloadUrl = await getDownloadURL(snapshot.ref);

      return { ref: snapshot.ref, downloadUrl };
    } catch (err) {
      console.log("Error uploading", err);
    } finally {
      setUploadLoading(false);
    }
  };

  const deleteFile = async (storageRef: StorageReference) => {
    setDeleteLoading(true);
    try {
      await deleteObject(storageRef);
    } catch (err) {
      console.log("Error on file delete", err);
    } finally {
      setDeleteLoading(false);
    }
  };

  return { uploadFile, uploadLoading, deleteFile, deleteLoading };
}

export default useFileManager;
