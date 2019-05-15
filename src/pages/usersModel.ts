import { IGridOption } from "../_shared/components/grid/grid";
import { PromiseFactory } from "../models/promise";

export class UsersModel {
    public options: IGridOption;
    constructor(page: any) {
        this.options = {
            dataSource: PromiseFactory.create(),
            columns: [
                { field: "firstName", title: page.i18n.user.firstName },
                { field: "lastName", title: page.i18n.user.lastName },
                { field: "userName", title: page.i18n.user.userName },
                {
                    field: "status", title: page.i18n.user.status, transform: (val: string) => {
                        return val == "1" ? "Active" : "InActive";
                    }
                }
            ]
        }
    }
}