import { ServicesType } from "@/types/all-types";
type SeriveProp = {
  data: ServicesType;
};
export default function AservicePage({ data }: SeriveProp) {
  return (
    <>
      <div className="text-white">
        <p>{data.id}</p>
        <p>{data.serviceName}</p>
      </div>
    </>
  );
}
