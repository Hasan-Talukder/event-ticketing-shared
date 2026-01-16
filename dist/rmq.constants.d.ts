/** @format */
export declare const RMQ_SERVICE: {
    readonly AUTH: "AUTH_SERVICE";
};
export declare const RMQ_QUEUE: {
    readonly AUTH: "auth_queue";
};
export declare const RMQ_PATTERN: {
    readonly REGISTER: {
        readonly cmd: "auth.register";
    };
    readonly LOGIN: {
        readonly cmd: "auth.login";
    };
    readonly VALIDATE_TOKEN: {
        readonly cmd: "auth.validate_token";
    };
};
