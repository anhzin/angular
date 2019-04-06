import {Component} from "@angular/core";
import {BasePage} from "../models/basePage";
import {IUser} from "../models/user";
import {IUserService} from "../_shared/services/iuserService";
import {IoCNames} from "../_shared/common/enums";
@Component({
    templateUrl: 'src/pages/users.html'
})
export class Users extends BasePage {
    public users: Array<IUser> = [];
    public selectedUser: IUser;
    constructor() {
        super();
        let self = this;
        let userService: IUserService = window.ioc.resolve(IoCNames.IUserService);
        userService.getUsers().then((users: Array<IUser>) => {
            self.users = users;
        });
    }

    public onAddNewUserClicked(): void {

    }

    public onEditUserClicked(user: any): void {

    }

    public onPreviewUserClicked(user: any): void {
        this.selectedUser = user.clone();
    }

    public onCancelled(): void {
        this.selectedUser = null;
    }

    public onSaved(selectedUser: IUser): void {
        let user = this.users.firstOrDefault((item: IUser) => {
            return item.userName == selectedUser.userName;
        });
        if (user) {
            user.firstName = selectedUser.firstName;
            user.lastName = selectedUser.lastName;
        }
    }
}