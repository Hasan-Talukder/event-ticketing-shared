/** @format */

import { RmqOptions, Transport } from "@nestjs/microservices";

export function rmqServerOptions(url: string, queue: string): RmqOptions {
  return {
    transport: Transport.RMQ,
    options: {
      urls: [url],
      queue,
      queueOptions: { durable: true },
      noAck: false,
    },
  };
}
