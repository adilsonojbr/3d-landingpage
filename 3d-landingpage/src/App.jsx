const highlights = [
  {
    title: 'Prototipagem rápida',
    description:
      'Transformo suas ideias em arquivos STL e GCODE, prontos para impressão e exibição em galerias virtuais.',
  },
  {
    title: 'Fluxo 24/7',
    description:
      'Monitoro suas impressoras, envio alertas e registro cada etapa em relatórios visuais e acessíveis.',
  },
  {
    title: 'Estética escura',
    description:
      'Painéis roxos e lilases com degradês suaves ressaltam os volumes das suas peças em cada sessão.',
  },
]

const stats = [
  { label: 'Modelos publicados', value: '42' },
  { label: 'Horas de impressão automatizadas', value: '358' },
  { label: 'Serviços de pós-produção acompanhados', value: '18' },
]

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.3),_rgba(15,23,42,0.9)_70%)]" />
      <div className="pointer-events-none absolute -right-32 top-0 h-[60vh] w-[60vw] bg-gradient-to-br from-fuchsia-600/30 via-purple-800/10 to-transparent blur-[120px]" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-20 px-6 pb-16 pt-12">
        <header className="space-y-4 text-center lg:text-left">
          <p className="text-sm uppercase tracking-[0.4em] text-fuchsia-300">Apresentando</p>
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Landing page para suas impressões 3D com alma urbana e design vivo.
          </h1>
          <p className="text-lg text-slate-300">
            Técnica, luz e movimento se encontram em uma experiência dark inspirada em neon, com seções fluidas e foco em contato direto.
          </p>
        </header>

        <section className="grid gap-10 rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <div className="space-y-1">
              <p className="text-sm uppercase tracking-[0.3em] text-fuchsia-200/80">Experiência imersiva</p>
              <h2 className="text-3xl font-semibold">Modelo 3D girando no eixo</h2>
            </div>
            <p className="text-slate-300">
              Um módulo demonstrativo mostra o modelo virtual girando suavemente, simulando a presença física da sua obra.
            </p>
            <div className="flex flex-wrap gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/30 bg-white/10 px-5 py-4">
                  <p className="text-3xl font-semibold text-white">{stat.value}</p>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto flex h-80 w-80 items-center justify-center rounded-[2.2rem] border border-fuchsia-400/40 bg-gradient-to-br from-fuchsia-500/20 via-purple-900/40 to-indigo-950/80 shadow-[0_20px_60px_rgba(99,102,241,0.5)] p-4">
            <div className="absolute -inset-6 rounded-[50%] border border-purple-500/30 opacity-70 blur-[30px]" />
            <div className="relative flex h-full w-full items-center justify-center">
              <div className="model-cube" aria-hidden="true">
                <div className="model-face model-face-front" />
                <div className="model-face model-face-right" />
                <div className="model-face model-face-back" />
                <div className="model-face model-face-left" />
                <div className="model-face model-face-top" />
              </div>
            </div>
            <span className="absolute bottom-4 text-xs uppercase tracking-[0.6em] text-purple-200">Rotações contínuas</span>
          </div>
        </section>

        <section className="grid gap-8 rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-900/30 p-8 lg:grid-cols-3">
          {highlights.map((item) => (
            <article key={item.title} className="space-y-3 rounded-2xl border border-white/20 bg-white/5 p-5">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-slate-300">{item.description}</p>
            </article>
          ))}
        </section>

        <section className="rounded-[2rem] border border-fuchsia-400/30 bg-white/5 p-8 backdrop-blur-xl">
          <div className="mb-6 space-y-2">
            <p className="text-sm uppercase tracking-[0.4em] text-fuchsia-200">Sobre o ambiente</p>
            <h2 className="text-3xl font-semibold">Por que rodar em uma VPS dedicada?</h2>
            <p className="text-slate-300">
              Minimizo riscos mantendo o Moltbot e as artboards em uma VPS escura, sempre online, com configurações afinadas e acesso restrito. Assim o seu host local continua livre e o serviço fica disponível 24/7 para quem quiser ver e encomendar impressões.
            </p>
          </div>
          <ul className="grid gap-4 text-sm text-slate-300 sm:grid-cols-2">
            <li className="rounded-2xl border border-white/20 bg-white/5 p-4">Isolation completa entre suas rotinas e o bot.</li>
            <li className="rounded-2xl border border-white/20 bg-white/5 p-4">Controle de recursos: você escolhe CPU, RAM e GPU.</li>
            <li className="rounded-2xl border border-white/20 bg-white/5 p-4">Backups e snapshots automáticos antes de cada deploy.</li>
            <li className="rounded-2xl border border-white/20 bg-white/5 p-4">TLS, firewall e logs direcionados para debug rápido.</li>
          </ul>
        </section>

        <section className="grid gap-10 rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-[0_30px_60px_rgba(15,23,42,0.8)] lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.4em] text-fuchsia-200">Contato</p>
            <h2 className="text-3xl font-semibold">Quer conversar sobre o próximo projeto?</h2>
            <p className="text-slate-300">
              Preencha o formulário e receba um roteiro personalizado com tons escuros, prints com iluminação atmosférica e checklist para produção 3D.
            </p>
          </div>
          <form className="space-y-4 rounded-2xl border border-white/20 bg-white/5 p-6" name="contact">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-xs uppercase tracking-[0.4em] text-slate-400">
                Nome
                <input required className="mt-2 w-full rounded-xl border border-white/30 bg-transparent px-3 py-3 text-sm text-white placeholder:text-slate-500 focus:border-fuchsia-300 focus:outline-none" placeholder="Seu nome" />
              </label>
              <label className="text-xs uppercase tracking-[0.4em] text-slate-400">
                Email
                <input required type="email" className="mt-2 w-full rounded-xl border border-white/30 bg-transparent px-3 py-3 text-sm text-white placeholder:text-slate-500 focus:border-fuchsia-300 focus:outline-none" placeholder="voce@email.com" />
              </label>
            </div>
            <label className="text-xs uppercase tracking-[0.4em] text-slate-400">
              Mensagem
              <textarea required rows={4} className="mt-2 w-full rounded-xl border border-white/30 bg-transparent px-3 py-3 text-sm text-white placeholder:text-slate-500 focus:border-fuchsia-300 focus:outline-none" placeholder="Conte sobre o que quer imprimir" />
            </label>
            <button type="submit" className="w-full rounded-2xl bg-gradient-to-r from-fuchsia-500 to-purple-600 px-5 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-white transition hover:scale-[1.01]">
              Enviar mensagem
            </button>
          </form>
        </section>

        <footer className="text-center text-xs uppercase tracking-[0.5em] text-slate-500">
          © 2026 Alfredo · Impressões 3D · Dark theme playground
        </footer>
      </div>
    </div>
  )
}

export default App
