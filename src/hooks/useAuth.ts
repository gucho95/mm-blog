import { auth, authProvider } from "@/services/firebase";
import {
  signInWithPopup,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { useCallback, useEffect, useState } from "react";
import useAuthors from "./useAuthors";

type AuthActionProps = {
  onSuccess?: (response?: unknown) => void | undefined;
  onFailure?: (error?: unknown) => void | undefined;
};

export type AuthAction = (props: AuthActionProps) => Promise<void>;

function useAuth() {
  const { setAuthor } = useAuthors();
  const [user, setUser] = useState<User | null>(null);
  const [authStateReady, setAuthStateReady] = useState(false);

  const googleSignIn: AuthAction = useCallback(
    async ({ onSuccess, onFailure }) => {
      try {
        // authenticate user
        const response = await signInWithPopup(auth, authProvider);
        // create/update user data in authors collection
        setAuthor(response.user);

        onSuccess?.(response);
        console.log("SUCCESS: Sign in success ", response);
      } catch (error) {
        onFailure?.(error);
        console.error(["Error on sign-in ", error]);
      }
    },
    [setAuthor]
  );

  const signOut: AuthAction = useCallback(
    async ({ onSuccess, onFailure }: AuthActionProps) => {
      try {
        const response = await firebaseSignOut(auth);
        onSuccess?.(response);
        console.log("ACTION:Sign out success ", response);
      } catch (error) {
        onFailure?.(error);
        console.error(["Error on sign-out ", error]);
      }
    },
    []
  );

  useEffect(() => {
    auth
      .authStateReady()
      .then(() => setAuthStateReady(true))
      .catch(() => setAuthStateReady(false));

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  return { user, authStateReady, googleSignIn, signOut };
}

export default useAuth;
