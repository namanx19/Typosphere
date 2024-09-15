/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import CreatableSelect from "react-select/creatable";
import { Link, useParams, useNavigate } from "react-router-dom";
import ArticleDetailSkeleton from "../../../articleDetail/components/ArticleDetailSkeleton";
import ErrorMessage from "../../../../components/ErrorMessage";
import { stables } from "../../../../constants";
import { HiOutlineCamera } from "react-icons/hi";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { getSinglePost, updatePost } from "../../../../services/index/posts";
import Editor from "../../../../components/editor/Editor.jsx";
import MultiSelectTagDropdown from "../../components/header/select-dropdown/MultiSelectTagDropdown.jsx";
import { getAllCategories } from "../../../../services/index/postCategories.js";
import {
  categoryToOption,
  filterCategories,
} from "../../../../utils/multiSelectTagUtils.js";

const promiseOptions = async (inputValue) => {
  const { data: categoriesData } = await getAllCategories();
  return filterCategories(inputValue, categoriesData);
};

const EditPost = () => {
  const { slug } = useParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const userState = useSelector((state) => state.user);
  const [initialPhoto, setInitialPhoto] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [body, setBody] = useState(null);
  const [categories, setCategories] = useState(null);
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState(null);
  const [postSlug, setPostSlug] = useState(slug);
  const [caption, setCaption] = useState("");

  const { data, isLoading, isError } = useQuery({
    queryFn: () =>
      getSinglePost({ slug }).then((data) => {
        setInitialPhoto(data?.photo);
        setCategories(data.categories.map((item) => item._id));
        setTitle(data.title);
        setTags(data.tags);
        setCaption(data.caption);
        return data;
      }),
    queryKey: ["blog", slug],
    refetchOnWindowFocus: false,
  });


  const {
    mutate: mutateUpdatePostDetail,
    isLoading: isLoadingUpdatePostDetail,
  } = useMutation({
    mutationFn: ({ updatedData, slug, token }) => {
      return updatePost({
        updatedData,
        slug,
        token,
      });
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries(["blog", slug]);
      toast.success("Post is updated");
      navigate(`/admin/posts/manage/edit/${data.slug}`, { replace: true });
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
  };

  const handleUpdatePost = async () => {
    let updatedData = new FormData();

    if (!initialPhoto && photo) {
      updatedData.append("postPicture", photo);
    } else if (initialPhoto && !photo) {
      const urlToObject = async (url) => {
        let reponse = await fetch(url);
        let blob = await reponse.blob();
        const file = new File([blob], initialPhoto, { type: blob.type });
        return file;
      };
      const picture = await urlToObject(
        stables.UPLOAD_FOLDER_BASE_URL + data?.photo
      );

      updatedData.append("postPicture", picture);
    }

    updatedData.append(
      "document",
      JSON.stringify({ body, categories, title, tags, slug: postSlug, caption })
    );

    mutateUpdatePostDetail({
      updatedData,
      slug,
      token: userState.userInfo.token,
    });
  };

  const handleDeleteImage = () => {
    if (window.confirm("Do you want to delete your Post picture?")) {
      setInitialPhoto(null);
      setPhoto(null);
    }
  };

  let isPostDataLoaded = !isLoading && !isError;

  return (
    <div>
      {isLoading ? (
        <ArticleDetailSkeleton />
      ) : isError ? (
        <ErrorMessage message="Couldn't fetch the post detail" />
      ) : (
        <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start">
          <article className="flex-1">
            <label htmlFor="postPicture" className="w-full cursor-pointer">
              {photo ? (
                <img
                  src={URL.createObjectURL(photo)}
                  alt={data?.title}
                  className="rounded-xl w-full"
                />
              ) : initialPhoto ? (
                <img
                  src={stables.UPLOAD_FOLDER_BASE_URL + data?.photo}
                  alt={data?.title}
                  className="rounded-xl w-full"
                />
              ) : (
                <div className="w-full min-h-[200px] bg-gray-300 rounded-lg flex justify-center items-center">
                  <HiOutlineCamera className="w-7 h-auto text-primary" />
                </div>
              )}
            </label>
            <input
              type="file"
              className="sr-only"
              id="postPicture"
              onChange={handleFileChange}
            />
            <button
              type="button"
              onClick={handleDeleteImage}
              className="w-full bg-red-500 text-sm text-white font-semibold rounded-lg px-4 py-2 mt-5"
            >
              Delete Image
            </button>
            <div className="mt-4 flex gap-2">
              {data?.categories.map((category) => (
                <Link
                  to={`/blog?category=${category.name}`}
                  className="text-primary text-sm font-courierprime inline-block md:text-base"
                >
                  {category.name}
                </Link>
              ))}
            </div>
            <div className="border border-gray-400 p-8 my-4 rounded-lg">
              <div className="d-form-control w-full ">
                <label className="d-label" htmlFor="title">
                  <span className="d-label-text">Title</span>
                </label>
                <input
                  id="title"
                  value={title}
                  className="d-input d-input-bordered border-slate-300 !outline-slate-300 text-xl font-medium font-roboto text-dark-hard"
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="title"
                />
              </div>
              <div className="d-form-control w-full">
                <label className="d-label" htmlFor="caption">
                  <span className="d-label-text">Caption</span>
                </label>
                <input
                  id="caption"
                  value={caption}
                  className="d-input d-input-bordered border-slate-300 !outline-slate-300 text-xl font-medium font-roboto text-dark-hard"
                  onChange={(e) => setCaption(e.target.value)}
                  placeholder="caption"
                />
              </div>
              <div className="d-form-control w-full">
                <label className="d-label" htmlFor="slug">
                  <span className="d-label-text">Slug</span>
                </label>
                <input
                  id="slug"
                  value={postSlug}
                  className="d-input d-input-bordered border-slate-300 !outline-slate-300 text-xl font-medium font-roboto text-dark-hard"
                  onChange={(e) =>
                    setPostSlug(
                      e.target.value.replace(/\s+/g, "-").toLowerCase()
                    )
                  }
                  placeholder="post slug"
                />
              </div>
              <div className="mb-5 mt-2">
                <label className="d-label">
                  <span className="d-label-text">Categories</span>
                </label>
                {isPostDataLoaded && (
                  <MultiSelectTagDropdown
                    loadOptions={promiseOptions}
                    defaultValue={data.categories.map(categoryToOption)}
                    onChange={(newValue) =>
                      setCategories(newValue.map((item) => item.value))
                    }
                  />
                )}
              </div>
              <div className="mb-5 mt-2">
                <label className="d-label">
                  <span className="d-label-text">Tags</span>
                </label>
                {isPostDataLoaded && (
                  <CreatableSelect
                    defaultValue={data.tags.map((tag) => ({
                      value: tag,
                      label: tag,
                    }))}
                    isMulti
                    onChange={(newValue) =>
                      setTags(newValue.map((item) => item.value))
                    }
                    className="relative z-20"
                  />
                )}
              </div>
              <div className="w-full">
                {isPostDataLoaded && (
                  <Editor
                    content={data?.body}
                    editable={true}
                    onDataChange={(data) => {
                      setBody(data);
                    }}
                  />
                )}
              </div>
            </div>
            <button
              disabled={isLoadingUpdatePostDetail}
              type="button"
              onClick={handleUpdatePost}
              className="w-full bg-green-500 text-white font-semibold rounded-lg px-4 py-2 disabled:cursor-not-allowed disabled:opacity-70"
            >
              Update Post
            </button>
          </article>
        </section>
      )}
    </div>
  );
};

export default EditPost;
