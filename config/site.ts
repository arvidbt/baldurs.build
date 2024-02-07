export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Baldurs.build",
  description: "Explore meta builds for the game Baldurs Gate 3.",
  mainNav: [
    {
      title: "Meta builds",
      href: "/",
    },
    {
      title: "My builds",
      href: "/my-builds",
    },
  ],
  links: {
    twitter: "https://twitter.com/baldursgate3",
    twitch: "https://www.twitch.tv/directory/category/baldurs-gate-3",
  },
}
