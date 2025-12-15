import React from "react";

interface SummaryCardProps {
  title: string;
  amount: string;
  description: string;
  className?: string;
}

export const SummaryCard: React.FC<SummaryCardProps> = ({
  title,
  amount,
  description,
  className = "",
}) => {
  return (
    <div className={`bg-white rounded-xl shadow-sm p-6 mb-6 ${className}`}>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-3xl font-bold text-black mb-3">{amount}</p>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};