"use client";

import { definePreview } from "next-sanity/preview";

import { projectId, dataset } from "./sanity.client";

function onPublicAccessOnly() {
  throw new Error("Não foi possível carregar as informações.");
}

if (!projectId || !dataset) {
  throw new Error("ID não encontrado");
}

export const usePreview = definePreview({
  projectId,
  dataset,
  onPublicAccessOnly,
});
