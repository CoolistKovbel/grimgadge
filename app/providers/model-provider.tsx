"use client";

import { useEffect, useState } from "react";
import AuthUserModel from "../components/models/AuthUserModel";


export const  ModalProvider = () => {
  const [isMounted, setIsmounted] = useState(false);

  useEffect(() => {
    setIsmounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AuthUserModel />
    </>
  );
};
