import { chromium } from "playwright";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const html = path.join(here, "plan-pdf.html");
const out = path.join(here, "..", "public", "downloads", "7-day-hawaii-keto-plan.pdf");

const browser = await chromium.launch({ channel: "msedge" });
const page = await browser.newPage();
await page.goto(pathToFileURL(html).href, { waitUntil: "networkidle", timeout: 60000 });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(800);
await page.pdf({
  path: out,
  printBackground: true,
  preferCSSPageSize: true,
  tagged: true,
  displayHeaderFooter: false,
});
await browser.close();
console.log("wrote", out);
