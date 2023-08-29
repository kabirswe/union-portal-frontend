import React from 'react';
import { mapModifiers } from 'libs/component';

export interface Props {
  gutterHPc?: string;
  gutterHSp?: string;
  gutterVPc?: string;
  gutterVSp?: string;
  justifyPC?: 'center' | 'space-between';
  justifySP?: 'center' | 'space-between';
  alignPC?: 'center' | 'bottom';
  alignSP?: 'center' | 'bottom';
  directionColumn?: boolean;
  children: React.ReactNode;
}

export const Grid: React.FC<Props> = props => {
  const className = mapModifiers(
    'o-grid',
    `gutter-pc-h-${props.gutterHPc}`,
    `gutter-sp-h-${props.gutterHSp}`,
    `gutter-pc-v-${props.gutterVPc}`,
    `gutter-sp-v-${props.gutterVSp}`,
    props.justifyPC && `justify-pc-${props.justifyPC}`,
    props.justifySP && `justify-sp-${props.justifySP}`,
    props.alignPC && `align-pc-${props.alignPC}`,
    props.alignSP && `align-sp-${props.alignSP}`,
    props.directionColumn && `directioncolumn`
  );

  return (
    <div className={className}>
      <div className="o-grid__body">{props.children}</div>
    </div>
  );
};

Grid.defaultProps = {
  gutterHPc: '16',
  gutterHSp: '16',
  gutterVPc: '16',
  gutterVSp: '8',
};

export interface GridCellProps {
  colPC?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
  colSP?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
  orderPC?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10';
  orderSP?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10';
  hidePC?: boolean;
  hideSP?: boolean;
  justify?: 'left' | 'center' | 'right';
  useBlock?: boolean;
  dataAttrs?: { [key: string]: string };
  displayColumn?: boolean;
}

export const GridCell: React.FC<GridCellProps> = props => {
  const className = mapModifiers(
    'o-grid__cell',
    `col-pc-${props.colPC}`,
    `col-sp-${props.colSP}`,
    props.orderPC && `order-pc-${props.orderPC}`,
    props.orderSP && `order-sp-${props.orderSP}`,
    !props.useBlock && (props.justify || 'left'),
    props.useBlock && `block`,
    props.hidePC && `hidepc`,
    props.hideSP && `hidesp`,
    props.displayColumn && 'displaycolumn'
  );

  return <div className={className}>{props.children}</div>;
};

GridCell.defaultProps = {
  colPC: '6',
  colSP: '12',
};
