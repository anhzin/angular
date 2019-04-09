import { LanguageCodes, IoCNames } from "../common/enums";
import { IResourceManager } from "./iresourceManager";
import { Promise, PromiseFactory } from "../../models/promise";
import { IConnector } from "../connector/iConnector";
export class ResourceManager implements IResourceManager {
    public locales: any = {};
    public languageCode: LanguageCodes = LanguageCodes.EN;
    public getLocales(): Array<any> {
        return this.locales;
    }

    public changeLanguageCode(languageCode: LanguageCodes): void {
        this.languageCode = languageCode;
    }

    public loadLocales(localeNames: Array<any>): Promise {
        localeNames = localeNames || [];
        let promise = PromiseFactory.create();
        let self = this;
        localeNames.forEach((name: string) => {
            self.getLocaleByName(name).then(() => {
                promise.resolve();
            });
        });
        return promise;
    }

    private getLocaleByName(name: string): Promise {
        let self = this;
        let url = String.format("/resources/locales/{0}.{1}.json", name, this.languageCode);
        let promise = PromiseFactory.create();
        let iConnector: IConnector = window.ioc.resolve(IoCNames.IConnector);
        iConnector.get(url).then((jsonData: any) => {
            self.locales[name] = jsonData;
            promise.resolve();
        });
        return promise;
    }
}