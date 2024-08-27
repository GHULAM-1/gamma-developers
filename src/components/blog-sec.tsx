"use client";
import SectionDivider from "./section-divider";
import { BlogType } from "@/types/all-types";
import { blogsDummyData } from "@/data/all-blog-data";
import BlogCard from "./blog-card";
export default function BlogSec() {
  return (
    <>
      <div className="max-w-[1365px] w-full flex flex-col justify-center items-center">
        <SectionDivider text="Our Blogs" />
        <div>
          {blogsDummyData.map((blog: BlogType, index) => {
            return (
              <BlogCard
                date={blog.date}
                image={blog.image}
                mainText={blog.mainText}
                ownerImage={blog.ownerImage}
                ownerName={blog.ownerName}
                timeToRead={blog.timeToRead}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
