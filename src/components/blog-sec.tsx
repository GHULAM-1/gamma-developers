"use client";
import SectionDivider from "./section-divider";
import { BlogType } from "@/types/all-types";
import { blogsDummyData } from "@/data/all-blog-data";
import BlogCard from "./blog-card";
export default function BlogSec() {
  return (
    <>
      <div className="max-w-[1365px] w-full flex flex-col justify-center items-center mb-36">
        <SectionDivider text="Our Blogs" className="md:flex hidden"/>
        <SectionDivider text="Blogs" className="flex md:hidden"/>
        <div className="text-white flex justify-start w-full gap-12 pt-5 flex-wrap ">
          {blogsDummyData.map((blog: BlogType, index) => {
            return (
              <div className=" flex flex-row gap-0 md:gap-12">
                <BlogCard
                  date={blog.date}
                  image={blog.image}
                  mainText={blog.mainText}
                  ownerImage={blog.ownerImage}
                  ownerName={blog.ownerName}
                  timeToRead={blog.timeToRead}
                  key={index}
                />
                {index !== blogsDummyData.length - 1 ? (
                  <div className="border-none md:border-[1px] h-full border-neutral-400 border-opacity-20"></div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
