import * as fs from 'fs';
import * as path from 'path';

type LogLevel = 'INFO' | 'ERROR' | 'DEBUG';


export function Logger(filePath: string, logData: any, level: LogLevel = 'INFO'): boolean {
    try {
        const dir = path.dirname(filePath);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
            console.log(`[Logger] Directory created: ${dir}`);
        }

        const timestamp = new Date().toISOString();
        let logEntry: string;

        if (typeof logData === 'string') {
            logEntry = `[${timestamp}] [${level}] ${logData}`;
        } else {
            try {
                logEntry = `[${timestamp}] [${level}] ${JSON.stringify(logData, null, 2)}`;
            } catch (jsonError) {
                console.error(`[Logger] Failed to stringify log data: ${jsonError}`);
                return false;
            }
        }

        fs.appendFileSync(filePath, logEntry + '\n', 'utf8');
        console.log(`[Logger] Log written to file: ${filePath}`);
        
        return true;
    } catch (error) {
        if (error instanceof Error) {
            console.error(`[Logger] Failed to write log: ${error.message}`);
        } else {
            console.error(`[Logger] An unknown error occurred`);
        }
        return false;
    }
}
