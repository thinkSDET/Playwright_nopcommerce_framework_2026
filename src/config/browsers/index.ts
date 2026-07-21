import chromium from "./chromium";
import firefox from "./firefox";
import webkit from "./webkit";

export const browsers = {

    chromium,

    firefox,

    webkit

};

export type BrowserName = keyof typeof browsers;