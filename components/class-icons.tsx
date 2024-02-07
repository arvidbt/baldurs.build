import { PossibleClassNames } from "@/types/classNames"

export function ClassIcon(className: PossibleClassNames) {
  switch (className) {
    case "Barbarian":
      return "/BG3_Class-Barbarian.webp"
    case "Bard":
      return "/BG3_Class-Bard.webp"
    case "Cleric":
      return "/BG3_Class-Cleric.webp"
    case "Druid":
      return "/BG3_Class-Druid.webp"
    case "Fighter":
      return "/BG3_Class-Fighter.webp"
    case "Monk":
      return "/BG3_Class-Monk.webp"
    case "Paladin":
      return "/BG3_Class-Paladin.webp"
    case "Ranger":
      return "/BG3_Class-Ranger.webp"
    case "Rogue":
      return "/BG3_Class-Rogue.webp"
    case "Sorcerer":
      return "/BG3_Class-Sorcerer.webp"
    case "Warlock":
      return "/BG3_Class-Warlock.webp"
    case "Wizard":
      return "/BG3_Class-Wizard.webp"
  }
}
