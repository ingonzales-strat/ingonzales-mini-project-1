import { Button } from "@/components/ui/button"
import { IconBrandGithub,IconBrandLinkedin } from "@tabler/icons-react"
import { WipeUpLinkExt } from "@/components/wipeUpLink"



export default function ContactMePage() {
  return <div className="grid  items-center justify-items-center p-8  sm:p-20 font-[family-name:var(--font-geist-sans)]">
  <div className=" flex flex-col items-center text-center space-y-2">
    <h1 className="font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl" >Wanna <span className="text-blue-500">chat?</span></h1>
    <h2 className="font-medium text-xl sm:text-2xl md:text-3xl ">You can reach me at...</h2>
    <ul>
      <li>
        <div className="text-lg md:text-2xl">
        <WipeUpLinkExt  href="mailto:isaiahnikologonzales@outlook.com" text="isaiahnikologonzales@outlook.com"/>
        </div>
      </li>
    </ul>
  </div>
  <div className="hidden sm:block">
    <div className="invisible sm:visible  flex flex-wrap justify-center gap-10 md:flex-row">
    <a href="https://www.linkedin.com/in/inikologon/" target="_blank" rel="noopener noreferrer">
      <Button variant="outline" size="lg" className="relative sm:p-6 overflow-hidden text-white  before:bg-blue-500 before:absolute before:inset-0 hover:text-white transition-colors before:translate-y-[100%] hover:before:translate-y-0 before:transition-transform">
        <span className="relative z-10 items-center gap-2 flex text-md sm:text-lg md:text-2xl"><IconBrandLinkedin className="scale-125 md:scale-175 md:mr-2"/> LinkedIn</span>
      </Button>
    </a>
    <a href="https://github.com/Koniiro" target="_blank" rel="noopener noreferrer">
      <Button variant="outline" size="lg" className="relative   sm:p-6 overflow-hidden text-white before:bg-blue-500 before:absolute before:inset-0 hover:text-white transition-colors before:translate-y-[100%] hover:before:translate-y-0 before:transition-transform">
        <span className="relative z-10  items-center gap-2 flex text-md sm:text-lg md:text-2xl"><IconBrandGithub className="scale-125 md:scale-175 md:mr-2"/> GitHub</span>
      </Button>
    </a>
  </div>
  </div>
  
</div>

}