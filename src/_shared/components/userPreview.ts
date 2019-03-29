import { Component, Input, Output, EventEmitter } from "@angular/core";
import { BasePage } from "../../models/basePage";
import { IUser } from "../../models/user";

@Component({
    selector: "user-preview",
    templateUrl: "src/_shared/components/userPreview.html"
})
export class UserPreview extends BasePage {
    @Input() user: IUser;
    @Output() onCancelled: EventEmitter<any> = new EventEmitter();
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    constructor() {
        super();
    }

    public onCancelClicked(): void {
        this.onCancelled.emit();
    }

    public onSaveClicked(): void {
        this.onSaved.emit(this.user);
    }
}