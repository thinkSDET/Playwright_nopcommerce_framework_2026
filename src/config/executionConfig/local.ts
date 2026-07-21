import { ExecutionConfig } from "../types";

const local: ExecutionConfig = {
    headless: false,

    retries: 0,

    workers: 1,

    timeout: 30000,

    screenshot: "only-on-failure",

    video: "off",

    trace: "on-first-retry"
};

export default local;