import { Button } from "@/components/ui/button"
import { IconBrandGithub,IconBrandLinkedin } from "@tabler/icons-react"
import { WipeUpLinkExt } from "@/components/wipeUpLink"



export default function ContactMePage() {
  return <div className="grid  items-center justify-items-center p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
  <div className=" flex flex-col items-center text-center space-y-2">
    <h1 className="font-bold text-7xl">Wanna chat?</h1>
    <h2 className="font-medium text-2xl">You can reach me at...</h2>
    <ul>
      <li>
        <WipeUpLinkExt href="mailto:isaiahnikologonzales@outlook.com" text="isaiahnikologonzales@outlook.com"/>
        
      </li>
    </ul>
  </div>

  <div className="flex flex-wrap justify-center gap-2 md:flex-row">
    <a href="https://www.linkedin.com/in/inikologon/" target="_blank" rel="noopener noreferrer">
      <Button variant="outline" size="lg" className="relative overflow-hidden text-white before:bg-blue-500 before:absolute before:inset-0 hover:text-white transition-colors before:translate-y-[100%] hover:before:translate-y-0 before:transition-transform">
        <span className="relative z-10 items-center gap-2 flex"><IconBrandLinkedin /> LinkedIn</span>
      </Button>
    </a>
    <a href="https://github.com/Koniiro" target="_blank" rel="noopener noreferrer">
      <Button variant="outline" size="lg" className="relative overflow-hidden text-white before:bg-blue-500 before:absolute before:inset-0 hover:text-white transition-colors before:translate-y-[100%] hover:before:translate-y-0 before:transition-transform">
        <span className="relative z-10  items-center gap-2 flex text-1xl"><IconBrandGithub /> GitHub</span>
      </Button>
    </a>
  </div>
</div>

}