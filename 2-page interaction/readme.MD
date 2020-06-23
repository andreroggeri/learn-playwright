Element interaction is made like other browser automation frameworks.

Locate an element and interact with it.

Playwright does waiting automagically

Its possible to wire all interaction through the framework, avoiding holding element references

```ts
import {chrome} from 'playwright'

// Assuming we already have a page here..
const page;

// Write on a input
await page.type('selector', 'content');

// Clicks something
await page.click('selector')

// Get some element content
const value = await page.textContent('selector');
```

Or the traditional way

```ts
import {chrome} from 'playwright'

// Assuming we already have a page here..
const page;

// Get the element
const el = await page.$('selector');

// Type
await el.type('content');

// Clicks
await el.click();

// Get content
const value = await el.textContent();
```