import Image from "next/image"
import Link from "next/link"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@radix-ui/react-hover-card"

import { Equipable } from "@/types/equipable"
import { Gear } from "@/types/gear"

import { ItemCard } from "./item-card"

interface BuildDetailsProps {
  weapons: Equipable[]
  gear: Gear
}

export function BuildDetails({ weapons, gear }: BuildDetailsProps) {
  return (
    <div className="grid gap-2">
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        <div className="border p-4">
          <p className="text-center text-xl font-semibold">
            Character Creation
          </p>
        </div>
        <div className="border p-4">
          <p className="text-center text-xl font-semibold">Weapons</p>
          <div className="flex flex-wrap justify-evenly">
            {weapons.map((weapon, index) => (
              <ItemCard
                icon={weapon.icon}
                name={weapon.name}
                link={weapon.link}
                key={index}
              />
            ))}
          </div>
        </div>
        <div className="border p-4">
          <p className="text-center text-xl font-semibold">Gear</p>
          <div className="flex flex-wrap justify-evenly">
            {gear.headwear.map((helmet, index) => (
              <ItemCard
                icon={helmet.icon}
                name={helmet.name}
                link={helmet.link}
                key={index}
              />
            ))}
          </div>
        </div>
        <div className="border p-4">
          <p className="text-center text-xl font-semibold">Spells</p>
        </div>
      </div>
    </div>
  )
}
