import React from "react";
import BlogSec from "@/components/blog-sec";
import PageHeading from "@/components/page-heading";
import { blogsDummyData } from "@/data/all-blog-data";
import BlogCard from "@/components/blog-card";
import { BlogType } from "@/types/all-types";
import { blogCardsQuery } from "@/utils/queries";
import { blogCardsDataT } from "@/types/all-types";
import { sanityFetch } from "@/utils/sanityFetch";

export default async function Blog() {
  const blogCardsData: blogCardsDataT[] = await sanityFetch({
    query: blogCardsQuery,
  });
  return (
    <div className="max-w-[1365px] w-full flex flex-col justify-center items-center">
      <PageHeading
        description="Crafting new bright brands, unique visual systems and digital experience focused on a wide range of original collabs."
        heading="We are a digital agency for visually compelling about stories Hubfolio."
      />
      <div className="text-white flex justify-start w-full gap-12 flex-wrap mt-16 mb-36 ">
        {blogCardsData.map((blog: blogCardsDataT, index) => {
          return (
            <div className=" flex flex-row gap-12">
              <BlogCard
                authorName={blog.authorName}
                bannerImage={blog.bannerImage}
                estimatedReadingTime={blog.estimatedReadingTime}
                mainHeading={blog.mainHeading}
                publishedAt={blog.publishedAt}
                slug={blog.slug}
                tag={blog.tag}
                key={index}
              />
              {index !== blogsDummyData.length - 1 ? (
                <div className="border-[1px] h-full border-neutral-400 border-opacity-20"></div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
