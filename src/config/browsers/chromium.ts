import { BrowserConfig } from "../types";

const chromium: BrowserConfig = {

    name: "chromium",

    use: {

        browserName: "chromium",

        channel: "chrome",

        viewport: {

            width: 1920,

            height: 1080

        }

    }

};

export default chromium;