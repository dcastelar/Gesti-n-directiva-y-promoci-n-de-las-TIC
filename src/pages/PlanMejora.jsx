import { useState } from "react";
import { Link } from "react-router-dom";

export default function PlanMejora() {
  const [abierta, setAbierta] = useState("diagnostico");

  const toggle = (id) => {
    setAbierta(abierta === id ? null : id);
  };

  const secciones = [
    {
      id: "diagnostico",
      icono: "🔎",
      titulo: "Punto de partida",
      subtitulo: "Diagnóstico institucional",
      contenido: (
        <div className="space-y-4">
          <p>
            El Plan de Mejora Institucional surge a partir de necesidades
            identificadas en el diagnóstico de la institución. Entre ellas se
            reconocen dificultades vinculadas con la lectoescritura, la
            actualización profesional docente, la disponibilidad limitada de
            recursos tecnológicos y didácticos, el mobiliario y la necesidad
            de fortalecer las propuestas pedagógicas.
          </p>

          <p>
            Estas condiciones no son abordadas desde una perspectiva
            exclusivamente técnica, sino que constituyen el punto de partida
            para que la gestión directiva tome decisiones considerando las
            posibilidades reales de la institución.
          </p>

          <div className="bg-slate-900/70 border border-cyan-500/20 rounded-xl p-4">
            <p className="text-sm text-cyan-300 font-semibold mb-2">
              Decisión situada
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              La gestión parte de las necesidades concretas de la escuela y
              articula las acciones de mejora con los recursos humanos,
              materiales y tecnológicos efectivamente disponibles.
            </p>
          </div>
        </div>
      ),
    },

    {
      id: "proyecto",
      icono: "🧭",
      titulo: "Rutas, hacia una nueva escuela",
      subtitulo: "El Plan de Mejora como respuesta institucional",
      contenido: (
        <div className="space-y-4">
          <p>
            El proyecto <strong>“Rutas, hacia una nueva escuela”</strong>
            constituye una respuesta institucional frente a las necesidades
            identificadas en el diagnóstico.
          </p>

          <p>
            El Plan de Mejora permite transformar esas necesidades en
            objetivos, estrategias y acciones concretas, articulando las
            decisiones de la gestión directiva con las prácticas pedagógicas
            de los docentes.
          </p>

          <p>
            Desde esta perspectiva, la planificación no se presenta como un
            procedimiento aislado, sino como una herramienta para orientar la
            transformación institucional de manera progresiva y situada.
          </p>

          <div className="grid md:grid-cols-3 gap-3 mt-5">
            <div className="bg-slate-900/60 rounded-xl p-4 border border-slate-700">
              <div className="text-2xl mb-2">🎯</div>
              <h4 className="font-semibold text-white mb-1">
                Diagnóstico
              </h4>
              <p className="text-xs text-slate-400">
                Reconocimiento de necesidades institucionales.
              </p>
            </div>

            <div className="bg-slate-900/60 rounded-xl p-4 border border-slate-700">
              <div className="text-2xl mb-2">🧩</div>
              <h4 className="font-semibold text-white mb-1">
                Planificación
              </h4>
              <p className="text-xs text-slate-400">
                Organización de objetivos y estrategias posibles.
              </p>
            </div>

            <div className="bg-slate-900/60 rounded-xl p-4 border border-slate-700">
              <div className="text-2xl mb-2">🚀</div>
              <h4 className="font-semibold text-white mb-1">
                Acción
              </h4>
              <p className="text-xs text-slate-400">
                Implementación de acciones de mejora.
              </p>
            </div>
          </div>
        </div>
      ),
    },

    {
      id: "estrategia",
      icono: "💡",
      titulo: "Una estrategia situada",
      subtitulo: "Innovar desde las posibilidades institucionales",
      contenido: (
        <div className="space-y-4">
          <p>
            Una de las características centrales del Plan de Mejora es que
            propone fortalecer las prácticas pedagógicas sin desconocer las
            condiciones concretas de la institución.
          </p>

          <p>
            Las estrategias incluyen talleres, espacios de intercambio,
            acompañamiento docente, diseño colaborativo de propuestas
            didácticas y utilización de recursos disponibles.
          </p>

          <p>
            En este sentido, la incorporación de tecnologías no se plantea
            como un fin en sí mismo, sino como parte de un proceso más amplio
            de fortalecimiento de las capacidades institucionales.
          </p>

          <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-5">
            <p className="text-emerald-300 font-semibold mb-2">
              Una idea clave del análisis
            </p>

            <p className="text-slate-300 text-sm leading-relaxed">
              La innovación institucional no depende exclusivamente de contar
              con mayor cantidad de dispositivos o conectividad. También
              supone organizar los recursos existentes, acompañar a los
              docentes y generar condiciones para que las experiencias puedan
              sostenerse y compartirse.
            </p>
          </div>
        </div>
      ),
    },

    {
      id: "repositorio",
      icono: "🗂️",
      titulo: "Repositorio institucional",
      subtitulo: "Organizar, compartir y recuperar el conocimiento producido",
      destacado: true,
      contenido: (
        <div className="space-y-5">
          <div className="bg-cyan-500/10 border border-cyan-400/30 rounded-xl p-5">
            <p className="text-cyan-300 font-semibold mb-2">
              ¿Qué aporta esta experiencia?
            </p>

            <p className="text-slate-300 leading-relaxed text-sm">
              El repositorio no se concibe únicamente como un espacio para
              almacenar archivos, sino como una herramienta orientada a
              favorecer la circulación de saberes, facilitar el acceso a la
              información y sostener la memoria documental de la institución.
            </p>
          </div>

          <p>
            En esta investigación, la experiencia del repositorio se
            encuentra en una <strong>etapa inicial de construcción</strong>.
            Por ello, no se presenta como un repositorio institucional formal
            plenamente consolidado, sino como una experiencia orientada a
            organizar y poner en circulación la documentación producida por
            la institución.
          </p>

          <p>
            Esta experiencia permite visualizar cómo una decisión de gestión
            puede generar nuevas formas de organizar la información y
            fortalecer las capacidades institucionales.
          </p>

          <div>
            <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">
              Organización propuesta
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                ["📝", "Notas y comunicaciones"],
                ["📚", "Documentos institucionales"],
                ["⚖️", "Resoluciones"],
                ["👥", "Registros de ausencias"],
                ["📋", "Planificaciones"],
                ["🚀", "Proyectos institucionales"],
                ["📁", "Otros documentos relevantes"],
              ].map(([icono, nombre]) => (
                <div
                  key={nombre}
                  className="flex items-center gap-3 bg-slate-900/70 border border-slate-700 rounded-xl p-3"
                >
                  <span className="text-xl">{icono}</span>
                  <span className="text-sm text-slate-300">
                    {nombre}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },

    {
      id: "memoria",
      icono: "🧠",
      titulo: "Más que guardar archivos",
      subtitulo: "Construcción de memoria institucional",
      contenido: (
        <div className="space-y-4">
          <p>
            La organización de documentos adquiere un sentido estratégico
            cuando permite recuperar experiencias, reconocer decisiones,
            compartir materiales y evitar que el conocimiento institucional
            quede disperso.
          </p>

          <p>
            De esta manera, la documentación producida por la escuela puede
            convertirse en un recurso para la toma de decisiones futuras y
            para el aprendizaje institucional.
          </p>

          <div className="bg-violet-500/10 border border-violet-500/20 rounded-xl p-5">
            <p className="text-violet-300 font-semibold mb-2">
              Memoria institucional
            </p>

            <p className="text-sm text-slate-300 leading-relaxed">
              Registrar, organizar y recuperar lo realizado permite que las
              experiencias no dependan únicamente de la memoria individual,
              sino que puedan constituirse en parte del conocimiento
              compartido de la institución.
            </p>
          </div>
        </div>
      ),
    },

    {
      id: "transformacion",
      icono: "🔄",
      titulo: "Transformación digital situada",
      subtitulo: "La tecnología como medio y no como fin",
      contenido: (
        <div className="space-y-4">
          <p>
            La experiencia analizada permite comprender que la transformación
            digital institucional no consiste simplemente en incorporar
            dispositivos o plataformas.
          </p>

          <p>
            Supone también revisar las formas de organizar la información,
            compartir conocimientos, acompañar a los docentes y construir
            respuestas frente a las necesidades de la institución.
          </p>

          <p>
            En este marco, la gestión directiva adquiere un papel central al
            articular recursos, personas y decisiones para generar condiciones
            que permitan sostener los procesos de innovación.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-900/70 border border-slate-700 rounded-xl p-5">
              <span className="text-2xl">⚙️</span>
              <h4 className="font-semibold text-white mt-3 mb-2">
                Gestión
              </h4>
              <p className="text-sm text-slate-400">
                Organiza recursos y genera condiciones para la acción
                institucional.
              </p>
            </div>

            <div className="bg-slate-900/70 border border-slate-700 rounded-xl p-5">
              <span className="text-2xl">🌱</span>
              <h4 className="font-semibold text-white mt-3 mb-2">
                Fortalecimiento
              </h4>
              <p className="text-sm text-slate-400">
                Convierte las experiencias en aprendizajes que pueden
                compartirse y sostenerse.
              </p>
            </div>
          </div>
        </div>
      ),
    },

    {
      id: "cierre",
      icono: "📌",
      titulo: "Aporte a la investigación",
      subtitulo: "El Plan de Mejora como evidencia documental",
      contenido: (
        <div className="space-y-5">
          <p>
            El análisis del Plan de Mejora permite identificar una relación
            concreta entre el diagnóstico institucional y las decisiones
            adoptadas por la gestión directiva.
          </p>

          <p>
            Por esta razón, el documento constituye una evidencia relevante
            para comprender cómo la gestión transforma necesidades
            identificadas en acciones institucionales y cómo estas acciones
            pueden contribuir al fortalecimiento de las capacidades de la
            escuela.
          </p>

          <div className="bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-cyan-500/20 rounded-2xl p-6">
            <p className="text-xs text-cyan-400 uppercase tracking-widest font-semibold mb-4">
              Síntesis interpretativa
            </p>

            <div className="flex flex-wrap items-center gap-2 text-sm">
              {[
                "Necesidad identificada",
                "Decisión de gestión",
                "Plan de Mejora",
                "Acciones institucionales",
                "Repositorio institucional",
                "Memoria y fortalecimiento",
              ].map((item, index, array) => (
                <div
                  key={item}
                  className="flex items-center gap-2"
                >
                  <span className="bg-slate-900/80 border border-slate-700 rounded-lg px-3 py-2 text-slate-200">
                    {item}
                  </span>

                  {index < array.length - 1 && (
                    <span className="text-cyan-400">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <p className="text-slate-400 text-sm leading-relaxed">
            Así, el Plan de Mejora se integra al análisis de la categoría
            <strong className="text-slate-300">
              {" "}“Rol de la gestión directiva en la promoción de las TIC”
            </strong>
            , específicamente como evidencia de las
            <strong className="text-slate-300">
              {" "}decisiones situadas de la gestión directiva.
            </strong>
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="max-w-5xl mx-auto px-5 md:px-8 py-8 md:py-12">

        {/* VOLVER */}
        <Link
          to="/categoria/2"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm mb-8 transition"
        >
          ← Volver a Categoría 2
        </Link>

        {/* HEADER */}
        <header className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-semibold tracking-wider mb-5">
            🧭 CATEGORÍA 2 · DECISIONES SITUADAS
          </div>

          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-3">
            Plan de Mejora Institucional
          </h1>

          <h2 className="text-xl md:text-2xl text-cyan-400 font-medium mb-5">
            “Rutas, hacia una nueva escuela”
          </h2>

          <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-4xl">
            Como evidencia documental de esta unidad de análisis, el Plan de
            Mejora permite observar cómo la gestión directiva transforma las
            necesidades identificadas en el diagnóstico en decisiones,
            estrategias y acciones institucionales situadas.
          </p>
        </header>

        {/* IDEA CENTRAL */}
        <section className="mb-10">
          <div className="bg-gradient-to-br from-slate-900 to-slate-900/60 border border-slate-700 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-cyan-400 text-lg">◆</span>
              <span className="text-xs uppercase tracking-widest font-bold text-cyan-400">
                Idea central
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2 md:gap-3">
              {[
                "Necesidad identificada",
                "Decisión de gestión",
                "Plan de Mejora",
                "Acciones institucionales",
                "Repositorio",
                "Fortalecimiento institucional",
              ].map((item, index, array) => (
                <div
                  key={item}
                  className="flex items-center gap-2"
                >
                  <span className="px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-sm text-slate-200">
                    {item}
                  </span>

                  {index < array.length - 1 && (
                    <span className="text-cyan-400 font-bold">
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ACORDEÓN */}
        <section className="space-y-3">
          {secciones.map((seccion) => {
            const estaAbierta = abierta === seccion.id;

            return (
              <div
                key={seccion.id}
                className={`rounded-2xl border transition-all duration-300 ${
                  seccion.destacado
                    ? "border-cyan-400/40 bg-cyan-500/[0.03]"
                    : "border-slate-800 bg-slate-900/40"
                }`}
              >
                <button
                  onClick={() => toggle(seccion.id)}
                  className="w-full flex items-center gap-4 p-5 md:p-6 text-left"
                >
                  <div
                    className={`w-11 h-11 shrink-0 rounded-xl flex items-center justify-center text-xl ${
                      seccion.destacado
                        ? "bg-cyan-500/15 border border-cyan-400/30"
                        : "bg-slate-800 border border-slate-700"
                    }`}
                  >
                    {seccion.icono}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-semibold text-white text-base md:text-lg">
                        {seccion.titulo}
                      </h3>

                      {seccion.destacado && (
                        <span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-400/20">
                          Evidencia central
                        </span>
                      )}
                    </div>

                    <p className="text-sm text-slate-400 mt-1">
                      {seccion.subtitulo}
                    </p>
                  </div>

                  <div
                    className={`text-slate-400 transition-transform duration-300 ${
                      estaAbierta ? "rotate-180" : ""
                    }`}
                  >
                    ↓
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    estaAbierta
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 md:px-6 pb-6 pt-1 md:pl-[5.5rem]">
                      <div className="text-slate-300 text-sm md:text-base leading-relaxed">
                        {seccion.contenido}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        {/* CIERRE */}
        <section className="mt-12">
          <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 text-center">
            <p className="text-xs uppercase tracking-widest text-slate-500 mb-2">
              Plan de Mejora Institucional · 2025
            </p>

            <p className="text-sm text-slate-400">
              Escuela Primaria N.º 4774 “General Juan José Valle”
              <span className="mx-2">·</span>
              Barrio Libertad
              <span className="mx-2">·</span>
              Salta Capital
            </p>
          </div>
        </section>

      </main>
    </div>
  );
}