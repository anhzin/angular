import { Component } from "@angular/core";
import { BasePage } from "../models/basePage";
import { IUser } from "../models/user";
import { IUserService } from "../_shared/services/iuserService";
import { IoCNames, LanguageCodes, IconSize } from "../_shared/common/enums";
import { IResourceManager } from "../_shared/services/iresourceManager";
import { Router } from "@angular/router";
@Component({
    templateUrl: 'src/pages/users.html'
})
export class Users extends BasePage {
    public ENUMS: any = {
        LanguageCodes: LanguageCodes,
        IconSize: IconSize
    }
    public users: Array<IUser> = [];
    public selectedUser: IUser;
    private router: Router;
    constructor(router: Router) {
        super();
        let self = this;
        this.router = router;
        let userService: IUserService = window.ioc.resolve(IoCNames.IUserService);
        userService.getUsers().then((users: Array<IUser>) => {
            self.users = users;
        });
    }

    public onChangeLanguageCode(languageCode: LanguageCodes): void {
        let resourceManager: IResourceManager = window.ioc.resolve(IoCNames.IResourceManager);
        resourceManager.changeLanguageCode(languageCode);
    }
    public onAddNewUserClicked(): void {
        this.router.navigate(["addNewUser"]);
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