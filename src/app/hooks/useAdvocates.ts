import useSWRImmutable from "swr/immutable";
import { Advocate } from "../types";

export const useAdvocates = () => {
  return useSWRImmutable<Advocate[]>("_useAdvocates", async () => {
    const { data } = await fetch("/api/advocates").then((res) => res.json());
    return data;
  });
};
