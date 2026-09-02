import { Link, useParams } from "react-router-dom";
import categorias from "../data/categorias.json";
import entrevistas from "../data/entrevistas.json";
import triangulacion from "../data/triangulacion.json";
import teoria from "../data/teoria.json";

export default function CategoriaGestion() {
  const { id } = useParams();

  const categoria = categorias.find((c) => c.id === Number(id));

  if (!categoria) {
    return (
      <div className="min-h-screen bg-slate-950 text-white p-8">
        <h1 className="text-2xl font-bold">Categoría no encontrada</h1>

        <Link
          to="/"
          className="inline-block mt-6 text-cyan-400 hover:text-cyan-300"
        >
          ← Volver al inicio
        </Link>
      </div>
    );
  }

  /*
   * Relación entre el ID de la categoría general
   * y la categoría utilizada actualmente en la base
   * de entrevistas.
   */
  const categoriasEntrevistas = {
    1: "contextualizacion",
    2: "gestion-directiva",
    3: "estrategias",
    4: "desafios-oportunidades",
  };

  const categoriaEntrevista = categoriasEntrevistas[categoria.id];

  /*
   * Recuperamos las entrevistas correspondientes
   * a la categoría seleccionada.
   */
  const entrevistasRelacionadas = entrevistas.filter(
    (e) => e.categoria === categoriaEntrevista
  );

  /*
   * Subcategorías reales provenientes de los datos.
   * No las inventamos desde la interfaz.
   */
  const subcategoriasEntrevistas = [
    ...new Set(
      entrevistasRelacionadas
        .map((e) => e.subcategoria)
        .filter(Boolean)
    ),
  ];

  /*
   * También buscamos las categorías/unidades analíticas
   * presentes en la triangulación.
   */
  const triangulacionesRelacionadas = triangulacion.filter((t) =>
    subcategoriasEntrevistas.includes(t.categoria)
  );

  /*
   * Unimos las subcategorías provenientes de entrevistas
   * y triangulación.
   */
  const subcategoriasTriangulacion = triangulacion
    .map((t) => t.categoria)
    .filter(Boolean);

  const subcategorias = [
    ...new Set([
      ...subcategoriasEntrevistas,
      ...subcategoriasTriangulacion,
    ]),
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="max-w-7xl mx-auto px-6 py-10">

        {/* ENCABEZADO */}
        <div className="mb-10">
          <Link
            to="/"
            className="inline-block mb-6 text-cyan-400 hover:text-cyan-300"
          >
            ← Volver al inicio
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-2xl">
              {categoria.id}
            </div>

            <div>
              <p className="text-sm text-cyan-400 uppercase tracking-wider">
                Categoría {categoria.id}
              </p>

              <h1 className="text-3xl md:text-4xl font-bold">
                {categoria.titulo}
              </h1>
            </div>
          </div>

          <p className="text-slate-300 max-w-4xl text-lg leading-relaxed">
            {categoria.descripcion}
          </p>
        </div>

        {/* RESUMEN DE DATOS */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <p className="text-sm text-slate-400">
              Subcategorías / unidades analíticas
            </p>

            <p className="text-3xl font-bold mt-2 text-cyan-400">
              {subcategorias.length}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <p className="text-sm text-slate-400">
              Evidencias de entrevistas
            </p>

            <p className="text-3xl font-bold mt-2 text-violet-400">
              {entrevistasRelacionadas.length}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <p className="text-sm text-slate-400">
              Triangulaciones
            </p>

            <p className="text-3xl font-bold mt-2 text-emerald-400">
              {triangulacionesRelacionadas.length}
            </p>
          </div>

        </section>

        {/* SUBCATEGORÍAS */}
        <section className="mb-12">

          <div className="mb-6">
            <p className="text-sm text-cyan-400 uppercase tracking-wider">
              Reducción de datos
            </p>

            <h2 className="text-2xl font-bold mt-1">
              Subcategorías y unidades de análisis
            </h2>

            <p className="text-slate-400 mt-2">
              Estas unidades se recuperan de los datos analizados y permiten
              avanzar desde las evidencias empíricas hacia la interpretación.
            </p>
          </div>

          {subcategorias.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-900/50 p-8 text-center">
              <p className="text-slate-400">
                Todavía no hay subcategorías registradas para esta categoría.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

              {subcategorias.map((subcategoria) => {

                const evidencias = entrevistasRelacionadas.filter(
                  (e) => e.subcategoria === subcategoria
                );

                const triangulacionItem = triangulacion.find(
                  (t) => t.categoria === subcategoria
                );

                return (
                 <Link
                      key={subcategoria}
                      to={`/analisis/${encodeURIComponent(subcategoria)}`}
                      className="group block rounded-2xl border border-slate-800 bg-slate-900 p-6 hover:border-cyan-500/50 hover:bg-slate-900/80 transition"
                    >

                    <div className="flex items-start justify-between gap-4">

                      <div>
                        <p className="text-xs uppercase tracking-wider text-cyan-400">
                          Unidad de análisis
                        </p>

                        <h3 className="text-xl font-semibold mt-2">
                          {subcategoria}
                        </h3>
                      </div>

                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                        🔎
                      </div>

                    </div>

                    <div className="mt-5 space-y-2 text-sm">

                      <div className="flex justify-between">
                        <span className="text-slate-400">
                          Entrevistas
                        </span>

                        <span className="font-semibold text-white">
                          {evidencias.length}
                        </span>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-slate-400">
                          Teoría
                        </span>

                        <span className="font-semibold text-white">
                          {triangulacionItem?.teoria?.length || 0}
                        </span>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-slate-400">
                          Encuestas
                        </span>

                        <span className="font-semibold text-white">
                          {triangulacionItem?.encuestas?.length || 0}
                        </span>
                      </div>

                    </div>

                    {/* EVIDENCIAS */}
                    {evidencias.length > 0 && (
                      <div className="mt-5 pt-5 border-t border-slate-800">

                        <p className="text-xs uppercase tracking-wider text-slate-500 mb-3">
                          Evidencias
                        </p>

                        <div className="space-y-3">

                          {evidencias.map((evidencia) => (
                            <div
                              key={evidencia.codigo}
                              className="rounded-xl bg-slate-950/70 p-3"
                            >
                              <div className="flex justify-between gap-3 mb-1">

                                <span className="text-xs font-semibold text-violet-400">
                                  {evidencia.codigo}
                                </span>

                                <span className="text-xs text-slate-500">
                                  {evidencia.actor}
                                </span>

                              </div>

                              <p className="text-sm text-slate-300 leading-relaxed">
                                “{evidencia.cita}”
                              </p>

                              <p className="text-xs text-slate-600 mt-2">
                                {evidencia.fuente}
                              </p>
                            </div>
                          ))}

                        </div>

                      </div>
                    )}

                    {/* TRIANGULACIÓN */}
                    {triangulacionItem && (
                      <div className="mt-5 pt-5 border-t border-slate-800">

                        <p className="text-xs uppercase tracking-wider text-emerald-400 mb-2">
                          Interpretación
                        </p>

                        <p className="text-sm text-slate-300 leading-relaxed">
                          {triangulacionItem.interpretacion}
                        </p>

                      </div>
                    )}

                 </Link>
                );
              })}

            </div>
          )}

        </section>

        {/* TRAZABILIDAD */}
        <section className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6 md:p-8">

          <p className="text-sm text-cyan-400 uppercase tracking-wider">
            Trazabilidad del análisis
          </p>

          <h2 className="text-2xl font-bold mt-2 mb-6">
            ¿Cómo se realizó la reducción de datos?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">

            {[
              ["01", "Datos", "Entrevistas y encuestas"],
              ["02", "Codificación", "Categorías y subcategorías"],
              ["03", "Contraste", "Teoría y documentos"],
              ["04", "Triangulación", "Cruce de evidencias"],
              ["05", "Hallazgo", "Interpretación"],
            ].map(([numero, titulo, descripcion]) => (
              <div
                key={numero}
                className="rounded-xl bg-slate-900 border border-slate-800 p-4"
              >
                <span className="text-xs text-cyan-400">
                  {numero}
                </span>

                <h3 className="font-semibold mt-2">
                  {titulo}
                </h3>

                <p className="text-xs text-slate-400 mt-1">
                  {descripcion}
                </p>
              </div>
            ))}

          </div>

        </section>

      </main>
    </div>
  );
}