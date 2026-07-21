import { environments, EnvironmentName } from "../config/environmentFiles";
import { executions, ExecutionMode } from "../config/executionConfig";
import { FrameworkConfig } from "./types";

export class ConfigManager {

    public static load(): FrameworkConfig {

        const environment =
            (process.env.ENV ?? "qa") as EnvironmentName;

        const execution =
            (process.env.EXECUTION ?? "local") as ExecutionMode;

        return {

            environment: environments[environment],

            execution: executions[execution]

        };

    }

}