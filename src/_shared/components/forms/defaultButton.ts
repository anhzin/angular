import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector:'default-button',
    template:` <button type="button" class="btn btn-default" (click)="onClicked.emit($event)">{{label}}</button>`

})
export class DefaultButton{
    @Input() label: string;
    @Output() onClicked: EventEmitter<any> = new EventEmitter();
}