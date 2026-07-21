export const runtime = {

    env: process.env.ENV || "qa",

    browser: process.env.BROWSER || "chromium",

    workers: Number(process.env.WORKERS ?? 1),

    headless: process.env.HEADLESS === "true"

};