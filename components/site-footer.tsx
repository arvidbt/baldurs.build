import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"
import { ThemeToggle } from "@/components/theme-toggle"

import { NavLink } from "./nav-link"

export function SiteFooter() {
  return (
    <footer className="sticky bottom-0 z-40 w-full border-t bg-background">
      <div className="container flex items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="py-4">
          <h1 className="py-2 text-xl font-extrabold">{siteConfig.name}</h1>
          <p className="pb-2 text-xs">
            <span className="font-semibold">Baldurs.build</span> is not
            affiliated with or endorsed by Larian Studios.
          </p>
          <p className="pb-2 text-xs">
            <span className="font-semibold">Baldurs.build</span> is a collection
            of hand-crafted top builds for Baldurs Gate 3.
          </p>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <footer className="flex items-center space-x-1">
            <NavLink hrefTarget={siteConfig.links.twitch} targetName="Twitch">
              <Icons.twitch className="size-5" />
            </NavLink>
            <NavLink hrefTarget={siteConfig.links.twitch} targetName="Twitter">
              <Icons.twitter className="size-5 fill-current" />
            </NavLink>
            <NavLink
              hrefTarget="https://www.reddit.com/r/BaldursGate3/"
              targetName="Reddit"
            >
              <Icons.reddit className="size-5 fill-current" />
            </NavLink>
            <ThemeToggle />
          </footer>
        </div>
      </div>
    </footer>
  )
}
