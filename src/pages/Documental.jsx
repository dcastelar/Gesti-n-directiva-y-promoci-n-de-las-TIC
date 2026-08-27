import { useState } from "react";
import { Link } from "react-router-dom";
import documentosFotos from "../data/documentos.json";

export default function Documental() {
  const [visor, setVisor] = useState(null);

  const documentos = [    
    {
      titulo: "PCI",
      descripcion:
        "Proyecto Curricular Institucional analizado para identificar criterios y estrategias vinculadas con la incorporación de las TIC.",
      icono: "📚",
      carpeta: "pci",
      imagenes: documentosFotos.pci,
    },
    {
      titulo: "Actas institucionales",
      descripcion:
        "Registros institucionales utilizados como evidencia documental para complementar la información obtenida mediante entrevistas y encuestas.",
      icono: "📋",
      carpeta: "actas",
      imagenes: documentosFotos.actas,
    },
    {
      titulo: "Registro fotográfico",
      descripcion:
        "Imágenes de la institución que permiten contextualizar las condiciones materiales y tecnológicas en las que se desarrolla la gestión.",
      icono: "🏫",
      carpeta: "escuela",
      imagenes: documentosFotos.escuela,
    },
  ];

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
    <div className="min-h-screen bg-slate-950 text-white p-6 md:p-10">
      <div className="max-w-6xl mx-auto">

        <Link
          to="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-emerald-300 mb-8 transition-colors"
        >
          ← Volver
        </Link>

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
                Evidencia {index + 1}
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
      </div>

      {/* VISOR / LIGHTBOX */}
      {visor && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={cerrarVisor}
        >

          {/* Botón cerrar */}
          <button
            onClick={cerrarVisor}
            className="absolute top-5 right-5 z-50 w-12 h-12 rounded-full bg-slate-800/80 border border-slate-600 text-white text-2xl hover:bg-slate-700 transition"
            aria-label="Cerrar"
          >
            ✕
          </button>

          {/* Botón anterior */}
          {visor.imagenes.length > 1 && (
            <button
              onClick={imagenAnterior}
              className="absolute left-4 md:left-8 z-50 w-12 h-12 md:w-14 md:h-14 rounded-full bg-slate-800/80 border border-slate-600 text-white text-2xl hover:bg-slate-700 transition"
              aria-label="Imagen anterior"
            >
              ←
            </button>
          )}

          {/* Contenedor de imagen */}
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

          {/* Botón siguiente */}
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