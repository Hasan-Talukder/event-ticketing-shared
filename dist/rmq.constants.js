"use strict";
/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RMQ_PATTERN = exports.RMQ_QUEUE = exports.RMQ_SERVICE = void 0;
exports.RMQ_SERVICE = { AUTH: "AUTH_SERVICE" };
exports.RMQ_QUEUE = { AUTH: "auth_queue" };
exports.RMQ_PATTERN = {
    REGISTER: { cmd: "auth.register" },
    LOGIN: { cmd: "auth.login" },
    VALIDATE_TOKEN: { cmd: "auth.validate_token" },
};
