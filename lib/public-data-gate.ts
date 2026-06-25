export function isPublicDbDisabled() {
  return process.env.DISABLE_PUBLIC_DB === 'true';
}
