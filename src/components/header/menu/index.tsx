"use client";
import useAuth from "@/hooks/useAuth";
import AuthedMenu from "./authed";
import PublicMenu from "./public";

const Menu = () => {
  const { authStateReady, user, googleSignIn, signOut } = useAuth();

  if (!authStateReady) {
    return null;
  }

  return user ? (
    <AuthedMenu onSignOut={signOut} />
  ) : (
    <PublicMenu onSignIn={googleSignIn} />
  );
};

export default Menu;
