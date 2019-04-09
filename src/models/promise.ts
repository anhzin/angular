export class PromiseFactory {
    public static create(): Promise {
        return new Promise();
    }
}

enum PromiseStatus {
    None = 0,
    Success = 1,
    Failed = 2
}

export class Promise {
    public data: any = null;
    public error: any = null;
    public onError: any = null;
    public onSuccess: any = null;
    private status: PromiseStatus = PromiseStatus.None;
    public resolve(data?: any): Promise {
        this.status = PromiseStatus.Success;
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
    }
}