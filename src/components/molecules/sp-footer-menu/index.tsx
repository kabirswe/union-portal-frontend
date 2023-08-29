import React from 'react';
import footerImg from 'images/components/molecules/sp-footer-menu/footer.svg';

export interface SpFooterMenuProps {
  children?: React.ReactNode;
  id?: string;
  className?: string;
}

export const SpFooterMenu: React.FC<SpFooterMenuProps> = ({ id }) => {
  return (
    <div className="m-sp-footer-menu" id={id}>
      <img className="m-sp-footer-menu__image" srcSet={footerImg} />
    </div>
  );
};
