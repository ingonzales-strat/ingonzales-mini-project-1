import { IconBrandGithubFilled,IconBrandLinkedinFilled, IconMailbox } from "@tabler/icons-react"
export default function MyFooter() {
  return (
    <footer className="row-start-3 flex gap-[24px] p-8 flex-wrap items-center justify-center">
          <a className="flex items-center gap-2 hover:underline hover:underline-offset-4"href="mailto:isaiahnikologonzales@outlook.com"
            target="_blank" rel="noopener noreferrer">
              <IconMailbox/>
          </a>
          <a className="flex items-center gap-2 hover:underline hover:underline-offset-4"href="https://www.linkedin.com/in/inikologon/"
            target="_blank" rel="noopener noreferrer">
              <IconBrandLinkedinFilled/>
          </a>
          <a className="flex items-center gap-2 hover:underline hover:underline-offset-4"href="https://github.com/Koniiro"
            target="_blank" rel="noopener noreferrer">
              <IconBrandGithubFilled/>
          </a>
        </footer>
  );
}