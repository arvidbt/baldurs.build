"use client"

import React from "react"
import MetaBuilds from "@/builds/meta-builds.json"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { BuildDetails } from "./build-details"
import { BuildTriggerTitle } from "./trigger-title"

export function MetaBuildsScreen() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {MetaBuilds.map((build) => (
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <BuildTriggerTitle buildName={build.name} classes={build.classes} />
          </AccordionTrigger>
          <AccordionContent>
            <BuildDetails weapons={build.weapons} gear={build.gear} />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
