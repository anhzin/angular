import { Component } from "@angular/core";
import {BaseIcon} from "./baseIcon";
@Component({
    selector: 'icon-edit',
    template: `<base-icon [size]=size [cls]="'fa-pencil'" (onClicked)="onClicked.emit($event)">
    </base-icon>`
})

export class IconEdit extends BaseIcon {

}