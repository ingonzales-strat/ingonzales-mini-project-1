
import { WipeUpLinkExt } from '@/components/wipeUpLink';
import {personal_proj, academic_proj} from '@/content/projects'
import { notFound } from 'next/navigation';
import { Badge } from "@/components/ui/badge"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import parse from 'html-react-parser';
import { IconXboxX } from "@tabler/icons-react"
import Link from 'next/link';
import Image from 'next/image';

export default async function projectdetailspage({
    params
}:{
    params: Promise<{proj_slug:string}>;
}){
    const { proj_slug } = await params;
    console.log(proj_slug)
    
    const per_project = personal_proj.find((proj) => proj.slug === proj_slug);
    const acad_project = academic_proj.find((proj) => proj.slug === proj_slug);
    let project
    if (per_project){
        console.log(per_project)
        project=per_project
    }else if (acad_project){
        console.log(acad_project)
        project=acad_project
    }
    else{
        console.log("No Such Project")
        notFound();
    }
    const relatedLinks=project.relevantLinks
    const projectGallery=project.imageList


    return <div className=" grid grid-rows-2 lg:grid-rows-none lg:grid-cols-[50%_50%] p-10 gap-10 place-items-start sm:px-20 sm:pt-10 font-[family-name:var(--font-geist-sans)]">
        <div>
            <div>
                <Link href="/projects"><IconXboxX stroke={1.75}className='scale-175 sm:225 ml-3 mb-5'/></Link>
                <h1 className="text-5xl sm:text-7xl font-bold py-2 ">My <span className="text-blue-500">Project</span></h1>
                <h2 className="text-2xl sm:text-4xl font-semibold ">{project.name}</h2>
            </div>
            <div className='grid  grid-row-4 pt-5 gap-6 items-start'>
                
                <div className='align-justify'>
                    <h3 className='text-2xl font-medium text-blue-300  '>What happened here?</h3>
                    <div className='text-justify'>{parse(project.description)}</div>

                </div>
                
                <div>
                    <h3 className='text-2xl font-medium text-blue-300'>What did I use?</h3>
                    <div className={`display: inline-flex  flex-wrap gap-4 py-2 `}>
                        {project.techStack.map((tech, index) => (
                        <Badge className="bg-black text-white outline-white text-sm" variant={'outline'} key={index}> {tech}</Badge>
                        ))}

                    </div>
                
                

                </div>
                
                {relatedLinks && 
                <div>
                    <h3 className='text-2xl font-medium text-blue-300'>Some related links</h3>
                    <ul className='list-disc pl-4'>
                        {project.relevantLinks.map((link, index) => (
                        <li className="py-1" key={index}><WipeUpLinkExt href={link} text={link} /></li>
                        ))}
                    </ul>
                    
                </div>
                
                }
                
            </div>
        </div>
        {
            projectGallery &&
            <div className='md:p-10'>
                <Carousel opts={{loop:true}}>
                <CarouselContent>
                    {project.imageList.map((img, index) => (
                            <CarouselItem key={index}>
                                
                                <Image src={img} alt={img} width={1000} height={500} objectFit="cover"   />
                            
                                
                            </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
                </Carousel>
            </div>
        }
    </div>
}