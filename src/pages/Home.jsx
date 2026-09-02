import categorias from "../data/categorias.json"
import entrevistas from "../data/entrevistas.json"
import { Link } from 'react-router-dom'
import { useState } from "react";


export default function TesisDashboard() {
const [menuAbierto, setMenuAbierto] = useState(false);  
const navegacion = [
  {
    titulo: 'Introducción',
    href: '/capitulo/0',
  },
  {
    titulo: 'Capítulo 1: Contextualización',
    href: "/capitulo/1",
  },
  {
    titulo: 'Capítulo 2: Rol de la gestión directiva en la promoción de las TIC',
    href: "/capitulo/2",
  },
  {
    titulo: 'Capítulo 3: Estrategias de la gestión directiva para la incorporación de las TIC',
    href: '/capitulo/3',
  },
  {
    titulo: 'Capítulo 4: Desafíos y oportunidades de la gestión directiva en la integración de las TIC',
    href: '/capitulo/4',
  },
  {
    titulo: 'Conclusiones',
    href: '/capitulo/5',
  },
  {
    titulo: 'Referencias bibliográficas',
    href: '/capitulo/6',
  },
  {
    titulo: 'Anexo 1: Base de datos — Encuestas y entrevistas',
    href: '/capitulo/7',
  },
  {
    titulo: 'Anexo 2: Base de datos — Análisis documental',
    href: '/capitulo/8',
  },
];
const citasDestacadas = entrevistas.slice(0, 3)
const colores = {
  cyan: 'from-cyan-500 to-blue-500',
  violet: 'from-violet-500 to-fuchsia-500',
  emerald: 'from-emerald-500 to-green-500',
}


  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      {/* SIDEBAR */}
<aside className="hidden lg:flex w-80 border-r border-slate-800 bg-slate-950/95 backdrop-blur-xl flex-col p-6 sticky top-0 h-screen">

  <div>
    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-xs text-cyan-300 mb-4">
      Presentación Informe Final de Tesis
    </div>

    <h2 className="text-2xl font-black leading-tight">
      Gestión directiva y promoción de TIC
    </h2>

    <p className="text-slate-400 text-sm mt-3 leading-relaxed">
      Plataforma interactiva para la exploración del informe final de
      investigación.
    </p>
  </div>

  {/* ÍNDICE CON SCROLL */}
  <nav className="mt-8 flex-1 min-h-0 overflow-y-auto space-y-2 pr-2">

    <p className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-3">
      Índice de la investigación
    </p>

    {navegacion.map((item, index) => (
      <a
        key={index}
        href={item.href}
        className="block w-full text-left rounded-xl px-3 py-2.5 transition-all duration-300 border bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800 hover:border-cyan-400/30 hover:text-cyan-300 text-sm"
      >
        {item.titulo}
      </a>
    ))}

  </nav>

  {/* ENFOQUE METODOLÓGICO */}
  <div className="mt-6">

    <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-5">

      <p className="text-xs uppercase tracking-widest text-slate-500 mb-2">
        Enfoque metodológico
      </p>

      <p className="text-sm text-slate-300 leading-relaxed">
        Investigación cualitativa situada de corte transversal, orientada
        a comprender el rol de la gestión directiva en la promoción de las
        TIC dentro de un contexto institucional específico.
      </p>

    </div>

  </div>

</aside>

      <main className="flex-1 p-6 md:p-10">
        {/* =========================================================
    ÍNDICE PARA CELULAR
========================================================= */}
<div className="lg:hidden mb-6">

  <button
    onClick={() => setMenuAbierto(!menuAbierto)}
    className="w-full flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900 px-5 py-4 text-left hover:border-cyan-400/30 transition-all"
  >

    <div>
      <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
        Navegación
      </p>

      <p className="text-cyan-300 font-semibold mt-1">
        ☰ Índice de la investigación
      </p>
    </div>

    <span className="text-slate-400 text-xl">
      {menuAbierto ? "−" : "+"}
    </span>

  </button>


  {/* MENÚ DESPLEGABLE */}
  {menuAbierto && (
    <div className="mt-2 rounded-2xl border border-slate-800 bg-slate-900 p-3 space-y-2">

      {navegacion.map((item, index) => (

        <a
          key={index}
          href={item.href}
          onClick={() => setMenuAbierto(false)}
          className="block rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-300 hover:bg-slate-800 hover:text-cyan-300 hover:border-cyan-400/30 transition-all"
        >
          {item.titulo}
        </a>

      ))}

    </div>
  )}

</div>
        {/* CATEGORY HERO */}
        <section className="relative overflow-hidden rounded-[32px] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 md:p-10 mb-10 shadow-2xl">
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl"></div>

          <div className="relative z-10 grid lg:grid-cols-[1.3fr_0.7fr] gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300 mb-5">
                Eje central de análisis
              </div>

              <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight max-w-5xl">
  Gestión directiva y promoción de las TIC:
  <span className="block mt-2 text-cyan-300">
    un estudio de caso en la Escuela Primaria N° 4774
  </span>

  <span className="block mt-2 text-slate-300 text-2xl md:text-3xl font-semibold">
    “General Juan José Valle” del Barrio Libertad, en la ciudad de Salta
  </span>
</h2>
  <div>            
            <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Experiencia Interactiva de Investigación
            </h1>
          </div>
            </div>
                 <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
         <div className="flex gap-4 flex-wrap">

  {/* CATEGORÍAS */}
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


  {/* BASE DE DATOS */}
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
    href="#tips-investigador"
    className="rounded-2xl border border-slate-800 bg-slate-900 px-5 py-4 min-w-[150px] hover:bg-slate-800 hover:border-emerald-400/30 transition-all"
  >
    <p className="text-xs text-slate-500 uppercase tracking-widest">
      Tips investigador
    </p>

    <h3 className="text-3xl font-black mt-2">
      4
    </h3>

    <p className="text-xs text-emerald-300 mt-1">
      Explorar →
    </p>
  </a>

  {/* TIPS PARA INVESTIGADOR */}
  <a
    href="#tips-investigador"
    className="rounded-2xl border border-slate-800 bg-slate-900 px-5 py-4 min-w-[150px] hover:bg-slate-800 hover:border-emerald-400/30 transition-all"
  >
    <p className="text-xs text-slate-500 uppercase tracking-widest">
      Tips investigador
    </p>

    <h3 className="text-3xl font-black mt-2">
      3
    </h3>

    <p className="text-xs text-emerald-300 mt-1">
      Explorar →
    </p>
  </a>

</div>
             <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 backdrop-blur-xl">
                <p className="text-slate-500 text-sm uppercase tracking-widest mb-3">
                  Autores principales
                </p>

                <div className="flex flex-wrap gap-3">
                  {['Antonio Bolívar','Bernardo Blejmar', 'Carina Lion', 'Francisco Imbernón', 'Inés Dussel', 'Mariana Maggio', 'Michael Fullan'].map((autor, idx) => (
                    <div
                      key={idx}
                      className="rounded-full bg-cyan-500/10 border border-cyan-400/20 px-4 py-2 text-sm text-cyan-300"
                    >
                      {autor}
                    </div>
                  ))}
                </div>
              </div>
        </div>
            <div className="space-y-4">
           

              <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 backdrop-blur-xl">
                <p className="text-slate-500 text-sm uppercase tracking-widest mb-2">
                  Hallazgo central
                </p>
<p className="text-lg leading-relaxed text-slate-400">
  La gestión directiva gestiona en la incertidumbre, adaptando las decisiones
  sobre TIC al contexto de vulnerabilidad.

  La falta de recursos tecnológicos obliga a repensar las estrategias y
  movilizar los recursos disponibles.

  En este escenario de crisis, la gestión transforma las dificultades en
  oportunidades de aprendizaje, adaptación y resiliencia institucional.
</p>
</div>
</div>
</div>
</section>

{/* INTERACTIVE CARDS */}
{/* =========================================================
    CATEGORÍAS DE ANÁLISIS
========================================================= */}
<section id="categorias" className="mb-10 scroll-mt-8">

  <div className="mb-6">
    <p className="text-cyan-300 text-sm uppercase tracking-[0.25em] mb-2">
      Estructura de la investigación
    </p>

    <h2 className="text-3xl md:text-4xl font-black tracking-tight">
      Categorías de análisis
    </h2>

    <p className="text-slate-400 mt-3">
      Las cuatro categorías organizan el análisis de la investigación.
      Seleccioná una para explorar sus resultados y evidencias.
    </p>
  </div>

  <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

    {categorias.map((cat, index) => (

      <Link
        key={index}
        to={`/categoria/${cat.id}`}
        className="group block rounded-[28px] border border-slate-800 bg-slate-900 overflow-hidden hover:-translate-y-2 hover:border-cyan-400/30 transition-all duration-300"
      >

        {/* BARRA SUPERIOR */}
        <div
          className={`h-2 bg-gradient-to-r ${
            colores[cat.color] || colores.cyan
          }`}
        ></div>

        {/* CONTENIDO */}
        <div className="p-6">

          {/* NÚMERO */}
          <div className="text-xs text-slate-500 uppercase tracking-widest mb-3">
            Categoría {index + 1}
          </div>

          {/* TÍTULO */}
          <h3 className="text-xl font-black mb-4 group-hover:text-cyan-300 transition-colors">
            {cat.titulo}
          </h3>

          {/* DESCRIPCIÓN */}
          <p className="text-slate-400 leading-relaxed mb-6">
            {cat.descripcion}
          </p>

          {/* SUBCATEGORÍAS */}
          <div className="space-y-3">

            {cat.subcategorias.map((sub, idx) => (

              <div
                key={idx}
                className="rounded-2xl bg-slate-950 border border-slate-800 px-4 py-3 text-sm text-slate-300"
              >
                {sub}
              </div>

            ))}

          </div>

          {/* LINK VISUAL */}
          <div className="mt-6 text-cyan-300 text-sm font-semibold">
            Explorar categoría →
          </div>

        </div>

      </Link>

    ))}

  </div>

</section>
{/* =========================================================
    BASE DE DATOS
========================================================= */}
<section id="base-datos" className="mb-12 scroll-mt-8">

  <div className="mb-6">

    <p className="text-violet-300 text-sm uppercase tracking-[0.25em] mb-2">
      Evidencias de la investigación
    </p>

    <h2 className="text-3xl md:text-4xl font-black tracking-tight">
      Base de datos
    </h2>

    <p className="text-slate-400 mt-3 max-w-3xl">
      Conjunto de evidencias utilizadas para analizar la gestión directiva
      y la incorporación de las TIC en la institución.
    </p>

  </div>

  <div className="grid md:grid-cols-3 gap-6">

    {/* ENCUESTAS */}
    <Link
      to="/base-datos/encuestas"
      className="block rounded-3xl border border-slate-800 bg-slate-900 p-6 hover:-translate-y-1 hover:border-cyan-400/40 transition-all"
    >

      <p className="text-cyan-300 text-xs uppercase tracking-widest mb-3">
        Instrumento 01
      </p>

      <h3 className="text-xl font-bold mb-3">
        Encuestas
      </h3>

      <p className="text-slate-400 leading-relaxed">
        Respuestas obtenidas de docentes y actores de la comunidad educativa.
      </p>

      <div className="mt-5 text-cyan-300 text-sm font-semibold">
        Ver encuesta →
      </div>

    </Link>


    {/* ENTREVISTAS */}
    <Link
      to="/base-datos/entrevistas"
      className="block rounded-3xl border border-slate-800 bg-slate-900 p-6 hover:-translate-y-1 hover:border-violet-400/40 transition-all"
    >

      <p className="text-violet-300 text-xs uppercase tracking-widest mb-3">
        Instrumento 02
      </p>

      <h3 className="text-xl font-bold mb-3">
        Entrevistas
      </h3>

      <p className="text-slate-400 leading-relaxed">
        Testimonios y perspectivas de los actores institucionales
        entrevistados durante la investigación.
      </p>

      <div className="mt-5 text-violet-300 text-sm font-semibold">
        Ver entrevistas →
      </div>

    </Link>


    {/* ANÁLISIS DOCUMENTAL */}
    <Link
      to="/base-datos/documental"
      className="block rounded-3xl border border-slate-800 bg-slate-900 p-6 hover:-translate-y-1 hover:border-emerald-400/40 transition-all"
    >

      <p className="text-emerald-300 text-xs uppercase tracking-widest mb-3">
        Instrumento 03
      </p>

      <h3 className="text-xl font-bold mb-3">
        Análisis documental
      </h3>

      <p className="text-slate-400 leading-relaxed">
        Documentos institucionales analizados para complementar y
        contextualizar las evidencias de la investigación.
      </p>

      <div className="mt-5 text-emerald-300 text-sm font-semibold">
        Ver documentos →
      </div>

    </Link>

  </div>

</section>
{/* =========================================================
    tips para el investigador 
========================================================= */}
<section id="tips-investigador" className="mb-12">
  <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-8">

    <p className="text-emerald-300 text-sm uppercase tracking-[0.25em] mb-2">
      Caja de herramientas
    </p>

    <h2 className="text-3xl md:text-4xl font-black">
      Tips para investigadores
    </h2>

    <div className="grid md:grid-cols-3 gap-6 mt-8">

      <div>
        <h3 className="font-bold text-lg mb-2">
      Cada capítulo en una hoja nueva
        </h3>
        <p className="text-slate-400 leading-relaxed">
      No iniciar párrafos con citas bibliográficas
        </p>
      </div>

      <div>
        <h3 className="font-bold text-lg mb-2">
Cohesión / conexión entre un capitulo y otro 
        </h3>
        <p className="text-slate-400 leading-relaxed">
          Las entrevistas y encuestas permiten recuperar las perspectivas
          de quienes participan cotidianamente de la institución.
        </p>
      </div>

      <div>
        <h3 className="font-bold text-lg mb-2">
Controlar citas bibliográficas Repetición y contexto 
        </h3>
        <p className="text-slate-400 leading-relaxed">
          En contextos de incertidumbre y limitaciones, las dificultades
          también pueden convertirse en oportunidades de aprendizaje y
          transformación.
        </p>
      </div>
      <div>
        <h3 className="font-bold text-lg mb-2">
      Controlar citas empíricas sobre datos recolectados repetición y contexto
        </h3>
        <p className="text-slate-400 leading-relaxed">
          En contextos de incertidumbre y limitaciones, las dificultades
          también pueden convertirse en oportunidades de aprendizaje y
          transformación.
        </p>
      </div>
    </div>
  </div>
</section>
{/* CITAS DESTACADAS */}
<section className="mb-12">
  <div className="flex items-center justify-between mb-6">
    <div>
      <p className="text-cyan-300 text-sm uppercase tracking-[0.25em] mb-2">
        Evidencias empíricas
      </p>

      <h2 className="text-3xl md:text-4xl font-black tracking-tight">
        Citas destacadas de entrevistas
      </h2>
    </div>
  </div>

  <div className="grid md:grid-cols-3 gap-6">
    {citasDestacadas.map((cita, index) => (
      <div
        key={index}
        className="rounded-[28px] border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6 hover:-translate-y-1 transition-all duration-300"
      >
        <div className="text-5xl text-cyan-400 opacity-30 mb-4">
          “
        </div>

        <p className="text-slate-200 leading-relaxed text-lg min-h-[140px]">
          {cita.cita}
        </p>

        <div className="mt-8 flex items-center gap-4">
          <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center font-black text-lg">
            {cita.actor.charAt(0)}
          </div>

          <div>
            <p className="font-semibold text-lg">
              {cita.actor}
            </p>

            <p className="text-sm text-slate-400">
              {cita.codigo}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>
<footer className="text-center py-8 text-slate-500 text-sm">
  Tesis de Licenciatura en Gestión Educativa • Dashboard interactivo de investigación - Diego Castellanos Universidad Católica de Salta - 2026
</footer>
</main>
</div>
);
}
             