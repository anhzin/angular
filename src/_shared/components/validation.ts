import { Directive, Input, AfterContentInit, ElementRef } from "@angular/core";
import { IoCNames } from "../common/enums";
import { IEventManager } from "../event/ieventManager";

@Directive({
    selector: '[validation]',
    
})
export class Validation implements AfterContentInit {
   @Input("validation") messages: Array<string>;
    private ui: ElementRef;
    constructor(ref: ElementRef) {
        this.ui = ref;
    }
    ngAfterContentInit(): void {
        let eventManager: IEventManager = window.ioc.resolve(IoCNames.IEventManager);
        let self = this;
        this.messages.forEach((message: string) => {
            eventManager.subscribe(message, (arg: any) => {
                self.onTriggered(arg);
            });
        });
    }
    private onTriggered(arg: any) {
        this.ui.nativeElement.classList.add(ValidationConsts.INVALID_STATE);
    }
}

const ValidationConsts = {
    INVALID_STATE: "validation--fail"
};