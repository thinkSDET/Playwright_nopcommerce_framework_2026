import local from "./local";
import ci from "./ci";

export const executions = {
    local,
    ci
};

export type ExecutionMode = keyof typeof executions;