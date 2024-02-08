import { PossibleClassNames } from "@/types/character-classes"

const classIcons = {
  Barbarian: "/BG3_Class-Barbarian.webp",
  Bard: "/BG3_Class-Bard.webp",
  Cleric: "/BG3_Class-Cleric.webp",
  Druid: "/BG3_Class-Druid.webp",
  Fighter: "/BG3_Class-Fighter.webp",
  Monk: "/BG3_Class-Monk.webp",
  Paladin: "/BG3_Class-Paladin.webp",
  Ranger: "/BG3_Class-Ranger.webp",
  Rogue: "/BG3_Class-Rogue.webp",
  Sorcerer: "/BG3_Class-Sorcerer.webp",
  Warlock: "/BG3_Class-Warlock.webp",
  Wizard: "/BG3_Class-Wizard.webp",
}

export function getClassIcon(className: PossibleClassNames) {
  return classIcons[className]
}
