
import {personal_proj, academic_proj} from '@/content/projects'

export default async function projectdetailspage({
    params
}:{
    params: Promise<{proj_slug:string}>;
}){
    const { proj_slug } = await params;
    const per_project = personal_proj.find((proj) => proj.slug === proj_slug);
    const acad_project = academic_proj.find((proj) => proj.slug === proj_slug);
    if (per_project){
        console.log(per_project)
    }else if (acad_project){
        console.log(acad_project)
    }
    else{
        console.log('project not found')
    }

    return <div className="grid p-8  sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1 className="text-7xl font-bold ">This <span className="text-blue-500">Project</span></h1>
        <p>asda{proj_slug}</p>
    </div>
}