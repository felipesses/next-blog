import { createClient } from "next-sanity";

export const projectId = "8tgasqfg";
export const dataset = "production";
export const apiVersion = "2022-11-16";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});
