import { IResourceManager } from "../_shared/services/iresourceManager";
import { IoCNames } from "../_shared/common/enums";

export class BasePage {
    public i18n: any = {};
    constructor(){        
        let resourceManager: IResourceManager = window.ioc.resolve(IoCNames.IResourceManager);
        this.i18n = resourceManager.getLocales();
    }
}