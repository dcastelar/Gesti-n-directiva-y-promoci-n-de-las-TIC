import categorias from "../data/categorias.json";
import entrevistas from "../data/entrevistas.json";
import herramientasData from "../data/herramientas.json";
import autoresData from "../data/autores.json";
import matrizAnalisis from "../data/matrizAnalisis.json";

import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function TesisDashboard() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [indiceAbierto, setIndiceAbierto] = useState(false);
  const [hallazgoAbierto, setHallazgoAbierto] = useState(true);
  const [autorSeleccionado, setAutorSeleccionado] = useState(null);
  const [herramientasAbiertas, setHerramientasAbiertas] = useState({});
  const [citasAbiertas, setCitasAbiertas] = useState(false);

  const location = useLocation();

  const navegacion = [
    {
      titulo: "Introducción",
      href: "/capitulo/0",
    },
    {
      titulo: "Capítulo 1: Contextualización",
      href: "/capitulo/1",
    },
    {
      titulo:
        "Capítulo 2: Rol de la gestión directiva en la promoción de las TIC",
      href: "/capitulo/2",
    },
    {
      titulo:
        "Capítulo 3: Estrategias de la gestión directiva para la incorporación de las TIC",
      href: "/capitulo/3",
    },
    {
      titulo:
        "Capítulo 4: Desafíos y oportunidades de la gestión directiva en la integración de las TIC",
      href: "/capitulo/4",
    },
    {
      titulo: "Conclusiones",
      href: "/capitulo/5",
    },
    {
      titulo: "Referencias bibliográficas",
      href: "/capitulo/6",
    },
    {
      titulo: "Anexo 1: Base de datos — Encuestas y entrevistas",
      href: "/capitulo/7",
    },
    {
      titulo: "Anexo 2: Base de datos — Análisis documental",
      href: "/capitulo/8",
    },
  ];

  const citasDestacadas = entrevistas.slice(0, 3);

  const colores = {
    cyan: "from-cyan-500 to-blue-500",
    violet: "from-violet-500 to-fuchsia-500",
    emerald: "from-emerald-500 to-green-500",
  };

  const autoresPrincipales = [
    {
      nombre: "Antonio Bolívar",
      buscar: "Antonio Bolívar",
    },
    {
      nombre: "Bernardo Blejmar",
      buscar: "Bernardo Blejmar",
    },
    {
      nombre: "Rebeca Anijovich",
      buscar: "Anijovich",
    },
    {
      nombre: "Carina Lion",
      buscar: "Carina Lion",
    },
    {
      nombre: "Francisco Imbernón",
      buscar: "Francisco Imbernón",
    },
    {
      nombre: "Inés Dussel",
      buscar: "Inés Dussel",
    },
    {
      nombre: "Mariana Maggio",
      buscar: "Mariana Maggio",
    },
    {
      nombre: "Michael Fullan",
      buscar: "Michael Fullan",
    },
  ];

  // ============================================================
  // MÉTRICAS
  // ============================================================

  const totalCategorias = categorias.length;

  const totalUnidades = matrizAnalisis.categorias.reduce(
    (total, categoria) => total + categoria.unidades.length,
    0
  );

  const totalDocumentos = matrizAnalisis.documentos.length;

  const totalHerramientas = herramientasData.categorias.reduce(
    (total, categoria) => total + categoria.herramientas.length,
    0
  );

  const unidadesPorCategoria = Object.fromEntries(
    matrizAnalisis.categorias.map((categoria) => [
      categoria.id,
      categoria.unidades.length,
    ])
  );

  // ============================================================
  // NAVEGACIÓN ACTIVA
  // ============================================================

  const esActivo = (href) => {
    return location.pathname === href;
  };

  // ============================================================
  // HERRAMIENTAS
  // ============================================================

  const toggleHerramientas = (index) => {
    setHerramientasAbiertas((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      {/* =========================================================
          SIDEBAR DESKTOP
      ========================================================= */}

      <aside
        className={`
          hidden lg:flex shrink-0 border-r border-slate-800
          bg-slate-950/95 backdrop-blur-xl
          flex-col sticky top-0 h-screen
          transition-all duration-300
          ${indiceAbierto ? "w-72 p-4" : "w-16 p-2"}
        `}
      >
        {/* CABECERA */}

        {indiceAbierto ? (
          <div className="mb-5">
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-cyan-400 text-[10px] uppercase tracking-[0.25em] mb-2">
                  Tesis de Licenciatura
                </p>

                <p className="text-lg font-black leading-tight">
                  Gestión Educativa
                </p>
              </div>

              <button
                onClick={() => setIndiceAbierto(false)}
                className="rounded-lg px-2 py-1 text-slate-500 hover:text-white hover:bg-slate-800 transition-all"
                title="Contraer índice"
              >
                ←
              </button>
            </div>

            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Experiencia interactiva de investigación
            </p>
          </div>
        ) : (
          <button
            onClick={() => setIndiceAbierto(true)}
            className="w-full h-12 rounded-xl border border-slate-800 text-cyan-300 hover:bg-slate-800 hover:border-cyan-400/30 transition-all text-3xl font-light flex items-center justify-center"
            title="Abrir índice"
          >
            ›
          </button>
        )}

        {/* ÍNDICE */}

        {indiceAbierto && (
          <div className="flex-1 min-h-0">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Índice
              </p>

              <span className="text-[10px] text-slate-700">
                {navegacion.length}
              </span>
            </div>

            <nav className="space-y-0.5 overflow-y-auto h-[calc(100vh-190px)] pr-1">
              {navegacion.map((item, index) => {
                const activo = esActivo(item.href);

                return (
                  <Link
                    key={index}
                    to={item.href}
                    className={`
                      group relative block rounded-lg
                      px-2.5 py-2 text-xs
                      transition-all duration-200
                      ${
                        activo
                          ? "bg-cyan-400/10 text-cyan-300 border border-cyan-400/20"
                          : "text-slate-400 hover:text-white hover:bg-slate-800 border border-transparent"
                      }
                    `}
                  >
                    <span className="flex items-center gap-2">
                      <span
                        className={`
                          w-1.5 h-1.5 rounded-full shrink-0
                          ${
                            activo
                              ? "bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                              : "bg-slate-700 group-hover:bg-slate-500"
                          }
                        `}
                      />

                      <span className="flex-1 leading-snug font-medium">
                        {item.titulo}
                      </span>

                      {activo && (
                        <span className="text-cyan-400 shrink-0">→</span>
                      )}
                    </span>
                  </Link>
                );
              })}
            </nav>
          </div>
        )}

        {/* PIE */}

        {indiceAbierto && (
          <div className="mt-auto pt-4 border-t border-slate-800">
            <p className="text-[10px] text-slate-600">
              Escuela Primaria N.° 4774
            </p>

            <p className="text-[10px] text-slate-600 mt-1">
              “General Juan José Valle”
            </p>

            <p className="text-[10px] text-slate-700 mt-1">
              Barrio Libertad · Salta Capital
            </p>
          </div>
        )}
      </aside>

      {/* =========================================================
          CONTENIDO PRINCIPAL
      ========================================================= */}

      <main className="flex-1 min-w-0 p-4 md:p-7">
        {/* =====================================================
            ÍNDICE MÓVIL
        ===================================================== */}

        <div className="lg:hidden mb-5">
          <button
            onClick={() => setMenuAbierto(!menuAbierto)}
            className="w-full flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900 px-4 py-3"
          >
            <span className="font-semibold text-sm">
              Índice de la investigación
            </span>

            <span className="text-cyan-400 text-lg">
              {menuAbierto ? "−" : "+"}
            </span>
          </button>

          {menuAbierto && (
            <div className="mt-2 rounded-xl border border-slate-800 bg-slate-900 p-2 max-h-[60vh] overflow-y-auto">
              {navegacion.map((item, index) => {
                const activo = esActivo(item.href);

                return (
                  <Link
                    key={index}
                    to={item.href}
                    onClick={() => setMenuAbierto(false)}
                    className={`
                      block rounded-lg px-3 py-2.5 text-sm transition-all
                      ${
                        activo
                          ? "bg-cyan-400/10 text-cyan-300 border border-cyan-400/20"
                          : "text-slate-400 hover:text-white hover:bg-slate-800 border border-transparent"
                      }
                    `}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className={`
                          w-1.5 h-1.5 rounded-full shrink-0
                          ${activo ? "bg-cyan-400" : "bg-slate-700"}
                        `}
                      />

                      <span className="flex-1 leading-snug font-medium">
                        {item.titulo}
                      </span>

                      {activo && (
                        <span className="text-cyan-400">→</span>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-5 md:p-6 mb-7 shadow-xl">
          <div className="absolute -top-32 -right-32 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full" />

          <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-violet-500/10 blur-3xl rounded-full" />

          <div className="relative z-10">
            <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-6 items-start">
              {/* TÍTULO */}

              <div>
                <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-cyan-300 mb-4">
                  Experiencia Interactiva de Investigación
                </div>

                <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
                  Gestión directiva y promoción de las TIC:

                  <span className="block mt-2 text-cyan-300">
                    un estudio de caso en la Escuela Primaria N.° 4774
                  </span>

                  <span className="block mt-2 text-slate-300 text-xl md:text-2xl font-semibold leading-snug">
                    “General Juan José Valle” del Barrio Libertad, en la
                    ciudad de Salta
                  </span>
                </h1>

                <p className="text-slate-500 mt-4 max-w-2xl text-sm leading-relaxed">
                  Una propuesta para visualizar el recorrido metodológico,
                  los datos, las categorías de análisis y los principales
                  hallazgos de la investigación.
                </p>
              </div>

              {/* HALLAZGO */}

              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden">
                <button
                  onClick={() => setHallazgoAbierto(!hallazgoAbierto)}
                  className="w-full flex items-center justify-between gap-3 p-4 text-left hover:bg-slate-900 transition-all"
                >
                  <div>
                    <p className="text-cyan-400 text-[10px] uppercase tracking-[0.25em]">
                      Hallazgo central
                    </p>

                    {!hallazgoAbierto && (
                      <p className="text-xs text-slate-500 mt-1">
                        Ver síntesis del hallazgo
                      </p>
                    )}
                  </div>

                  <span className="text-cyan-400 text-lg">
                    {hallazgoAbierto ? "−" : "+"}
                  </span>
                </button>

                {hallazgoAbierto && (
                  <div className="px-4 pb-4">
                    <p className="text-sm leading-relaxed text-slate-300">
                      La gestión directiva gestiona en la incertidumbre,
                      en un contexto de escasez y vulnerabilidad,
                      transformando las dificultades en oportunidades de
                      aprendizaje, adaptación y resiliencia.
                    </p>

                    <p className="text-sm leading-relaxed text-slate-400 mt-3">
                      En este camino, las TIC trascienden su dimensión
                      instrumental y se convierten en medios de
                      transformación digital, equidad y generación de
                      oportunidades.
                    </p>

                    <div className="mt-4 pt-3 border-t border-slate-800">
                      <p className="text-base font-bold text-cyan-300">
                        Aun cuando escasean los recursos, no escasean las
                        posibilidades.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* =================================================
                MÉTRICAS
            ================================================= */}

            <div className="grid grid-cols-3 gap-2 mt-6 pt-4 border-t border-slate-800">
              <a
                href="#categorias"
                className="group rounded-xl px-3 py-2 hover:bg-slate-900 transition-all"
              >
                <p className="text-[9px] text-slate-500 uppercase tracking-widest">
                  Categorías
                </p>

                <div className="flex items-baseline gap-2 mt-1">
                  <h3 className="text-2xl font-black group-hover:text-cyan-300 transition-colors">
                    {totalCategorias}
                  </h3>

                  <span className="hidden sm:inline text-[10px] text-slate-600">
                    analizadas
                  </span>
                </div>
              </a>

              <a
                href="#categorias"
                className="group rounded-xl px-3 py-2 hover:bg-slate-900 transition-all"
              >
                <p className="text-[9px] text-slate-500 uppercase tracking-widest">
                  Unidades de análisis
                </p>

                <div className="flex items-baseline gap-2 mt-1">
                  <h3 className="text-2xl font-black group-hover:text-violet-300 transition-colors">
                    {totalUnidades}
                  </h3>

                  <span className="hidden sm:inline text-[10px] text-slate-600">
                    organizadas
                  </span>
                </div>
              </a>

              <a
                href="#base-datos"
                className="group rounded-xl px-3 py-2 hover:bg-slate-900 transition-all"
              >
                <p className="text-[9px] text-slate-500 uppercase tracking-widest">
                  Documentos analizados
                </p>

                <div className="flex items-baseline gap-2 mt-1">
                  <h3 className="text-2xl font-black group-hover:text-emerald-300 transition-colors">
                    {totalDocumentos}
                  </h3>

                  <span className="hidden sm:inline text-[10px] text-slate-600">
                    registrados
                  </span>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* =====================================================
            AUTORES
        ===================================================== */}

        <section className="mb-8">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
            <div className="mb-4">
              <p className="text-cyan-400 text-[10px] uppercase tracking-[0.25em]">
                Marco teórico
              </p>

              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-black mt-1">
                    Autores principales
                  </h2>

                  <p className="text-sm text-slate-500 mt-1">
                    Referentes teóricos centrales de la investigación
                  </p>
                </div>

                <span className="hidden sm:block text-xs text-slate-600">
                  {autoresPrincipales.length} autores
                </span>
              </div>
            </div>

            {/* TARJETAS */}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5">
              {autoresPrincipales.map((item) => {
                const autor = autoresData.autores.find(
                  (a) => a.nombre === item.buscar
                );

                if (!autor) return null;

                const seleccionado =
                  autorSeleccionado?.nombre === autor.nombre;

                return (
                  <button
                    key={item.nombre}
                    onClick={() =>
                      setAutorSeleccionado(
                        seleccionado ? null : autor
                      )
                    }
                    className={`
                      w-full min-w-0 text-left rounded-xl border px-3 py-2.5
                      transition-all duration-200
                      ${
                        seleccionado
                          ? "border-cyan-400/50 bg-cyan-400/10"
                          : "border-slate-800 bg-slate-950 hover:border-cyan-400/30 hover:bg-slate-800"
                      }
                    `}
                  >
                    <div className="flex items-start gap-2 min-w-0">
                      <span
                        className={`
                          flex-1 min-w-0 text-sm font-semibold leading-snug break-words
                          ${
                            seleccionado
                              ? "text-cyan-300"
                              : "text-slate-300"
                          }
                        `}
                      >
                        {item.nombre}
                      </span>

                      <span className="shrink-0 text-slate-600">
                        →
                      </span>
                    </div>

                    <p className="text-xs text-slate-500 mt-1 truncate">
                      {autor.tema ||
                        autor.area ||
                        autor.descripcion ||
                        "Referente teórico"}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* INFORMACIÓN DEL AUTOR */}

            {autorSeleccionado && (
              <div className="mt-4 rounded-2xl border border-cyan-400/20 bg-slate-950 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-400">
                      Referente teórico
                    </p>

                    <h3 className="text-xl font-black text-white mt-1">
                      {autorSeleccionado.nombre}
                    </h3>
                  </div>

                  <button
                    onClick={() => setAutorSeleccionado(null)}
                    className="shrink-0 rounded-lg px-3 py-2 text-xs text-slate-500 hover:text-white hover:bg-slate-800 transition-all"
                  >
                    ✕ Cerrar
                  </button>
                </div>

                {(autorSeleccionado.tema ||
                  autorSeleccionado.area ||
                  autorSeleccionado.descripcion) && (
                  <div className="mt-4">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-600 mb-2">
                      Aporte a la investigación
                    </p>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      {autorSeleccionado.tema ||
                        autorSeleccionado.area ||
                        autorSeleccionado.descripcion}
                    </p>
                  </div>
                )}

                {autorSeleccionado.citas &&
                  autorSeleccionado.citas.length > 0 && (
                    <div className="mt-4">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-slate-600 mb-2">
                        Aportes teóricos
                      </p>

                      <div className="space-y-2">
                        {autorSeleccionado.citas
                          .slice(0, 4)
                          .map((cita, index) => (
                            <div
                              key={index}
                              className="rounded-xl border border-slate-800 bg-slate-900 px-4 py-3"
                            >
                              <div className="flex gap-3">
                                <span className="text-cyan-400 text-xl">
                                  “
                                </span>

                                <p className="text-sm text-slate-300 leading-relaxed">
                                  {typeof cita === "string"
                                    ? cita
                                    : cita.texto ||
                                      cita.cita ||
                                      cita.descripcion ||
                                      JSON.stringify(cita)}
                                </p>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  )}

                {(autorSeleccionado.fuente ||
                  autorSeleccionado.referencia ||
                  autorSeleccionado.bibliografia ||
                  autorSeleccionado.año) && (
                  <div className="mt-4 pt-4 border-t border-slate-800">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-600 mb-2">
                      Referencia
                    </p>

                    <p className="text-sm text-slate-400">
                      {autorSeleccionado.fuente ||
                        autorSeleccionado.referencia ||
                        autorSeleccionado.bibliografia ||
                        autorSeleccionado.año}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        {/* =====================================================
            CATEGORÍAS
        ===================================================== */}

        <section
          id="categorias"
          className="mb-8 scroll-mt-6"
        >
          <div className="mb-4">
            <p className="text-cyan-300 text-[10px] uppercase tracking-[0.25em] mb-1">
              Análisis de la investigación
            </p>

            <h2 className="text-2xl md:text-3xl font-black tracking-tight">
              Categorías de análisis
            </h2>

            <p className="text-sm text-slate-400 mt-2 max-w-3xl">
              Las categorías organizan la información producida a partir
              de las entrevistas, encuestas y análisis documental.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-3">
            {categorias.map((cat, index) => {
              const gradientes = [
                colores.cyan,
                colores.violet,
                colores.emerald,
                "from-orange-500 to-amber-500",
              ];

              return (
                <Link
                  key={cat.id || index}
                  to={`/categoria/${cat.id}`}
                  className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-4 hover:-translate-y-0.5 hover:border-slate-700 transition-all"
                >
                  <div
                    className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${
                      gradientes[index % gradientes.length]
                    }`}
                  />

                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-slate-600">
                        Categoría {index + 1}
                      </p>

                      <h3 className="text-lg md:text-xl font-bold mt-1 group-hover:text-cyan-300 transition-colors">
                        {cat.titulo || cat.nombre}
                      </h3>
                    </div>

                    <span className="text-slate-600 group-hover:text-cyan-300 transition-colors">
                      →
                    </span>
                  </div>

                  {cat.descripcion && (
                    <p className="text-sm text-slate-400 leading-relaxed mt-2">
                      {cat.descripcion}
                    </p>
                  )}

                  <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
                    <span className="text-xs text-slate-500">
                      {unidadesPorCategoria[cat.id] || 0} unidades de análisis
                    </span>

                    <span className="text-xs text-cyan-400/80 group-hover:text-cyan-300 transition-colors">
                      Explorar análisis →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* =====================================================
            BASE DE DATOS
        ===================================================== */}

        <section
          id="base-datos"
          className="mb-8 scroll-mt-6"
        >
          <div className="mb-4">
            <p className="text-violet-300 text-[10px] uppercase tracking-[0.25em] mb-1">
              Fuentes empíricas
            </p>

            <h2 className="text-2xl md:text-3xl font-black tracking-tight">
              Base de datos
            </h2>

            <p className="text-sm text-slate-400 mt-2 max-w-3xl">
              Organización de las principales fuentes utilizadas para la
              construcción y análisis de los datos de la investigación.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-3">
            <Link
              to="/base-datos/entrevistas"
              className="rounded-2xl border border-slate-800 bg-slate-900 p-4 hover:bg-slate-800 hover:border-violet-400/30 transition-all"
            >
              <div className="text-2xl mb-3">🎙️</div>

              <h3 className="text-lg font-bold">
                Entrevistas
              </h3>

              <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                Entrevistas semiestructuradas realizadas a integrantes
                del equipo directivo.
              </p>

              <div className="text-violet-300 text-xs font-semibold mt-4">
                Ver entrevistas →
              </div>
            </Link>

            <Link
              to="/base-datos/encuestas"
              className="rounded-2xl border border-slate-800 bg-slate-900 p-4 hover:bg-slate-800 hover:border-violet-400/30 transition-all"
            >
              <div className="text-2xl mb-3">📊</div>

              <h3 className="text-lg font-bold">
                Encuestas
              </h3>

              <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                Información obtenida mediante el instrumento aplicado a
                los actores institucionales.
              </p>

              <div className="text-violet-300 text-xs font-semibold mt-4">
                Ver base de datos →
              </div>
            </Link>

            <Link
              to="/base-datos/documental"
              className="rounded-2xl border border-slate-800 bg-slate-900 p-4 hover:bg-slate-800 hover:border-violet-400/30 transition-all"
            >
              <div className="text-2xl mb-3">📚</div>

              <h3 className="text-lg font-bold">
                Análisis documental
              </h3>

              <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                Documentos institucionales analizados para triangular los
                hallazgos.
              </p>

              <div className="text-violet-300 text-xs font-semibold mt-4">
                Ver documentos →
              </div>
            </Link>
          </div>
        </section>

        {/* =====================================================
            HERRAMIENTAS
        ===================================================== */}

        <section
          id="Herramientas-Investigador"
          className="mb-8 scroll-mt-6"
        >
          <div className="mb-4">
            <p className="text-emerald-300 text-[10px] uppercase tracking-[0.25em] mb-1">
              Recursos de investigación
            </p>

            <h2 className="text-2xl md:text-3xl font-black tracking-tight">
              Herramientas para el investigador
            </h2>

            <p className="text-sm text-slate-400 mt-2 max-w-3xl">
              Recursos digitales para facilitar la búsqueda, organización,
              procesamiento y análisis de información durante la
              investigación.
            </p>
          </div>

          <div className="space-y-2">
            {herramientasData.categorias.map((categoria, index) => {
              const abierta = herramientasAbiertas[index];

              return (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-800 bg-slate-900/80 overflow-hidden"
                >
                  <button
                    onClick={() => toggleHerramientas(index)}
                    className="w-full flex items-center justify-between gap-4 p-4 text-left hover:bg-slate-800/60 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">
                        {categoria.icono}
                      </span>

                      <div>
                        <h3 className="text-base font-bold">
                          {categoria.nombre}
                        </h3>

                        <p className="text-xs text-slate-600 mt-0.5">
                          {categoria.herramientas.length} herramientas
                        </p>
                      </div>
                    </div>

                    <span className="text-emerald-400 text-lg">
                      {abierta ? "−" : "+"}
                    </span>
                  </button>

                  {abierta && (
                    <div className="border-t border-slate-800 p-4">
                      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3">
                        {categoria.herramientas.map(
                          (herramienta, idx) => (
                            <a
                              key={idx}
                              href={herramienta.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group rounded-xl border border-slate-800 bg-slate-950 p-4 hover:-translate-y-0.5 hover:border-emerald-400/40 transition-all"
                            >
                              <h4 className="font-bold text-base group-hover:text-emerald-300 transition-colors">
                                {herramienta.nombre}
                              </h4>

                              <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                                {herramienta.descripcion}
                              </p>

                              <div className="mt-3 text-xs text-emerald-300 font-semibold">
                                Abrir herramienta →
                              </div>
                            </a>
                          )
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* =====================================================
            CITAS DESTACADAS
        ===================================================== */}

        <section className="mb-8">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 overflow-hidden">
            <button
              onClick={() => setCitasAbiertas(!citasAbiertas)}
              className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-800/50 transition-all"
            >
              <div>
                <p className="text-cyan-300 text-[10px] uppercase tracking-[0.25em]">
                  Voces de los actores institucionales
                </p>

                <h2 className="text-2xl font-black tracking-tight mt-1">
                  Citas destacadas
                </h2>
              </div>

              <span className="text-cyan-400 text-lg">
                {citasAbiertas ? "−" : "+"}
              </span>
            </button>

            {citasAbiertas && (
              <div className="border-t border-slate-800 p-4">
                <div className="grid md:grid-cols-3 gap-3">
                  {citasDestacadas.map((entrevista, index) => (
                    <div
                      key={index}
                      className="rounded-xl border border-slate-800 bg-slate-950 p-4"
                    >
                      <div className="text-cyan-400 text-2xl mb-3">
                        “
                      </div>

                      <p className="text-sm text-slate-300 leading-relaxed">
                        {entrevista.cita ||
                          entrevista.texto ||
                          entrevista.respuesta ||
                          "Registro de entrevista"}
                      </p>

                      <div className="mt-4 pt-3 border-t border-slate-800">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-slate-600">
                          Fuente
                        </p>

                        <p className="text-xs text-slate-400 mt-1">
                          {entrevista.entrevistado ||
                            entrevista.nombre ||
                            entrevista.rol ||
                            "Entrevista"}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* =====================================================
            FOOTER
        ===================================================== */}

        <footer className="border-t border-slate-800 pt-6 pb-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div>
              <p className="text-sm font-semibold">
                Investigación de Licenciatura en Gestión Educativa
              </p>

              <p className="text-xs text-slate-600 mt-1">
                Escuela Primaria N.° 4774 “General Juan José Valle”
              </p>
            </div>

            <div className="text-xs text-slate-600">
              Barrio Libertad · Salta Capital
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}