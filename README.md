# Cloudflare Workers

## Setup

- Add a `.dev.vars` to each project that needs development environment variables
- Add a `rpc-secrets.json` to the root of the project to install secrets to each worker

## Workers

| Worker        | Description                                                          |
| ------------- | -------------------------------------------------------------------- |
| Open AI Proxy | Proxies requests from the app to protected the API KEY in production |