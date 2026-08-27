import { Link, useParams } from "react-router-dom";
import capitulo1 from "../data/capitulos/capitulo1.json";

export default function Capitulo() {
  const { numero } = useParams();

  const capitulo = numero === "1" ? capitulo1 : null;

  if (!capitulo) {
    return (
      <div className="min-h-screen bg-slate-950 text-white p-10">
        <Link
          to="/"
          className="text-slate-400 hover:text-emerald-300"
        >
          ← Volver
        </Link>

        <div className="max-w-4xl mx-auto mt-20 text-center">
          <h1 className="text-3xl font-bold">
            Capítulo no encontrado
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 md:p-10">
      <div className="max-w-5xl mx-auto">

        {/* VOLVER */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-emerald-300 mb-10 transition-colors"
        >
          ← Volver al inicio
        </Link>

        {/* ENCABEZADO */}
        <header className="mb-14">
          <p className="text-emerald-300 text-sm uppercase tracking-[0.25em] mb-3">
            {capitulo.numero}
          </p>

          <h1 className="text-4xl md:text-6xl font-black tracking-tight">
            {capitulo.titulo}
          </h1>

          <div className="mt-8 border-l-4 border-emerald-400 pl-6">
            <p className="text-slate-300 text-lg leading-relaxed">
              {capitulo.introduccion}
            </p>
          </div>
        </header>

        {/* ÍNDICE DEL CAPÍTULO */}
        <div className="mb-14 rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
          <p className="text-xs text-emerald-300 uppercase tracking-widest mb-4">
            En este capítulo
          </p>

          <div className="grid md:grid-cols-2 gap-3">
            {capitulo.secciones.map((seccion) => (
              <a
                key={seccion.id}
                href={`#seccion-${seccion.id}`}
                className="text-slate-400 hover:text-emerald-300 transition-colors"
              >
                {seccion.id} — {seccion.titulo}
              </a>
            ))}
          </div>
        </div>

        {/* SECCIONES */}
        <main>
          {capitulo.secciones.map((seccion) => (
            <section
              key={seccion.id}
              id={`seccion-${seccion.id}`}
              className="mb-16 scroll-mt-10"
            >

              {/* TÍTULO */}
              <div className="flex items-start gap-4 mb-6">

                <span className="flex-shrink-0 w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center text-emerald-300 font-bold">
                  {seccion.id}
                </span>

                <div>
                  <p className="text-xs text-emerald-300 uppercase tracking-widest mb-1">
                    Sección
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold">
                    {seccion.titulo}
                  </h2>
                </div>

              </div>

              {/* PÁRRAFOS */}
              <div className="space-y-5">
                {seccion.parrafos?.map((parrafo, index) => (
                  <p
                    key={index}
                    className="text-slate-300 text-base md:text-lg leading-8 text-justify"
                  >
                    {parrafo}
                  </p>
                ))}
              </div>

              {/* CITAS */}
              {seccion.citas?.length > 0 && (
                <div className="mt-8 space-y-5">
                  {seccion.citas.map((cita, index) => (
                    <blockquote
                      key={index}
                      className="rounded-3xl border border-emerald-400/20 bg-emerald-500/5 p-6 md:p-8"
                    >
                      <div className="text-4xl text-emerald-300 mb-2">
                        “
                      </div>

                      <p className="text-slate-200 text-lg italic leading-8">
                        {cita.texto}
                      </p>

                      <footer className="mt-4 text-sm text-emerald-300">
                        {cita.fuente}
                      </footer>
                    </blockquote>
                  ))}
                </div>
              )}

              {/* DATOS */}
              {seccion.datos?.length > 0 && (
                <div className="grid md:grid-cols-2 gap-4 mt-8">

                  {seccion.datos.map((dato, index) => (
                    <div
                      key={index}
                      className="rounded-3xl border border-slate-800 bg-slate-900 p-6"
                    >
                      <p className="text-4xl font-black text-emerald-300">
                        {dato.valor}
                      </p>

                      <p className="text-slate-300 mt-3 leading-relaxed">
                        {dato.descripcion}
                      </p>

                      <p className="text-xs text-slate-500 mt-4">
                        {dato.fuente}
                      </p>
                    </div>
                  ))}

                </div>
              )}

              {/* FIGURAS */}
              {seccion.figuras?.length > 0 && (
                <div className="mt-10 space-y-8">

                  {seccion.figuras.map((figura, index) => (
                    <figure
                      key={index}
                      className="rounded-3xl border border-slate-800 bg-slate-900 overflow-hidden"
                    >

                      <img
                        src={figura.imagen}
                        alt={figura.titulo}
                        className="w-full max-h-[600px] object-contain bg-slate-950"
                      />

                      <figcaption className="p-6">
                        <p className="text-sm font-semibold text-slate-200">
                          {figura.numero}
                        </p>

                        <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                          {figura.titulo}
                        </p>

                        <p className="text-xs text-slate-500 mt-3">
                          {figura.fuente}
                        </p>
                      </figcaption>

                    </figure>
                  ))}

                </div>
              )}

            </section>
          ))}
        </main>

        {/* FINAL */}
        <div className="border-t border-slate-800 pt-8 mt-16">

          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-2xl bg-emerald-500/10 border border-emerald-400/30 px-5 py-3 text-emerald-300 font-semibold hover:bg-emerald-500/20 transition"
          >
            ← Volver al índice de la investigación
          </Link>

        </div>

      </div>
    </div>
  );
}