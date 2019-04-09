import { Component, Input, EventEmitter, Output } from "@angular/core";
import { BaseIcon } from "./baseIcon";
import { IconSize } from "../../common/enums";

@Component({
    selector: "icon-edit",
    template: `<base-icon [size]=size [title]="title" [cls]="'fa-pencil'" (onClicked)="onClicked.emit($event)"></base-icon>`
})
export class IconEdit extends BaseIcon {
}