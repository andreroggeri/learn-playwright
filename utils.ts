import * as fs from 'fs';
import { chromium } from 'playwright';

export function getCredentials(): { email: string, password: string } {
    return JSON.parse(fs.readFileSync('./credentials.json', 'utf8'));
}

export async function createBrowser() {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext({});
    return { page: await context.newPage(), browser };
}