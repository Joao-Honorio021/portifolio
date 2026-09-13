function optionalHttpUrl(value: string | undefined): string | undefined {
  if (!value?.trim()) return undefined;
  try {
    const url = new URL(value.trim());
    if (
      !["https:", "http:"].includes(url.protocol) ||
      url.username ||
      url.password
    )
      return undefined;
    return url.toString().replace(/\/$/, "");
  } catch {
    return undefined;
  }
}
const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim();
export const site = {
  url: optionalHttpUrl(process.env.NEXT_PUBLIC_SITE_URL),
  email: email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? email : undefined,
  github: optionalHttpUrl(process.env.NEXT_PUBLIC_GITHUB_URL),
  linkedin: optionalHttpUrl(process.env.NEXT_PUBLIC_LINKEDIN_URL),
};
