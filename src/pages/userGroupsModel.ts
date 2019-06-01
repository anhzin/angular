import { IGridOption } from "@app/common";
import { PromiseFactory } from "@app/common";

export class UserGroupsModel {
    public options: IGridOption;
    constructor(page: any) {
        let i18n = page.i18n;
        this.options = {
            dataSource: PromiseFactory.create(),
            columns: [
                { field: "name", title: i18n.userGroups.name },
                { field: "description", title: i18n.userGroups.description }
            ],
            actions: [
                {
                    text: page.i18n.userGroups.edit,
                    handler: (item: any) => {
                        page.onEditUserGroupClicked(item);
                    }
                },
                {
                    text: page.i18n.userGroups.delete,
                    handler: (item: any) => {
                        page.onDeleteUserGroupClicked(item);
                    }
                }
            ]
        }
    }
}