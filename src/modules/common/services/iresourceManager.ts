import { LanguageCodes } from "../models/enums";
import { Promise } from "../models/promise";
export interface IResourceManager {
    getLocales(): Array<any>;
    changeLanguageCode(languageCode: LanguageCodes): void;
    loadLocales(localeNames: Array<any>): Promise;
    resolve(key: string): string;
}