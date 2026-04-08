export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5">
      <div className="text-xl font-semibold">
        Precrux
      </div>

      <div className="flex gap-6">
        <a href="/services">Services</a>
        <a href="/case-studies">Case Studies</a>
        <a href="/resources">Resources</a>
        <a href="/about">About</a>
      </div>

      <button className="bg-purple-600 px-4 py-2 rounded-md">
        Book a Call
      </button>
    </nav>
  )
}