import { FieldValue } from "@firebase/firestore";

export interface IRegisterUser {
  email: string;
  password: string;
  displayName: string;
}

export interface ILoginUser {
  email: string;
  password: string;
}

export interface IChatMessage {
  message: string;
  createdAt: FieldValue;
  user: string | null;
}
