import WipeUpLink from '@/components/wipeUpLink';
import {personal_proj, academic_proj} from '@/content/projects'




export default function MyProjectPage() {
  return <div className=" grid p-8 gap-4 sm:p-20 font-[family-name:var(--font-geist-sans)]">
       <div>
          
          <h1 className="text-7xl font-bold ">My <span className="text-blue-500">Projects</span></h1>
          <h1 className="text-2xl font-semibold">Here are some things I have worked on</h1>
          <p>I&apos;m kinda proud of them since I added them here so feel free to check them out!</p>
          <div className='py-4'>
            <WipeUpLink href='/contact_me' text='Wanna chat about what I&apos;ve worked on?'/>
          </div>
          
        </div>
        <div className=''>
          <h2 className="text-4xl font-bold text-blue-300">Personal Projects</h2>
          {personal_proj.map((project) => (
            <div key={project.slug} className='py-2'>
               <WipeUpLink href={`/projects/${project.slug}`} text={project.name}/>
            </div>
          ))}
        
        </div>
        <div>
          <h2 className="text-4xl font-bold  text-blue-300">Academic Projects</h2>
          {academic_proj.map((project) => (
            
            <div key={project.slug} className='py-2'>
               <WipeUpLink href={`/projects/${project.slug}`} text={project.name}/>
            </div>
          ))}
         
        </div>
 
    </div>

  
  {/*<div>
  <p>I&apos;m kinda proud of them since I added them to this site so feel free to check them out!</p>
  <p>Feel free to bump me on my *insert contact me* if you have comments or would like to know more</p>
  <h2>Personal Projects</h2>
  <ul> 
    <li>Nosi Balasi</li>  
    <li>Space Intern - NASA Spaceapps 2021</li>     
    <li>Limi Reflection App - Blue Room Studios</li>
    <li>Subeo QR - Google Playground by DSC Loyola</li>  
    <li>Sabaybayin a Baybayin mobile learning app</li>
  </ul>
    <h2>Academic Work</h2>
  <ul>        
    <li>Machine Learning and Computational Modeling for Predicting the Deformation of Natural Fiber-Reinforced Polymer Composites in Bulletproof Material Prototyping </li>
    <li>Simulating P Systems with Complex Objects for Image Skeletonization</li>
    <li>Cubimon: A Smart Public Hygiene Cubicle</li>
 </ul>

 
 </div>*/}
}