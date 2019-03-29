import { Component } from "@angular/core";
import { IUser } from "../models/user";
import { UserService } from "../_shared/services/userService";
import { BasePage } from "../models/basePage";
@Component({
    templateUrl: 'src/pages/users.html'
})
export class Users extends BasePage {
    public users: IUser[];
    public selectedUser: IUser;

    constructor(userService: UserService) {
        super();
        let self = this;
        userService.getUsers().then((users: any) => {
            self.users = users;
        });
    }

    public onAddNewUserClicked(): void { }
    public onPreviewUserInformationClicked(user: any): void {
        this.selectedUser = user.clone();
    }
    public onEditUserClicked(user: IUser): void { }
    public onCancelled(): void {
        this.selectedUser = null;
    }
    public onSaved(selectedUser: any): void {
        let user = this.users.firstOrDefault((user: any) => { return user.userName == selectedUser.userName; });
        if (user) {
            user.firstName = selectedUser.firstName;
            user.lastName = selectedUser.lastName;
        }
    }
}