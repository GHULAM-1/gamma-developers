import React from 'react';
import { AllPortfolioCardsData } from '@/data/a-portfolio-card';
import AportfolioCard from '@/components/aPortfolioCard';
export default function Aportfolio({ params }: { params: { id: string } }) {
  const portfolio = AllPortfolioCardsData.find(pd => pd.id === parseInt(params.id));

  if (!portfolio) {
    return <div>Case study not found</div>;
  }
  return (
    <div className="w-full max-w-[1370px] min-w-[300px] px-3 ">
        <AportfolioCard data={portfolio}></AportfolioCard>
    </div>
  );
}