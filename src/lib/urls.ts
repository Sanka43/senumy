/** True if href points to a file that should trigger direct download/install (same-window). */
export function isDirectDownloadUrl(href: string): boolean {
  const path = href.split('?')[0].toLowerCase()
  return path.endsWith('.mobileconfig') || path.endsWith('.ipa') || path.endsWith('.tipa')
}
