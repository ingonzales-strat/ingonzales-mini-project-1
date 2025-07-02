import AdjustedTypeWriter from "@/components/typewriter";
import { Button } from "@/components/ui/button"
import Clock from "@/components/clock";

export function ButtonOutline() {
  return <Button variant="outline">Outline</Button>
}

export default function Home() {
  return (
    <div className="grid grid-cols-2 gap-4 items-center justify-items-center  p-8  sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="col-span-1 ">
          <h1 className="font-bold text-6xl">Hi you!</h1>
          <h1 className="font-bold text-8xl">I&apos;m Niko</h1>
          <AdjustedTypeWriter/>
          <Clock/>
          
        </div>
        


       <div className="items-start col-span-1 items-start  text-left">
        <div className="text-lg mr-25">
          <p>I&apos;m an aspiring <b>software developer</b> from the Philippines!</p>
          <p>Welcome to my portfolio.</p>
          <p className="pt-2"> Have a look around my site! Careful where you step tho. Like me it&apos;s still a work-in-progress.</p>
        </div>
        <div className="pt-10">
          <a href='/contact_me' >
            <Button
              variant="outline"
              className="relative overflow-hidden text-white before:bg-white before:absolute before:inset-0 hover:text-black transition-colors before:translate-y-[100%] hover:before:translate-y-0 before:transition-transform"
            >
               <span className="relative z-10">Wanna Chat?  |˶˙ᵕ˙ )ﾉﾞ</span>
            </Button>
          </a>
          
        </div>
       </div>  
    </div>
  );
}
