import { PortfolioCardType } from "@/types/all-types";
type PortfolioProps = {
  data: PortfolioCardType;
};
export default function AportfolioCard({ data }: PortfolioProps) {
  return (
    <>
      <div className="text-white">
        <p>{data.id}</p>
        <p>{data.name}</p>
      </div>
    </>
  );
}
