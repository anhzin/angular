import { NgModule, ApplicationRef, Injector } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { UserRoutes } from "./userRoutes";
import { Layout } from "./layout";
import { Users } from "../src/pages/users";
import { UserPreview } from "../src/_shared/components/userPreview";
import { IAppSettingService } from "./_shared/services/iAppSettingService";
import { IoCNames } from "./_shared/common/enums";
import { HttpModule } from "@angular/http";
import { IResourceManager } from "./_shared/services/iresourceManager";
import {BaseIcon} from "../src/_shared/components/icons/baseIcon";
import {IconEdit} from "../src/_shared/components/icons/iconEdit";
import {IconPreview} from "../src/_shared/components/icons/iconPreview";
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        UserRoutes,
        HttpModule
    ],
    declarations: [Layout, Users, UserPreview, BaseIcon, IconEdit, IconPreview],
    entryComponents: [Layout]
    // bootstrap: [Layout]
})
export class UserModule {
    public appRef: ApplicationRef;
    constructor(appRef: ApplicationRef, injector: Injector) {
        let appSetting: IAppSettingService = window.ioc.resolve(IoCNames.IAppSettingService);
        appSetting.setInjector(injector);
        this.appRef = appRef;

    }

    ngDoBootstrap() {
        let resourceManage: IResourceManager = window.ioc.resolve(IoCNames.IResourceManager);
        let locales: any = ["user"];
        resourceManage.loadLocales(locales).then(() => {
            this.appRef.bootstrap(Layout);
        });

    }
}