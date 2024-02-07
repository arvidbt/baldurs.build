import { Url } from "url"
import Image from "next/image"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@radix-ui/react-hover-card"

import { PossibleClassNames } from "@/types/classNames"

import { ClassIcon } from "./class-icons"

type ContentCreator = {
  name: string
  twitch?: Url
  youtube?: Url
  twitter?: Url
}

type BuildPreviewProps = {
  classes: PossibleClassNames[]
  buildName: string
  contentCreator?: ContentCreator
}

export function TriggerTitle({
  classes,
  buildName,
  contentCreator,
}: BuildPreviewProps) {
  return (
    <div>
      <div className="flex items-center justify-center gap-2">
        {classes.map((value, index) => (
          <HoverCard>
            <HoverCardTrigger>
              {" "}
              <Image
                src={ClassIcon(value)}
                alt="Class preview image"
                width={40}
                height={40}
                key={index}
              />
            </HoverCardTrigger>
            <HoverCardContent>{value}</HoverCardContent>
          </HoverCard>
        ))}
        <h2 className="text-xl font-extrabold">{buildName}</h2>
      </div>
      {contentCreator && (
        <div className="flex">
          <p className="text-left">By:</p>
        </div>
      )}
    </div>
  )
}
