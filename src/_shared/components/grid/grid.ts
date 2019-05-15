import { Component, Input, AfterContentInit, DoCheck } from "@angular/core";
import { BaseComponent } from "../../../models/baseComponent";
import { IEventManager } from "../../event/ieventManager";
import { IoCNames, IEventArg } from "../../common/enums";
import { Promise } from "../../../models/promise";
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
        self.grid = window.jQuery(tableId).DataTable({
            columns: self.getColumns()
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
        return columns;
    }
}

export interface IGridOption {
    dataSource: Promise,
    columns: Array<IGridColumn>;
}
export interface IGridColumn {
    field: string;
    title: string;
    transform?: (val: any) => string;
}