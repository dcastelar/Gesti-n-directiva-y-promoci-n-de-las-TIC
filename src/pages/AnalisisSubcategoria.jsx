import { Link, useParams } from "react-router-dom";

import matrizAnalisis from "../data/matrizAnalisis.json";
import teoria from "../data/teoria.json";

export default function AnalisisSubcategoria() {
  const { nombre } = useParams();

  const nombreSubcategoria = decodeURIComponent(nombre || "");

  // ============================================================
  // BUSCAR LA UNIDAD DE ANÁLISIS EN LA MATRIZ
  // ============================================================

  const categorias = matrizAnalisis.categorias || [];

  const unidades = categorias.flatMap((categoria) =>
    (categoria.unidades || []).map((unidad) => ({
      ...unidad,
      categoria: categoria.nombre,
      categoriaId: categoria.id,
      categoriaSlug: categoria.slug,
    }))
  );

  const unidad = unidades.find(
    (u) => u.subcategoria === nombreSubcategoria
  );

  // ============================================================
  // DATOS DE LA UNIDAD
  // ============================================================

  const categoriaId = unidad ? unidad.categoriaId : 2;

  const entrevistas = unidad?.entrevistas || [];
  const encuestas = unidad?.encuesta || [];
  const evidenciasAdicionales = unidad?.evidencias_adicionales || [];
  const documentos = unidad?.documentos || [];
  const teorias = unidad?.teoria || [];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="max-w-6xl mx-auto px-6 py-10">

        {/* VOLVER */}
        <Link
          to={`/categoria/${categoriaId}`}
          className="inline-block mb-8 text-cyan-400 hover:text-cyan-300"
        >
          ← Volver a la categoría
        </Link>

        {/* =====================================================
            ENCABEZADO
        ====================================================== */}

        <header className="mb-10">
          <p className="text-sm uppercase tracking-wider text-cyan-400">
            Trazabilidad del análisis
          </p>

          <h1 className="text-4xl font-bold mt-2">
            {unidad?.subcategoria || nombreSubcategoria}
          </h1>

          {unidad && (
            <>
              <p className="text-cyan-300 mt-3">
                Categoría: {unidad.categoria}
              </p>

              {unidad.pregunta && (
                <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                  <p className="text-xs uppercase tracking-wider text-slate-500 mb-2">
                    Pregunta de análisis
                  </p>

                  <p className="text-lg text-slate-200 leading-relaxed">
                    {unidad.pregunta}
                  </p>
                </div>
              )}
            </>
          )}

          {!unidad && (
            <p className="text-slate-400 mt-4">
              No se encontró esta unidad de análisis en la matriz.
            </p>
          )}
        </header>

        {unidad && (
          <div className="space-y-6">

            {/* =================================================
                01 DEFINICIÓN TEÓRICA
            ================================================== */}

            <section className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-6">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center font-bold">
                  01
                </span>

                <div>
                  <p className="text-xs uppercase tracking-wider text-emerald-400">
                    Marco conceptual
                  </p>

                  <h2 className="text-2xl font-bold">
                    Definición teórica
                  </h2>
                </div>
              </div>

              <p className="text-slate-300 text-lg leading-relaxed">
                {unidad.definicion_teorica || (
                  <span className="text-slate-500">
                    No hay definición teórica registrada.
                  </span>
                )}
              </p>
            </section>

            {/* FLECHA */}

            <div className="text-center text-cyan-400 text-2xl">
              ↓
            </div>

            {/* =================================================
                02 ENTREVISTAS
            ================================================== */}

            <section className="rounded-2xl border border-violet-500/30 bg-violet-500/5 p-6">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center font-bold">
                  02
                </span>

                <div>
                  <p className="text-xs uppercase tracking-wider text-violet-400">
                    Datos empíricos
                  </p>

                  <h2 className="text-2xl font-bold">
                    Entrevistas
                  </h2>
                </div>
              </div>

              {entrevistas.length > 0 ? (
                <div className="grid gap-4">
                  {entrevistas.map((item, index) => (
                    <div
                      key={`${item.codigo || "entrevista"}-${index}`}
                      className="rounded-xl bg-slate-950/70 border border-slate-800 p-5"
                    >
                      <div className="flex flex-wrap justify-between gap-2 mb-3">
                        <span className="font-bold text-violet-400">
                          {item.codigo}
                        </span>

                        <span className="text-sm text-slate-500">
                          {item.actor}
                        </span>
                      </div>

                      <p className="text-lg text-slate-200 leading-relaxed">
                        “{item.extracto}”
                      </p>

                      <p className="text-xs text-slate-500 mt-3">
                        {item.fuente}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-slate-400">
                  No hay entrevistas asociadas a esta unidad.
                </p>
              )}
            </section>

            {/* FLECHA */}

            <div className="text-center text-cyan-400 text-2xl">
              ↓
            </div>

            {/* =================================================
                03 ENCUESTAS
            ================================================== */}

            <section className="rounded-2xl border border-blue-500/30 bg-blue-500/5 p-6">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center font-bold">
                  03
                </span>

                <div>
                  <p className="text-xs uppercase tracking-wider text-blue-400">
                    Contraste cuantitativo
                  </p>

                  <h2 className="text-2xl font-bold">
                    Encuestas
                  </h2>
                </div>
              </div>

              {encuestas.length > 0 ? (
                <div className="grid gap-4">
                  {encuestas.map((item, index) => (
                    <div
                      key={`${item.codigo || "encuesta"}-${index}`}
                      className="rounded-xl bg-slate-950/70 border border-slate-800 p-5"
                    >
                      <div className="flex flex-wrap justify-between gap-2 mb-3">
                        <span className="font-bold text-blue-400">
                          {item.codigo}
                        </span>

                        <span className="text-sm text-slate-500">
                          {item.fuente}
                        </span>
                      </div>

                      <p className="text-lg text-slate-200 leading-relaxed">
                        {item.resultado}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-slate-400">
                  No hay resultados de encuesta asociados a esta unidad.
                </p>
              )}
            </section>

            {/* FLECHA */}

            <div className="text-center text-cyan-400 text-2xl">
              ↓
            </div>

            {/* =================================================
                04 EVIDENCIAS ADICIONALES
            ================================================== */}

            <section className="rounded-2xl border border-orange-500/30 bg-orange-500/5 p-6">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center font-bold">
                  04
                </span>

                <div>
                  <p className="text-xs uppercase tracking-wider text-orange-400">
                    Evidencia complementaria
                  </p>

                  <h2 className="text-2xl font-bold">
                    Evidencias adicionales
                  </h2>
                </div>
              </div>

              {evidenciasAdicionales.length > 0 ? (
                <div className="grid gap-4">
                  {evidenciasAdicionales.map((item, index) => (
                    <div
                      key={`${item.codigo || "evidencia"}-${index}`}
                      className="rounded-xl bg-slate-950/70 border border-slate-800 p-5"
                    >
                      <div className="flex flex-wrap justify-between gap-2 mb-3">
                        <span className="font-bold text-orange-400">
                          {item.codigo}
                        </span>

                        <span className="text-sm text-slate-500">
                          {item.actor || item.fuente}
                        </span>
                      </div>

                      {item.extracto && (
                        <p className="text-lg text-slate-200 leading-relaxed">
                          “{item.extracto}”
                        </p>
                      )}

                      {item.resultado && (
                        <p className="text-lg text-slate-200 leading-relaxed">
                          {item.resultado}
                        </p>
                      )}

                      <p className="text-xs text-slate-500 mt-3">
                        {item.fuente}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-slate-400">
                  No hay evidencias adicionales registradas.
                </p>
              )}
            </section>

            {/* FLECHA */}

            <div className="text-center text-cyan-400 text-2xl">
              ↓
            </div>

            {/* =================================================
                05 DOCUMENTOS
            ================================================== */}

            <section className="rounded-2xl border border-sky-500/30 bg-sky-500/5 p-6">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-10 rounded-xl bg-sky-500/20 flex items-center justify-center font-bold">
                  05
                </span>

                <div>
                  <p className="text-xs uppercase tracking-wider text-sky-400">
                    Análisis documental
                  </p>

                  <h2 className="text-2xl font-bold">
                    Documentos
                  </h2>
                </div>
              </div>

              {documentos.length > 0 ? (
                <div className="grid gap-4">
                  {documentos.map((documento, index) => (
                    <div
                      key={index}
                      className="rounded-xl bg-slate-950/70 border border-slate-800 p-5"
                    >
                      <p className="text-slate-200">
                        {typeof documento === "string"
                          ? documento
                          : documento.nombre ||
                            documento.fuente ||
                            JSON.stringify(documento)}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-slate-400">
                  No hay documentos asociados a esta unidad.
                </p>
              )}
            </section>

            {/* FLECHA */}

            <div className="text-center text-cyan-400 text-2xl">
              ↓
            </div>

            {/* =================================================
                06 MARCO TEÓRICO
            ================================================== */}

            <section className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-6">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center font-bold">
                  06
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

              {teorias.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-4">
                  {teorias.map((autor, index) => {
                    const autorData = teoria.find(
                      (t) =>
                        t.autor === autor ||
                        t.nombre === autor ||
                        t.titulo === autor
                    );

                    return (
                      <div
                        key={`${autor}-${index}`}
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

                        {!autorData && (
                          <p className="text-slate-500 mt-3">
                            Referente teórico registrado en la matriz.
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

            {/* =================================================
                07 TRIANGULACIÓN / INTERPRETACIÓN
            ================================================== */}

            <section className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-6">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center font-bold">
                  07
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

              {unidad.interpretacion ? (
                <blockquote className="text-xl md:text-2xl text-slate-200 leading-relaxed border-l-4 border-amber-400 pl-5">
                  “{unidad.interpretacion}”
                </blockquote>
              ) : (
                <p className="text-slate-400">
                  Todavía no hay una interpretación registrada.
                </p>
              )}
            </section>

            {/* =================================================
                RESUMEN DE TRAZABILIDAD
            ================================================== */}

            <section className="rounded-2xl border border-cyan-500/30 bg-cyan-500/5 p-6">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center font-bold">
                  ✓
                </span>

                <div>
                  <p className="text-xs uppercase tracking-wider text-cyan-400">
                    Trazabilidad
                  </p>

                  <h2 className="text-2xl font-bold">
                    Resumen de la unidad de análisis
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">

                <div className="rounded-xl bg-slate-900 p-4 border border-slate-800">
                  <p className="text-xs text-slate-500">
                    Entrevistas
                  </p>

                  <p className="text-3xl font-bold text-violet-400 mt-2">
                    {entrevistas.length}
                  </p>
                </div>

                <div className="rounded-xl bg-slate-900 p-4 border border-slate-800">
                  <p className="text-xs text-slate-500">
                    Encuestas
                  </p>

                  <p className="text-3xl font-bold text-blue-400 mt-2">
                    {encuestas.length}
                  </p>
                </div>

                <div className="rounded-xl bg-slate-900 p-4 border border-slate-800">
                  <p className="text-xs text-slate-500">
                    Evidencias
                  </p>

                  <p className="text-3xl font-bold text-orange-400 mt-2">
                    {evidenciasAdicionales.length}
                  </p>
                </div>

                <div className="rounded-xl bg-slate-900 p-4 border border-slate-800">
                  <p className="text-xs text-slate-500">
                    Documentos
                  </p>

                  <p className="text-3xl font-bold text-sky-400 mt-2">
                    {documentos.length}
                  </p>
                </div>

                <div className="rounded-xl bg-slate-900 p-4 border border-slate-800">
                  <p className="text-xs text-slate-500">
                    Teoría
                  </p>

                  <p className="text-3xl font-bold text-emerald-400 mt-2">
                    {teorias.length}
                  </p>
                </div>

              </div>
            </section>

          </div>
        )}

        {/* =====================================================
            CIERRE
        ====================================================== */}

        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm max-w-3xl mx-auto">
            Este recorrido permite visualizar la trazabilidad del análisis
            cualitativo: desde la pregunta y la definición teórica, pasando
            por las evidencias empíricas y el contraste de fuentes, hasta
            llegar a la interpretación construida a partir de los datos.
          </p>

          <Link
            to={`/categoria/${categoriaId}`}
            className="inline-block mt-6 px-5 py-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 transition"
          >
            {unidad ? unidad.categoria : "la categoría"}
          </Link>
        </div>

      </main>
    </div>
  );
}