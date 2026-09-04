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
  const [categoriasAbiertas, setCategoriasAbiertas] = useState(true);

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

  const citasDestacadas = [
  {
    categoria: "Contexto y territorio",
    cita: "La escuela cumple una función social importante; cuando hay que tomar decisiones e incorporar recursos tecnológicos, siempre pensamos en la realidad de las familias y los estudiantes; estamos atravesados por el contexto, y eso marca cómo acompañamos a los docentes.",
    entrevistado: "Vicedirectora",
    parrafo: "párr. 8"
  },
  {
    categoria: "Gestión y sostenibilidad",
    cita: "Tratamos siempre de que los proyectos sean posibles de sostener en el tiempo, que no dependan de factores externos o recursos que no podamos garantizar; buscamos que puedan mantenerse con lo que tenemos en la escuela y con el compromiso del equipo docente.",
    entrevistado: "Directora",
    parrafo: "párr. 9"
  },
  {
    categoria: "Trabajo colaborativo",
    cita: "A veces organizamos talleres internos donde los propios docentes que tienen mayor manejo de las herramientas digitales comparten sus conocimientos con quienes recién comienzan, generando espacios de colaboración, aprendizaje colectivo y fortalecimiento del trabajo en equipo dentro de la escuela.",
    entrevistado: "Vicedirectora",
    parrafo: "párr. 24"
  },
  {
    categoria: "Adaptación ante la escasez",
    cita: "A veces recurrimos a nuestros propios celulares o notebooks para poder trabajar, ya que los equipos disponibles en la escuela son antiguos y presentan limitaciones; de esta manera, buscamos garantizar la continuidad de las actividades y aprovechar los recursos personales disponibles.",
    entrevistado: "Vicedirectora",
    parrafo: "párr. 48"
  },
  {
    categoria: "Resiliencia institucional",
    cita: "La escuela también sufrió robos y destrozos; se llevaron materiales y rompieron equipamiento que usábamos para trabajar con los chicos, lo que nos obliga a reorganizar todo el tiempo y a volver a empezar con muy pocos recursos.",
    entrevistado: "Vicedirectora",
    parrafo: "párr. 53"
  },
  {
    categoria: "Innovación y gestión",
    cita: "Sí usamos herramientas tecnológicas como la inteligencia artificial para redactar proyectos institucionales; por ejemplo, el de normas de convivencia. La inteligencia artificial ayudó a estructurar ideas, y luego adaptamos el contenido al contexto escolar. Actualmente, estamos actualizando el PEI con ese apoyo.",
    entrevistado: "Vicedirectora",
    parrafo: "párr. 36"
  },
  {
    categoria: "Formación docente",
    cita: "Hay docentes que todavía sienten miedo de equivocarse frente a los alumnos cuando usan la computadora; les preocupa no saber resolver un problema técnico en el momento o quedar expuestos frente al grupo, y eso les genera inseguridad para incorporar las TIC.",
    entrevistado: "Vicedirectora",
    parrafo: "párr. 40"
  },
  {
    categoria: "Sentido pedagógico de las TIC",
    cita: "No se trata solo de tener computadoras, sino de pensar cómo las usamos para enseñar mejor. La tecnología debe integrarse con sentido pedagógico, orientando su uso hacia la construcción de conocimiento, la participación activa y el desarrollo de competencias críticas y reflexivas en los estudiantes.",
    entrevistado: "Vicedirectora",
    parrafo: "párr. 50"
  }
];

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
                  La investigación no solamente tiene un resultado, sino que tiene un recorrido. La aplicación busca hacer visible ese recorrido: de dónde salen los datos, cómo fueron reducidos y categorizados, cómo se contrastaron con la teoría y cómo se llegó finalmente a los hallazgos.
                </p>
              </div>

              {/* HALLAZGO */}

              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden">
               <button
  onClick={() => setHallazgoAbierto(!hallazgoAbierto)}
  className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-800/50 transition-all"
>
  <div>
    <p className="text-cyan-300 text-[10px] uppercase tracking-[0.25em]">
      Resultado central
    </p>

    <h2 className="text-2xl font-black tracking-tight mt-1">
      Hallazgo principal
    </h2>
  </div>

  <span
    className={`text-cyan-400 text-xl transition-transform duration-300 ${
      hallazgoAbierto ? "rotate-90" : ""
    }`}
  >
    ›
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

<div className="grid md:grid-cols-3 gap-3 mt-6 pt-4 border-t border-slate-800">

  {/* CATEGORÍAS */}
  <div className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-4 hover:border-cyan-500/30 transition-all">

    <p className="text-[9px] text-slate-500 uppercase tracking-widest">
      Categorías
    </p>

    <div className="flex items-end gap-2 mt-1">
      <h3 className="text-3xl font-black text-cyan-300">
        {totalCategorias}
      </h3>

      <span className="text-[10px] text-slate-500 mb-1">
        analizadas
      </span>
    </div>

    <a
      href="#categorias"
      className="mt-3 inline-flex items-center gap-2 rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-3 py-2 text-xs font-semibold text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all"
    >
      Explorar categorías
      <span className="group-hover:translate-x-1 transition-transform">
        →
      </span>
    </a>

  </div>


  {/* UNIDADES DE ANÁLISIS */}
  <div className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-4 hover:border-violet-500/30 transition-all">

    <p className="text-[9px] text-slate-500 uppercase tracking-widest">
      Unidades de análisis
    </p>

    <div className="flex items-end gap-2 mt-1">
      <h3 className="text-3xl font-black text-violet-300">
        {totalUnidades}
      </h3>

      <span className="text-[10px] text-slate-500 mb-1">
        organizadas
      </span>
    </div>

    <a
      href="#categorias"
      className="mt-3 inline-flex items-center gap-2 rounded-lg border border-violet-500/30 bg-violet-500/10 px-3 py-2 text-xs font-semibold text-violet-300 hover:bg-violet-500/20 hover:border-violet-400/50 transition-all"
    >
      Explorar análisis
      <span className="group-hover:translate-x-1 transition-transform">
        →
      </span>
    </a>

  </div>


  {/* DOCUMENTOS */}
  <div className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-4 hover:border-emerald-500/30 transition-all">

    <p className="text-[9px] text-slate-500 uppercase tracking-widest">
      Documentos analizados
    </p>

    <div className="flex items-end gap-2 mt-1">
      <h3 className="text-3xl font-black text-emerald-300">
        {totalDocumentos}
      </h3>

      <span className="text-[10px] text-slate-500 mb-1">
        registrados
      </span>
    </div>

    <a
      href="#base-datos"
      className="mt-3 inline-flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-xs font-semibold text-emerald-300 hover:bg-emerald-500/20 hover:border-emerald-400/50 transition-all"
    >
      Explorar documentos
      <span className="group-hover:translate-x-1 transition-transform">
        →
      </span>
    </a>

  </div>

</div>
          </div>
        </section>

      {/* =====================================================
    CATEGORÍAS
===================================================== */}

<section
  id="categorias"
  className="mb-8 scroll-mt-6"
>
  <button
    onClick={() => setCategoriasAbiertas(!categoriasAbiertas)}
    className="w-full flex items-center justify-between mb-4 text-left hover:bg-slate-900/40 rounded-xl p-2 -m-2 transition-all"
  >
    <div>
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

    {/* FLECHA TIPO ÍNDICE */}
    <span
      className={`text-cyan-400 text-xl transition-transform duration-300 ${
        categoriasAbiertas ? "rotate-90" : ""
      }`}
    >
      ›
    </span>
  </button>
{categoriasAbiertas && (
  <div className="grid md:grid-cols-2 gap-4">
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
          className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-5 hover:-translate-y-1 hover:border-slate-600 transition-all"
        >
          {/* Línea superior */}
          <div
            className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${
              gradientes[index % gradientes.length]
            }`}
          />

          {/* Encabezado */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-600">
                Categoría {index + 1}
              </p>

              <h3 className="text-xl md:text-2xl font-bold mt-1 group-hover:text-cyan-300 transition-colors">
                {cat.titulo || cat.nombre}
              </h3>
            </div>

            <span className="text-slate-600 text-xl group-hover:text-cyan-300 group-hover:translate-x-1 transition-all">
              →
            </span>
          </div>

          {/* Descripción */}
          {cat.descripcion && (
            <p className="text-sm text-slate-400 leading-relaxed mt-3">
              {cat.descripcion}
            </p>
          )}

          {/* Indicador */}
          <div className="mt-5 rounded-xl bg-slate-950 border border-slate-800 p-4">
            <p className="text-[9px] uppercase tracking-[0.15em] text-slate-500">
              Unidad de análisis
            </p>

            <div className="flex items-end gap-2 mt-1">
              <span className="text-3xl font-black text-cyan-300">
                {unidadesPorCategoria[cat.id] || 0}
              </span>

              <span className="text-xs text-slate-500 mb-1">
                unidades organizadas
              </span>
            </div>
          </div>

          {/* Botón explorar */}
          <div className="mt-4">
            <span className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-4 py-3 text-sm font-semibold text-cyan-300 group-hover:bg-cyan-500/20 group-hover:border-cyan-400/50 transition-all">
              Explorar categoría
              <span className="text-lg group-hover:translate-x-1 transition-transform">
                →
              </span>
            </span>
          </div>
        </Link>
      );
    })}
  </div>
)}
</section>
{/* =================================================
    ORIGEN DE LA INVESTIGACIÓN
================================================= */}

<section id="por-que-este-tema" className="mb-8 scroll-mt-6">

  <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-6">

    {/* Línea superior */}
    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-400 via-orange-400 to-cyan-400" />

    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

      <div className="max-w-3xl">

        <p className="text-amber-300 text-[10px] uppercase tracking-[0.25em] mb-2">
          Origen de la investigación
        </p>

        <h2 className="text-2xl md:text-3xl font-black tracking-tight">
          ¿Por qué este tema?
        </h2>

        <p className="text-sm text-slate-400 leading-relaxed mt-3">
          La elección del tema surge del interés por comprender el rol de la
          gestión directiva en la promoción de las TIC, considerando su
          relevancia educativa, la posibilidad concreta de abordarlo y la
          factibilidad de desarrollarlo dentro de los tiempos y recursos
          disponibles.
        </p>

        {/* Criterios */}
        <div className="flex flex-wrap gap-2 mt-4">

          <span className="rounded-lg bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 text-xs text-amber-300">
            Interés
          </span>

          <span className="rounded-lg bg-orange-500/10 border border-orange-500/20 px-3 py-1.5 text-xs text-orange-300">
            Relevancia
          </span>

          <span className="rounded-lg bg-cyan-500/10 border border-cyan-500/20 px-3 py-1.5 text-xs text-cyan-300">
            Factibilidad
          </span>

          <span className="rounded-lg bg-violet-500/10 border border-violet-500/20 px-3 py-1.5 text-xs text-violet-300">
            Delimitación
          </span>

        </div>

      </div>

      {/* Botón */}
      <Link
        to="/por-que-este-tema"
        className="shrink-0 inline-flex items-center justify-center gap-2 rounded-xl border border-amber-500/30 bg-amber-500/10 px-5 py-3 text-sm font-semibold text-amber-300 hover:bg-amber-500/20 hover:border-amber-400/50 transition-all"
      >
        Explorar fundamento
        <span className="text-lg">
          →
        </span>
      </Link>

    </div>

  </div>

</section>
{/* MARCO METODOLÓGICO */}
<section id="metodologia" className="mb-8 scroll-mt-6">

  <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-6">

    {/* Línea superior */}
    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-violet-400 to-emerald-400" />

    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

      <div className="max-w-3xl">

        <p className="text-cyan-300 text-[10px] uppercase tracking-[0.25em] mb-2">
          Diseño de la investigación
        </p>

        <h2 className="text-2xl md:text-3xl font-black tracking-tight">
          Marco metodológico
        </h2>

        <p className="text-sm text-slate-400 leading-relaxed mt-3">
          La investigación adopta un enfoque cualitativo y un estudio de caso,
          articulando diferentes técnicas y fuentes para comprender el rol de
          la gestión directiva en la promoción de las TIC.
        </p>

        {/* Indicadores */}
        <div className="flex flex-wrap gap-2 mt-4">

          <span className="rounded-lg bg-cyan-500/10 border border-cyan-500/20 px-3 py-1.5 text-xs text-cyan-300">
            Enfoque cualitativo
          </span>

          <span className="rounded-lg bg-violet-500/10 border border-violet-500/20 px-3 py-1.5 text-xs text-violet-300">
            Estudio de caso
          </span>

          <span className="rounded-lg bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 text-xs text-emerald-300">
            Triangulación metodológica
          </span>

        </div>

      </div>

      {/* Botón */}
      <Link
        to="/metodologia"
        className="shrink-0 inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-5 py-3 text-sm font-semibold text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all"
      >
        Explorar metodología
        <span className="text-lg">
          →
        </span>
      </Link>

    </div>

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
    CITAS DESTACADAS
===================================================== */}

<section className="mb-8">
  <div className="rounded-2xl border border-slate-800 bg-slate-900/80 overflow-hidden">

    {/* ENCABEZADO */}
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

    <p className="text-xs text-slate-500 mt-2">
      Evidencias cualitativas de los principales hallazgos.
    </p>
  </div>

  <span
    className={`text-cyan-400 text-xl transition-transform duration-300 ${
      citasAbiertas ? "rotate-90" : ""
    }`}
  >
    ›
  </span>
</button>

    {/* CONTENIDO */}
    {citasAbiertas && (
      <div className="border-t border-slate-800 p-4">

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">

          {citasDestacadas.map((entrevista, index) => (
            <div
              key={index}
              className="group rounded-xl border border-slate-800 bg-slate-950 p-5 hover:border-cyan-500/40 hover:bg-slate-900 transition-all duration-300"
            >

              {/* CATEGORÍA */}
              <div className="flex items-center justify-between mb-4">

                <span className="inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-1 text-[9px] uppercase tracking-[0.15em] text-cyan-300">
                  {entrevista.categoria}
                </span>

                <span className="text-slate-700 text-xs">
                  #{index + 1}
                </span>

              </div>


              {/* COMILLAS */}
              <div className="text-cyan-400 text-3xl leading-none mb-2">
                “
              </div>


              {/* CITA */}
              <p className="text-sm text-slate-300 leading-relaxed">
                {entrevista.cita}
              </p>


              {/* FUENTE */}
              <div className="mt-5 pt-4 border-t border-slate-800">

                <p className="text-[9px] uppercase tracking-[0.2em] text-slate-600">
                  Voz institucional
                </p>

                <p className="text-xs text-slate-400 mt-1">
                  {entrevista.entrevistado}
                </p>

                <p className="text-[10px] text-slate-600 mt-1">
                  {entrevista.parrafo}
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
            FOOTER
        ===================================================== */}

        <footer className="border-t border-slate-800 pt-6 pb-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div>
              <p className="text-sm font-semibold">
                Licenciatura en Gestión Educativa 
              </p>

              <p className="text-xs text-slate-600 mt-1">
                Universidad Católica de Salta
              </p>
            </div>

            <div className="text-xs text-slate-600">
              Diego Castellanos
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}