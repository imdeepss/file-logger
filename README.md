<p align="center">
  <a href="https://github.com/imdeepss/file-logger">
    <h2>File Logger</h2>
  </a>
</p>

<h3 align="center">File Logger</h3>

<p align="center">
  A TypeScript-based file logger that provides timestamped log entries with various log levels. Suitable for projects requiring robust file-based logging.
  <br>
  <a href="https://github.com/imdeepss/file-logger"><strong>Explore the docs »</strong></a>
  <br>
  <br>
  <a href="https://github.com/imdeepss/file-logger/issues/new?assignees=-&labels=bug&template=bug_report.yml">Report bug</a>
  ·
  <a href="https://github.com/imdeepss/file-logger/issues/new?assignees=&labels=feature&template=feature_request.yml">Request feature</a>
  ·
  <a href="https://github.com/imdeepss/file-logger#readme">Readme</a>
</p>

## File Logger

The `file-logger` package is a robust and customizable logging utility for Node.js applications, built with TypeScript. It supports multiple log levels, easy file management, and configurable formatting options.

## Table of Contents

- [Quick Start](#quick-start)
- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [Community](#community)
- [Versioning](#versioning)
- [Acknowledgments](#acknowledgments)
- [License](#license)

## Quick Start

Get started with `file-logger` in just a few steps:

- Install via npm:

  ```bash
  npm install file-logger

Or install with yarn:
yarn add file-logger
Import and start logging:
import { Logger } from 'file-logger';

const logger = new Logger('app.log');
logger.info('This is an informational message');
logger.error('This is an error message');

For more detailed instructions, please visit the documentation.

Installation
You can install file-logger using npm:
npm install file-logger

Or with yarn:

yarn add file-logger
Usage
Here's a basic example of how to use file-logger in your project:

import { Logger } from 'file-logger';

const logger = new Logger('app.log', {
  level: 'info',
  format: 'YYYY-MM-DD HH:mm:ss',
});

logger.info('Application started');
logger.warn('This is a warning');
logger.error('An error occurred');



For more advanced usage and configuration options, refer to the API Reference.

API Reference
Logger(fileName: string, options?: LoggerOptions): Creates a new logger instance.
fileName: The name of the log file.
options: Configuration options for the logger.
logger.info(message: string): Logs an informational message.
logger.warn(message: string): Logs a warning message.
logger.error(message: string): Logs an error message.
logger.debug(message: string): Logs a debug message.
For a full list of methods and options, please refer to the API documentation.

Contributing
Contributions are welcome! Please read the contributing guidelines for more information on how to contribute.

Community
Join the community and get updates:

GitHub Issues: Report issues or suggest features.
Twitter: Follow @imdeepss for updates.
Versioning
This project adheres to Semantic Versioning. For a list of available versions, see the releases on GitHub.

Acknowledgments
Special thanks to all contributors and supporters of this project. Your feedback and contributions make file-logger better every day.

License
This project is licensed under the ISC License.



This version should be easier to read and follows a clean, consistent format. Adjust the links and content as needed to match your actual project details.
