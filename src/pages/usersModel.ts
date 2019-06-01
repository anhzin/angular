import { IGridOption } from "@app/common";
import { PromiseFactory } from "@app/common";
import { UserStatus } from "@app/common";

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
                    field: "status", title: page.i18n.user.status, transform: (val: any) => {
                        let text = UserStatus[val];
                        text = String.toCamelCase(text);
                        let local: string = String.format("user.userStatus.{0}", text);
                        let localText: string = page.i18nHelper.resolve(local);
                        return String.format("<span>{0}</span>", localText);
                    }
                },
            ],
            actions: [
                {
                    text: page.i18n.user.active,
                    handler: (item: any) => {
                        page.onInActiveUserClicked(item);
                    },
                    isValid: (user: any) => {
                        return user.status == UserStatus.Active;
                    }
                },
                {
                    text: page.i18n.user.inActive,
                    handler: (item: any) => {
                        page.onInActiveUserClicked(item);
                    },
                    isValid: (user: any) => {
                        return user.status != UserStatus.Active;
                    }
                },
                {
                    text: page.i18n.user.edit,
                    handler: (item: any) => {
                        page.onEditUserClicked(item);
                    }
                },
                {
                    text: page.i18n.user.delete,
                    handler: (item: any) => {
                        page.onDeleteUserClicked(item);
                    }
                }
            ]
        }
    }
}