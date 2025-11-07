export default function Footer() {
  return (
    <footer className="py-12 border-t border-black/10 bg-white/60 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <p>© {new Date().getFullYear()} Iubirea Reîncepe cu Mine. Toate drepturile rezervate.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-black">Termeni</a>
          <a href="#" className="hover:text-black">Confidențialitate</a>
          <a href="#" className="hover:text-black">Contact</a>
        </div>
      </div>
    </footer>
  )
}
