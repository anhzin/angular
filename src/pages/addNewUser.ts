import { Component } from "@angular/core";
import { BasePage } from "@app/common";
import { AddNewUserModel } from "./addNewUserModel";
import { Router } from "@angular/router";
import { IUserService } from "../_shared/services/iuserService";
import { IoCNames } from "@app/common";

@Component({
    templateUrl: "src/pages/addNewUser.html"
})
export class AddNewUser extends BasePage {
    public model: AddNewUserModel;
    private router: Router;
    constructor(router: Router) {
        super();
        this.router = router;
        this.model = new AddNewUserModel();
    }

    public onSaveClicked(): void {

        if (!this.model.isValid()) {
            console.log("invalid");
            return;
        }

        let userService: IUserService = window.ioc.resolve(IoCNames.IUserService);
        userService.createUser(this.model).then(() => {
            this.router.navigate(["users"]);
        });
    }

    public onCancelClicked() {
        this.router.navigate(["users"]);
    }
}