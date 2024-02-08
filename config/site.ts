export type SiteConfig = typeof siteConfig

export const siteConfig = {
  website: "Baldurs.build",
  name: "Baldurs Build",
  description: "Explore meta builds for the game Baldurs Gate 3.",
  mainNav: [
    {
      title: "Meta builds",
      href: "/",
      active: true,
    },
    {
      title: "My builds",
      href: "/my-builds",
      active: false,
    },
  ],
  mainFooter: [
    {
      title: "Contact",
      href: "/contact",
    },
    {
      title: "Privacy Policy",
      href: "/privacy-policy",
    },
  ],
  links: {
    twitter: "https://twitter.com/baldursgate3",
    twitch: "https://www.twitch.tv/directory/category/baldurs-gate-3",
  },
}
