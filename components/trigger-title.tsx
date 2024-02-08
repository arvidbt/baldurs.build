import { Url } from "url"
import Image from "next/image"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@radix-ui/react-hover-card"

import { cn } from "@/lib/utils"

import { buttonVariants } from "./ui/button"

type ContentCreator = {
  name: string
  twitch?: Url
  youtube?: Url
  twitter?: Url
}

type BuildPreviewProps = {
  classes: { name: string; icon: string }[]
  buildName: string
  description?: string
  contentCreator?: ContentCreator
}

export function BuildTriggerTitle({
  classes,
  buildName,
  description,
  contentCreator,
}: BuildPreviewProps) {
  return (
    <div>
      <div className="flex items-center justify-center gap-2">
        <div className="flex gap-4 rounded-sm border p-2">
          {classes.map((value, index) => (
            <HoverCard key={index}>
              <HoverCardTrigger>
                <div
                  className={buttonVariants({
                    size: "icon",
                    variant: "ghost",
                  })}
                >
                  <Image
                    src={value.icon}
                    alt="Class preview image"
                    width={40}
                    height={40}
                    key={index}
                  />
                </div>
              </HoverCardTrigger>
              <HoverCardContent>{value.name}</HoverCardContent>
            </HoverCard>
          ))}
        </div>
        <h2 className="text-xl font-extrabold">{buildName}</h2>
        {description && (
          <div
            className={cn(
              "rounded-md px-2 py-1",
              description.length > 200 ? "bg-green-700" : "bg-red-700"
            )}
          >
            <p className="text-xs font-semibold">
              {description.length > 200 ? "Long" : "Short"} guide
            </p>
          </div>
        )}
      </div>
      {contentCreator && (
        <div className="flex">
          <p className="text-left">By:</p>
        </div>
      )}
    </div>
  )
}
