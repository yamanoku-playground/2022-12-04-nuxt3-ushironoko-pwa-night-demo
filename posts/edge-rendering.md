---
title: "Rendering on CDN Edge Workers"
publishedAt: "2022-11-16"
---

Traditionally, server-side and universal rendering was only possible using Node.js. Nuxt 3 takes it to another level by directly rendering code in CDN edge workers, reducing latency and costs.
Nitro is the new server engine that powers Nuxt 3. It offers cross-platform support for Node.js, Deno, Workers, and more. Nitro's design is platform-agnostic and allows rendering a Nuxt application at the edge, closer to your users, allowing replication and further optimizations.