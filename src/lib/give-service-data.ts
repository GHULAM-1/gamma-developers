import { web, mobile, design, ai } from "../data/services-data";
import { servicePageDataType } from "../data/services-data";
export default function giveServiceData(
  serviceSlug: string
): servicePageDataType | undefined {
  console.log(serviceSlug);
  if (serviceSlug) {
    switch (serviceSlug) {
      case "web":
        return web;
      case "mobile":
        return mobile;
      case "design":
        return design;
      case "ai":
        return ai;
    }
  } else {
    return undefined;
  }
}
