# express-pino-prototype
POC on integrating logging framework Pino into expressjs

## Features

### Configuration
- Log level
  - Set how verbose should the logger be
- Log switch
  - Turn on or turn off the log

### Request log
- Log incomming requests and response
  - Give each request an ID
  - Log response time
  - Do not log request and response body
  - Filter sensitive information
    - Like JWT, API key and other secrets
  - Log level on different requests
    - 2xx request in "info" level, 4xx and 5xx in "error" level

### Log levels

- TRACE: Every business logic action
- DEBUG: For debug purpose
- INFO: Every web request with 2xx, 3xx status, also action of important services
- WARN: Every web request with 4xx status
- ERROR: Every web request with 5xx status
- FATAL: Unknown execution flow, or server crashing error
