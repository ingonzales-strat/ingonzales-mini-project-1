import Link from 'next/link';

export default function WipeUpLink({text, href}: { text: string; href: string }) {
  return (
    <div>
        <p className="px-0.5  relative group inline-block">
        <Link href={href} className='relative z-10 text-white group-hover:text-black transition-colors underline decoration-blue-500 decoration-1 underline-offset-4'>{text}</Link>
        <span className="absolute px-2 left-0 -bottom-0 w-full h-0.5 bg-blue-500 -z-10 group-hover:h-full group-hover:transition-all"></span>
        </p>
    </div>
   
  );
}
export  function WipeUpLinkExt({text, href}: { text: string; href: string }) {
  return (
    <div>
        <p className="px-0.5  relative group inline-block">
        <a href={href} className='relative z-10 text-white group-hover:text-black transition-colors underline decoration-blue-500 decoration-1 underline-offset-4'>{text}</a>
        <span className="absolute px-2 left-0 -bottom-0 w-full h-0.5 bg-blue-500 -z-10 group-hover:h-full group-hover:transition-all"></span>
        </p>
    </div>
   
  );
}