import * as fs from 'fs';

export function getCredentials(): { email: string, password: string } {
    return JSON.parse(fs.readFileSync('./credentials.json', 'utf8'));
}