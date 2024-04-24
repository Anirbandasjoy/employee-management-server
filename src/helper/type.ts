/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserCredential } from "firebase/auth";
export type EmployeeAddInputType = {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  role: string;
  designation: string;
};

export type RegistationTypes = {
  fullname: string;
  email: string;
  password: string;
};
export type LoginTypes = {
  email: string;
  password: string;
};
export type AuthUser = {
  uid: string;
  email: string | null | undefined;
  emailVerified: boolean;
  displayName: string | null | undefined;
  photoURL: string | null | undefined;
};
export type AuthContextType = {
  user: AuthUser | any;
  googleUserLogin: () => Promise<UserCredential>;
  registerUser: (email: string, password: string) => Promise<UserCredential>;
  loginUser: (email: string, password: string) => Promise<UserCredential>;
  logOut: () => Promise<void>;
  loading: boolean;
};

export type AuthInformation = {
  loading: boolean;
  user: AuthUser | null;
  googleUserLogin: () => Promise<UserCredential>;
  logOut: () => Promise<void>;
  registerUser: (
    email: string,
    password: string
  ) => Promise<UserCredential> | null;
  loginUser: (email: string, password: string) => Promise<UserCredential>;
};