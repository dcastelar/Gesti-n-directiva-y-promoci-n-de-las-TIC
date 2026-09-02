import categorias from "../data/categorias.json";
import entrevistas from "../data/entrevistas.json";
import { Link } from "react-router-dom";
import { useState } from "react";
import herramientasData from "../data/herramientas.json";
import autoresData from "../data/autores.json";

export default function TesisDashboard() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [autorSeleccionado, setAutorSeleccionado] = useState(null);

  const navegacion = [
    { titulo: "Introducción", href: "/capitulo/0" },
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

  const totalHerramientas = herramientasData.categorias.reduce(
    (total, categoria) => total + categoria.herramientas.length,
    0
  );

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">

      {/* =========================================================
          SIDEBAR
      ========================================================= */}
      <aside className="hidden lg:flex w-80 border-r border-slate-800 bg-slate-950/95 backdrop-blur-xl flex-col p-6 sticky top-0 h-screen">

        <div className="mb-8">
          <p className="text-cyan-400 text-xs uppercase tracking-[0.25em] mb-2">
            Tesis de Licenciatura
          </p>

          <h1 className="text-xl font-black leading-tight">
            Gestión Educativa
          </h1>

          <p className="text-sm text-slate-500 mt-2 leading-relaxed">
            Experiencia interactiva de investigación
          </p>
        </div>

        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-600 mb-3">
            Índice de la investigación
          </p>

          <nav className="space-y-1 overflow-y-auto max-h-[calc(100vh-230px)] pr-2">
            {navegacion.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className="block rounded-xl px-3 py-3 text-sm text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
              >
                {item.titulo}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-auto pt-5 border-t border-slate-800">
          <p className="text-xs text-slate-600">
            Escuela Primaria N.° 4774
          </p>

          <p className="text-xs text-slate-600 mt-1">
            “General Juan José Valle”
          </p>

          <p className="text-xs text-slate-700 mt-1">
            Barrio Libertad · Salta Capital
          </p>
        </div>
      </aside>

      {/* =========================================================
          CONTENIDO PRINCIPAL
      ========================================================= */}
      <main className="flex-1 p-6 md:p-10">

        {/* =====================================================
            ÍNDICE MÓVIL
        ===================================================== */}
        <div className="lg:hidden mb-6">

          <button
            onClick={() => setMenuAbierto(!menuAbierto)}
            className="w-full flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900 px-5 py-4"
          >
            <span className="font-semibold">
              Índice de la investigación
            </span>

            <span className="text-cyan-400 text-xl">
              {menuAbierto ? "−" : "+"}
            </span>
          </button>

          {menuAbierto && (
            <div className="mt-2 rounded-2xl border border-slate-800 bg-slate-900 p-3 max-h-[60vh] overflow-y-auto">

              {navegacion.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  onClick={() => setMenuAbierto(false)}
                  className="block rounded-xl px-3 py-3 text-sm text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
                >
                  {item.titulo}
                </Link>
              ))}

            </div>
          )}
        </div>

        {/* =====================================================
            HERO
        ===================================================== */}
        <section className="relative overflow-hidden rounded-[32px] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 md:p-10 mb-10 shadow-2xl">

          <div className="absolute -top-32 -right-32 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full" />

          <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-violet-500/10 blur-3xl rounded-full" />

          <div className="relative z-10">

            {/* HERO PRINCIPAL */}
            <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-10 items-center">

              {/* TITULO */}
              <div>

                <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-cyan-300 mb-6">
                  Eje central de análisis
                </div>

                <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">

                  Gestión directiva y promoción de las TIC:

                  <span className="block mt-2 text-cyan-300">
                    un estudio de caso en la Escuela Primaria N.° 4774
                  </span>

                  <span className="block mt-3 text-slate-300 text-2xl md:text-3xl font-semibold leading-snug">
                    “General Juan José Valle” del Barrio Libertad, en la
                    ciudad de Salta
                  </span>

                </h2>

                <div className="mt-8">

                  <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
                    Experiencia Interactiva de Investigación
                  </h1>

                  <p className="text-slate-500 mt-3 max-w-2xl">
                    Una propuesta para visualizar el recorrido metodológico,
                    los datos, las categorías de análisis y los principales
                    hallazgos de la investigación.
                  </p>

                </div>

              </div>

              {/* HALLAZGO CENTRAL */}
              <div className="space-y-4">

                <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">

                  <p className="text-cyan-400 text-xs uppercase tracking-[0.25em] mb-4">
                    Hallazgo central
                  </p>

                  <p className="text-lg leading-relaxed text-slate-300">
                    La gestión directiva gestiona en la incertidumbre, en un
                    contexto de escasez y vulnerabilidad, transformando las
                    dificultades en oportunidades de aprendizaje, adaptación
                    y resiliencia.
                  </p>

                  <p className="text-lg leading-relaxed text-slate-400 mt-4">
                    En este camino, las TIC trascienden su dimensión
                    instrumental y se convierten en medios de transformación
                    digital, equidad y generación de oportunidades,
                    favoreciendo nuevas formas de crear, construir, enseñar y
                    aprender.
                  </p>

                  <div className="mt-5 pt-5 border-t border-slate-800">

                    <p className="text-xl font-bold text-cyan-300">
                      Aun cuando escasean los recursos, no escasean las
                      posibilidades.
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* =================================================
                TARJETAS RESUMEN
            ================================================= */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-10">

              <div className="flex gap-4 flex-wrap">

                <a
                  href="#categorias"
                  className="rounded-2xl border border-slate-800 bg-slate-900 px-5 py-4 min-w-[150px] hover:bg-slate-800 hover:border-cyan-400/30 transition-all"
                >
                  <p className="text-xs text-slate-500 uppercase tracking-widest">
                    Categorías
                  </p>

                  <h3 className="text-3xl font-black mt-2">
                    4
                  </h3>

                  <p className="text-xs text-cyan-300 mt-1">
                    Explorar →
                  </p>
                </a>

                <a
                  href="#base-datos"
                  className="rounded-2xl border border-slate-800 bg-slate-900 px-5 py-4 min-w-[150px] hover:bg-slate-800 hover:border-violet-400/30 transition-all"
                >
                  <p className="text-xs text-slate-500 uppercase tracking-widest">
                    Base de datos
                  </p>

                  <h3 className="text-3xl font-black mt-2">
                    3
                  </h3>

                  <p className="text-xs text-violet-300 mt-1">
                    Ver fuentes →
                  </p>
                </a>

                <a
                  href="#Herramientas-Investigador"
                  className="rounded-2xl border border-slate-800 bg-slate-900 px-5 py-4 min-w-[180px] hover:bg-slate-800 hover:border-emerald-400/30 transition-all"
                >
                  <p className="text-xs text-slate-500 uppercase tracking-widest">
                    Herramientas
                  </p>

                  <h3 className="text-3xl font-black mt-2">
                    {totalHerramientas}
                  </h3>

                  <p className="text-xs text-emerald-300 mt-1">
                    Explorar →
                  </p>
                </a>

              </div>

            </div>

          </div>

        </section>

  {/* =====================================================
    AUTORES PRINCIPALES
===================================================== */}
<section className="mb-10">

  <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">

    <div className="mb-5">

      <p className="text-cyan-400 text-xs uppercase tracking-[0.25em]">
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
          8 autores
        </span>

      </div>

    </div>


    {/* TARJETAS DE AUTORES */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">

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
            className={`w-full min-w-0 text-left rounded-xl border px-4 py-3 transition-all ${
              seleccionado
                ? "border-cyan-400/50 bg-cyan-400/10"
                : "border-slate-800 bg-slate-950 hover:border-cyan-400/30 hover:bg-slate-800"
            }`}
          >

            <div className="flex items-start gap-2 min-w-0">

              <span
                className={`flex-1 min-w-0 text-sm font-semibold leading-snug break-words ${
                  seleccionado
                    ? "text-cyan-300"
                    : "text-slate-300"
                }`}
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


    {/* =================================================
        INFORMACIÓN DEL AUTOR SELECCIONADO
    ================================================= */}
    {autorSeleccionado && (

      <div className="mt-5 rounded-2xl border border-cyan-400/20 bg-slate-950 p-6">

        <div className="flex items-start justify-between gap-4">

          <div>

            <p className="text-xs uppercase tracking-[0.2em] text-cyan-400">
              Referente teórico
            </p>

            <h3 className="text-2xl font-black text-white mt-1">
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


        {/* TEMA */}
        {(autorSeleccionado.tema ||
          autorSeleccionado.area ||
          autorSeleccionado.descripcion) && (

          <div className="mt-5">

            <p className="text-xs uppercase tracking-[0.2em] text-slate-600 mb-2">
              Aporte a la investigación
            </p>

            <p className="text-slate-300 leading-relaxed">
              {autorSeleccionado.tema ||
                autorSeleccionado.area ||
                autorSeleccionado.descripcion}
            </p>

          </div>

        )}


        {/* CITA / APORTES */}
        {autorSeleccionado.citas &&
          autorSeleccionado.citas.length > 0 && (

            <div className="mt-5">

              <p className="text-xs uppercase tracking-[0.2em] text-slate-600 mb-3">
                Aportes teóricos
              </p>

              <div className="space-y-3">

                {autorSeleccionado.citas
                  .slice(0, 4)
                  .map((cita, index) => (

                    <div
                      key={index}
                      className="rounded-xl border border-slate-800 bg-slate-900 px-4 py-4"
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


        {/* FUENTE */}
        {(autorSeleccionado.fuente ||
          autorSeleccionado.referencia ||
          autorSeleccionado.bibliografia ||
          autorSeleccionado.año) && (

          <div className="mt-5 pt-4 border-t border-slate-800">

            <p className="text-xs uppercase tracking-[0.2em] text-slate-600 mb-2">
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
            CATEGORÍAS DE ANÁLISIS
        ===================================================== */}
        <section
          id="categorias"
          className="mb-10 scroll-mt-8"
        >

          <div className="mb-6">

            <p className="text-cyan-300 text-sm uppercase tracking-[0.25em] mb-2">
              Análisis de la investigación
            </p>

            <h2 className="text-3xl md:text-4xl font-black tracking-tight">
              Categorías de análisis
            </h2>

            <p className="text-slate-400 mt-3 max-w-3xl">
              Las categorías organizan la información producida a partir de
              las entrevistas, encuestas y análisis documental.
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-5">

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
                  className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-6 hover:-translate-y-1 hover:border-slate-700 transition-all"
                >

                  <div
                    className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${
                      gradientes[index % gradientes.length]
                    }`}
                  />

                  <div className="flex items-start justify-between gap-4">

                    <div>

                      <p className="text-xs uppercase tracking-[0.2em] text-slate-600">
                        Categoría {index + 1}
                      </p>

                      <h3 className="text-xl md:text-2xl font-bold mt-2 group-hover:text-cyan-300 transition-colors">
                        {cat.nombre}
                      </h3>

                    </div>

                    <span className="text-slate-600 group-hover:text-cyan-300 transition-colors">
                      →
                    </span>

                  </div>

                  {cat.descripcion && (
                    <p className="text-sm text-slate-400 leading-relaxed mt-4">
                      {cat.descripcion}
                    </p>
                  )}

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
          className="mb-12 scroll-mt-8"
        >

          <div className="mb-6">

            <p className="text-violet-300 text-sm uppercase tracking-[0.25em] mb-2">
              Fuentes empíricas
            </p>

            <h2 className="text-3xl md:text-4xl font-black tracking-tight">
              Base de datos
            </h2>

            <p className="text-slate-400 mt-3 max-w-3xl">
              Organización de las principales fuentes utilizadas para la
              construcción y análisis de los datos de la investigación.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-5">

            <Link
              to="/base-datos/entrevistas"
              className="rounded-3xl border border-slate-800 bg-slate-900 p-6 hover:bg-slate-800 hover:border-violet-400/30 transition-all"
            >

              <div className="text-3xl mb-4">
                🎙️
              </div>

              <h3 className="text-xl font-bold">
                Entrevistas
              </h3>

              <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                Entrevistas semiestructuradas realizadas a integrantes del
                equipo directivo.
              </p>

              <div className="text-violet-300 text-sm font-semibold mt-5">
                Ver entrevistas →
              </div>

            </Link>

            <Link
              to="/base-datos/encuestas"
              className="rounded-3xl border border-slate-800 bg-slate-900 p-6 hover:bg-slate-800 hover:border-violet-400/30 transition-all"
            >

              <div className="text-3xl mb-4">
                📊
              </div>

              <h3 className="text-xl font-bold">
                Encuestas
              </h3>

              <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                Información obtenida mediante el instrumento aplicado a los
                actores institucionales.
              </p>

              <div className="text-violet-300 text-sm font-semibold mt-5">
                Ver base de datos →
              </div>

            </Link>

            <Link
              to="/base-datos/documental"
              className="rounded-3xl border border-slate-800 bg-slate-900 p-6 hover:bg-slate-800 hover:border-violet-400/30 transition-all"
            >

              <div className="text-3xl mb-4">
                📚
              </div>

              <h3 className="text-xl font-bold">
                Análisis documental
              </h3>

              <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                Documentos institucionales analizados para triangular los
                hallazgos.
              </p>

              <div className="text-violet-300 text-sm font-semibold mt-5">
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
          className="mb-12 scroll-mt-8"
        >

          <div className="mb-6">

            <p className="text-emerald-300 text-sm uppercase tracking-[0.25em] mb-2">
              Recursos de investigación
            </p>

            <h2 className="text-3xl md:text-4xl font-black tracking-tight">
              Herramientas para el investigador
            </h2>

            <p className="text-slate-400 mt-3 max-w-3xl">
              Recursos digitales para facilitar la búsqueda, organización,
              procesamiento y análisis de información durante la investigación.
            </p>

          </div>

          <div className="space-y-8">

            {herramientasData.categorias.map((categoria, index) => (

              <div
                key={index}
                className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6"
              >

                <div className="flex items-center gap-3 mb-5">

                  <span className="text-2xl">
                    {categoria.icono}
                  </span>

                  <h3 className="text-xl font-bold">
                    {categoria.nombre}
                  </h3>

                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">

                  {categoria.herramientas.map(
                    (herramienta, idx) => (

                      <a
                        key={idx}
                        href={herramienta.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group rounded-2xl border border-slate-800 bg-slate-950 p-5 hover:-translate-y-1 hover:border-emerald-400/40 transition-all"
                      >

                        <h4 className="font-bold text-lg group-hover:text-emerald-300 transition-colors">
                          {herramienta.nombre}
                        </h4>

                        <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                          {herramienta.descripcion}
                        </p>

                        <div className="mt-4 text-sm text-emerald-300 font-semibold">
                          Abrir herramienta →
                        </div>

                      </a>

                    )
                  )}

                </div>

              </div>

            ))}

          </div>

        </section>

        {/* =====================================================
            CITAS DESTACADAS
        ===================================================== */}
        <section className="mb-12">

          <div className="mb-6">

            <p className="text-cyan-300 text-sm uppercase tracking-[0.25em] mb-2">
              Voces de los actores institucionales
            </p>

            <h2 className="text-3xl md:text-4xl font-black tracking-tight">
              Citas destacadas
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-5">

            {citasDestacadas.map((entrevista, index) => (

              <div
                key={index}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-6"
              >

                <div className="text-cyan-400 text-3xl mb-4">
                  “
                </div>

                <p className="text-slate-300 leading-relaxed">
                  {entrevista.cita ||
                    entrevista.texto ||
                    entrevista.respuesta ||
                    "Registro de entrevista"}
                </p>

                <div className="mt-5 pt-4 border-t border-slate-800">

                  <p className="text-xs uppercase tracking-[0.2em] text-slate-600">
                    Fuente
                  </p>

                  <p className="text-sm text-slate-400 mt-1">
                    {entrevista.entrevistado ||
                      entrevista.nombre ||
                      entrevista.rol ||
                      "Entrevista"}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </section>

        {/* =====================================================
            FOOTER
        ===================================================== */}
        <footer className="border-t border-slate-800 pt-8 pb-4">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

            <div>

              <p className="font-semibold">
                Investigación de Licenciatura en Gestión Educativa
              </p>

              <p className="text-sm text-slate-600 mt-1">
                Escuela Primaria N.° 4774 “General Juan José Valle”
              </p>

            </div>

            <div className="text-sm text-slate-600">
              Barrio Libertad · Salta Capital
            </div>

          </div>

        </footer>

      </main>

    </div>
  );
}