import { NgModule, ApplicationRef, Injector } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { UserRoutes } from "./userRoutes";
import { Layout } from "./layout";
import { Users } from "../src/pages/users";
import { UserPreview } from "../src/_shared/components/userPreview";
import { IAppSettingService } from "@app/common";
import { IoCNames } from "@app/common";
import { HttpModule } from "@angular/http";
import { IResourceManager } from "@app/common";
import { AddNewUser } from "./pages/addNewUser";
import { UserGroups } from "./pages/userGroups";
import { CommonModule } from "@angular/common";
import { AppCommonModule } from "./modules/common/appCommon";
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        UserRoutes,
        HttpModule,
        CommonModule,
        AppCommonModule
    ],
    declarations: [
        Layout, Users, UserPreview, AddNewUser, UserGroups
    ],
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
        let locales: any = ["user", "common", "addNewUser", "userGroups"];
        resourceManage.loadLocales(locales).then(() => {
            this.appRef.bootstrap(Layout);
        });

    }
}