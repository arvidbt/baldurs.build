import { PossibleSublassNames } from "@/types/character-subclasses"

const subclassIcons = {
  "Oath of Vengance": "/BG3_Class-Barbarian.webp",
}

export function getSubclassIcon(subclassName: PossibleSublassNames) {
  return subclassIcons[subclassName]
}
