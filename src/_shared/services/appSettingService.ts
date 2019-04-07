import { IAppSettingService } from "./iAppSettingService";

export class AppSettingService implements IAppSettingService {
    public injectors: any;
    public setInjector(injectors: any): void {
        this.injectors = injectors;
    }

    public getInjector(): any {
        return this.injectors;
    }
}