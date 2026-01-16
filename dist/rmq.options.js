"use strict";
/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
exports.rmqServerOptions = rmqServerOptions;
const microservices_1 = require("@nestjs/microservices");
function rmqServerOptions(url, queue) {
    return {
        transport: microservices_1.Transport.RMQ,
        options: {
            urls: [url],
            queue,
            queueOptions: { durable: true },
            noAck: false,
        },
    };
}
