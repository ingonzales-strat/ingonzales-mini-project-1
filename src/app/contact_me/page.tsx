import { Button } from "@/components/ui/button"
import { IconBrandGithub,IconBrandLinkedin } from "@tabler/icons-react"




export default function ContactMePage() {
  return <div className="grid  items-center justify-items-center p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
  <div className=" flex flex-col items-center text-center space-y-2">
    <h1 className="font-bold text-7xl">Wanna chat?</h1>
    <h2 className="font-medium text-2xl">You can reach me at...</h2>
    <ul>
      <li>
        <div><p className="text-lg relative group inline-block">
      <a href="mailto:isaiahnikologonzales@outlook.com" className='relative z-10 group-hover:text-black transition-colors'>isaiahnikologonzales@outlook.com</a>
      <span className="absolute px-2 left-0 -bottom-0 w-full h-0.5 bg-white -z-10 group-hover:h-full group-hover:transition-all"></span>
      </p>
      </div>
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