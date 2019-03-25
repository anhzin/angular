import { Component } from "@angular/core";
import { IUser } from "../models/user";
import { UserService } from "../_shared/userService";
@Component({
    templateUrl: 'src/pages/users.html'
})
export class Users {
    users: IUser[];
    constructor(userService: UserService) {
        this.users = userService.getUsers();
    }

    public onAddNewUserClicked(): void { }
    public onPreviewUserInformationClicked(user: IUser): void { }
    public onEditUserClicked(user: IUser): void { }

}