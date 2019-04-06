export class PromiseFactory {
    public static create(): Promise {
        return new Promise();
    }
}

export class Promise {
    public data: any = null;
    public error: any = null;
    public onError: any = null;
    public onSuccess: any = null;

    public resolve(data: any): Promise {
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
        if (this.onError && this.error) {
            this.onError(this.error);
        }

        if (this.onSuccess && this.data) {
            this.onSuccess(this.data);
        }
    }
}