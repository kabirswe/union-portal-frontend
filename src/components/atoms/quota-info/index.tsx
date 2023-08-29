import React from 'react';

export interface QuoteTextProps {
  label: string;
  value: string;
  unit: string;
}

export const QuoteText: React.FC<QuoteTextProps> = ({ label, value, unit }) => {
  return (
    <div className="a-quota-info__content">
      <span className="a-quota-info__primary-text">{label}</span>
      <div className="a-quota-info__secondary-text">
        <span className="a-quota-info__number">{value}</span>
        <span className="a-quota-info__text">{unit}</span>
      </div>
    </div>
  );
};

export interface QuotaInfoProps {
  children: React.ReactNodeArray;
}

export const QuotaInfo: React.FC<QuotaInfoProps> = ({ children }) => {
  return (
    <div className="a-quota-info">
      {children.map((item, idx) => (
        <div key={idx} className="a-quota-info__item">
          {item}
        </div>
      ))}
    </div>
  );
};
