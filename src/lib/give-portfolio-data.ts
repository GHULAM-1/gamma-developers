import { portfolioPageDataType } from "@/types/all-types";
import { portfolioPageData } from "@/data/portfolio-page-data";
export function givePortfolioData(
  slug: string
): portfolioPageDataType | undefined {
  return portfolioPageData.find((item) => item.slug === slug);
}
