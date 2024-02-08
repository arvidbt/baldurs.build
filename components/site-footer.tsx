import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"
import { ThemeToggle } from "@/components/theme-toggle"

import { NavLink } from "./nav-link"

export function SiteFooter() {
  return (
    <footer className="sticky bottom-0 z-40 w-full border-t bg-background p-4">
      <div className="container flex items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h1 className="py-2 text-xl font-extrabold">More links</h1>
            <Link href={"/disclaimer"}>
              <p className="text-xs hover:underline">Disclaimer</p>
            </Link>
            <Link href={"/contact"}>
              <p className="text-xs hover:underline">Contact</p>
            </Link>
          </div>
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
