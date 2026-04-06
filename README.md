# Structured UI Renderer

This project is a refactored implementation of a structured UI renderer, focused on handling inconsistent and partially defined data in a scalable and maintainable way.

## Features

- Data normalization layer for handling inconsistent payloads
- Type-safe section modeling using TypeScript
- Extensible rendering system (type → component)
- Graceful handling of unknown or invalid data
- Legacy compatibility support.

## How to run

```bash
pnpm install
pnpm run dev
```

## About the challenge

This solution focuses on balancing simplicity, resilience, and extensibility within a limited time frame.

For detailed decisions and trade-offs, see [SUBMISSION.md](./SUBMISSION.md).
