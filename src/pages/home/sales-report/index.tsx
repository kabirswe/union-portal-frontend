import React from 'react';
import { Section } from 'components/molecules/section';
import { PageHeading } from 'components/molecules/page-heading';
import { InternalLink } from 'components/atoms/internal-link';
import salesReportImg from 'images/sales-report.svg';

const SalesReport: React.FC = () => {
  return (
    <Section
      modifiers="card"
      className="p-home__sales-report"
      head={
        <PageHeading
          title="売上情報"
          tag="h5"
          className="m-section__heading"
          actions={
            <InternalLink
              icon="link"
              // NOTE: Comment out for testing
              href="#"
            >
              詳細へ
            </InternalLink>
          }
        />
      }
    >
      <Section>
        <div className="p-home__sales-report__image">
          <img srcSet={salesReportImg} />
        </div>
      </Section>
    </Section>
  );
};

export default SalesReport;
