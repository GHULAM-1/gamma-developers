import React from 'react';
import { Services } from '@/data/all-service-data';
import AservicePage from '@/components/aServicespage';
export default function Aservice({ params }: { params: { id: string } }) {
  const service = Services.find(pd => pd.id === parseInt(params.id));
  if (!service) {
      console.log("it is service: ",service);
    return <div>Case study not found</div>;
  }
  return (
    <div className="w-full max-w-[1370px] min-w-[300px] px-3 ">
        <AservicePage data={service}></AservicePage>
    </div>
  );
}