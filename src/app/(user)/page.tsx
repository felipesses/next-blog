import { groq } from "next-sanity";
import React from "react";
import { draftMode } from "next/headers";
import { client } from "../../../lib/sanity.client";
import BlogList from "@/components/BlogList";

const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;

export const revalidate = 10;

export default async function User() {
  if (!draftMode())
    return <div>Preview Mode (not working, should be preview mode)</div>;

  const posts = await client.fetch(query);

  return (
    <main>
      <BlogList posts={posts} />
    </main>
  );
}
