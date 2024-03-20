"use client";
import Button from "@/components/button/base";
import useAuth from "@/hooks/useAuth";

const SignInContainer = () => {
  const { googleSignIn, signOut } = useAuth();

  return (
    <div className="mt-8">
      <Button onClick={() => googleSignIn({})}>Sign in with google</Button>
      <Button onClick={() => signOut({})}>Sign out with google</Button>
    </div>
  );
};

export default SignInContainer;
