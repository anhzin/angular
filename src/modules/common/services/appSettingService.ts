import { IAppSettingService } from "./iappSettingService";

export class AppSettingService implements IAppSettingService{
    private injector: any;
    public getInjector(): any{
        return this.injector;
    }
    public setInjector(injector: any):void{
        this.injector=injector;
    }
}