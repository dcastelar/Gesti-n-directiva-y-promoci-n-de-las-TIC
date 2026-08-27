import categorias from '../data/categorias.json'
import entrevistas from '../data/entrevistas.json'
import teoria from '../data/teoria.json'
import triangulacion from '../data/triangulacion.json'

export default function CategoriaGestion() {
  const categoria = categorias.find(
    (c) => c.id === 'gestion-directiva'
  )

  const entrevistasRelacionadas = entrevistas.filter(
    (e) => e.categoria === 'gestion-directiva'
  )

  const triangulo = triangulacion[0]

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 md:p-10">
      <div className="max-w-7xl mx-auto space-y-10">

        {/* HERO */}
        <section className="rounded-[32px] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 md:p-10 overflow-hidden relative">
          <div className="absolute top-0 right-0 h-72 w-72 bg-cyan-500/10 blur-3xl rounded-full"></div>

          <div className="relative z-10">
            <p className="text-cyan-300 uppercase tracking-[0.25em] text-sm mb-4">
              Categoría principal
            </p>

            <h1 className="text-4xl md:text-6xl font-black leading-tight max-w-5xl">
              {categoria.titulo}
            </h1>

            <p className="mt-6 text-slate-300 text-lg max-w-3xl leading-relaxed">
              {categoria.descripcion}
            </p>
          </div>
        </section>

        {/* SUBCATEGORÍAS */}
        <section>
          <h2 className="text-3xl font-black mb-6">
            Subcategorías
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            {categoria.subcategorias.map((sub, index) => (
              <div
                key={index}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-6 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-3 w-3 rounded-full bg-cyan-400 mb-4"></div>

                <h3 className="text-xl font-bold leading-snug">
                  {sub}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* TEORÍA */}
        <section>
          <h2 className="text-3xl font-black mb-6">
            Fundamentación teórica
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {teoria.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-black">
                    {item.autor}
                  </h3>

                  <div className="rounded-full bg-cyan-500/10 border border-cyan-400/20 px-3 py-1 text-sm text-cyan-300">
                    {item.anio}
                  </div>
                </div>

                <p className="text-cyan-300 mb-3 font-semibold">
                  {item.concepto}
                </p>

                <p className="text-slate-300 leading-relaxed">
                  {item.descripcion}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* EVIDENCIAS */}
        <section>
          <h2 className="text-3xl font-black mb-6">
            Evidencias empíricas
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {entrevistasRelacionadas.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6"
              >
                <div className="text-5xl text-cyan-400 opacity-30 mb-4">
                  “
                </div>

                <p className="text-lg leading-relaxed text-slate-200 min-h-[120px]">
                  {item.cita}
                </p>

                <div className="mt-8 flex items-center justify-between">
                  <div>
                    <p className="font-bold">
                      {item.actor}
                    </p>

                    <p className="text-sm text-slate-400">
                      {item.codigo}
                    </p>
                  </div>

                  <div className="rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-300">
                    {item.subcategoria}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TRIANGULACIÓN */}
        <section className="rounded-[32px] border border-slate-800 bg-slate-900 p-8">
          <p className="text-cyan-300 uppercase tracking-[0.25em] text-sm mb-4">
            Triangulación
          </p>

          <h2 className="text-4xl font-black mb-8">
            Integración interpretativa
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-8">

            <div className="rounded-3xl bg-slate-950 border border-slate-800 p-6">
              <h3 className="text-xl font-bold mb-4">
                Teoría
              </h3>

              <div className="space-y-3">
                {triangulo.teoria.map((t, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl bg-slate-900 px-4 py-3 text-slate-300"
                  >
                    {t}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-slate-950 border border-slate-800 p-6">
              <h3 className="text-xl font-bold mb-4">
                Entrevistas
              </h3>

              <div className="space-y-3">
                {triangulo.entrevistas.map((t, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl bg-slate-900 px-4 py-3 text-slate-300"
                  >
                    {t}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-slate-950 border border-slate-800 p-6">
              <h3 className="text-xl font-bold mb-4">
                Encuestas
              </h3>

              <div className="space-y-3">
                {triangulo.encuestas.map((t, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl bg-slate-900 px-4 py-3 text-slate-300"
                  >
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-500/5 p-8">
            <h3 className="text-2xl font-black mb-4">
              Interpretación preliminar
            </h3>

            <p className="text-lg leading-relaxed text-slate-200">
              {triangulo.interpretacion}
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}