
/// <preference path="extentions.d.ts">
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { UserModule } from "./userModule";
import { IoCFactory } from "../src/_shared/ioc/iocFactory";
import registrations from "../src/_shared/config/ioc";
let iocContainer: IIoCContainer = IoCFactory.create();
iocContainer.import(registrations);
window.ioc = iocContainer;

platformBrowserDynamic().bootstrapModule(UserModule);