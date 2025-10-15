import Link from "next/link";

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4">
      <Link href="/" className="text-lg font-semibold tracking-tight">
        Valida
      </Link>
      <nav className="flex items-center gap-4 text-sm text-white/70">
        <Link href="#sobre" className="transition hover:text-white">
          Sobre
        </Link>
        <Link href="#recursos" className="transition hover:text-white">
          Recursos
        </Link>
        <Link href="#contato" className="transition hover:text-white">
          Contato
        </Link>
      </nav>
    </header>
  );
}

export default Header;
