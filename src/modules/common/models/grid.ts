import {Promise} from "./promise";
export interface IGridOption {
    dataSource: Promise,
    columns: Array<IGridColumn>;
    actions: Array<IGridItemAction>;
}
export interface IGridColumn {
    field: string;
    title: string;
    transform?: (val: any) => string;
}

export interface IGridItemAction {
    text: string;
    handler: (dataItem: any) => void;
    isValid?: (dataItem: any) => boolean;
    id?: string;
}