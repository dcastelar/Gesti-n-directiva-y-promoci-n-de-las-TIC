import { Link } from "react-router-dom";

export default function Metodologia() {
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
          <p className="text-cyan-300 text-[10px] uppercase tracking-[0.25em] mb-2">
            Diseño de la investigación
          </p>

          <h1 className="text-3xl md:text-5xl font-black">
            Marco metodológico
          </h1>

          <p className="text-slate-400 mt-3 max-w-3xl">
            Enfoque, método, técnicas de recolección de datos y unidades de
            análisis de la investigación.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-cyan-300 text-xs uppercase tracking-wider">
              01 · Enfoque
            </p>

            <h2 className="text-2xl font-bold mt-2">
              Investigación cualitativa
            </h2>

            <p className="text-slate-400 mt-3 leading-relaxed">
              Permite comprender significados, percepciones y experiencias
              de los actores institucionales en su contexto natural.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-violet-300 text-xs uppercase tracking-wider">
              02 · Tipo de estudio
            </p>

            <h2 className="text-2xl font-bold mt-2">
              Exploratorio-descriptivo
            </h2>

            <p className="text-slate-400 mt-3 leading-relaxed">
              Estudio de corte transversal orientado a describir y comprender
              las estrategias y acciones desarrolladas por la gestión directiva.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-emerald-300 text-xs uppercase tracking-wider">
              03 · Método
            </p>

            <h2 className="text-2xl font-bold mt-2">
              Estudio de caso
            </h2>

            <p className="text-slate-400 mt-3 leading-relaxed">
              La Escuela Primaria N.º 4774 “General Juan José Valle” constituye
              el caso delimitado para comprender la gestión de las TIC en su
              contexto institucional.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-orange-300 text-xs uppercase tracking-wider">
              04 · Técnicas
            </p>

            <h2 className="text-2xl font-bold mt-2">
              Triangulación metodológica
            </h2>

            <p className="text-slate-400 mt-3 leading-relaxed">
              Se articulan entrevistas semiestructuradas, encuestas y análisis
              documental para construir una mirada multidimensional.
            </p>
          </div>

        </div>

        <div className="mt-4 rounded-2xl border border-slate-800 bg-slate-900 p-6">

          <p className="text-cyan-300 text-xs uppercase tracking-wider">
            Unidad de análisis
          </p>

          <h2 className="text-2xl font-bold mt-2">
            Actores institucionales
          </h2>

          <div className="grid md:grid-cols-3 gap-4 mt-6">

            <div className="rounded-xl bg-slate-950 border border-slate-800 p-5">
              <p className="text-4xl font-black text-cyan-300">2</p>
              <p className="text-xs uppercase tracking-wider text-slate-500 mt-1">
                Gestión directiva
              </p>
              <p className="text-sm text-slate-400 mt-3">
                Directora y vicedirectora.
              </p>
            </div>

            <div className="rounded-xl bg-slate-950 border border-slate-800 p-5">
              <p className="text-4xl font-black text-violet-300">3</p>
              <p className="text-xs uppercase tracking-wider text-slate-500 mt-1">
                Docentes
              </p>
              <p className="text-sm text-slate-400 mt-3">
                Un docente por cada ciclo.
              </p>
            </div>

            <div className="rounded-xl bg-slate-950 border border-slate-800 p-5">
              <p className="text-4xl font-black text-emerald-300">1</p>
              <p className="text-xs uppercase tracking-wider text-slate-500 mt-1">
                Personal administrativo
              </p>
              <p className="text-sm text-slate-400 mt-3">
                Vinculado al soporte y gestión operativa de las TIC.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}