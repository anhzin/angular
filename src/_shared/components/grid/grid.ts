import { Component, Input, AfterContentInit, DoCheck } from "@angular/core";
import { BaseComponent } from "../../../models/baseComponent";
import { IEventArg } from "../../../models/enums";
import { Promise } from "../../../models/promise";
import guidHelper from "../../helpers/guidHelper";
@Component({
    selector: "grid",
    template: `<table id ="{{id}}" class="table"></table>`
})
export class Grid extends BaseComponent implements AfterContentInit, DoCheck {
    @Input() options: IGridOption;
    @Input() eventKey: string;
    private grid: any;
    public ngAfterContentInit() {
        let self = this;
        if (!self.options.dataSource) {
            return;
        }
        self.options.dataSource.subscribe((arg: any) => {
            self.onDataSourceChange(arg);
        });
    }
    private onDataSourceChange(arg: IEventArg) {
        if (!this.grid) {
            return;
        }
        this.grid.clear();
        this.grid.rows.add(arg).draw();
    }

    public ngDoCheck() {
        let self = this;
        let tableId = String.format("#{0}", this.id);
        if (window.jQuery(tableId).length <= 0) {
            return;
        }

        if (!!self.grid) {
            return;
        }
        self.options.actions.forEach((action: IGridItemAction) => {
            action.id = guidHelper.newGuid();
        });
        self.grid = window.jQuery(tableId).DataTable({
            deferRender: true,
            columns: self.getColumns()
        });
        window.setTimeout(() => {
            this.bindEvent();
        }, 0);
    }

    private bindEvent(): void {
        let self = this;
        //  console.log(self.options.actions);
        window.jQuery(".grid-item-option").bind("click", function () {
            let actionId = window.jQuery(this).attr("item-id");
            let action: IGridItemAction = self.options.actions.firstOrDefault((item: IGridItemAction) => {

                return item.id == actionId;
            });
            let dataItem: any = self.grid.row(window.jQuery(this).parents("tr")).data();
            if (!action || !action.handler) {
                return;
            }
            let data = window.jQuery(this).parents("tr").data();
            action.handler(dataItem);
        });
    }
    private getColumns(): any {
        let columns: Array<any> = [];
        if (!this.options || !this.options.columns) {
            return columns;
        }
        this.options.columns.forEach((colDef: IGridColumn) => {
            let col: any = { data: colDef.field, "title": colDef.title };
            if (colDef.transform) {
                col.render = (val: any, editor: any, dataItem: any) => { return colDef.transform(val); };
            }

            columns.push(col);
        });
        let self = this;
        if (this.options.actions && this.options.actions.length > 0) {

            columns.push({
                data: "", title: "", render: function (val: any, editor: any, dataItem: any) {
                    let html: string = self.getGridActionAsHtml(self.options.actions, dataItem);

                    return html;
                }
            });
        }
        return columns;
    }

    private getGridActionAsHtml(actions: Array<IGridItemAction>, dataItem: any): string {
        let html: string = "";
        actions.forEach((action: IGridItemAction) => {
            if (action.isValid && !action.isValid(dataItem)) {
                return;
            }
            html = String.format("{0}<button class='grid-item-option' item-id='{1}'>{2}</button>", html, action.id, action.text);

        });
        return html;
    }
}

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