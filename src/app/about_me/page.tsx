import WipeUpLink from '@/components/wipeUpLink';
import Image from 'next/image';
import ScrollButton from '@/components/scroll_button';
export default function AboutMePage() {
  return <div className="flex flex-col sm:p-20 font-[family-name:var(--font-geist-sans)] gap-20">
    <div className='flex flex-col gap-20 items-center'>
      <div className='grid grid-cols-[60%_40%] place-items-center'>
        <div>
          <h1 className="text-7xl font-bold ">About <span className="text-blue-500">Me</span></h1>
          <h2 className="text-xl py-5 font-bold">Hi! I&apos;m Isaiah Nikolo Gonzales, but call me <span className="text-blue-500 font-semibold">Niko</span> |˶˙ᵕ˙ )ﾉﾞ</h2>
          <div className='text-justify'>
            <p>I am currently a <span className="text-blue-500 font-medium">graduating BS Computer Science Student from UP Diliman. </span> 
              I&apos;m generally interesting in web and app development. Dabbling in making Flutter Apps for mobile and web as well as managing a Wordpress site too. 
              Through out my time as an undergraduate I have also poked around with ML and theoretical computing for my capstone projects. Using ML to aid in predicting ballistic penetration
              and implementing a theoretical computing model for skeletonizing images.
            </p>
            <p className="py-5">I&apos;m using my portfolio to share my experiences on my journey as a 
              developer, student, traveller and well, someone who loves seeing a project come together and <span className="text-blue-500">work</span>.
            </p>
            <WipeUpLink href='/projects' text='Wanna check out what I&apos;ve worked on?'/>
          </div>
        </div>
        
        <div className='relative w-full max-w-sm aspect-square '>
          <Image
          src="/display_pic.jpg" alt="Picture of Niko" layout='fill'
          objectFit="cover" objectPosition="left"
          className="z-20 "/>
          <div className="absolute top-5 left-10 w-full h-full bg-blue-500 z-10 " />
        
        </div> 
        
      </div>
      <ScrollButton href='#grass'/>
    </div>
    <div>
      <h2 id='grass' className="text-5xl font-bold text-blue-300">Beyond the Screen ෴෴</h2>
      <p className="text-2xl font-medium">Coding and working on projects does takes its toll.</p>
        <div className='py-2 '><p>So I do try to spend my time doing other fun things both with my laptop and outside of it. To touch grass or so ෴෴ꉂꉂ(ᵔᗜᵔ*)</p>
          <p className='py-5 font-bold'>When I&apos;m negotiating with my laptop&apos; machine spirit I like to: </p>
          <ul className='list-disc pl-4'>
            <li> <span className='font-bold  text-blue-500'>Play videogames:</span> My current obsession is Zenless Zone Zero [  wooo Anby ₍₍⚞(˶˃ ᵕ ˂˶)⚟⁾⁾  ]</li>
            <li> <span className='font-bold  text-blue-500'>Drawing:</span> Check out my gallery! I post some of my drawings there</li>
            <li> <span className='font-bold  text-blue-500'>Play the Piano:</span> I tend to go to my family&apos;s piano to distress and play music for myself</li>
            <li> <span className='font-bold  text-blue-500'>Read about History:</span> I usually go on wikipedia binge reads plus the odd history book I come across online</li>
            <li> <span className='font-bold  text-blue-500'>Watch Anime:</span> Haven&apos;t watched anything recently but I highly recommend: 
            &quot;86:Eighty-Six&quot;, &quot;Vivy:Fluorite Eye&apos;s Song&quot;, &quot;MAKEINE: Too Many Losing Heroines&quot;, and &quot;Freiren&quot;! </li>
            <li> <span className='font-bold  text-blue-500'>Read Manga:</span> I read more often because its easier to do with the time I have haha, I highly recommend: 
            &quot;Ruri Dragon&quot;, &quot;Love Bullet&quot;, &quot;How to Capture Love&quot; and &quot;Musou Telepathy&quot;</li>
            <li> <span className='font-bold  text-blue-500'>Complain about Public Transportation:</span> Not exactly a healthy past time but having lived in Japan as an exchange student for several months and coming back home to well, the Philippine public transport situation is... not ideal to say the least</li>
          </ul>
        </div>
        <div className='flex flex-wrap justify-center gap-8 pt-10'>
          <div className='relative w-60 max-w-sm aspect-2/4 '>
            <Image
            src="/shimabara_1.jpg" alt="Picture of Niko" layout='fill'
            objectFit="cover" objectPosition="left"
            className="z-20  "/>          
          </div> 
          <div className='relative w-60 max-w-sm aspect-3/5 md:translate-y-20 '>
            <Image
            src="/sunflower.jpg" alt="Picture of Niko" layout='fill'
            objectFit="cover" objectPosition="left"
            className="absolute z-20  y-20"/>          
          </div> 
          <div className='relative w-60 max-w-sm aspect-3/5 '>
            <Image
            src="/mount_climb.jpg" alt="Picture of Niko" layout='fill'
            objectFit="cover" objectPosition="left"
            className="z-20  "/>          
          </div> 
        </div>
    </div>
  
  </div>
  
}