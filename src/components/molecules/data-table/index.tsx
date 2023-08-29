import React from 'react';
import { mapModifiers, ModifierProp } from 'libs/component';

export interface HeaderCellProps {
  colIndex?: number;
  type?: ModifierProp<'id' | 'data' | 'action'>;
  value?: React.ReactNode;
  width?: string;
  spwidth?: string;
  minwidth?: string;
  spminwidth?: string;
  isMobile?: boolean;
}

export interface ContentCellProps {
  value?: React.ReactNode;
  align?: ModifierProp<'left' | 'center' | 'right'>;
  valign?: ModifierProp<'top' | 'center' | 'bottom'>;
  spAlign?: ModifierProp<'left' | 'center' | 'right'>;
  spVAlign?: ModifierProp<'top' | 'center' | 'bottom'>;
  isMobile?: boolean;
}

interface RenderCellContentProps {
  rowIndex: number;
  content: ContentCellProps;
  header: HeaderCellProps;
  isMobile: boolean;
}

interface RenderCardProps {
  items: Array<ContentCellProps>;
  isMobile: boolean;
}

export interface DataTableProps {
  id?: string;
  className?: string;
  modifiers?: ModifierProp<'with-action-buttons'>;
  headers: Array<HeaderCellProps>;
  contents: Array<Array<ContentCellProps>>;
  onRowClick?: (index: number) => void;
}

export const DataTable: React.FC<DataTableProps> = ({
  id,
  className: additionalClassName,
  modifiers,
  headers,
  contents,
  onRowClick,
}) => {
  const handleRowClick = (e: React.MouseEvent, index: number) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const target: HTMLElement = e.target as any;
    let shouldIgnore = false;
    target.classList.forEach((cls: string) => {
      if (cls.indexOf('a-button') !== -1 || cls.indexOf('a-icon') !== -1 || cls.indexOf('a-nav-item') !== -1) {
        shouldIgnore = true;
      }
    });
    if (!shouldIgnore && onRowClick) {
      onRowClick(index);
    }
  };
  const renderHeaderContent: React.FC<HeaderCellProps> = ({
    colIndex,
    type = 'data',
    value,
    width,
    spwidth,
    minwidth,
    spminwidth,
    isMobile = false,
  }) => {
    if (isMobile) {
      const className = mapModifiers('m-data-table__card-header', `type-${type}`);
      return (
        <span
          key={`col-${colIndex}`}
          className={className}
          style={{ width: spwidth || undefined, minWidth: spminwidth || undefined }}
        >
          {value}
        </span>
      );
    } else {
      const className = mapModifiers('m-data-table__header-content', `type-${type}`);
      return (
        <div
          key={`col-${colIndex}`}
          className={className}
          style={{ width: width || undefined, minWidth: minwidth || undefined }}
        >
          {value}
        </div>
      );
    }
  };

  const renderCellContent: React.FC<RenderCellContentProps> = ({ rowIndex, content, header, isMobile = false }) => {
    const { value, align = 'left', valign = 'center', spAlign = 'left', spVAlign = 'top' } = content;
    const { type = 'data' } = header;
    if (isMobile) {
      const className = mapModifiers(
        'm-data-table__card-content',
        `type-${type}`,
        `align-${spAlign}`,
        `valign-${spVAlign}`
      );
      return (
        <span key={`cell-${rowIndex}`} className={className}>
          {value}
        </span>
      );
    } else {
      const className = mapModifiers('m-data-table__content', `type-${type}`, `align-${align}`, `valign-${valign}`);
      return (
        <span key={`cell-${rowIndex}`} className={className}>
          <span className="m-data-table__truncate-content">{value}</span>
        </span>
      );
    }
  };

  const renderCardItemSp = ({ rowIndex, content, header }: RenderCellContentProps) => {
    const {
      type = 'data',
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      isMobile: im,
      ...headerProps
    } = header;
    const className = mapModifiers('m-data-table__card-item', `type-${type}`);
    return (
      <div className={className} key={`card-${rowIndex}`}>
        {renderHeaderContent({
          type,
          isMobile: true,
          ...headerProps,
        })}
        {renderCellContent({
          rowIndex,
          content,
          header,
          isMobile: true,
        })}
      </div>
    );
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderCardSp = ({ items }: RenderCardProps) => {
    return (
      <div className="m-data-table__card">
        {items.map((content, idx) =>
          renderCardItemSp({
            rowIndex: idx,
            content,
            header: headers[idx],
            isMobile: true,
          })
        )}
      </div>
    );
  };

  const renderTableSp = () => {
    return (
      <div className="m-data-table__container-card">
        {contents.map((items, idx) => {
          return <React.Fragment key={idx}>{renderCardSp({ items, isMobile: true })}</React.Fragment>;
        })}
      </div>
    );
  };

  const renderHeaderPc = () => {
    const pcHeaders = headers.map((header, index) => {
      const {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        colIndex: ci, // remove it
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        isMobile: im, // remove it
        ...restHeaders
      } = header;
      return {
        colIndex: index,
        isMobile: false,
        ...restHeaders,
      };
    });

    return (
      <div className="m-data-table__header">
        <>{pcHeaders.map(header => renderHeaderContent(header))}</>
      </div>
    );
  };

  const renderTableContentPc = () => {
    return (
      <div className="m-data-table__container-item">
        {contents.map((item, idx) => (
          <div key={idx} className="m-data-table__item" onClick={(e: React.MouseEvent) => handleRowClick(e, idx)}>
            <>
              {item.map((content, index) =>
                renderCellContent({
                  rowIndex: index,
                  content,
                  header: headers[index],
                  isMobile: false,
                })
              )}
            </>
          </div>
        ))}
      </div>
    );
  };

  const renderTablePc = () => {
    return (
      <div className="m-data-table__container">
        {renderHeaderPc()}
        {renderTableContentPc()}
      </div>
    );
  };

  const componentClassName = mapModifiers('m-data-table', modifiers);
  const className = `${componentClassName} ${additionalClassName}`.trim();
  return (
    <div id={id} className={className}>
      {renderTableSp()}
      {renderTablePc()}
    </div>
  );
};
