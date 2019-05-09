export enum IoCNames {
    IUserService = "IUserService",
    IAppSettingService = "IAppSettingService",
    IConnector = "IConnector",
    IResourceManager = "IResourceManager",
    IEventManager = "IEventManager"
}

export enum IIoCLifeCycle {
    Singleton = 1,
    Transient = 2
}

export enum ErrorMessages {
    InvalidService = "Invalid service {0}",
    InvalidLifeCycle = "Invalid life cycle"
}

export enum LanguageCodes {
    EN = "en",
    VN = "vn"
}

export enum IconSize {
    Small = 1,
    Normal = 2,
    Large = 3
}