export enum IoCNames {
    IUserService = "IUserService",
    IAppSettingService = "IAppSettingService",
    IConnector = "IConnector"
}

export enum IIoCLifeCycle {
    Singleton = 1,
    Transient = 2
}

export enum ErrorMessages {
    InvalidService = "Invalid service {0}",
    InvalidLifeCycle = "Invalid life cycle"
}