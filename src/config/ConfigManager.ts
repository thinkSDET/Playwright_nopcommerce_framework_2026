import { environments, EnvironmentName } from "../config/environmentFiles";
import { executions, ExecutionMode } from "../config/executionConfig";
import { browsers, BrowserName } from "./browsers";
import { FrameworkConfig, EnvironmentConfig, ExecutionConfig, BrowserConfig } from "./types";

export class ConfigManager {

    public static load(): FrameworkConfig {

        const environment = this.loadEnvironment();
        const execution =
            this.applyExecutionOverrides(
                this.loadExecution()
            );
        const browser = this.loadBrowser();

        return {
            environment,
            execution,
            browser
        };
    }

    private static loadEnvironment(): EnvironmentConfig {
        const environment =
            (process.env.ENV ?? "qa") as EnvironmentName;

        return environments[environment];
    }

    private static loadExecution(): ExecutionConfig {
        const execution =
            (process.env.EXECUTION ?? "local") as ExecutionMode;

        return executions[execution];
    }

    private static loadBrowser(): BrowserConfig {
        const browser =
            (process.env.BROWSER ?? "chromium") as BrowserName;

        return browsers[browser];
    }

   private static applyExecutionOverrides(
    execution: ExecutionConfig
): ExecutionConfig {

    return {
        ...execution,

        workers: process.env.WORKERS
            ? Number(process.env.WORKERS)
            : execution.workers,

        retries: process.env.RETRIES
            ? Number(process.env.RETRIES)
            : execution.retries,

        timeout: process.env.TIMEOUT
            ? Number(process.env.TIMEOUT)
            : execution.timeout,

        headless: process.env.HEADLESS
            ? process.env.HEADLESS.toLowerCase() === "true"
            : execution.headless
    };
}
}