# Language module v1

Status: first reusable module candidate

## Boundary

The website is the first implementation of `shaneturon.language.v1`. It owns
the public copy shape and the browser runtime. PsyNova and Shelf may consume an
adapter, but this module does not import or modify PsyNova core.

The contract is deliberately small:

- a default locale;
- a supported-locale list;
- a dictionary resolver;
- a dotted-path slot resolver;
- an explicit regional-locale mapping for PsyNova-compatible consumers.

## Locale mapping

| Public website | PsyNova-compatible alias |
| --- | --- |
| `en` | `en` |
| `fr` | `fr-CA` |
| `es` | `es-MX` |

The website keeps its existing `en`, `es`, and `fr` URLs and storage values.
Regional aliases are an adapter concern, not a reason to rename current public
routes or persisted preferences.

## Fallback law

1. Normalize a requested locale at the consumer boundary.
2. Resolve only supported locales.
3. Fall back to English when the locale is unknown.
4. Fall back to the English slot when a translated slot is absent.
5. Keep route, theme, plugin, and API decisions outside the language module.

## Next Shelf step

The module can be copied or packaged into Shelf after a consumer-side adapter
test proves that the regional aliases and slot fallback behave as expected.
That test should remain outside PsyNova core and should not expose private
deployment or provider credentials.

