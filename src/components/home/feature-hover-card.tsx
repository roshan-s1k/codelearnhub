
import { icons } from "lucide-react";
export function FeatureHoverCard({ iconName ,des,title}: { iconName: keyof typeof icons ,title:string,des:string},) {
    const Icon= icons[iconName]
  return (
    <div className="group/feature relative flex flex-col py-10 lg:border-r lg:border-b hover:bg-gradient-to-t from-primary/20 to-transparent">
        <div className="realtive z-10 mb-4 px-10 ">
        <Icon size={24} className="text-primary" />
        </div>
        <div className="realtive z-10 mb-2 px-10 text-ig font-bold">
            <div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-r-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-primary">

            </div>
            <span className="inline-block">{title}</span>
        </div>
        <p className="relative z-10 max-w-xs px-10 text-sm text-muted-foreground">{des}</p>
    </div>
  )
}
