# Cloudflare deployment log

## 2026-09-18 — first OpenNext preview

- Worker: `shaneturon-website-preview`
- Preview URL: https://shaneturon-website-preview.shaneturon3.workers.dev
- Verified route: `/writing`
- Version ID: `502d9c5f-7c45-4ce0-85d3-f212ea16b617`
- Build: Next.js `14.2.35` with `@opennextjs/cloudflare` `1.15.0`
- Runtime: Cloudflare Workers preview verified in browser
- Production Worker: `corporate-identity`
- Production domain: `shaneturon.ca/*`
- Production status: unchanged

The preview target is intentionally separate from `corporate-identity`. The
production Worker will not be replaced until the preview is reviewed and the
existing R2/service bindings are explicitly reconciled.

## 2026-09-18 — writing surface cleanup

- Change: replaced empty Blogger label cards and internal editorial dialogue
  with two verified direct publication links.
- Preview verification: `https://shaneturon-website-preview.shaneturon3.workers.dev/writing`
- Production Worker: `corporate-identity`
- Production URL: `https://shaneturon.ca/writing`
- Version ID: `ec8bb453-241c-4a8d-8d98-8c0fc728f922`
- Verified public Blogger targets returned HTTP 200.
