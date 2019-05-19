import { Component } from "@angular/core";
import { BasePage } from "../models/basePage";
import { UserGroupsModel } from "./userGroupsModel";
import { IoCNames } from "../_shared/common/enums";
import { IUserGroupService } from "../_shared/services/iuserGroupService";
@Component({
    template: `
    <page [title]="i18n.userGroups.title">
        <page-command>
            <a href="#"><i class="fa fa-plus" (click)="onAddNewUserClicked($event)"></i></a>
        </page-command>
        <grid [options]="model.options">
        </grid>
    </page>
    `
})
export class UserGroups extends BasePage {
    public model: UserGroupsModel;
    constructor() {
        super();
        this.model = new UserGroupsModel(this);
        this.loadUserGroups();
    }

    private loadUserGroups(): void {
        let userGroupService: IUserGroupService = window.ioc.resolve(IoCNames.IUserGroupService);
        userGroupService.getUserGroups().then((items: any) => {
            this.model.options.dataSource.resolve(items);
        });
    }

    public onAddNewUserClicked(): void {
        console.log("add new User Group");
    }
}