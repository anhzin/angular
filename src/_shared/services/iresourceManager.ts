import {Promise} from "../../models/promise";

export interface IResourceManager {
    getLocales(): any;
    load(localeNames: Array<any>): Promise;
    setLanguageCode(languageCode: string):void;
}