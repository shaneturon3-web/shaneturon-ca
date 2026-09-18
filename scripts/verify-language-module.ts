import assert from 'node:assert/strict';

import {
  LANGUAGE_MODULE_CONTRACT,
  PORTABLE_LOCALE_ALIASES,
  createLanguageModule,
  resolvePortableLocale,
} from '../lib/language/module-contract';

const language = createLanguageModule();

assert.equal(language.contract, 'shaneturon.language.v1');
assert.equal(language.defaultLocale, 'en');
assert.deepEqual(PORTABLE_LOCALE_ALIASES, {
  en: 'en',
  'fr-CA': 'fr',
  'es-MX': 'es',
});

assert.equal(resolvePortableLocale('fr-CA'), 'fr');
assert.equal(resolvePortableLocale('es-MX'), 'es');
assert.equal(resolvePortableLocale('fr'), 'fr');
assert.equal(resolvePortableLocale('ja'), 'en');

assert.equal(language.getSlot('brand.name', 'fr-CA'), 'SHANE TURON');
assert.equal(language.getSlot('pages.systems.hero.title', 'es-MX'), 'Arquitectura');
assert.equal(language.getSlot('brand.name', 'unsupported'), 'SHANE TURON');
assert.equal(language.getSlot('missing.slot', 'fr-CA'), '');

console.log('language module adapter: PASS');
