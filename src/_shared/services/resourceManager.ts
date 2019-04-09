import { LanguageCodes, IoCNames } from "../common/enums";
import { IResourceManager } from "./iresourceManager";
import { PromiseFactory } from "../../models/promise";
import { Promise } from "../../models/promise";
import { IConnector } from "../connector/iConnector";

export class ResourceManager implements IResourceManager {
    private locales: any = {};
    private localeNames: Array<string> = [];
    private languageCode: string = LanguageCodes.EN;
    public getLocales(): any {
        return this.locales;
    }

    public load(locales: Array<any>): Promise {
        this.localeNames = locales;
        locales = locales || [];
        let promise = PromiseFactory.create();
        let self = this;
        locales.forEach(name => {
            self.getLocaleByName(name).then(() => {
                promise.resolve();
            });
        });
        return promise;
    }

    private getLocaleByName(name: string): Promise {
        let promise = PromiseFactory.create();
        let iconnector: IConnector = window.ioc.resolve(IoCNames.IConnector);
        let url = String.format("/resources/locales/{0}.{1}.json", name, this.languageCode);
        iconnector.get(url).then((jsonData: any) => {
            this.locales[name] = jsonData;
            promise.resolve();
        });
        return promise;
    }

    public setLanguageCode(languageCode: string): void {
        this.languageCode = languageCode;
    }
}