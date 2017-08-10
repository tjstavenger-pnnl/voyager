/// <reference types="react-dnd" />
/// <reference types="react" />
import { Schema } from 'compassql/build/src/schema';
import * as React from 'react';
import { ConnectDropTarget } from 'react-dnd';
import { ActionHandler } from '../../actions/index';
import { ShelfEncodingAction } from '../../actions/shelf';
import { ShelfFieldDef, ShelfId } from '../../models';
/**
 * Props for react-dnd of EncodingShelf
 */
export interface EncodingShelfDropTargetProps {
    connectDropTarget: ConnectDropTarget;
    isOver: boolean;
    item: Object;
}
export interface EncodingShelfPropsBase extends ActionHandler<ShelfEncodingAction> {
    id: ShelfId;
    fieldDef: ShelfFieldDef;
    schema: Schema;
}
export declare const EncodingShelf: () => React.PureComponent<EncodingShelfPropsBase, {}>;