import React, { useState } from 'react';
import { 
  Key, ShieldCheck, Mail, AlertTriangle, 
  Lightbulb, XCircle, Unlock, FileQuestion, 
  LightbulbOff, Check, Eye
} from 'lucide-react';

export default function App() {
  const [activePillar, setActivePillar] = useState('all');
  const [simulation, setSimulation] = useState('normal');

  const scenarios = {
    normal: {
      title: "Todo está en orden",
      desc: "Tu diario íntimo está bajo llave, tu carta llegó sin que nadie la abriera, y la luz de tu cuarto enciende perfecto.",
      bgColor: "bg-sky-100 border-sky-300",
      iconColor: "text-sky-600",
      icon: <ShieldCheck className="w-12 h-12" />
    },
    c_fail: {
      title: "¡Alguien leyó tu diario!",
      desc: "Falló la Confidencialidad. Alguien encontró la llave de tu diario íntimo y leyó tus secretos sin permiso.",
      bgColor: "bg-pink-100 border-pink-300",
      iconColor: "text-pink-600",
      icon: <Unlock className="w-12 h-12" />
    },
    i_fail: {
      title: "¡Cambiaron tu dibujo!",
      desc: "Falló la Integridad. Le enviaste un dibujo a tu abuela, pero alguien lo rayó con pintura en el camino.",
      bgColor: "bg-orange-100 border-orange-300",
      iconColor: "text-orange-600",
      icon: <FileQuestion className="w-12 h-12" />
    },
    a_fail: {
      title: "¡Se cortó la luz!",
      desc: "Falló la Disponibilidad. Quieres leer tu libro favorito, pero no hay luz y no puedes ver nada.",
      bgColor: "bg-slate-200 border-slate-400",
      iconColor: "text-slate-600",
      icon: <LightbulbOff className="w-12 h-12" />
    }
  };

  return (
    <div className="min-h-screen bg-amber-50 text-slate-800 font-sans selection:bg-teal-300 selection:text-teal-900 pb-12">
      
      {/* Encabezado */}
      <header className="bg-white/80 backdrop-blur-md border-b border-amber-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-teal-500 rounded-full shadow-lg shadow-teal-500/30 text-white">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold tracking-tight text-slate-800">
                Los 3 Pilares
              </h1>
              <p className="text-sm text-slate-500 font-medium">De la seguridad digital</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-16">
        
        {/* Introducción */}
        <section className="text-center max-w-2xl mx-auto space-y-6">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-800">
            ¿Cómo nos protegemos <br/>
            <span className="text-teal-600">en el mundo digital?</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Nuestra información personal, nuestras fotos y mensajes son cosas muy valiosas. Para que estén realmente protegidas en internet, necesitan cumplir con tres reglas fundamentales. Los expertos le llaman la <strong>Tríada CIA</strong>. ¡Vamos a conocer cómo funciona de forma sencilla!
          </p>
        </section>

        {/* Pilares */}
        <section className="space-y-8">
          <div className="flex justify-center flex-wrap gap-3">
            <button 
              onClick={() => setActivePillar('all')}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-sm ${activePillar === 'all' ? 'bg-slate-800 text-white' : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'}`}
            >
              Ver los 3 Pilares
            </button>
            <button 
              onClick={() => setActivePillar('c')}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-sm ${activePillar === 'c' ? 'bg-pink-500 text-white' : 'bg-white text-pink-600 hover:bg-pink-50 border border-pink-200'}`}
            >
              1. Confidencialidad
            </button>
            <button 
              onClick={() => setActivePillar('i')}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-sm ${activePillar === 'i' ? 'bg-orange-500 text-white' : 'bg-white text-orange-600 hover:bg-orange-50 border border-orange-200'}`}
            >
              2. Integridad
            </button>
            <button 
              onClick={() => setActivePillar('a')}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-sm ${activePillar === 'a' ? 'bg-amber-500 text-white' : 'bg-white text-amber-600 hover:bg-amber-50 border border-amber-200'}`}
            >
              3. Disponibilidad
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Pilar 1 */}
            {(activePillar === 'all' || activePillar === 'c') && (
              <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-pink-100 flex flex-col h-full transform transition-all hover:-translate-y-1 hover:shadow-pink-200/50">
                <div className="p-4 bg-pink-100 text-pink-600 rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                  <Key className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-800 mb-2">Confidencialidad</h3>
                <h4 className="text-pink-600 font-bold mb-4">"El secreto es solo tuyo"</h4>
                <p className="text-slate-600 mb-6 flex-grow">
                  Significa que tu información personal nadie más la puede ver sin tu permiso.
                </p>
                <div className="bg-pink-50 p-5 rounded-2xl border border-pink-100">
                  <strong className="block text-pink-800 mb-2 text-sm">💡 Imagina esto:</strong>
                  <p className="text-sm text-pink-900/80 leading-relaxed">
                    Es como tener un <strong>diario íntimo con un candado</strong>. Solo tú tienes la llave, así que nadie más puede leer lo que escribiste.
                  </p>
                </div>
              </div>
            )}

            {/* Pilar 2 */}
            {(activePillar === 'all' || activePillar === 'i') && (
              <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-orange-100 flex flex-col h-full transform transition-all hover:-translate-y-1 hover:shadow-orange-200/50">
                <div className="p-4 bg-orange-100 text-orange-600 rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-800 mb-2">Integridad</h3>
                <h4 className="text-orange-600 font-bold mb-4">"Nadie lo alteró"</h4>
                <p className="text-slate-600 mb-6 flex-grow">
                  Significa que los datos llegan exactamente como los enviaste, sin estar dañados o cambiados.
                </p>
                <div className="bg-orange-50 p-5 rounded-2xl border border-orange-100">
                  <strong className="block text-orange-800 mb-2 text-sm">💡 Imagina esto:</strong>
                  <p className="text-sm text-orange-900/80 leading-relaxed">
                    Es como enviar una <strong>carta en un sobre cerrado con pegamento</strong>. Si alguien intenta abrirla para borrar una palabra, el sobre se rompe y te das cuenta de que fue alterada.
                  </p>
                </div>
              </div>
            )}

            {/* Pilar 3 */}
            {(activePillar === 'all' || activePillar === 'a') && (
              <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-amber-100 flex flex-col h-full transform transition-all hover:-translate-y-1 hover:shadow-amber-200/50">
                <div className="p-4 bg-amber-100 text-amber-600 rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                  <Lightbulb className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-800 mb-2">Disponibilidad</h3>
                <h4 className="text-amber-600 font-bold mb-4">"Siempre ahí para ti"</h4>
                <p className="text-slate-600 mb-6 flex-grow">
                  Significa que lo que necesitas está listo para usarse en el momento en que lo pides.
                </p>
                <div className="bg-amber-50 p-5 rounded-2xl border border-amber-100">
                  <strong className="block text-amber-800 mb-2 text-sm">💡 Imagina esto:</strong>
                  <p className="text-sm text-amber-900/80 leading-relaxed">
                    Es como el <strong>interruptor de la luz de tu cuarto</strong>. Esperas que siempre que lo aprietes, la bombilla encienda al instante.
                  </p>
                </div>
              </div>
            )}

          </div>
        </section>

        {/* Simulación */}
        <section className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-xl shadow-slate-200/50 space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <h3 className="text-3xl font-extrabold text-slate-800">Práctica: ¿Qué pasa si algo falla?</h3>
            <p className="text-slate-600">
              Presiona los botones para ver qué ocurre cuando alguna de estas tres reglas de seguridad deja de funcionar.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSimulation('normal')}
              className={`px-6 py-3 rounded-2xl font-bold flex items-center gap-2 transition-all ${
                simulation === 'normal' 
                  ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/30 transform scale-105' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <Check className="w-5 h-5" /> Todo Bien
            </button>

            <button
              onClick={() => setSimulation('c_fail')}
              className={`px-6 py-3 rounded-2xl font-bold flex items-center gap-2 transition-all ${
                simulation === 'c_fail' 
                  ? 'bg-pink-500 text-white shadow-lg shadow-pink-500/30 transform scale-105' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <Eye className="w-5 h-5" /> Falla Confidencialidad
            </button>

            <button
              onClick={() => setSimulation('i_fail')}
              className={`px-6 py-3 rounded-2xl font-bold flex items-center gap-2 transition-all ${
                simulation === 'i_fail' 
                  ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30 transform scale-105' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <XCircle className="w-5 h-5" /> Falla Integridad
            </button>

            <button
              onClick={() => setSimulation('a_fail')}
              className={`px-6 py-3 rounded-2xl font-bold flex items-center gap-2 transition-all ${
                simulation === 'a_fail' 
                  ? 'bg-slate-700 text-white shadow-lg shadow-slate-700/30 transform scale-105' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <AlertTriangle className="w-5 h-5" /> Falla Disponibilidad
            </button>
          </div>

          <div className={`mt-8 p-8 sm:p-10 rounded-3xl border-2 flex flex-col sm:flex-row items-center sm:items-start gap-8 transition-colors duration-500 ${scenarios[simulation].bgColor}`}>
            <div className={`p-4 bg-white rounded-full shadow-md ${scenarios[simulation].iconColor} animate-bounce`}>
              {scenarios[simulation].icon}
            </div>
            <div className="text-center sm:text-left space-y-3">
              <h4 className="text-2xl font-extrabold text-slate-800">{scenarios[simulation].title}</h4>
              <p className="text-lg text-slate-700 leading-relaxed">{scenarios[simulation].desc}</p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}