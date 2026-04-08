export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 mt-24 py-10 text-center text-sm text-gray-400">
      <p>© {new Date().getFullYear()} Precrux</p>
      <p className="mt-2">
        Associated Partner: WebeDigital
      </p>
    </footer>
  )
}