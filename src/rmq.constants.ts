/** @format */

export const RMQ_SERVICE = {
  AUTH: "AUTH_SERVICE",
} as const;

export const RMQ_QUEUE = {
  AUTH: "auth_queue",
} as const;

export const RMQ_PATTERN = {
  REGISTER: { cmd: "auth.register" },
  LOGIN: { cmd: "auth.login" },
  VALIDATE_TOKEN: { cmd: "auth.validate_token" },
} as const;
