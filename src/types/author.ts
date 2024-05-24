import { User } from "firebase/auth";

export interface IAuthor {
  displayName: User["displayName"];
  uid: User["uid"];
  photoURL: User["photoURL"];
  superUser?: boolean;
}

export type SetAuthorPayload = Omit<IAuthor, "superUser">;
