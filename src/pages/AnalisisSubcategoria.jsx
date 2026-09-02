import { Link, useParams } from "react-router-dom";
import entrevistas from "../data/entrevistas.json";
import triangulacion from "../data/triangulacion.json";
import teoria from "../data/teoria.json";

export default function AnalisisSubcategoria() {
  const { nombre } = useParams();

  const nombreSubcategoria = decodeURIComponent(nombre);

  const evidencias = entrevistas.filter(
    (e) => e.subcategoria === nombreSubcategoria
  );

  const triangulacionItem = triangulacion.find(
    (t) => t.categoria === nombreSubcategoria
  );

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="max-w-6xl mx-auto px-6 py-10">

        {/* VOLVER */}
        <Link
          to="/categoria/2"
          className="inline-block mb-8 text-cyan-400 hover:text-cyan-300"
        >
          ← Volver a la categoría
        </Link>

        {/* ENCABEZADO */}
        <header className="mb-10">
          <p className="text-sm uppercase tracking-wider text-cyan-400">
            Análisis de subcategoría
          </p>

          <h1 className="text-4xl font-bold mt-2">
            {nombreSubcategoria}
          </h1>

          <p className="text-slate-400 mt-3 max-w-3xl">
            Reconstrucción del proceso de reducción, contraste y triangulación
            de los datos de investigación.
          </p>
        </header>

        {/* FLUJO */}
        <div className="space-y-6">

          {/* 01 DATOS */}
          <section className="rounded-2xl border border-violet-500/30 bg-violet-500/5 p-6">

            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center font-bold">
                01
              </span>

              <div>
                <p className="text-xs uppercase tracking-wider text-violet-400">
                  Datos empíricos
                </p>

                <h2 className="text-2xl font-bold">
                  Evidencias de las entrevistas
                </h2>
              </div>
            </div>

            <div className="grid gap-4">

              {evidencias.length === 0 ? (
                <p className="text-slate-400">
                  No hay entrevistas asociadas a esta subcategoría.
                </p>
              ) : (
                evidencias.map((evidencia) => (
                  <div
                    key={evidencia.codigo}
                    className="rounded-xl bg-slate-950/70 border border-slate-800 p-5"
                  >
                    <div className="flex flex-wrap justify-between gap-2 mb-3">

                      <span className="font-bold text-violet-400">
                        {evidencia.codigo}
                      </span>

                      <span className="text-sm text-slate-500">
                        {evidencia.actor}
                      </span>

                    </div>

                    <p className="text-lg text-slate-200 leading-relaxed">
                      “{evidencia.cita}”
                    </p>

                    <p className="text-xs text-slate-500 mt-3">
                      {evidencia.fuente}
                    </p>
                  </div>
                ))
              )}

            </div>
          </section>

          {/* FLECHA */}
          <div className="text-center text-cyan-400 text-2xl">
            ↓
          </div>

          {/* 02 ENCUESTA */}
          <section className="rounded-2xl border border-blue-500/30 bg-blue-500/5 p-6">

            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center font-bold">
                02
              </span>

              <div>
                <p className="text-xs uppercase tracking-wider text-blue-400">
                  Contraste
                </p>

                <h2 className="text-2xl font-bold">
                  Encuestas
                </h2>
              </div>
            </div>

            {triangulacionItem?.encuestas?.length ? (
              <div className="flex flex-wrap gap-3">
                {triangulacionItem.encuestas.map((encuesta) => (
                  <span
                    key={encuesta}
                    className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-blue-300 font-semibold"
                  >
                    {encuesta}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-slate-400">
                No hay encuestas asociadas a esta unidad de análisis.
              </p>
            )}

          </section>

          {/* FLECHA */}
          <div className="text-center text-cyan-400 text-2xl">
            ↓
          </div>

          {/* 03 TEORIA */}
          <section className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-6">

            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center font-bold">
                03
              </span>

              <div>
                <p className="text-xs uppercase tracking-wider text-emerald-400">
                  Marco teórico
                </p>

                <h2 className="text-2xl font-bold">
                  Referentes teóricos
                </h2>
              </div>
            </div>

            {triangulacionItem?.teoria?.length ? (
              <div className="grid md:grid-cols-2 gap-4">

                {triangulacionItem.teoria.map((autor) => {

                  const autorData = teoria.find(
                    (t) =>
                      t.autor === autor ||
                      t.nombre === autor ||
                      t.titulo === autor
                  );

                  return (
                    <div
                      key={autor}
                      className="rounded-xl bg-slate-950/70 border border-slate-800 p-5"
                    >
                      <h3 className="text-xl font-bold text-emerald-400">
                        {autor}
                      </h3>

                      {autorData?.concepto && (
                        <p className="text-slate-300 mt-3 leading-relaxed">
                          {autorData.concepto}
                        </p>
                      )}

                      {autorData?.descripcion && (
                        <p className="text-slate-300 mt-3 leading-relaxed">
                          {autorData.descripcion}
                        </p>
                      )}
                    </div>
                  );
                })}

              </div>
            ) : (
              <p className="text-slate-400">
                No hay referentes teóricos asociados.
              </p>
            )}

          </section>

          {/* FLECHA */}
          <div className="text-center text-cyan-400 text-2xl">
            ↓
          </div>

          {/* 04 TRIANGULACION */}
          <section className="rounded-2xl border border-cyan-500/30 bg-cyan-500/5 p-6">

            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center font-bold">
                04
              </span>

              <div>
                <p className="text-xs uppercase tracking-wider text-cyan-400">
                  Triangulación
                </p>

                <h2 className="text-2xl font-bold">
                  Cruce de evidencias
                </h2>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">

              <div className="rounded-xl bg-slate-900 p-5 border border-slate-800">
                <p className="text-sm text-slate-500">
                  Entrevistas
                </p>

                <p className="text-3xl font-bold text-violet-400 mt-2">
                  {triangulacionItem?.entrevistas?.length || 0}
                </p>
              </div>

              <div className="rounded-xl bg-slate-900 p-5 border border-slate-800">
                <p className="text-sm text-slate-500">
                  Encuestas
                </p>

                <p className="text-3xl font-bold text-blue-400 mt-2">
                  {triangulacionItem?.encuestas?.length || 0}
                </p>
              </div>

              <div className="rounded-xl bg-slate-900 p-5 border border-slate-800">
                <p className="text-sm text-slate-500">
                  Referentes teóricos
                </p>

                <p className="text-3xl font-bold text-emerald-400 mt-2">
                  {triangulacionItem?.teoria?.length || 0}
                </p>
              </div>

            </div>

          </section>

          {/* FLECHA */}
          <div className="text-center text-cyan-400 text-2xl">
            ↓
          </div>

          {/* 05 INTERPRETACION */}
          <section className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-6">

            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center font-bold">
                05
              </span>

              <div>
                <p className="text-xs uppercase tracking-wider text-amber-400">
                  Resultado del análisis
                </p>

                <h2 className="text-2xl font-bold">
                  Interpretación
                </h2>
              </div>
            </div>

            {triangulacionItem?.interpretacion ? (
              <blockquote className="text-xl md:text-2xl text-slate-200 leading-relaxed border-l-4 border-amber-400 pl-5">
                “{triangulacionItem.interpretacion}”
              </blockquote>
            ) : (
              <p className="text-slate-400">
                Todavía no hay una interpretación registrada.
              </p>
            )}

          </section>

        </div>

        {/* CIERRE */}
        <div className="mt-12 text-center">

          <p className="text-slate-500 text-sm">
            Este recorrido permite visualizar la trazabilidad del análisis
            cualitativo y el proceso mediante el cual las evidencias fueron
            integradas para construir la interpretación.
          </p>

          <Link
            to="/categoria/2"
            className="inline-block mt-6 px-5 py-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 transition"
          >
            ← Volver a Liderazgo pedagógico
          </Link>

        </div>

      </main>
    </div>
  );
}