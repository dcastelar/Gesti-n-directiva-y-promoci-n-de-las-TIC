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

function TextoConEnlaces({ texto }) {
  if (!texto) return null;
  const regexCitas = /([A-ZÁÉÍÓÚ][a-zñáéíóú]+\s*(?:y|e)?\s*[A-ZÁÉÍÓÚ]?[a-zñáéíóú]*\s*\(\d{4}\))/g;
  const partes = texto.split(regexCitas);

  return (
    <>
      {partes.map((parte, index) => {
        if (regexCitas.test(parte)) {
          return (
            <Link
              key={index}
              to="/referencias"
              className="text-emerald-400 font-medium underline underline-offset-4 hover:text-emerald-300 transition-colors"
            >
              {parte}
            </Link>
          );
        }
        return <span key={index}>{parte}</span>;
      })}
    </>
  );
}

export default function Capitulo() {
  const { numero } = useParams();

  const capitulo =
    numero === "1"
      ? capitulo1
      : numero === "2"
      ? capitulo2
      : numero === "0"
      ? capitulo0
      : numero === "3"
      ? capitulo3
      : numero === "4"
      ? capitulo4
      : numero === "5"
      ? capitulo5
      : numero === "6"
      ? capitulo6
      : numero === "7"
      ? capitulo7
      : numero === "8" ? 
      capitulo8
      : null;

  if (!capitulo) {
    return (
      <div className="min-h-screen bg-slate-950 text-white p-10">
        <Link to="/" className="text-slate-400 hover:text-emerald-300">
          ← Volver al inicio
        </Link>
        <div className="max-w-4xl mx-auto mt-20 text-center">
          <h1 className="text-3xl font-bold">Contenido no encontrado</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 md:p-10">
      <div className="max-w-7xl mx-auto"> {/* Ampliado el contenedor para dar aire a la tabla */}

        {/* BOTÓN VOLVER */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-emerald-300 mb-10 transition-colors"
        >
          ← Volver al inicio
        </Link>

        {/* ENCABEZADO */}
        <header className="mb-10">
          {capitulo.numero && (
            <p className="text-emerald-300 text-sm uppercase tracking-[0.25em] mb-3">
              {capitulo.numero}
            </p>
          )}

          <h1 className="text-3xl md:text-5xl font-black tracking-tight">
            {capitulo.titulo}
          </h1>

          {capitulo.descripcion && (
            <div className="mt-4 border-l-4 border-emerald-400 pl-6 bg-slate-900/20 p-4 rounded-r-2xl">
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                {capitulo.descripcion}
              </p>
            </div>
          )}
        </header>

        {/* RENDERIZADO DE CONTENIDOS */}
        <main>
          
          {/* CASO CAPÍTULO 0 */}
          {capitulo.parrafos?.map((parrafo, index) => (
            <p key={index} className="text-slate-300 text-base md:text-lg leading-8 text-justify mb-6">
              <TextoConEnlaces texto={parrafo} />
            </p>
          ))}

          {/* CASO CAPÍTULOS 1 Y 2 */}
          {capitulo.secciones?.map((seccion) => (
            <section key={seccion.id} id={`seccion-${seccion.id}`} className="mb-16 scroll-mt-10">
              <h2 className="text-2xl font-bold mb-4 text-emerald-300 border-b border-slate-800 pb-2">
                {seccion.titulo}
              </h2>
              <div className="space-y-5">
                {seccion.parrafos?.map((p, idx) => (
                  <p key={idx} className="text-slate-300 text-base md:text-lg leading-8 text-justify">
                    <TextoConEnlaces texto={p} />
                  </p>
                ))}
              </div>
            </section>
          ))}
              {/* NUEVO CASO MATRIZ: CAPÍTULO 6 - REFERENCIAS BIBLIOGRÁFICAS (TABLA) */}
          {capitulo.autores?.length > 0 && (
            <div className="w-full rounded-2xl border border-slate-800 bg-slate-900/30 overflow-hidden backdrop-blur-sm shadow-2xl">
              <div className="w-full overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[800px]">
                  <thead>
                    <tr className="border-b border-slate-800 bg-slate-950/80 text-[11px] uppercase font-bold tracking-wider text-slate-400">
                      <th className="p-4 text-cyan-400 w-1/4">Identificador / ID</th>
                      <th className="p-4 text-emerald-300 w-3/4">Cita Bibliográfica Formal (Normas APA)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/50 text-xs">
                    {capitulo.autores.map((autor, idx) => (
                      <tr 
                        key={idx} 
                        id={autor.id} 
                        className="hover:bg-slate-900/20 transition-colors align-middle scroll-mt-28"
                      >
                        <td className="p-4 font-mono text-cyan-400 font-semibold bg-slate-950/20">
                          <span className="px-2 py-1 rounded-lg bg-cyan-500/5 border border-cyan-500/10">
                            {autor.id}
                          </span>
                        </td>
                        <td className="p-4 text-slate-200 text-sm font-sans tracking-wide leading-relaxed">
                          {autor.cita}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* NUEVO CASO MATRIZ TABULAR: Si detecta la propiedad 'registros' */}
          {capitulo.registros?.length > 0 && (
            <div className="w-full rounded-2xl border border-slate-800 bg-slate-900/30 overflow-hidden backdrop-blur-sm shadow-2xl">
              
              {/* Contenedor Responsive con scroll horizontal */}
              <div className="w-full overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[1100px]">
                  
                  {/* Encabezados estables de la matriz */}
                  <thead>
                    <tr className="border-b border-slate-800 bg-slate-950/80 text-[11px] uppercase font-bold tracking-wider text-slate-400">
                      <th className="p-4 text-emerald-300 w-1/6">Dimensión / Pregunta</th>
                      <th className="p-4 w-1/5">Definición Teórica</th>
                      <th className="p-4 text-cyan-400 w-1/5">Directora</th>
                      <th className="p-4 text-violet-400 w-1/5">Vicedirectora</th>
                      <th className="p-4 text-emerald-400 w-1/5">Docentes / Encuesta</th>
                    </tr>
                  </thead>

                  {/* Celdas mapeadas dinámicamente */}
                  <tbody className="divide-y divide-slate-800/50 text-xs">
                    {capitulo.registros.map((registro, idx) => (
                      <tr key={idx} className="hover:bg-slate-900/20 transition-colors align-top">
                        
                        {/* Categoría y Subcategoría */}
                        <td className="p-4 space-y-2">
                          <span className="text-[9px] uppercase font-bold text-emerald-400 bg-emerald-500/5 border border-emerald-500/10 px-2 py-0.5 rounded block w-max">
                            {registro.categoria}
                          </span>
                          <p className="font-semibold text-slate-200 leading-snug">
                            {registro.subcategoria}
                          </p>
                        </td>

                        {/* Marco Teórico */}
                        <td className="p-4 text-slate-400 leading-relaxed font-light italic text-justify">
                          {registro.definicion_teorica}
                        </td>

                        {/* Directora */}
                        <td className="p-4 text-slate-300 leading-relaxed">
                          {registro.extracto_directora && registro.extracto_directora !== "–" ? (
                            <div className="space-y-1">
                              <p className="font-serif">"{registro.extracto_directora.replace(/^["“]|["”]$/g, '')}"</p>
                              <span className="text-[9px] text-slate-500 block font-mono">{registro.codigo_dire}</span>
                            </div>
                          ) : (
                            <span className="text-slate-600 italic">— Sin registro —</span>
                          )}
                        </td>

                        {/* Vicedirectora */}
                        <td className="p-4 text-slate-300 leading-relaxed">
                          {registro.extracto_vicedirectora && registro.extracto_vicedirectora !== "–" ? (
                            <div className="space-y-1">
                              <p className="font-serif">"{registro.extracto_vicedirectora.replace(/^["“]|["”]$/g, '')}"</p>
                              <span className="text-[9px] text-slate-500 block font-mono">{registro.codigo_vice}</span>
                            </div>
                          ) : (
                            <span className="text-slate-600 italic">— Sin registro —</span>
                          )}
                        </td>

                        {/* Encuesta Docente */}
                        <td className="p-4 text-slate-300 leading-relaxed">
                          {registro.extracto_docente && registro.extracto_docente !== "–" ? (
                            <div className="space-y-1">
                              <p className="bg-slate-950/50 border border-slate-800/80 p-2.5 rounded-xl text-slate-200">
                                {registro.extracto_docente}
                              </p>
                              <span className="text-[9px] text-slate-500 block font-mono pl-1">{registro.codigo_doc}</span>
                            </div>
                          ) : (
                            <span className="text-slate-600 italic">— Sin registro —</span>
                          )}
                        </td>

                      </tr>
                    ))}
                  </tbody>

                </table>
              </div>
            </div>
          )}
          {/* NUEVO CASO MATRIZ DE ANÁLISIS DOCUMENTAL (Anexo 2) */}
{capitulo.documentos?.length > 0 && (
  <div className="w-full rounded-2xl border border-slate-800 bg-slate-900/30 overflow-hidden backdrop-blur-sm shadow-2xl">
    <div className="w-full overflow-x-auto">
      <table className="w-full text-left border-collapse min-w-[1250px]">
        <thead>
          <tr className="border-b border-slate-800 bg-slate-950/80 text-[11px] uppercase font-bold tracking-wider text-slate-400">
            <th className="p-4 text-cyan-400 w-1/6">Fuente / Documento</th>
            <th className="p-3 w-24 text-center">Grado / Área</th>
            <th className="p-4 w-1/6 text-emerald-300">Tema / Eje</th>
            <th className="p-4 w-1/4">Desarrollo de la Clase</th>
            <th className="p-4 text-violet-400 w-1/5">Acciones de Gestión e Innovación TIC</th>
            <th className="p-4 text-slate-500 w-1/6">Desafíos y Oportunidades</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-800/50 text-xs">
          {capitulo.documentos.map((doc, idx) => (
            <tr key={idx} className="hover:bg-slate-900/20 transition-colors align-top">
              
              {/* Fuente */}
              <td className="p-4 font-semibold text-slate-200">
                <p className="leading-snug">{doc.fuente}</p>
                <span className="text-[9px] text-slate-500 font-mono block mt-2">{doc.referencia}</span>
              </td>

              {/* Grado y Área */}
              <td className="p-3 text-center space-y-1.5">
                <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-[10px] text-slate-300 block font-medium">
                  {doc.grado}
                </span>
                <span className="px-2 py-0.5 rounded bg-cyan-500/5 border border-cyan-500/10 text-[10px] text-cyan-400 block font-medium">
                  {doc.area}
                </span>
              </td>

              {/* Tema */}
              <td className="p-4 text-slate-300 font-medium">
                {doc.tema}
              </td>

              {/* Desarrollo de Clase */}
              <td className="p-4 text-slate-400 leading-relaxed text-justify max-w-xs whitespace-pre-line">
                <p className="mb-2">{doc.desarrollo_clase}</p>
                <div className="text-[10px] text-slate-500 bg-slate-950/40 p-2 rounded-lg border border-slate-900/60">
                  <strong>Recursos:</strong> {doc.recursos}
                </div>
              </td>

              {/* Acciones de Gestión e Innovación TIC */}
              <td className="p-4 space-y-3 text-slate-300">
                <div className="p-2 rounded-xl bg-violet-500/5 border border-violet-500/10">
                  <span className="text-[9px] uppercase tracking-wider font-bold text-violet-400 block mb-1">Rol de Gestión</span>
                  <p className="leading-relaxed">{doc.rol_gestion}</p>
                </div>
                <div className="p-2 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
                  <span className="text-[9px] uppercase tracking-wider font-bold text-emerald-400 block mb-1">Estrategias TIC</span>
                  <p className="leading-relaxed">{doc.estrategias_tic}</p>
                </div>
              </td>

              {/* Desafíos */}
              <td className="p-4 text-slate-400 leading-relaxed italic text-justify">
                {doc.desafios_oportunidades}
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
)}
        </main>

        {/* PIE DE PÁGINA */}
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
