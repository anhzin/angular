import { ClassConst, IoCNames, ValidationStatus } from "../../../models/enums";
import { IEventManager } from "../../event/ieventManager";

export function required(errorKey: string): any {
    return function (target: any, propertyName: string) {
        let privateProperty = String.format("__{0}", propertyName);
        let metadata = window.Reflect.getMetadata(ClassConst.Metadata, target.constructor) || {};
        metadata.propMapper = metadata.propMapper || {};
        metadata.propMapper[privateProperty] = propertyName;
        metadata.validationResult = metadata.validationResult || [];
        window.Reflect.defineMetadata(ClassConst.Metadata, metadata, target.constructor);

        let setFunc = function (val: string) {
            target[privateProperty] = val;
            let eventManager: IEventManager = window.ioc.resolve(IoCNames.IEventManager);
            if (!val || val.trim() == "") {
                eventManager.publish(errorKey);
                metadata.validationResult.push(errorKey);
            } else {
                eventManager.publish(errorKey, ValidationStatus.Success);
                metadata.validationResult.remove(errorKey);
            }

            window.Reflect.defineMetadata(ClassConst.Metadata, metadata, target.constructor);
        }

        let getFunc = function () {
            return target[privateProperty];
        }

        Object.defineProperty(target, propertyName, {
            set: setFunc,
            get: getFunc
        });
    }
}