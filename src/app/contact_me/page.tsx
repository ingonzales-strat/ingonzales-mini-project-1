import { Button } from "@/components/ui/button"
import { IconBrandGithub,IconBrandLinkedin, IconMailbox } from "@tabler/icons-react"




export default function ContactMePage() {
  return <div><h1><center>I&apos;d love to hear from you!</center></h1>
    <h2><center>You can reach me via...</center></h2>
    <div className="flex flex-wrap justify-center gap-2 md:flex-row">
    <a href="mailto:isaiahnikologonzales@outlook.com">
      <Button variant="outline" size="sm" >
      <IconMailbox/> EMail
      </Button>
    </a>
    <a href="https://www.linkedin.com/in/inikologon/" target="_blank"rel="noopener noreferrer">
      <Button variant="outline" size="sm">
        <IconBrandLinkedin /> LinkedIn
      </Button>
    </a>
    <a href="https://github.com/Koniiro" target="_blank" rel="noopener noreferrer">
      <Button variant="outline" size="sm">
        <IconBrandGithub /> GitHub
      </Button>
    </a>
   </div>
    
   </div>
}