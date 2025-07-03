import WipeUpLink from '@/components/wipeUpLink';


export default function AboutMePage() {
  return <div className="grid p-8  sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div className="pb-10 "><h1 className="text-7xl font-bold ">About <span className="text-blue-500">Me</span></h1>
    <h2 className="text-xl py-5 font-bold">Hi! I&apos;m Isaiah Nikolo Gonzales, but call me <span className="text-blue-500 font-semibold">Niko</span> |˶˙ᵕ˙ )ﾉﾞ</h2>

    <div className='pr-100 text-justify'>
      <p>I am currently a <span className="text-blue-500 font-medium">graduating BS Computer Science Student from UP Diliman. </span> 
        I&apos;m generally interesting in web and app development. Dabbling in making Flutter Apps for mobile and web as well as managing a Wordpress site too. 
         Through out my time as an undergraduate I have also poked around with ML and theoretical computing for my capstone projects. Using ML to aid in predicting ballistic penetration
         and implementing a theoretical computing model for skeletonizing images.
      </p>
      <p className="py-5">I&apos;m using my portfolio to share my experiences on my journey as a 
        developer, student, traveller and well, someone who loves seeing a project come together and <span className="text-blue-500">work</span>.</p>
      <WipeUpLink href='/projects' text='Wanna check out what I&apos;ve worked on?'/>
 
      </div>
    </div>
      <div><h2 className="text-4xl font-bold underline decoration-1 underline-offset-8">Beyond the Screen</h2>
      <p className="text-1xl font-medium">Coding and working on projects does takes its toll.</p>
        <div className='py-2 pr-100'><p>I spend some of my days poking at the code of a project I&apos;m 
          currently working on, figuring out why my ML model is overfitting, 
          or trying to explain to my stuffed-toy Orca my code</p>
          <p className='py-5 font-bold'>When I&apos;m not all of  that I like to: </p>
          <ul className='list-disc pl-4'>
            <li> <span className='font-bold  text-blue-500'>Play videogames:</span> My current obsession is Zenless Zone Zero [  wooo Anby ₍₍⚞(˶˃ ᵕ ˂˶)⚟⁾⁾  ]</li>
            <li> <span className='font-bold  text-blue-500'>Drawing:</span> Check out my gallery! I post some of my drawings there</li>
            <li> <span className='font-bold  text-blue-500'>Play the Piano:</span> I tend to go to my family&apos;s piano to distress and play music for myself</li>
            <li> <span className='font-bold  text-blue-500'>Read about History:</span> I usually go on wikipedia binge reads plus the odd history book I come across online</li>
            <li> <span className='font-bold  text-blue-500'>Watch Anime:</span> Haven&apos;t watched anything recently but I highly recommend: 
            &quot;86:Eighty-Six&quot;, &quot;Vivy:Fluorite Eye&apos;s Song&quot;, &quot;MAKEINE: Too Many Losing Heroines&quot;, and &quot;Freiren&quot;! </li>
            <li> <span className='font-bold  text-blue-500'>Read Manga:</span> I read more often because its easier to do with the time I have haha, I highly recommend: 
            &quot;Ruri Dragon&quot;, &quot;Love Bullet&quot;, &quot;How to Capture Love&quot; and &quot;Musou Telepathy&quot;</li>
            <li> <span className='font-bold  text-blue-500'>Complain about Public Transportation:</span> Not exactly a healthy past time but having lived in Japan as an exchange student for 
            several months and coming back home to well, the Philippine public transport situation is... not ideal to say the least</li>
          </ul>
        </div>
      </div>
    </div>
  
}