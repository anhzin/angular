import { IResourceManager } from "../_shared/services/iresourceManager";
import { IoCNames } from "./enums";

export class BasePage {
    public i18n: any = {};
    public i18nHelper: IResourceManager;
    constructor() {
        let resourceManager: IResourceManager = window.ioc.resolve(IoCNames.IResourceManager);
        this.i18n = resourceManager.getLocales();
        this.i18nHelper = resourceManager;
    }
}