const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("https://shubhomkanchan.vercel.app", {
    waitUntil: "load",
  });

  await new Promise(resolve => setTimeout(resolve, 5000));

  await page.screenshot({
    path: "portfolio-full.png",
    fullPage: true,
  });

  await browser.close();

  console.log("PNG created successfully");
})();