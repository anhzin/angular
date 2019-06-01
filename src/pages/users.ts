import { Component, AfterContentInit, DoCheck } from "@angular/core";
import { BasePage } from "@app/common";
import { IUser } from "../models/user";
import { IUserService } from "../_shared/services/iuserService";
import { IoCNames } from "@app/common";
import { Router } from "@angular/router";
import { UsersModel } from "./usersModel";

@Component({
    template: `<page [title]="i18n.user.title">
    <page-content>
        <page-command><a class="collapse-link"><i class="fa fa-plus" (click)="onAddNewUserClicked($event)"></i></a></page-command>
        <grid [options]="model.options"></grid>
    </page-content>
</page>`
})
export class Users extends BasePage {
    private router: Router;
    public model: UsersModel;
    constructor(router: Router) {
        super();
        let self = this;
        self.model = new UsersModel(this);
        this.router = router;
        let userService: IUserService = window.ioc.resolve(IoCNames.IUserService);
        userService.getUsers().then((users: Array<IUser>) => {
            self.model.options.dataSource.resolve(users);
        });
    }
    public onAddNewUserClicked(): void {
        this.router.navigate(["addNewUser"]);
    }

    public onEditUserClicked(item: any): void {
        console.log(item);
        //this.router.navigate(["editNewUser"]);
    }
    public onDeleteUserClicked(item: any): void {
        console.log(item);
    }

    public onActiveUserClicked(item: any): void {
        console.log(item);
    }

    public onInActiveUserClicked(item: any): void {
        console.log(item);
    }
}