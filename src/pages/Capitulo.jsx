import { Link, useParams } from "react-router-dom";

import capitulo0 from "../data/capitulos/capitulo0.json";
import capitulo1 from "../data/capitulos/capitulo1.json";
import capitulo2 from "../data/capitulos/capitulo2.json";
import capitulo3 from "../data/capitulos/capitulo3.json";
import capitulo4 from "../data/capitulos/capitulo4.json";
import capitulo5 from "../data/capitulos/capitulo5.json";
import capitulo6 from "../data/capitulos/capitulo6.json";
import capitulo7 from "../data/capitulos/capitulo7.json";
import capitulo8 from "../data/capitulos/capitulo8.json";

export default function Capitulo() {
  const { numero } = useParams();

  const esBaseDatos = numero === "7" || numero === "8";

  let capitulo = null;

  switch (numero) {
    case "0":
      capitulo = capitulo0;
      break;
    case "1":
      capitulo = capitulo1;
      break;
    case "2":
      capitulo = capitulo2;
      break;
    case "3":
      capitulo = capitulo3;
      break;
    case "4":
      capitulo = capitulo4;
      break;
    case "5":
      capitulo = capitulo5;
      break;
    case "6":
      capitulo = capitulo6;
      break;
    case "7":
      capitulo = capitulo7;
      break;
    case "8":
      capitulo = capitulo8;
      break;
    default:
      capitulo = null;
  }

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
    <div
      className={
        esBaseDatos
          ? "min-h-screen bg-slate-950 text-white p-3 md:p-6"
          : "min-h-screen bg-slate-950 text-white p-6 md:p-10"
      }
    >
      <div
        className={
          esBaseDatos
            ? "w-full max-w-none"
            : "max-w-5xl mx-auto"
        }
      >
        {/* =====================================================
            NAVEGACIÓN
        ===================================================== */}

        <Link
          to="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-emerald-300 mb-10 transition-colors"
        >
          ← Volver al inicio
        </Link>

        {/* =====================================================
            ENCABEZADO
        ===================================================== */}

        <header className={esBaseDatos ? "mb-8" : "mb-14"}>
          <p className="text-emerald-300 text-sm uppercase tracking-[0.25em] mb-3">
            {capitulo.numero}
          </p>

          <h1 className="text-4xl md:text-6xl font-black tracking-tight">
            {capitulo.titulo}
          </h1>

          {capitulo.introduccion && (
            <div className="mt-8 border-l-4 border-emerald-400 pl-6">
              <p className="text-slate-300 text-lg leading-relaxed">
                {capitulo.introduccion}
              </p>
            </div>
          )}
        </header>

        {/* =====================================================
            CONTENIDO DEL CAPÍTULO
        ===================================================== */}

        {capitulo.secciones?.length > 0 && (
          <>
            {/* =================================================
                ÍNDICE DEL CAPÍTULO
            ================================================= */}

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

            {/* =================================================
                SECCIONES
            ================================================= */}

            <main>
              {capitulo.secciones.map((seccion) => (
                <section
                  key={seccion.id}
                  id={`seccion-${seccion.id}`}
                  className="mb-16 scroll-mt-10"
                >
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

                  {/* =================================================
                      PÁRRAFOS
                  ================================================= */}

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

                  {/* =================================================
                      CITAS
                  ================================================= */}

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

                  {/* =================================================
                      DATOS
                  ================================================= */}

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

                  {/* =================================================
                      FIGURAS
                  ================================================= */}

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
          </>
        )}

        {/* =====================================================
            CONTENIDO SIMPLE
            INTRODUCCIÓN
        ===================================================== */}

        {capitulo.parrafos?.length > 0 && (
          <main className="space-y-6">
            {capitulo.parrafos.map((parrafo, index) => (
              <p
                key={index}
                className="text-slate-300 text-base md:text-lg leading-8 text-justify"
              >
                {parrafo}
              </p>
            ))}
          </main>
        )}

        {/* =====================================================
            ANEXO 1 — MATRIZ DE ENTREVISTAS Y ENCUESTAS
        ===================================================== */}

        {capitulo.registros?.length > 0 && (
          <section className="mt-12">
            <div className="mb-6">
              <p className="text-xs text-emerald-300 uppercase tracking-widest mb-2">
                Matriz de análisis
              </p>

              <h2 className="text-2xl md:text-3xl font-bold">
                Encuestas y entrevistas
              </h2>

              <p className="text-slate-400 mt-3 leading-relaxed">
                Matriz de triangulación de la información obtenida mediante
                entrevistas, encuestas y análisis interpretativo.
              </p>
            </div>

            {/* =================================================
                TABLA ANEXO 1
            ================================================= */}

            <div className="overflow-x-auto rounded-3xl border border-slate-800 bg-slate-900/60 shadow-xl">
              <table className="min-w-[2200px] w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-800/80 text-left">
                    <th className="sticky left-0 z-20 bg-slate-800 px-4 py-4 border-b border-slate-700 text-emerald-300">
                      Categoría
                    </th>

                    <th className="px-4 py-4 border-b border-slate-700 text-emerald-300">
                      Subcategoría
                    </th>

                    <th className="px-4 py-4 border-b border-slate-700 text-emerald-300">
                      Definición teórica
                    </th>

                    <th className="px-4 py-4 border-b border-slate-700 text-emerald-300">
                      Extracto Directora
                    </th>

                    <th className="px-4 py-4 border-b border-slate-700 text-emerald-300">
                      Código
                    </th>

                    <th className="px-4 py-4 border-b border-slate-700 text-emerald-300">
                      Fuente
                    </th>

                    <th className="px-4 py-4 border-b border-slate-700 text-emerald-300">
                      Extracto Vicedirectora
                    </th>

                    <th className="px-4 py-4 border-b border-slate-700 text-emerald-300">
                      Código
                    </th>

                    <th className="px-4 py-4 border-b border-slate-700 text-emerald-300">
                      Fuente
                    </th>

                    <th className="px-4 py-4 border-b border-slate-700 text-emerald-300">
                      Extracto Docente
                    </th>

                    <th className="px-4 py-4 border-b border-slate-700 text-emerald-300">
                      Código
                    </th>

                    <th className="px-4 py-4 border-b border-slate-700 text-emerald-300">
                      Fuente
                    </th>

                    <th className="px-4 py-4 border-b border-slate-700 text-emerald-300">
                      Interpretación preliminar
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {capitulo.registros.map((registro, index) => (
                    <tr
                      key={index}
                      className="border-b border-slate-800 hover:bg-slate-800/40 transition-colors align-top"
                    >
                      <td className="sticky left-0 z-10 bg-slate-900 px-4 py-5 text-slate-200 font-semibold">
                        {registro.categoria || "–"}
                      </td>

                      <td className="px-4 py-5 text-emerald-300 font-medium">
                        {registro.subcategoria || "–"}
                      </td>

                      <td className="px-4 py-5 text-slate-300 leading-relaxed whitespace-normal">
                        {registro.definicion_teorica || "–"}
                      </td>

                      <td className="px-4 py-5 text-slate-300 leading-relaxed">
                        {registro.extracto_directora || "–"}
                      </td>

                      <td className="px-4 py-5 text-amber-300 font-mono text-xs">
                        {registro.codigo_dire || "–"}
                      </td>

                      <td className="px-4 py-5 text-slate-400 text-xs">
                        {registro.fuente_dire || "–"}
                      </td>

                      <td className="px-4 py-5 text-slate-300 leading-relaxed">
                        {registro.extracto_vicedirectora || "–"}
                      </td>

                      <td className="px-4 py-5 text-amber-300 font-mono text-xs">
                        {registro.codigo_vice || "–"}
                      </td>

                      <td className="px-4 py-5 text-slate-400 text-xs">
                        {registro.fuente_vice || "–"}
                      </td>

                      <td className="px-4 py-5 text-slate-300 leading-relaxed">
                        {registro.extracto_docente || "–"}
                      </td>

                      <td className="px-4 py-5 text-amber-300 font-mono text-xs">
                        {registro.codigo_doc || "–"}
                      </td>

                      <td className="px-4 py-5 text-slate-400 text-xs">
                        {registro.fuente_doc || "–"}
                      </td>

                      <td className="px-4 py-5 text-slate-300 leading-relaxed">
                        {registro.interpretacion_preliminar || "–"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              La matriz puede desplazarse horizontalmente para consultar la
              totalidad de las variables.
            </p>
          </section>
        )}

        {/* =====================================================
            ANEXO 2 — ANÁLISIS DOCUMENTAL
        ===================================================== */}

        {capitulo.documentos?.length > 0 && (
          <section className="mt-12">
            <div className="mb-6">
              <p className="text-xs text-emerald-300 uppercase tracking-widest mb-2">
                Matriz de análisis documental
              </p>

              <h2 className="text-2xl md:text-3xl font-bold">
                Documentos analizados
              </h2>

              <p className="text-slate-400 mt-3 leading-relaxed">
                Registro y vaciado analítico de documentos institucionales,
                planificaciones y actas de observación de clases, en relación
                con el rol de la gestión directiva, las estrategias de
                incorporación de las TIC y los desafíos y oportunidades
                identificados.
              </p>
            </div>

            {/* =================================================
                TABLA ANEXO 2
            ================================================= */}

            <div className="overflow-x-auto rounded-3xl border border-slate-800 bg-slate-900/60 shadow-xl">
              <table className="min-w-[2200px] w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-800/80 text-left">
                    <th className="sticky left-0 z-20 bg-slate-800 px-4 py-4 border-b border-slate-700 text-emerald-300">
                      Fuente
                    </th>

                    <th className="px-4 py-4 border-b border-slate-700 text-emerald-300">
                      Grado
                    </th>

                    <th className="px-4 py-4 border-b border-slate-700 text-emerald-300">
                      Área
                    </th>

                    <th className="px-4 py-4 border-b border-slate-700 text-emerald-300">
                      Tema
                    </th>

                    <th className="px-4 py-4 border-b border-slate-700 text-emerald-300">
                      Desarrollo / clase
                    </th>

                    <th className="px-4 py-4 border-b border-slate-700 text-emerald-300">
                      Recursos
                    </th>

                    <th className="px-4 py-4 border-b border-slate-700 text-emerald-300">
                      Rol de la gestión
                    </th>

                    <th className="px-4 py-4 border-b border-slate-700 text-emerald-300">
                      Estrategias TIC
                    </th>

                    <th className="px-4 py-4 border-b border-slate-700 text-emerald-300">
                      Desafíos y oportunidades
                    </th>

                    <th className="px-4 py-4 border-b border-slate-700 text-emerald-300">
                      Referencia
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {capitulo.documentos.map((documento, index) => (
                    <tr
                      key={index}
                      className="border-b border-slate-800 hover:bg-slate-800/40 transition-colors align-top"
                    >
                      <td className="sticky left-0 z-10 bg-slate-900 px-4 py-5 text-slate-200 font-semibold">
                        {documento.fuente || "–"}
                      </td>

                      <td className="px-4 py-5 text-slate-300 whitespace-nowrap">
                        {documento.grado || "–"}
                      </td>

                      <td className="px-4 py-5 text-slate-300">
                        {documento.area || "–"}
                      </td>

                      <td className="px-4 py-5 text-emerald-300 font-medium">
                        {documento.tema || "–"}
                      </td>

                      <td className="px-4 py-5 text-slate-300 leading-relaxed whitespace-normal">
                        {documento.desarrollo_clase || "–"}
                      </td>

                      <td className="px-4 py-5 text-slate-300 leading-relaxed">
                        {documento.recursos || "–"}
                      </td>

                      <td className="px-4 py-5 text-slate-300 leading-relaxed">
                        {documento.rol_gestion || "–"}
                      </td>

                      <td className="px-4 py-5 text-slate-300 leading-relaxed">
                        {documento.estrategias_tic || "–"}
                      </td>

                      <td className="px-4 py-5 text-slate-300 leading-relaxed">
                        {documento.desafios_oportunidades || "–"}
                      </td>

                      <td className="px-4 py-5 text-slate-400 text-xs leading-relaxed">
                        {documento.referencia || "–"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              La matriz puede desplazarse horizontalmente para consultar
              la totalidad de las variables del análisis documental.
            </p>
          </section>
        )}

        {/* =====================================================
            VOLVER AL ÍNDICE
        ===================================================== */}

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
