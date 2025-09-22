// React DnD type definitions
declare module 'react-dnd' {
  import * as React from 'react';

  export interface DragSourceMonitor {
    canDrag(): boolean;
    isDragging(): boolean;
    getItemType(): string | null;
    getItem(): any;
    getDropResult(): any;
    didDrop(): boolean;
    getInitialClientOffset(): { x: number; y: number } | null;
    getInitialSourceClientOffset(): { x: number; y: number } | null;
    getClientOffset(): { x: number; y: number } | null;
    getDifferenceFromInitialOffset(): { x: number; y: number } | null;
    getSourceClientOffset(): { x: number; y: number } | null;
  }

  export interface DropTargetMonitor {
    canDrop(): boolean;
    isOver(options?: { shallow?: boolean }): boolean;
    getItemType(): string | null;
    getItem(): any;
    getDropResult(): any;
    didDrop(): boolean;
    getInitialClientOffset(): { x: number; y: number } | null;
    getInitialSourceClientOffset(): { x: number; y: number } | null;
    getClientOffset(): { x: number; y: number } | null;
    getDifferenceFromInitialOffset(): { x: number; y: number } | null;
    getSourceClientOffset(): { x: number; y: number } | null;
  }

  export interface DragSourceSpec<Props, DragObject> {
    beginDrag(props: Props, monitor?: DragSourceMonitor, component?: any): DragObject;
    endDrag?(props: Props, monitor: DragSourceMonitor, component: any): void;
    canDrag?(props: Props, monitor: DragSourceMonitor): boolean;
    isDragging?(props: Props, monitor: DragSourceMonitor): boolean;
  }

  export interface DropTargetSpec<Props> {
    drop?(props: Props, monitor: DropTargetMonitor, component: any): any;
    hover?(props: Props, monitor: DropTargetMonitor, component: any): void;
    canDrop?(props: Props, monitor: DropTargetMonitor): boolean;
  }

  export interface DragSourceCollector<CollectedProps> {
    (connect: DragSourceConnector, monitor: DragSourceMonitor): CollectedProps;
  }

  export interface DropTargetCollector<CollectedProps> {
    (connect: DropTargetConnector, monitor: DropTargetMonitor): CollectedProps;
  }

  export interface DragSourceConnector {
    dragSource(): (elementOrNode: any) => React.ReactElement | null;
    dragPreview(): (elementOrNode: any) => React.ReactElement | null;
  }

  export interface DropTargetConnector {
    dropTarget(): (elementOrNode: any) => React.ReactElement | null;
  }

  export function useDrag<DragObject = {}, DropResult = any, CollectedProps = {}>(
    spec: {
      type: string;
      item: DragObject | (() => DragObject);
      end?: (item: DragObject, monitor: DragSourceMonitor) => void;
      canDrag?: boolean | ((monitor: DragSourceMonitor) => boolean);
      isDragging?: (monitor: DragSourceMonitor) => boolean;
      collect?: (monitor: DragSourceMonitor) => CollectedProps;
      options?: any;
    },
    deps?: any[]
  ): [CollectedProps, DragSourceConnector, DragSourceConnector];

  export function useDrop<DropResult = any, CollectedProps = {}>(
    spec: {
      accept: string | string[];
      drop?: (item: any, monitor: DropTargetMonitor) => DropResult | undefined;
      hover?: (item: any, monitor: DropTargetMonitor) => void;
      canDrop?: (item: any, monitor: DropTargetMonitor) => boolean;
      collect?: (monitor: DropTargetMonitor) => CollectedProps;
      options?: any;
    },
    deps?: any[]
  ): [CollectedProps, DropTargetConnector];

  export interface DndProviderProps {
    backend: any;
    context?: any;
    options?: any;
    children?: React.ReactNode;
  }

  export const DndProvider: React.ComponentType<DndProviderProps>;

  export function createDragDropManager(backend: any, globalContext?: any): any;

  export const DragDropContext: React.ComponentType<{
    backend: any;
    children?: React.ReactNode;
  }>;

  export const DragDropContextProvider: React.ComponentType<{
    backend: any;
    children?: React.ReactNode;
  }>;

  export function DragSource<Props, DragObject = {}, DropResult = any>(
    type: string | ((props: Props) => string),
    spec: DragSourceSpec<Props, DragObject>,
    collect: DragSourceCollector<any>,
    options?: any
  ): (component: React.ComponentType<Props>) => React.ComponentType<Props>;

  export function DropTarget<Props>(
    types: string | string[] | ((props: Props) => string | string[]),
    spec: DropTargetSpec<Props>,
    collect: DropTargetCollector<any>,
    options?: any
  ): (component: React.ComponentType<Props>) => React.ComponentType<Props>;

  export const DragLayer: any;

  export function useDragLayer<CollectedProps>(
    collect: (monitor: any) => CollectedProps
  ): CollectedProps;

  export function getEmptyImage(): HTMLImageElement;
}

declare module 'react-dnd-html5-backend' {
  export default function HTML5Backend(manager?: any, globalContext?: any): any;
  export { HTML5Backend };
  export const NativeTypes: {
    FILE: string;
    URL: string;
    TEXT: string;
  };
  export function getEmptyImage(): HTMLImageElement;
}

declare module 'react-dnd-touch-backend' {
  export default function TouchBackend(options?: any): any;
  export { TouchBackend };
}