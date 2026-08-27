import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import mammoth from "mammoth";

const entrevistas = [
  {
    id: "directora",
    titulo: "Entrevista semiestructurada a la Directora",
    actor: "Directora",
    archivo:
      "/entrevistas/Entrevista_Semiestrucutrada_Directora.docx",
  },
  {
    id: "vicedirectora",
    titulo: "Entrevista semiestructurada a la Vicedirectora",
    actor: "Vicedirectora",
    archivo:
      "/entrevistas/Entrevista_Semiestrucutrada_ViceDirectora.docx",
  },
];

export default function Entrevistas() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);
  const [entrevistaSeleccionada, setEntrevistaSeleccionada] =
    useState(entrevistas[0]);

  const [contenido, setContenido] = useState("");
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const cargarEntrevista = async () => {
      try {
        setCargando(true);
        setError("");
        setContenido("");

        const respuesta = await fetch(
          entrevistaSeleccionada.archivo
        );

        if (!respuesta.ok) {
          throw new Error(
            `No se encontró el archivo: ${entrevistaSeleccionada.archivo}`
          );
        }

        const arrayBuffer = await respuesta.arrayBuffer();

        const resultado = await mammoth.convertToHtml({
          arrayBuffer,
        });

        setContenido(resultado.value);
      } catch (error) {
        console.error("Error al cargar entrevista:", error);

        setError(
          "No se pudo cargar la entrevista. Verificá que el archivo esté dentro de public/entrevistas."
        );
      } finally {
        setCargando(false);
      }
    };

    cargarEntrevista();
  }, [entrevistaSeleccionada]);

  // DESCARGAR WORD
  const descargarWord = async () => {
    try {
      const respuesta = await fetch(
        entrevistaSeleccionada.archivo
      );

      if (!respuesta.ok) {
        throw new Error("No se pudo descargar el archivo");
      }

      const blob = await respuesta.blob();

      const url = window.URL.createObjectURL(blob);

      const enlace = document.createElement("a");

      enlace.href = url;

      enlace.download =
        entrevistaSeleccionada.archivo
          .split("/")
          .pop();

      document.body.appendChild(enlace);

      enlace.click();

      enlace.remove();

      window.URL.revokeObjectURL(url);

    } catch (error) {
      console.error("Error descargando Word:", error);

      alert("No se pudo descargar la entrevista.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-8">

        {/* VOLVER */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-violet-300 mb-8 transition-colors"
        >
          ← Volver
        </Link>

        {/* ENCABEZADO */}
        <div className="mb-10">

          <p className="text-violet-300 text-sm uppercase tracking-[0.25em] mb-2">
            Instrumento 02
          </p>

          <h1 className="text-3xl md:text-5xl font-black tracking-tight">
            Entrevistas
          </h1>

          <p className="text-slate-400 mt-4 max-w-3xl leading-relaxed">
            Testimonios y perspectivas de los actores institucionales
            entrevistados durante la investigación.
          </p>

        </div>

        {/* =====================================================
            TARJETAS DE ENTREVISTAS
        ===================================================== */}

        <div className="mb-10">

          <div className="flex items-center justify-between mb-5">

            <div>

              <p className="text-slate-500 text-xs uppercase tracking-widest">
                Seleccionar entrevista
              </p>

              <p className="text-slate-400 text-sm mt-1">
                Seleccioná el actor institucional que querés consultar.
              </p>

            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {entrevistas.map((entrevista) => {

              const seleccionada =
                entrevistaSeleccionada.id === entrevista.id;

              return (
                <button
                  key={entrevista.id}
                  onClick={() =>
                    setEntrevistaSeleccionada(entrevista)
                  }
                  className={`
                    text-left rounded-3xl border p-6
                    transition-all duration-300
                    ${
                      seleccionada
                        ? "border-violet-400/60 bg-violet-500/10 shadow-xl shadow-violet-500/5"
                        : "border-slate-800 bg-slate-900 hover:border-violet-400/40 hover:-translate-y-1"
                    }
                  `}
                >

                  <div className="flex items-start gap-4">

                    <div
                      className={`
                        w-14 h-14 rounded-2xl
                        flex items-center justify-center
                        text-2xl shrink-0
                        ${
                          seleccionada
                            ? "bg-violet-500/20 border border-violet-400/30"
                            : "bg-slate-950 border border-slate-800"
                        }
                      `}
                    >
                      📄
                    </div>

                    <div className="flex-1">

                      <p className="text-xs text-violet-300 uppercase tracking-widest mb-2">
                        Entrevista
                      </p>

                      <h2 className="text-xl font-bold">
                        {entrevista.actor}
                      </h2>

                      <p className="text-sm text-slate-400 mt-1">
                        Entrevista semiestructurada
                      </p>

                    </div>

                    {seleccionada && (
                      <div className="w-7 h-7 rounded-full bg-violet-500/20 border border-violet-400/30 flex items-center justify-center text-violet-300">
                        ✓
                      </div>
                    )}

                  </div>

                  <div
                    className={`
                      mt-5 text-sm font-semibold
                      ${
                        seleccionada
                          ? "text-violet-300"
                          : "text-slate-500"
                      }
                    `}
                  >
                    {seleccionada
                      ? "Entrevista seleccionada"
                      : "Ver entrevista →"}
                  </div>

                </button>
              );
            })}

          </div>

        </div>

        {/* SEPARADOR */}

        <div className="border-t border-slate-800 mb-10"></div>

        {/* =====================================================
            VISOR DE ENTREVISTA
        ===================================================== */}

        <div
          id="documento-entrevista"
          className="rounded-[32px] border border-slate-800 bg-slate-900 overflow-hidden"
        >

          {/* CABECERA DEL DOCUMENTO */}

          <div className="border-b border-slate-800 bg-slate-900/80 p-6 md:p-8">

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-2xl bg-violet-500/10 border border-violet-400/20 flex items-center justify-center text-2xl">
                  📄
                </div>

                <div>

                  <p className="text-xs text-violet-300 uppercase tracking-widest mb-1">
                    Documento de entrevista
                  </p>

                  <h2 className="text-xl md:text-2xl font-bold">
                    {entrevistaSeleccionada.titulo}
                  </h2>

                </div>

              </div>

              {/* BOTÓN DESCARGA */}

              <button
                onClick={descargarWord}
                className="inline-flex items-center justify-center rounded-2xl border border-violet-400/30 bg-violet-500/10 px-5 py-3 text-violet-300 font-semibold hover:bg-violet-500/20 hover:border-violet-400/50 transition-all"
              >
                Descargar Word ↓
              </button>

            </div>

          </div>

          {/* CONTENIDO DEL WORD */}

          <div className="p-6 md:p-10">

            {cargando && (
              <div className="py-20 text-center">

                <div className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-slate-700 border-t-violet-400 mb-5"></div>

                <p className="text-slate-400">
                  Cargando entrevista...
                </p>

              </div>
            )}

            {error && (
              <div className="rounded-2xl border border-red-400/20 bg-red-500/10 p-6 text-red-300">
                {error}
              </div>
            )}

            {!cargando && !error && (
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

                  [&_h3]:text-violet-300
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
                "
                dangerouslySetInnerHTML={{
                  __html: contenido,
                }}
              />
            )}

          </div>

          {/* PIE DEL DOCUMENTO */}

          <div className="border-t border-slate-800 p-6 flex justify-center">

            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="text-violet-300 text-sm font-semibold hover:text-violet-200 transition-colors"
            >
              ↑ Seleccionar otra entrevista
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}