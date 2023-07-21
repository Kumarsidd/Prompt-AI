"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("af004df1-cc6c-4f7b-bdd0-6b1b012c4ba9");
  }, []);

  return null;
};
