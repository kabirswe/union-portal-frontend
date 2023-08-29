import { SimplePage } from 'components/templates/sinple-page';
import React from 'react';
import adfsImg from 'images/adfs.jpg';
import { Link } from 'components/utils/link';
import { ROUTES } from 'consts/routes';

const Adfs: React.FC = () => {
  return (
    <SimplePage id="adfs" className="p-adfs" verticalCenter>
      <Link to={ROUTES.HOM_01_01} className="p-adfs__image">
        <img srcSet={adfsImg} />
      </Link>
    </SimplePage>
  );
};

export default Adfs;
