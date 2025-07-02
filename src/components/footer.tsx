import { IconBrandGithubFilled,IconBrandGithub,IconBrandLinkedinFilled, IconMail, IconMailFilled, IconBrandLinkedin } from "@tabler/icons-react"
export default function MyFooter() {
  return (
    <footer className="row-start-3 flex gap-[24px] p-8 flex-wrap items-center justify-center">
          <a className="group flex items-center gap-2 "href="mailto:isaiahnikologonzales@outlook.com"
            target="_blank" rel="noopener noreferrer">
              <IconMailFilled className="group-hover:hidden"/>
              <IconMail stroke={1.75} className="hidden text-blue-400 group-hover:scale-125 group-hover:inline  transition-transform group-hover"/>

          </a>
          <a className="group flex items-center gap-2 "href="https://www.linkedin.com/in/inikologon/"
            target="_blank" rel="noopener noreferrer">
              <IconBrandLinkedinFilled className="group-hover:hidden"/>
              <IconBrandLinkedin stroke={1.75} className="hidden text-blue-400 group-hover:scale-125 group-hover:inline  transition-transform group-hover"/>
          </a>
          <a className="group flex items-center gap-2 "href="https://github.com/Koniiro"
            target="_blank" rel="noopener noreferrer">
              <IconBrandGithubFilled  className="group-hover:hidden"/>
              <IconBrandGithub stroke={1.75} className="hidden text-blue-400 group-hover:scale-125 group-hover:inline transition-transform group-hover"/>

              
          </a>
        </footer>
  );
}