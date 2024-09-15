/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState } from "react";
import MainLayout from "../../components/MainLayout";
import BreadCrumbs from "../../components/BreadCrumbs";
import { generateHTML } from "@tiptap/html";
import Bold from "@tiptap/extension-bold";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Heading from "@tiptap/extension-heading";
import Italic from "@tiptap/extension-italic";
import parse from "html-react-parser";
import { images } from "../../constants";
import { Link, useParams } from "react-router-dom";
import SuggestedPosts from "./container/SuggestedPosts";
import CommentsContainer from "../../components/comments/CommentsContainer";
import SocialShareButtons from "../../components/SocialShareButtons";
import { useQuery } from "@tanstack/react-query";
import { getSinglePost } from "../../services/index/posts";

const postsData = [
  {
    _id: "1",
    image: images.Post1Image,
    title: "Help children get better education",
    createdAt: "2024-04-26T02:19:53.607+0000",
  },
  {
    _id: "2",
    image: images.Post1Image,
    title: "Help children get better education",
    createdAt: "2024-04-26T02:19:53.607+0000",
  },
  {
    _id: "3",
    image: images.Post1Image,
    title: "Help children get better education",
    createdAt: "2024-04-26T02:19:53.607+0000",
  },
  {
    _id: "4",
    image: images.Post1Image,
    title: "Help children get better education",
    createdAt: "2024-04-26T02:19:53.607+0000",
  },
];

const tagsData = [
  "Medical",
  "Lifestyle",
  "Learn",
  "Healthy",
  "Food",
  "Diet",
  "Education",
];

const ArticleDetailPage = () => {
  const { slug } = useParams();
  const [breadcrumbsData, setBreadCrumbsData] = useState([]);
  const [body, setBody] = useState(null);
  const { data, isLoading, error } = useQuery({
    queryKey: ['blog', slug],
    queryFn: () =>
      getSinglePost({ slug }).then((res) => {
        setBreadCrumbsData([
          { name: "Home", link: "/" },
          { name: "Blog", link: "/blog" },
          { name: `${res.title}`, link: `/blog/${res.slug}` },
        ]);
        setBody(
          parse(
            generateHTML(res.body, [
              Bold,
              Document,
              Paragraph,
              Text,
              Heading,
              Italic,
            ])
          )
        );
        return res;
      }),
  });

  return (
    <MainLayout>
      <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start">
        <article className="flex-1">
          <BreadCrumbs data={breadcrumbsData} />
          <img
            className="rounded-xl w-full"
            src={
              data?.photo
                ? stables.UPLOAD_FOLDER_BASE_URL + data?.photo
                : images.samplePostImage
            }
            alt={data?.title}
          />
          <div className="mt-4 flex gap-2">
            {data?.categories.map((category) => (
              <Link
                to={`/blog?category=${category.name}`}
                className="text-primary text-sm font-roboto inline-block md:text-base"
              >
                {category.name}
              </Link>
            ))}
          </div>
          <h1 className="text-xl font-medium font-courierprime mt-4 text-dark-hard md:text-[26px]">
            {data?.title}
          </h1>
          <div className="mt-4 prose prose-sm sm:prose-base">{body}</div>
          <CommentsContainer className="mt-10" loggedInUserId="a" />
        </article>
        <div>
          <SuggestedPosts
            header="Latest Articles"
            posts={postsData}
            tags={tagsData}
            className="mt-8 lg:mt-0 lg:max-w-xs"
          ></SuggestedPosts>
          <div className="mt-7">
            <h2 className="font-courierprime font-medium text-dark-hard mb-4 md:text-xl">
              Share on:
            </h2>
            <SocialShareButtons
              url={encodeURI("www.google.co.in")}
              title={encodeURIComponent("Google")}
            />
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ArticleDetailPage;
