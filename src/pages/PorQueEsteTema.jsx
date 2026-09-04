import { Link } from "react-router-dom";

export default function PorQueEsteTema() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 md:p-10">

      <div className="max-w-6xl mx-auto">

        <Link
          to="/"
          className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 text-sm mb-8"
        >
          ← Volver al inicio
        </Link>

        <div className="mb-8">

          <p className="text-amber-300 text-[10px] uppercase tracking-[0.25em] mb-2">
            Origen de la investigación
          </p>

          <h1 className="text-3xl md:text-5xl font-black">
            ¿Por qué este tema?
          </h1>

          <p className="text-slate-400 mt-3 max-w-3xl">
            Fundamentación de la elección del tema de investigación.
          </p>

        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

          <h2 className="text-2xl font-bold">
            La elección del tema
          </h2>

          <p className="text-slate-400 leading-relaxed mt-4">
            La elección del tema constituye una decisión central en el proceso
            de investigación. En este estudio, el interés se orienta a
            comprender el rol de la gestión directiva en la promoción de las
            tecnologías de la información y la comunicación en una institución
            educativa concreta.
          </p>

          <p className="text-slate-400 leading-relaxed mt-4">
            La selección considera el interés del investigador, la relevancia
            del problema, la posibilidad de abordarlo en un contexto real y la
            factibilidad de desarrollar el estudio de acuerdo con los tiempos,
            recursos y posibilidades disponibles.
          </p>

          <div className="grid md:grid-cols-4 gap-3 mt-6">

            <div className="rounded-xl bg-slate-950 border border-slate-800 p-4">
              <p className="text-2xl font-black text-amber-300">
                Interés
              </p>
              <p className="text-xs text-slate-500 mt-2">
                Motivación por comprender el fenómeno estudiado.
              </p>
            </div>

            <div className="rounded-xl bg-slate-950 border border-slate-800 p-4">
              <p className="text-2xl font-black text-orange-300">
                Relevancia
              </p>
              <p className="text-xs text-slate-500 mt-2">
                Pertinencia educativa e institucional del problema.
              </p>
            </div>

            <div className="rounded-xl bg-slate-950 border border-slate-800 p-4">
              <p className="text-2xl font-black text-cyan-300">
                Factibilidad
              </p>
              <p className="text-xs text-slate-500 mt-2">
                Posibilidad concreta de realizar la investigación.
              </p>
            </div>

            <div className="rounded-xl bg-slate-950 border border-slate-800 p-4">
              <p className="text-2xl font-black text-violet-300">
                Delimitación
              </p>
              <p className="text-xs text-slate-500 mt-2">
                Definición del caso, actores y período de estudio.
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}