import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import mammoth from "mammoth";
import documentosFotos from "../data/documentos.json";

const planMejora = {
  id: "plan-mejora",
  titulo: "Plan de Mejora Institucional",
  subtitulo: "“Rutas, hacia una nueva escuela”",
  archivo: "/documentos/plan-de-mejora/PLAN%20DE%20MEJORA.docx",
};

export default function Documental() {
  const navigate = useNavigate();

  const [visor, setVisor] = useState(null);

  const [contenidoPlan, setContenidoPlan] = useState("");
  const [cargandoPlan, setCargandoPlan] = useState(false);
  const [errorPlan, setErrorPlan] = useState("");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  const documentos = [
    {
      titulo: "PCI",
      descripcion:
        "Proyecto Curricular Institucional analizado para identificar criterios y estrategias vinculadas con la incorporación de las TIC.",
      icono: "📚",
      carpeta: "pci",
      imagenes: documentosFotos.pci || [],
    },
    {
      titulo: "Actas institucionales",
      descripcion:
        "Registros institucionales utilizados como evidencia documental para complementar la información obtenida mediante entrevistas y encuestas.",
      icono: "📋",
      carpeta: "actas",
      imagenes: documentosFotos.actas || [],
    },
    {
      titulo: "Registro fotográfico",
      descripcion:
        "Imágenes de la institución que permiten contextualizar las condiciones materiales y tecnológicas en las que se desarrolla la gestión.",
      icono: "🏫",
      carpeta: "escuela",
      imagenes: documentosFotos.escuela || [],
    },
  ];

  // =====================================================
  // CARGAR PLAN DE MEJORA
  // =====================================================

  const cargarPlanMejora = async () => {
    try {
      setCargandoPlan(true);
      setErrorPlan("");
      setContenidoPlan("");

      const respuesta = await fetch(planMejora.archivo);

      console.log("Archivo solicitado:", planMejora.archivo);
      console.log("Estado:", respuesta.status);

      if (!respuesta.ok) {
        throw new Error(
          `No se encontró el archivo: ${planMejora.archivo} | Estado: ${respuesta.status}`
        );
      }

      const arrayBuffer = await respuesta.arrayBuffer();

      const resultado = await mammoth.convertToHtml({
        arrayBuffer,
      });

      setContenidoPlan(resultado.value);
    } catch (error) {
      console.error("Error al cargar Plan de Mejora:", error);

      setErrorPlan(
        "No se pudo cargar el Plan de Mejora. Verificá que el archivo esté dentro de public/documentos/plan-de-mejora."
      );
    } finally {
      setCargandoPlan(false);
    }
  };

  // =====================================================
  // ABRIR PLAN DE MEJORA
  // =====================================================

  const abrirPlanMejora = async () => {
    await cargarPlanMejora();

    setTimeout(() => {
      document
        .getElementById("documento-plan-mejora")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 100);
  };

  // =====================================================
  // DESCARGAR WORD
  // =====================================================

  const descargarPlanMejora = async () => {
    try {
      const respuesta = await fetch(planMejora.archivo);

      if (!respuesta.ok) {
        throw new Error("No se pudo descargar el archivo");
      }

      const blob = await respuesta.blob();

      const url = window.URL.createObjectURL(blob);

      const enlace = document.createElement("a");

      enlace.href = url;
      enlace.download = "PLAN DE MEJORA.docx";

      document.body.appendChild(enlace);

      enlace.click();

      enlace.remove();

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error descargando Plan de Mejora:", error);

      alert("No se pudo descargar el Plan de Mejora.");
    }
  };

  // =====================================================
  // VISOR DE IMÁGENES
  // =====================================================

  const abrirImagen = (documento, indice) => {
    setVisor({
      carpeta: documento.carpeta,
      titulo: documento.titulo,
      imagenes: documento.imagenes,
      indice,
    });
  };

  const cerrarVisor = () => {
    setVisor(null);
  };

  const imagenAnterior = (e) => {
    e.stopPropagation();

    setVisor((actual) => ({
      ...actual,
      indice:
        actual.indice === 0
          ? actual.imagenes.length - 1
          : actual.indice - 1,
    }));
  };

  const imagenSiguiente = (e) => {
    e.stopPropagation();

    setVisor((actual) => ({
      ...actual,
      indice:
        actual.indice === actual.imagenes.length - 1
          ? 0
          : actual.indice + 1,
    }));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-8">

        {/* =====================================================
            VOLVER
        ===================================================== */}

        <Link
          to="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-emerald-300 mb-8 transition-colors"
        >
          ← Volver
        </Link>

        {/* =====================================================
            ENCABEZADO
        ===================================================== */}

        <div className="mb-10">
          <p className="text-emerald-300 text-sm uppercase tracking-[0.25em] mb-2">
            Instrumento 03
          </p>

          <h1 className="text-3xl md:text-5xl font-black tracking-tight">
            Análisis documental
          </h1>

          <p className="text-slate-400 mt-4 max-w-3xl leading-relaxed">
            Evidencias documentales y registros fotográficos analizados para
            complementar, contextualizar y triangular la información obtenida
            mediante entrevistas y encuestas.
          </p>
        </div>

        {/* =====================================================
            PLAN DE MEJORA
            PRIMERA EVIDENCIA EMPÍRICA
        ===================================================== */}

        <section className="mb-12">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
              Evidencia documental 01
            </span>

            <span className="h-px flex-1 bg-slate-800"></span>
          </div>

          <div className="rounded-[32px] border border-emerald-400/30 bg-gradient-to-br from-emerald-500/10 via-slate-900 to-slate-900 overflow-hidden shadow-2xl">

            {/* CABECERA */}

            <div className="p-6 md:p-8 border-b border-slate-800">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">

                <div className="flex items-start gap-5">

                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center text-3xl shrink-0">
                    📄
                  </div>

                  <div>
                    <p className="text-xs text-emerald-300 uppercase tracking-widest mb-2">
                      Fuente empírica destacada
                    </p>

                    <h2 className="text-2xl md:text-3xl font-black">
                      {planMejora.titulo}
                    </h2>

                    <p className="text-emerald-200/80 text-lg mt-1">
                      {planMejora.subtitulo}
                    </p>

                    <p className="text-slate-400 mt-4 max-w-3xl leading-relaxed">
                      Documento institucional utilizado como fuente empírica
                      para analizar cómo la gestión directiva traduce
                      necesidades identificadas en el diagnóstico en
                      decisiones, acciones y estrategias de mejora.
                    </p>
                  </div>
                </div>

                {/* BOTONES */}

                <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">

                  <button
                    type="button"
                    onClick={abrirPlanMejora}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-emerald-400/30 bg-emerald-500/10 px-5 py-3 text-emerald-300 font-semibold hover:bg-emerald-500/20 hover:border-emerald-400/50 transition-all"
                  >
                    📖 Ver documento original
                  </button>

                  <button
                    type="button"
                    onClick={() => navigate("/plan-mejora")}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-cyan-400/30 bg-cyan-500/10 px-5 py-3 text-cyan-300 font-semibold hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all"
                  >
                    🔎 Ver análisis →
                  </button>

                  <button
                    type="button"
                    onClick={descargarPlanMejora}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-700 bg-slate-950 px-5 py-3 text-slate-300 font-semibold hover:border-slate-600 hover:text-white transition-all"
                  >
                    ↓ Descargar Word
                  </button>

                </div>
              </div>
            </div>

            {/* IDEA METODOLÓGICA */}

            <div className="p-6 md:p-8 bg-slate-950/40">

              <div className="grid md:grid-cols-3 gap-4">

                <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
                  <p className="text-xs uppercase tracking-widest text-slate-500 mb-2">
                    Punto de partida
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    Necesidades y debilidades identificadas mediante el
                    diagnóstico institucional.
                  </p>
                </div>

                <div className="rounded-2xl border border-emerald-400/20 bg-emerald-500/5 p-5">
                  <p className="text-xs uppercase tracking-widest text-emerald-300 mb-2">
                    Decisión de gestión
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    El equipo directivo organiza acciones orientadas a
                    fortalecer las propuestas pedagógicas.
                  </p>
                </div>

                <div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/5 p-5">
                  <p className="text-xs uppercase tracking-widest text-cyan-300 mb-2">
                    Evidencia
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    El Plan de Mejora permite observar cómo las decisiones se
                    traducen en acciones institucionales concretas.
                  </p>
                </div>

              </div>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm">

                <span className="px-4 py-2 rounded-full bg-slate-800 text-slate-300">
                  Diagnóstico
                </span>

                <span className="text-emerald-400">→</span>

                <span className="px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-300">
                  Decisión situada
                </span>

                <span className="text-emerald-400">→</span>

                <span className="px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-300">
                  Plan de Mejora
                </span>

                <span className="text-emerald-400">→</span>

                <span className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300">
                  Acciones institucionales
                </span>

                <span className="text-emerald-400">→</span>

                <span className="px-4 py-2 rounded-full bg-violet-500/10 border border-violet-400/20 text-violet-300">
                  Fortalecimiento institucional
                </span>

              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            VISOR DEL PLAN DE MEJORA
        ===================================================== */}

        {(cargandoPlan || contenidoPlan || errorPlan) && (
          <section
            id="documento-plan-mejora"
            className="mb-12 rounded-[32px] border border-slate-800 bg-slate-900 overflow-hidden"
          >

            {/* CABECERA DEL DOCUMENTO */}

            <div className="border-b border-slate-800 bg-slate-900/80 p-6 md:p-8">

              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center text-2xl">
                    📄
                  </div>

                  <div>

                    <p className="text-xs text-emerald-300 uppercase tracking-widest mb-1">
                      Documento original
                    </p>

                    <h2 className="text-xl md:text-2xl font-bold">
                      {planMejora.titulo}
                    </h2>

                    <p className="text-slate-500 text-sm mt-1">
                      {planMejora.subtitulo}
                    </p>

                  </div>
                </div>

                <button
                  onClick={descargarPlanMejora}
                  className="inline-flex items-center justify-center rounded-2xl border border-emerald-400/30 bg-emerald-500/10 px-5 py-3 text-emerald-300 font-semibold hover:bg-emerald-500/20 hover:border-emerald-400/50 transition-all"
                >
                  Descargar Word ↓
                </button>

              </div>
            </div>

            {/* CONTENIDO */}

            <div className="p-6 md:p-10">

              {cargandoPlan && (
                <div className="py-20 text-center">

                  <div className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-slate-700 border-t-emerald-400 mb-5"></div>

                  <p className="text-slate-400">
                    Cargando Plan de Mejora...
                  </p>

                </div>
              )}

              {errorPlan && (
                <div className="rounded-2xl border border-red-400/20 bg-red-500/10 p-6 text-red-300">
                  {errorPlan}
                </div>
              )}

              {!cargandoPlan && !errorPlan && contenidoPlan && (
                <article
                  className="
                    max-w-none
                    text-slate-300
                    leading-relaxed

                    [&_h1]:text-white
                    [&_h1]:text-3xl
                    [&_h1]:font-black
                    [&_h1]:mb-6

                    [&_h2]:text-white
                    [&_h2]:text-2xl
                    [&_h2]:font-bold
                    [&_h2]:mt-8
                    [&_h2]:mb-4

                    [&_h3]:text-emerald-300
                    [&_h3]:text-xl
                    [&_h3]:font-bold
                    [&_h3]:mt-6
                    [&_h3]:mb-3

                    [&_p]:mb-5
                    [&_p]:leading-8

                    [&_strong]:text-white

                    [&_ul]:mb-5
                    [&_ol]:mb-5
                    [&_li]:mb-2

                    [&_table]:w-full
                    [&_table]:border-collapse
                    [&_table]:mb-6

                    [&_th]:border
                    [&_th]:border-slate-700
                    [&_th]:bg-slate-800
                    [&_th]:p-3
                    [&_th]:text-white

                    [&_td]:border
                    [&_td]:border-slate-700
                    [&_td]:p-3

                    [&_a]:text-emerald-300
                    [&_a]:underline
                  "
                  dangerouslySetInnerHTML={{
                    __html: contenidoPlan,
                  }}
                />
              )}

            </div>

            {/* PIE */}

            <div className="border-t border-slate-800 p-6 flex flex-col sm:flex-row justify-center gap-4">

              <button
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  })
                }
                className="text-emerald-300 text-sm font-semibold hover:text-emerald-200 transition-colors"
              >
                ↑ Volver al inicio documental
              </button>

              <button
                onClick={() => navigate("/plan-mejora")}
                className="text-cyan-300 text-sm font-semibold hover:text-cyan-200 transition-colors"
              >
                Ver análisis del Plan de Mejora →
              </button>

            </div>

          </section>
        )}

        {/* =====================================================
            OTRAS EVIDENCIAS DOCUMENTALES
        ===================================================== */}

        <section>

          <div className="flex items-center gap-3 mb-5">

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              Otras evidencias documentales
            </span>

            <span className="h-px flex-1 bg-slate-800"></span>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {documentos.map((documento, index) => (

              <div
                key={documento.carpeta}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-6 hover:-translate-y-1 hover:border-emerald-400/40 transition-all"
              >

                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center text-2xl mb-5">
                  {documento.icono}
                </div>

                <p className="text-xs text-emerald-300 uppercase tracking-widest mb-3">
                  Evidencia {index + 2}
                </p>

                <h2 className="text-xl font-bold mb-3">
                  {documento.titulo}
                </h2>

                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  {documento.descripcion}
                </p>

                {documento.imagenes.length > 0 ? (
                  <>
                    <div className="grid grid-cols-2 gap-3">

                      {documento.imagenes.map((imagen, imagenIndex) => {

                        const ruta = `/documentos/${documento.carpeta}/${imagen}`;

                        return (
                          <button
                            key={imagen}
                            onClick={() =>
                              abrirImagen(documento, imagenIndex)
                            }
                            className="group overflow-hidden rounded-2xl border border-slate-700 bg-slate-950 text-left"
                          >

                            <img
                              src={ruta}
                              alt={`${documento.titulo} - evidencia ${
                                imagenIndex + 1
                              }`}
                              className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                            />

                          </button>
                        );
                      })}

                    </div>

                    <p className="text-xs text-slate-500 mt-4">
                      {documento.imagenes.length}{" "}
                      {documento.imagenes.length === 1
                        ? "evidencia registrada"
                        : "evidencias registradas"}{" "}
                      · Seleccione una imagen para ampliar
                    </p>
                  </>
                ) : (
                  <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-950/50 p-6 text-center">
                    <p className="text-slate-500 text-sm">
                      No hay evidencias cargadas todavía.
                    </p>
                  </div>
                )}

              </div>

            ))}

          </div>
        </section>
      </div>

      {/* =====================================================
          VISOR / LIGHTBOX DE IMÁGENES
      ===================================================== */}

      {visor && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={cerrarVisor}
        >

          <button
            onClick={cerrarVisor}
            className="absolute top-5 right-5 z-50 w-12 h-12 rounded-full bg-slate-800/80 border border-slate-600 text-white text-2xl hover:bg-slate-700 transition"
            aria-label="Cerrar"
          >
            ✕
          </button>

          {visor.imagenes.length > 1 && (
            <button
              onClick={imagenAnterior}
              className="absolute left-4 md:left-8 z-50 w-12 h-12 md:w-14 md:h-14 rounded-full bg-slate-800/80 border border-slate-600 text-white text-2xl hover:bg-slate-700 transition"
              aria-label="Imagen anterior"
            >
              ←
            </button>
          )}

          <div
            className="relative max-w-6xl max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >

            <img
              src={`/documentos/${visor.carpeta}/${visor.imagenes[visor.indice]}`}
              alt={`${visor.titulo} - imagen ${visor.indice + 1}`}
              className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
            />

            <div className="mt-4 text-center">

              <p className="text-white font-semibold">
                {visor.titulo}
              </p>

              <p className="text-slate-400 text-sm mt-1">
                Imagen {visor.indice + 1} de {visor.imagenes.length}
              </p>

            </div>
          </div>

          {visor.imagenes.length > 1 && (
            <button
              onClick={imagenSiguiente}
              className="absolute right-4 md:right-8 z-50 w-12 h-12 md:w-14 md:h-14 rounded-full bg-slate-800/80 border border-slate-600 text-white text-2xl hover:bg-slate-700 transition"
              aria-label="Imagen siguiente"
            >
              →
            </button>
          )}

        </div>
      )}
    </div>
  );
}