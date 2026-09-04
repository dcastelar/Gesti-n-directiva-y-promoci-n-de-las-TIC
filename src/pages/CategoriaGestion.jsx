import { Link, useParams } from "react-router-dom";

import categorias from "../data/categorias.json";
import matrizAnalisis from "../data/matrizAnalisis.json";

export default function CategoriaGestion() {
  const { id } = useParams();

  const categoria = categorias.find((c) => c.id === Number(id));

  if (!categoria || categoria.id === 1) {
    return (
      <div className="min-h-screen bg-slate-950 text-white p-8">
        <h1 className="text-2xl font-bold">
          Categoría no encontrada
        </h1>

        <Link
          to="/"
          className="inline-block mt-6 text-cyan-400 hover:text-cyan-300"
        >
          ← Volver al inicio
        </Link>
      </div>
    );
  }

  const categoriaMatriz = (matrizAnalisis.categorias || []).find(
    (c) => c.id === categoria.id
  );

  const unidades = categoriaMatriz?.unidades || [];

  // ---------------------------------------------------------
  // DOCUMENTOS
  // ---------------------------------------------------------

  const documentos = matrizAnalisis.documentos || [];

  const documentosCategoria = documentos.filter((documento) => {
    const codigos = documento.codigos || [];

    if (categoria.id === 2) {
      return codigos.some((codigo) => codigo.startsWith("ROL"));
    }

    if (categoria.id === 3) {
      return codigos.some((codigo) => codigo.startsWith("EST"));
    }

    if (categoria.id === 4) {
      return codigos.some((codigo) => codigo.startsWith("DES"));
    }

    return false;
  });

  // ---------------------------------------------------------
  // MÉTRICAS
  // ---------------------------------------------------------

  const totalEntrevistas = unidades.reduce(
    (total, unidad) =>
      total + (unidad.entrevistas?.length || 0),
    0
  );

  const totalEncuestas = unidades.reduce(
    (total, unidad) =>
      total + (unidad.encuesta?.length || 0),
    0
  );

  const totalDocumentos = documentosCategoria.length;

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="max-w-7xl mx-auto px-6 py-10">

        {/* VOLVER */}
        <div className="mb-10">
          <Link
            to="/"
            className="inline-block mb-6 text-cyan-400 hover:text-cyan-300"
          >
            ← Volver al inicio
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-2xl">
              {categoria.id - 1}
            </div>

            <div>
              <p className="text-sm text-cyan-400 uppercase tracking-wider">
                Categoría de análisis
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

        {/* MÉTRICAS */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <p className="text-sm text-slate-400 mb-2">
              Unidades de análisis
            </p>

            <p className="text-3xl font-bold text-white">
              {unidades.length}
            </p>

            <p className="text-xs text-slate-500 mt-1">
              Subcategorías
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <p className="text-sm text-slate-400 mb-2">
              Entrevistas
            </p>

            <p className="text-3xl font-bold text-white">
              {totalEntrevistas}
            </p>

            <p className="text-xs text-slate-500 mt-1">
              Evidencias cualitativas
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <p className="text-sm text-slate-400 mb-2">
              Encuestas
            </p>

            <p className="text-3xl font-bold text-white">
              {totalEncuestas}
            </p>

            <p className="text-xs text-slate-500 mt-1">
              Evidencias cuantitativas
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <p className="text-sm text-slate-400 mb-2">
              Documentos
            </p>

            <p className="text-3xl font-bold text-white">
              {totalDocumentos}
            </p>

            <p className="text-xs text-slate-500 mt-1">
              Evidencias documentales
            </p>
          </div>

        </section>

        {/* UNIDADES DE ANÁLISIS */}
        <section className="mb-12">

          <div className="mb-6">
            <h2 className="text-2xl font-bold">
              Unidades de análisis
            </h2>

            <p className="text-slate-400 mt-2">
              Cada unidad permite seguir la trazabilidad entre
              evidencias, teoría e interpretación.
            </p>
          </div>

          {unidades.length === 0 ? (
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-8">
              <p className="text-slate-400">
                Todavía no hay unidades de análisis registradas
                para esta categoría.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              {unidades.map((unidad) => {
                const entrevistas = unidad.entrevistas || [];
                const encuestas = unidad.encuesta || [];
                const evidencias =
                  unidad.evidencias_adicionales || [];
                const teorias = unidad.teoria || [];

                return (
                  <Link
                    key={unidad.id}
                    to={`/analisis/${encodeURIComponent(
                      unidad.subcategoria
                    )}`}
                    className="group block rounded-2xl border border-slate-800 bg-slate-900/70 p-6 hover:border-cyan-500/50 hover:bg-slate-900 transition"
                  >

                    {/* TÍTULO */}
                    <div className="flex items-start justify-between gap-4 mb-5">

                      <div>
                        <p className="text-xs uppercase tracking-wider text-cyan-400 mb-2">
                          Unidad de análisis
                        </p>

                        <h3 className="text-xl font-semibold group-hover:text-cyan-400 transition">
                          {unidad.subcategoria}
                        </h3>
                      </div>

                      <span className="text-cyan-400 text-xl">
                        →
                      </span>

                    </div>

                    {/* DEFINICIÓN */}
                    {unidad.definicion_teorica && (
                      <p className="text-sm text-slate-400 leading-relaxed mb-5">
                        {unidad.definicion_teorica}
                      </p>
                    )}

                    {/* MÉTRICAS */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">

                      <div className="rounded-xl bg-slate-950/70 p-3">
                        <p className="text-xs text-slate-500">
                          Entrevistas
                        </p>

                        <p className="text-lg font-semibold mt-1">
                          {entrevistas.length}
                        </p>
                      </div>

                      <div className="rounded-xl bg-slate-950/70 p-3">
                        <p className="text-xs text-slate-500">
                          Encuestas
                        </p>

                        <p className="text-lg font-semibold mt-1">
                          {encuestas.length}
                        </p>
                      </div>

                      <div className="rounded-xl bg-slate-950/70 p-3">
                        <p className="text-xs text-slate-500">
                          Evidencias
                        </p>

                        <p className="text-lg font-semibold mt-1">
                          {evidencias.length}
                        </p>
                      </div>

                      <div className="rounded-xl bg-slate-950/70 p-3">
                        <p className="text-xs text-slate-500">
                          Teoría
                        </p>

                        <p className="text-lg font-semibold mt-1">
                          {teorias.length}
                        </p>
                      </div>

                    </div>

                  </Link>
                );
              })}

            </div>
          )}

        </section>

        {/* TRAZABILIDAD */}
        <section className="mb-12">

          <div className="mb-6">
            <h2 className="text-2xl font-bold">
              Trazabilidad del análisis
            </h2>

            <p className="text-slate-400 mt-2">
              Recorrido metodológico de la información hasta la
              construcción de los hallazgos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">

            {[
              ["01", "Datos", "Entrevistas y encuestas"],
              ["02", "Codificación", "Categorías y subcategorías"],
              ["03", "Contraste", "Teoría y documentos"],
              ["04", "Triangulación", "Cruce de evidencias"],
              ["05", "Hallazgo", "Interpretación"],
            ].map(([numero, titulo, descripcion]) => (
              <div
                key={numero}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
              >
                <p className="text-cyan-400 font-bold text-sm mb-2">
                  {numero}
                </p>

                <h3 className="font-semibold mb-2">
                  {titulo}
                </h3>

                <p className="text-sm text-slate-400">
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
