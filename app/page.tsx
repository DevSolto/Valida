export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background px-6 py-16 text-center">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Bem-vindo à Valida</h1>
        <p className="mx-auto max-w-2xl text-lg text-white/70">
          Estrutura inicial criada com Next.js, TypeScript, ESLint e Tailwind CSS pronta para
          construir a landing page da Valida.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        <span className="rounded-full bg-rose-glass px-6 py-2 text-sm font-semibold uppercase tracking-wide text-white/80">
          Tailwind configurado
        </span>
        <span className="rounded-full bg-cyan-glass px-6 py-2 text-sm font-semibold uppercase tracking-wide text-white/80">
          Pronto para criar
        </span>
      </div>
    </main>
  );
}
