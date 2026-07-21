import { ExecutionConfig } from "../types";

const ci: ExecutionConfig = {
    headless: true,

    retries: 2,

    workers: 4,

    timeout: 30000,

    screenshot: "only-on-failure",

    video: "retain-on-failure",

    trace: "retain-on-failure"
};

export default ci;