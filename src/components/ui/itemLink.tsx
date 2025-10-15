import { ChevronRightIcon } from "lucide-react"

import {
  Item,
  ItemActions,
  ItemContent,
  ItemTitle,
} from "@/components/ui/item"


export function ItemLink({ 
  title,
  icon,
  active = false 
}: { 
  title: string; 
  icon?: React.ReactNode;
  active?: boolean 
}) {
  return (
    <div className="flex w-full cursor-pointer">
      <Item asChild>
        <button 
          className={`w-full text-left transition-colors ${
            active ? 'bg-white/20' : 'hover:bg-white/10'
          }`}
        >
          {icon}
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
