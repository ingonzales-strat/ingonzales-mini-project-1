import AdjustedTypeWriter from "@/components/typewriter";
import { Button } from "@/components/ui/button"
import Clock from "@/components/clock";



export default function Home() {
  return (
    <div className="content-center">
        <div className="grid grid-rows-[auto_auto] place-items-start sm:grid-rows-none sm:grid-cols-2 gap-10 sm:items-center md:justify-items-center  p-8  font-[family-name:var(--font-geist-sans)]">
        <div className="md:col-span-1 ">
          <h1 className="font-bold text-5xl sm:text-5xl md:text-6xl ">Hi you!</h1>
          <h1 className="font-bold text-7xl sm:text-7xl md:text-7xl lg:text-8xl">I&apos;m <span className="text-blue-500">Niko</span></h1>
          <AdjustedTypeWriter/>
          <Clock/>
          <p className="pt-2 text-blue-400">200,000 Nikos are ready, with a million more nikonikoniis on the way...</p>
          
        </div>
        <div className=" md:col-span-1  text-left">
          <div className=" text-sm md:text-base lg:text-lg md:mr-25 ">
            <p>I&apos;m an aspiring <b>software developer</b> from the Philippines!</p>
            <p>Welcome to my portfolio.</p>
            <p className="pt-2"> Have a look around my site! Careful where you step tho. Like me it&apos;s still a work-in-progress.</p>
          </div>
          <div className="pt-10 flex justify-center md:justify-start">
            <a href='/contact_me' >
              <Button
                variant="outline"
                className="relative  overflow-hidden text-white before:bg-blue-500 before:absolute before:inset-0 hover:text-white transition-colors before:translate-y-[100%] hover:before:translate-y-0 before:transition-transform"
              >
                <span className="relative z-10">Wanna Chat?  |˶˙ᵕ˙ )ﾉﾞ</span>
              </Button>
            </a>
            
          </div>
        </div>  
    </div>
    </div>

  );
}
