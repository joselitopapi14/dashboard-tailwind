import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function AvatarDemo() {
  const nickname = "AndresOrtizJDK";
  const url = `https://github.com/${nickname}.png`;
  return (
    
    <div className="flex items-center gap-2 ">
      <Avatar>
        <AvatarImage src={url} alt={`@${nickname}`} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <span>{nickname}</span>
    </div>
  )
}