import guidHelper from "../../../_shared/helpers/guidHelper";

export class PromiseFactory {
    public static create(): Promise {
        return new Promise();
    }
}

enum PromiseStatus {
    None = 0,
    Success = 1,
    Failed = 2,
    Subscribe = 3
}

export class Promise {
    private data: any = null;
    private error: any = null;
    private subscribeCallBack: any;
    private onError: any = null;
    private onSuccess: any = null;
    private onSubscribe: any = null;
    private status: PromiseStatus = PromiseStatus.None;
    private queue: Array<string> = [];
    private id: string = guidHelper.newGuid();


    public resolveAll(def: Promise): Promise {
        let self = this;
        this.queue.push(def.id);
        console.log(this.queue);
        def.subscribe((pro: Promise) => {
            self.onPromiseCompleted(pro);
        }, false);
        return this;
    }

    private onPromiseCompleted(pro: Promise): Promise {
        this.queue = this.queue.remove(pro.id);
        console.log("onPromiseCompleted");
        if (this.queue.isEmpty()) {
            this.status = PromiseStatus.Success;
            this.processCallback();
        }
        return this;
    }

    public subscribe(subscribeCallBack: any, isDataOnly: boolean = true): Promise {
        this.status = PromiseStatus.Subscribe;
        this.subscribeCallBack = subscribeCallBack;
        if (isDataOnly) {
            this.subscribeCallBack = (pro: Promise) => {
                subscribeCallBack(pro.data);
            }
        }
        return this;
    }
    public resolve(data?: any): Promise {
        this.status = this.status != PromiseStatus.Subscribe ? PromiseStatus.Success : this.status;
        this.data = data;
        this.processCallback();
        return this;
    }

    public then(callback: any): Promise {
        this.onSuccess = callback;
        this.processCallback();
        return this;
    }


    public reject(error: any): Promise {
        this.status = PromiseStatus.Failed;
        this.error = error;
        this.processCallback();
        return this;
    }


    public catchError(callbackError: any): Promise {
        this.onError = callbackError;
        this.processCallback();
        return this;
    }

    private processCallback() {
        if (this.onError && this.status == PromiseStatus.Failed) {
            this.onError(this.error);
        }

        if (this.onSuccess && this.status == PromiseStatus.Success) {
            this.onSuccess(this.data);
        }

        if (this.subscribeCallBack && this.status == PromiseStatus.Subscribe) {
            this.subscribeCallBack(this);
        }
    }
}