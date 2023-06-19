import puppeteer from "puppeteer";
import { getRandomUserAgent } from "./utils/get-random-useragent.js";

(async () => {

  // Fill with username
  const username = 'elonmusk';

  // Twitter page Url
  const url = `https://twitter.com/${username}`;

  const randomWidth = 1500 + Math.round(Math.random() * 100);
  const randomHeight = 1200 + Math.round(Math.random() * 100);

  // Launch the browser
  const browser = await puppeteer.launch({headless: 'new'});

  // Create a fresh page
  const page = await browser.newPage();

  // Set viewport with random w&h
  await page.setViewport({
    width: randomWidth,
    height: randomHeight,
    deviceScaleFactor: 1,
    hasTouch: false,
    isLandscape: false,
    isMobile: false,
  });

  // Comment to disable
  await page.setUserAgent(getRandomUserAgent());

  // Go to twitter user profil page
  await page.goto(url);

  // Wait for the description to be loaded
  await page.waitForSelector('[data-testid="UserJoinDate"]');

  const getData = await page.evaluate((username) => {

    const desc = document.querySelector('[data-testid="UserDescription"]');
    const date = document.querySelector('[data-testid="UserJoinDate"]');
    const following = document.querySelector(`a[href="/${username}/following"]`);
    const followers = document.querySelector(`a[href="/${username}/followers"]`)
    const website = document.querySelector('[data-testid="UserUrl"]');

    return { 
      description: desc === null ? "" : desc.textContent, 
      joinDate: date === null ? "" : date.textContent,
      website: website === null ? "" : website.textContent,
      following: following === null ? "" : following.textContent,
      followers: followers === null ? "" : followers.textContent
    };

  }, username);

  console.log(getData)

  // Close browser
  await browser.close();
})();
