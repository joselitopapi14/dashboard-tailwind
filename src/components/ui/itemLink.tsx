import { ChevronRightIcon } from "lucide-react"

import {
  Item,
  ItemActions,
  ItemContent,
  ItemTitle,
} from "@/components/ui/item"


export function ItemLink({ 
  title, 
  active = false 
}: { 
  title: string; 
  active?: boolean 
}) {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Item asChild>
        <button 
          className={`w-full text-left transition-colors ${
            active ? 'bg-white/20' : 'hover:bg-white/10'
          }`}
        >
          <ItemContent>
            <ItemTitle>{title}</ItemTitle>
          </ItemContent>
          <ItemActions>
            <ChevronRightIcon className="size-4" />
          </ItemActions>
        </button>
      </Item>
    </div>
  )
}
