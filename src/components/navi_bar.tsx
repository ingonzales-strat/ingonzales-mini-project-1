import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="flex gap-6 bg-gray-800 p-4 text-white font-semibold">
      <Link href="/">Home</Link>
      <Link href="/projects"> My Projects</Link>
      <Link href="/about_me">About Me</Link>
      <Link href="/contact_me">Contact Me</Link>
    </nav>
  );
}
