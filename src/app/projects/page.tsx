import Link from 'next/link';


export default function MyProjectPage() {
  return <div className=" p-8  sm:p-20 font-[family-name:var(--font-geist-sans)]">
       <div>
          <h1 className="text-7xl font-bold ">My <span className="text-blue-500">Projects</span></h1>
          <h1 className="text-3xl font-semibold">Here are some projects I have worked on</h1>
          <p>I&apos;m kinda proud of them since I added them here so feel free to check them out!</p>
          <div className='py-5'>
            <p className="px-0.5  relative group inline-block">
            <Link href="/contact_me" className='relative z-10 text-white group-hover:text-black transition-colors'>Wanna chat about what I&apos;ve worked on?</Link>
            <span className="absolute px-2 left-0 -bottom-0 w-full h-0.5 bg-blue-500 -z-10 group-hover:h-full group-hover:transition-all"></span>
            </p>
          </div>
        </div>
        <div className='py-5'>
          <h2 className="text-4xl font-bold underline decoration-1 underline-offset-8">Peronal Projects</h2>
          <ul className='list-disc pl-4 py-2'> 
            <li>Nosi Balasi</li>  
            <li>Space Intern - NASA Spaceapps 2021</li>     
            <li>Limi Reflection App - Blue Room Studios</li>
            <li>Subeo QR - Google Playground by DSC Loyola</li>  
            <li>Sabaybayin a Baybayin mobile learning app</li>
          </ul>
        </div>
        <div>
          <h2 className="text-4xl font-bold underline decoration-1 underline-offset-8">Academic Projects</h2>
          <ul className='list-disc pl-4 py-2'>        
              <li>Machine Learning and Computational Modeling for Predicting the Deformation of Natural Fiber-Reinforced Polymer Composites in Bulletproof Material Prototyping </li>
              <li>Simulating P Systems with Complex Objects for Image Skeletonization</li>
              <li>Cubimon: A Smart Public Hygiene Cubicle</li>
          </ul>
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