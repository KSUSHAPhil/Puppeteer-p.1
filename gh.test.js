const { expect } = require("@jest/globals");
const exp = require("constants");

let page;

beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
    beforeEach(async () => {
        await page.goto("https://github.com/team");
      });

  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub for teams · Build like the best teams on the planet · GitHub');
  }, 7000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  }, 7000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain('Get started with Team');
  },7000);
});

describe('my tests', () => {
    test('GitHub Actions Cheat Sheet', async() => {
        await page.goto('https://resources.github.com/actions/github-actions-cheat/');
        const title = await page.title();
        expect(title).toContain('GitHub Actions Cheat Sheet - GitHub Resources');
    }, 7000);

    test('pricing', async() => {
        await page.goto('https://github.com/pricing');
        const title = await page.title();
        expect(title).toContain('Pricing · Plans for every developer · GitHub');
    }, 7000);

    test('about', async() => {
        await page.goto('https://github.com/about');
        const title = await page.title();
        expect(title).toContain('About');
    },7000);
});