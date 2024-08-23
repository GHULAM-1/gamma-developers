"use client";
import SectionDivider from "./section-divider";
import { BlogType } from "@/types/all-types";
import { Blogs } from "@/data/all-blog-data";
export default function AllBlogs() {
  return (
    <>
      <SectionDivider text="Our Blogs" />
      <div className="text-center">
        <div className="flex gap-2 text-left">
          {Blogs.map((blog: BlogType) => {
            return (
              <div className="text-white w-[20%]">
                <div>
                  <img src={blog.image} alt="" />
                </div>
                <div className="w-[80%]">
                  <h1 className="text-md">{blog.mainText}</h1>
                  <p className="font-bold mt-2 text-sm">{blog.ownerName}</p>
                  <div className="flex gap-5 text-sm text-gray-300 mt-2">
                    <p>{blog.date}</p>
                    <p>{blog.timeToRead}</p>
                  </div>
                </div>
              </div>
            );
          })}
          ;
        </div>
        <button className="text-black  bg-[#d0ff71] px-3 py-2 rounded-lg">
          Show More
        </button>
      </div>
    </>
  );
}
