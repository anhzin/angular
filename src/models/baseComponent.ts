import { IResourceManager } from "../_shared/services/iresourceManager";
import { IoCNames } from "../_shared/common/enums";
import guidHelper from "../_shared/helpers/guidHelper";

export class BaseComponent {
    public i18n: any = {};
    public i18nHelper: IResourceManager;
    public id: string;
    constructor() {
        let resourceManager = window.ioc.resolve(IoCNames.IResourceManager);
        this.i18n = resourceManager.getLocales();
        this.i18nHelper = resourceManager;
        this.id = String.format("ctrl_{0}", guidHelper.newGuid());
    }
}