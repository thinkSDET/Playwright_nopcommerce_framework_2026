import qa from "./qa";
import stage from "./stage";
import preprod from "./preprod";

export const environments = {
    qa,
    stage,
    preprod
};

export type EnvironmentName = keyof typeof environments;