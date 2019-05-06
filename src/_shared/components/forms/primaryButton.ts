import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'primary-button',
    template: ` <button type="button" class="btn btn-primary" (click)="onClicked.emit($event)">{{label}}</button>`

})
export class PrimaryButton {
    @Input() label: string;
    @Output() onClicked: EventEmitter<any> = new EventEmitter();


}