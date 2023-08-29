import React from 'react';
import { DragDropContext, DragStart, DragUpdate, Droppable, DropResult } from 'react-beautiful-dnd';
import update from 'immutability-helper';
import { mapModifiers } from 'libs/component';
import { DndListItemProps } from 'components/molecules/dnd-list-item';

export interface DndItemsValue {
  id: string;
}

export interface DndListContainerProps {
  children?: React.ReactNode;
  className?: string;
  onStart?: () => void;
  onEnd?: (value: DndItemsValue[]) => void;
  onUpdate?: () => void;
}

export const DndListContainer: React.FC<DndListContainerProps> = ({
  children,
  className: additionalClassName = '',
  onStart,
  onEnd,
  onUpdate,
}) => {
  const componentClassName = mapModifiers('o-dnd-list-container');
  const className = `${componentClassName} ${additionalClassName}`.trim();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onDragStart = (initial: DragStart) => {
    onStart && onStart();
  };

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    const items = React.Children.map(children, child => {
      const ele = child as React.ReactElement<DndListItemProps>;
      return { id: ele.props.id };
    });

    if (!items) {
      return;
    }

    const reOrderItems = update(items, {
      $splice: [
        [result.source.index, 1],
        [result.destination.index, 0, items?.[result.source.index]],
      ],
    });

    onEnd && onEnd(reOrderItems);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onDragUpdate = (initial: DragUpdate) => {
    onUpdate && onUpdate();
  };

  return (
    <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd} onDragUpdate={onDragUpdate}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div
            className={`${className} ${snapshot.isDraggingOver ? 'o-dnd-list-container--dragging-over' : ''}`.trim()}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {React.Children.map(children, ele => ele && <>{ele}</>)}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
