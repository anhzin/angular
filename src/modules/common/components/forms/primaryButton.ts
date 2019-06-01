import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "primary-button",
    template: `<button type="button" (click)="onClicked.emit($event)" class="btn btn-primary">{{label}}</button>`
})
export class PrimaryButton {
    @Input() label: string;
    @Output() onClicked: EventEmitter<any> = new EventEmitter();
}