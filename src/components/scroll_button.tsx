import { IconChevronsDown,IconChevronCompactDown } from "@tabler/icons-react"


export default function ScrollButton({href}: { href: string} ) {
  return (<a href={href} className="relative inline-block h-[48px]">
        <div className="absolute top-0 left-0 right-0 flex flex-col gap-0 hover:gap-4 hover:pt-1 transition-all duration-300">
            <IconChevronsDown/>
            <IconChevronCompactDown/>

        </div>
    
    </a>
  );
}