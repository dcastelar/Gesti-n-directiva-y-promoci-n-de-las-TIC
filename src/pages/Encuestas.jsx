import { useNavigate } from "react-router-dom";

export default function Encuestas() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 text-white p-4 md:p-8">

      <div className="max-w-6xl mx-auto">

        <button
          type="button"
          onClick={() => navigate("/", { replace: true })}
          className="inline-flex items-center gap-2 mb-6 rounded-xl border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-300 hover:border-cyan-400/30 hover:text-cyan-300 transition-all"
        >
          ← Volver al inicio
        </button>

        <div className="mb-6">
          <p className="text-cyan-300 text-sm uppercase tracking-[0.25em] mb-2">
            Base de datos
          </p>

          <h1 className="text-3xl md:text-4xl font-black">
            Encuesta sobre el uso de TIC
          </h1>

          <p className="text-slate-400 mt-3">
            Instrumento utilizado para relevar información de la comunidad
            educativa de la Escuela Primaria N.º 4774 “General Juan José Valle”.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-white overflow-hidden">
          <iframe
            src="https://surveymars.com/app/share-verify?activityId=iuwzs9CwU&type=5&title=Encuesta%20sobre%20el%20uso%20de%20TIC%20en%20la%20Escuela%20Primaria%20N.%C2%BA%204774%20%E2%80%9CGeneral%20Juan%20Jos%C3%A9%20Valle%E2%80%9D&language=9&key=d5173139691b44e79020e789b666fd0d"
            title="Encuesta sobre el uso de TIC"
            className="w-full h-[900px] border-0"
          />
        </div>

      </div>
    </div>
  );
}