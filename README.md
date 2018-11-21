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
  - Give each request and ID
  - Log response time
  - Do not log request and response body
  - Filter sensitive information
    - Like JWT, API key and other secrets
  - Log level on different requests
    - 2xx request in "info" level, 4xx and 5xx in "error" level
