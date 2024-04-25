/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const SuggestedPosts = ({ className, header, posts = [], tags }) => {
  return (
    <div
      className={`w-full shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] rounded-lg p-4 mt-5 ${className}`}
    >
      <h2 className="font-courierprime font-medium text-dark-hard md:text-xl">
        {header}
      </h2>
      <div className="grid gap-y-5 mt-5 md:grid-cols-2 md:gap-x-5 lg:grid-cols-1">
        {posts.map((items) => (
          <div
            key={items._id}
            className="flex space-x-3 flex-nowrap items-center"
          >
            <img
              className="aspect-square object-cover rounded-lg w-1/5"
              src={items.image}
              alt="post image"
            />
            <div className="text-sm text-dark-hard font-medium ">
              <h3 className="text-sm text-dark-hard font-medium md:text-base lg:text-md">
                {items.title}
              </h3>
              <span className="text-xs opacity-60">
                {new Date(items.createdAt).toLocaleString("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        ))}
      </div>
      <h2 className="mt-8 font-courierprime font-medium text-dark-hard md:text-xl">
        Tags
      </h2>
      <div className="flex flex-wrap gap-x-2 gap-y-2 mt-2">
        {tags.map((item) => (
          <Link
            to="/"
            className="inline-block rounded-md px-3 py-1.5 bg-primary text-xs text-white md:text-sm"
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SuggestedPosts;
