import { motion } from "motion/react";
import Chatbot from "./components/Chatbot";
import { Rocket, Shield, Zap, Heart, MessageCircle, ArrowRight } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] text-gray-900 font-sans selection:bg-cyan-100">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-40 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-200">
              <MessageCircle className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-black tracking-tighter text-gray-800">HOBY<span className="text-cyan-500">HELP</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-500">
            <a href="#features" className="hover:text-cyan-500 transition-colors">Recursos</a>
            <a href="#about" className="hover:text-cyan-500 transition-colors">Sobre</a>
            <a href="#pricing" className="hover:text-cyan-500 transition-colors">Preços</a>
            <button className="bg-gray-900 text-white px-6 py-2.5 rounded-full hover:bg-cyan-600 transition-all shadow-md">
              Começar Agora
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 rounded-full text-cyan-600 text-xs font-black tracking-widest uppercase mb-8 border border-cyan-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Nova Geração de IA
            </div>
            <h1 className="text-6xl md:text-8xl font-black leading-[0.85] mb-8 tracking-tighter text-gray-900">
              CONECTE <br />
              <span className="text-cyan-500">EMOÇÃO</span> <br />
              À SUA MARCA.
            </h1>
            <p className="text-xl text-gray-500 mb-10 max-w-lg leading-relaxed font-medium">
              Não é apenas um chatbot. É um assistente que sente, reage e guia seus clientes através de uma experiência visual única e interativa.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-gray-900 text-white px-10 py-5 rounded-2xl font-black text-sm tracking-widest uppercase flex items-center gap-3 hover:bg-cyan-600 transition-all shadow-2xl shadow-gray-200 group">
                Experimentar Grátis <ArrowRight className="group-hover:translate-x-1 transition-transform w-5 h-5" />
              </button>
              <button className="bg-white border-2 border-gray-100 px-10 py-5 rounded-2xl font-black text-sm tracking-widest uppercase hover:border-cyan-500 transition-all text-gray-600">
                Ver Planos
              </button>
            </div>
          </motion.div>
          
          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-cyan-200/20 blur-[120px] rounded-full" />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 w-full max-w-lg aspect-[4/5] bg-white rounded-[48px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-gray-50 flex items-center justify-center p-1"
            >
              <div className="w-full h-full bg-gray-50 rounded-[44px] flex flex-col items-center justify-center overflow-hidden relative">
                 <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white to-transparent opacity-50" />
                 <div className="text-center p-12 relative z-10">
                    <div className="text-gray-900 font-black text-7xl mb-2 tracking-tighter">99.8%</div>
                    <div className="text-cyan-500 font-black uppercase tracking-[0.2em] text-[10px] mb-8">Precisão de Resposta</div>
                    <div className="h-1 w-12 bg-cyan-500 mx-auto rounded-full" />
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center mb-20">
          <h2 className="text-4xl font-black mb-4 tracking-tight">POR QUE ESCOLHER O HOBYHELP?</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Tecnologia de ponta com um toque humano para transformar sua conversão.
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            { icon: Zap, title: "Resposta Instantânea", desc: "Seus clientes não esperam. Respostas em milissegundos com IA avançada." },
            { icon: Shield, title: "Segurança Total", desc: "Dados criptografados e conformidade total com a LGPD para sua tranquilidade." },
            { icon: Heart, title: "IA Emocional", desc: "O robô entende o sentimento do usuário e adapta sua linguagem e expressão." }
          ].map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-10 rounded-[32px] bg-gray-50 hover:bg-cyan-50 transition-colors group"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-cyan-500 transition-colors">
                <f.icon className="text-cyan-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-4">{f.title}</h3>
              <p className="text-gray-500 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center">
                <MessageCircle className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-black tracking-tighter">HOBYHELP</span>
            </div>
            <p className="text-gray-400 max-w-sm">
              Criando conexões reais através de inteligência artificial interativa.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6">Produto</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Recursos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integrações</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Enterprise</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Suporte</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentação</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
        </div>
      </footer>

      {/* O Chatbot Animado */}
      <Chatbot />
    </div>
  );
}
