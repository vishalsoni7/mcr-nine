import { useEffect } from "react";
import { createContext, useState } from "react";

import { categories } from "../data/categories";

export const VideoContext = createContext();

export const VideoPrivoder = ({ children }) => {
  const [categorie, setCategories] = useState(categories);

  const values = { categorie };

  return (
    <>
      <VideoContext.Provider value={values}> {children} </VideoContext.Provider>{" "}
    </>
  );
};
