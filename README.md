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

## Overview

`file-logger` is a TypeScript-based logging utility for Node.js applications. It writes log entries to a specified file with timestamped entries and supports multiple log levels including INFO, ERROR, and DEBUG.

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

Follow these steps to get started with `file-logger`:

### Installation

To use the logger, you need to have Node.js installed. You can then add this package to your project:

```bash
npm install file-logger
```

# or

```bash
yarn add file-logger
```

Usage
Here's a basic example of how to use the logger in your project:

```bash
import { Logger } from 'file-logger';


Logger('logs/app.log', 'Application started', 'INFO');

// OR

const response = Logger('logs/app.log', { error: 'Something went wrong' }, 'ERROR');
console.log(response) //true

```

API Reference
Logger Function

<pre>
Logger(filePath: string, logData: any, level: LogLevel = 'INFO'): boolean
</pre>

filePath: string - The path to the log file.
logData: any - The data to log (can be a string or an object).
level: LogLevel - The log level. Defaults to 'INFO'. Other values can be 'ERROR' or 'DEBUG'.
Return Value
boolean - Returns true if the log was written successfully, false otherwise.
Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create a new branch (git checkout -b feature-name).
Make your changes.
Commit your changes (git commit -m 'Add new feature').
Push to the branch (git push origin feature-name).
Open a pull request.
For detailed instructions, refer to the contributing guidelines in the repository.

Community
Join the community and stay updated:

GitHub Issues: Report issues or suggest features.
Twitter: Follow @imdeepss for updates.
Versioning
This project adheres to Semantic Versioning. For a list of available versions, see the releases on GitHub.

Acknowledgments
Special thanks to all contributors and supporters of this project. Your feedback and contributions make file-logger better every day.

License
This project is licensed under the ISC License.

<pre>

This `README.md` provides a comprehensive guide on using your logger function, including installation, usage, and API reference, while keeping the information clear and organized.

</pre>
