import { IGridOption } from "../_shared/components/grid/grid";
import { PromiseFactory } from "../models/promise";
import { UserGroups } from "./userGroups";

export class UserGroupsModel {
    public options: IGridOption;
    constructor(page: UserGroups) {
        let i18n = page.i18n;
        this.options = {
            dataSource: PromiseFactory.create(),
            columns: [
                { field: "name", title: i18n.userGroups.name },
                { field: "description", title: i18n.userGroups.description }
            ]
        }
    }
}