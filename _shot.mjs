import puppeteer from "puppeteer-core";

const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const URL = process.env.SHOT_URL || "http://localhost:3112/";

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--no-sandbox", "--disable-gpu", "--hide-scrollbars"],
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
await page.goto(URL, { waitUntil: "networkidle0", timeout: 60000 });
await new Promise((r) => setTimeout(r, 2000));

// List sections with their positions + text snippet
const sections = await page.evaluate(() => {
  return Array.from(document.querySelectorAll("section, footer")).map((el, i) => ({
    i,
    top: Math.round(el.getBoundingClientRect().top + window.scrollY),
    h: Math.round(el.getBoundingClientRect().height),
    text: (el.textContent || "").replace(/\s+/g, " ").trim().slice(0, 40),
  }));
});
console.log(JSON.stringify(sections, null, 1));

async function shotAt(y, name) {
  await page.evaluate((yy) => window.scrollTo(0, yy), y);
  await new Promise((r) => setTimeout(r, 1200)); // let lenis settle + reveals fire
  await page.screenshot({ path: `_sec_${name}.png` });
  console.log("shot", name, "at y", y);
}

// Screenshot the two quote sections (and skills/projects for reference)
for (const s of sections) {
  if (/^I PLAN/i.test(s.text)) await shotAt(s.top + 20, "quote1");
  if (/^DEVELOPERS/i.test(s.text)) await shotAt(s.top + 20, "quote2");
  if (/CAPABILITIES/i.test(s.text)) await shotAt(s.top + 20, "skills");
  if (/PROJECTS Selected/i.test(s.text)) await shotAt(s.top + 20, "projects");
}

await browser.close();
console.log("done");
