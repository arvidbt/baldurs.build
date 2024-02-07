"use client"

import React from "react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { TriggerTitle } from "./trigger-title"

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="">
          <TriggerTitle buildName="Lockadin" classes={["Paladin", "Warlock"]} />
        </AccordionTrigger>
        <AccordionContent></AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
