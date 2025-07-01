import { Button } from "@/components/ui/button"
import { IconBrandGithub,IconBrandLinkedin, IconMailbox } from "@tabler/icons-react"




export default function ContactMePage() {
  return <div className="grid grid-rows-[20px_1fr_auto] items-center justify-items-center  p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div>
      <h1 className="font-bold text-3xl">
        <center>I&apos;d love to hear from you!</center></h1>
      <h2 className="font-medium text-lg">
        <center>You can reach me via...</center>
      </h2>
    </div>
    <div className="flex flex-wrap justify-center gap-2 md:flex-row">
    <a href="mailto:isaiahnikologonzales@outlook.com">
      <Button variant="outline" size="sm" className="hover:bg-blue-500">
      <IconMailbox/> Email
      </Button>
    </a>
    <a href="https://www.linkedin.com/in/inikologon/" target="_blank"rel="noopener noreferrer">
      <Button variant="outline" size="sm" className="hover:bg-blue-500">
        <IconBrandLinkedin /> LinkedIn
      </Button>
    </a>
    <a href="https://github.com/Koniiro" target="_blank" rel="noopener noreferrer">
      <Button variant="outline" size="sm" className="hover:bg-blue-500">
        <IconBrandGithub /> GitHub
      </Button>
    </a>
   </div>
    
   </div>
}