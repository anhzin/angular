import { Http } from "@angular/http";
import "rxjs/Rx";
import { Promise, PromiseFactory } from "../../models/promise";
import { IConnector } from "../connector/iConnector";
export class ConnectorJson implements IConnector {
    public get(url: string): Promise {
        let promise = PromiseFactory.create();
        let http: Http = window.ioc.resolve(Http);
        http.get(url).map(response => response.json())
            .subscribe((data: any) => {
                promise.resolve(data);
            }, (error: any) => {
                promise.reject(error);
            });
        return promise;
    }

    public post(url: string, model: any): Promise {
        let promise = PromiseFactory.create();
        let http: Http = window.ioc.resolve(Http);
        http.post(url, model.ToJson()).map(response => response.json())
            .subscribe((data: any) => {
                promise.resolve(data);
            }, (error: any) => {
                promise.reject(error);
            });
        return promise;
    }
}