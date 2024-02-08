import Image from "next/image"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@radix-ui/react-hover-card"
import { Link } from "lucide-react"

import { Equipable } from "@/types/equipable"

export function ItemCard(item: Equipable) {
  return (
    <a href={item.link} target="_blank" rel="noreferrer">
      <HoverCard>
        <HoverCardTrigger>
          <div>
            <Image src={item.icon} alt={item.name} width={60} height={60} />
          </div>
        </HoverCardTrigger>
        <HoverCardContent>
          <div className="rounded-md bg-gray-800 p-4">
            <p className="font-semibold">{item.name}</p>
          </div>
        </HoverCardContent>
      </HoverCard>
    </a>
  )
}
