import { ClassConst } from "../_shared/common/enums";
export class BaseModel {
    public isValid(): boolean {
        let metadata = window.Reflect.getMetadata(ClassConst.Metadata, this.constructor);
        return !metadata.validationResult || metadata.validationResult.isEmpty();
    }

    public ToJson(): any {
        let result: any = {};
        let metadata = window.Reflect.getMetadata(ClassConst.Metadata, this.constructor);
        for (let p in this) {
            if (metadata.propMapper.hasOwnProperty(p)) {
                let value = this[p];
                result[metadata.propMapper[p]] = value;
                continue;
            }

            if (!this.hasOwnProperty(p)) {
                continue;
            }

            result[p] = this[p];
        }
        return result;
    }
}