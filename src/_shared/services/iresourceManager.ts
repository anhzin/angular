import { LanguageCodes } from "../common/enums";
import {Promise} from "../../models/promise";
export interface IResourceManager {
    getLocales(): Array<any>;
    changeLanguageCode(languageCode: LanguageCodes): void;
    loadLocales(localeNames: Array<any>): Promise;

}