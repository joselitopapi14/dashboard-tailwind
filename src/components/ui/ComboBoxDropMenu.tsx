"use client"

import * as React from "react"
import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import AvatarDemo from "./AvatarDemo"

const labels = [
  "feature",
  "bug",
  "enhancement",
  "documentation",
  "design",
  "question",
  "maintenance",
]

export function ComboboxDropdownMenu() {


  
  const [label, setLabel] = React.useState("bug")
  const [open, setOpen] = React.useState(false)

  return (
    <div className="flex w-full flex-col items-start justify-between rounded-md px-4 py-3 sm:flex-row sm:items-center">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="focus:outline-none focus-visible:ring-0 py-6">
            <AvatarDemo />
            <MoreHorizontal />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[200px]">
          <DropdownMenuLabel>Opciones</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem>Ajustes</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600">
              Cerrar sesion
              <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
