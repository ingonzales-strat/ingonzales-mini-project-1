import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="flex gap-6  p-5 text-white ">
      <MenuItem name='Home' href='/'/>
      <MenuItem name='My Projects' href='/projects'/>
      <MenuItem name='About Me' href='/about_me'/>
      <MenuItem name='Contact Me' href='/contact_me'/>
    </nav>
  );
}

function MenuItem({name, href}: { name: string; href: string }){
    return <div><p className=" relative group inline-block">
      <Link href={href} className='relative z-10 group-hover:text-black transition-colors'>{name}</Link>
      <span className="absolute px-2 left-0 -bottom-0 w-full h-0.5 bg-white -z-10 group-hover:h-full group-hover:transition-all"></span>
      </p>
      </div>
}
