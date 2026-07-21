export interface EnvironmentConfig {
    name: string;
    baseURL: string;
}

export interface ExecutionConfig {
    headless: boolean;
    retries: number;
    workers: number;
    timeout: number;

    screenshot: "off" | "on" | "only-on-failure";

    video: "off" | "on" | "retain-on-failure";

    trace: "off" | "on" | "retain-on-failure" | "on-first-retry";
}

export interface FrameworkConfig {
    environment: EnvironmentConfig;
    execution: ExecutionConfig;
    browser: BrowserConfig;
}

export interface BrowserConfig {

    name: string;

    use: {

        browserName: "chromium" | "firefox" | "webkit";

        channel?: string;

        viewport?: {

            width: number;

            height: number;

        };

    };

}