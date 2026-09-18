/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/client" />

// These globals are referenced by optional PWA build-time declarations but are
// not needed by the browser bundle itself.
type Args = unknown[]

declare namespace sharp {
  interface ResizeOptions { [key: string]: unknown }
}

interface ExtendableEvent extends Event {
  waitUntil(promise: Promise<unknown>): void
}
