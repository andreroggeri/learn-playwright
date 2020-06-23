Playwright provides a single API to automate multiple browsers.

Each browser can be requested directly by importing it:

```ts
import {chrome, firefox} from 'playwright'

const chromeBrowser = chrome.launch();
const firefoxBrowser = firefox.launch();
```

It is necessary to create a new context before creating a new page (tab).

The context is used as a "session configuration" it can be used to setup permissions, mock, cookies, etc.

From the context a page can be created

```ts
const options = { viewport: { height: 768, width: 1366 } }
const context = await chromeBrowser.newContext(options); // Creates a context with a pre-defined resolution

const page = await context.newPage(); // Now we have a real page to navigate through websites

await page.goto('facebook.com') // Regular navigation to a website
```