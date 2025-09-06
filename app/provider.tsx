"use client";
import React, { useEffect } from "react";
import Header from "./_components/Header";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";

const Provider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const createUserMutation = useMutation(api.user.CreateNewUser);
  const { user } = useUser();

  useEffect(() => {
    const createUser = async () => {
      if (user) {
        await createUserMutation({
          email: user?.primaryEmailAddress?.emailAddress ?? "",
          imageUrl: user?.imageUrl ?? "",
          name: user?.fullName ?? "",
        });
      }
    };

    if (user) {
      createUser();
    }
  }, [user, createUserMutation]); // include mutation in deps

  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
export default Provider;
