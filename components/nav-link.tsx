"use client"

import { Link } from "lucide-react"

import { Icons } from "./icons"
import { buttonVariants } from "./ui/button"

type NavLinkProps = {
  hrefTarget: string
  targetName: string
  children: React.ReactNode
}

export function NavLink({ hrefTarget, targetName, children }: NavLinkProps) {
  return (
    <a href={hrefTarget} target="_blank" rel="noreferrer">
      <div
        className={buttonVariants({
          size: "icon",
          variant: "ghost",
        })}
      >
        {children}
        <span className="sr-only">{targetName}</span>
      </div>
    </a>
  )
}
