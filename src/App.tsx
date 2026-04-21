/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { 
  ShieldCheck, 
  Lock, 
  ArrowRight, 
  Heart, 
  DollarSign, 
  Users, 
  CheckCircle2, 
  CreditCard, 
  Download,
  AlertTriangle,
  UserCheck
} from "lucide-react";

const CTA_LINK = "https://pay.kiwify.com.br/77NfSeB";

const CTAButton = ({ text, className = "" }: { text: string; className?: string }) => (
  <motion.a
    href={CTA_LINK}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className={`btn-cta w-full md:w-auto inline-flex ${className}`}
  >
    {text}
    <ArrowRight size={18} />
  </motion.a>
);

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`section-padding border-subtle ${className}`}>
    {children}
  </section>
);

export default function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen">
      {/* SEÇÃO 1 — TOPO IMPACTANTE */}
      <Section className="min-h-screen flex flex-col justify-center items-start border-none relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute inset-0 bg-gradient-to-l from-white/20 to-transparent"></div>
        </div>
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="relative z-10 w-full"
        >
          <motion.div variants={itemVariants} className="text-sm uppercase tracking-widest mb-6 opacity-60 flex items-center gap-2">
            <Lock size={14} /> Guia Estratégico & Discreto
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="title-display text-6xl md:text-8xl mb-8">
            Como sair <span className="italic">silenciosamente</span> de um relacionamento <span className="text-zinc-500">sem confronto</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-xl md:text-2xl mb-12 opacity-80 max-w-2xl font-light">
            Um plano discreto para mulheres que desejam recomeçar com segurança, independência e paz.
          </motion.p>
          
          <motion.div variants={itemVariants}>
            <CTAButton text="Quero minha saída silenciosa" />
          </motion.div>
        </motion.div>
      </Section>

      {/* SEÇÃO 2 — IDENTIFICAÇÃO DA DOR */}
      <Section className="bg-zinc-950">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold mb-12 uppercase tracking-tighter">
            Você não precisa <span className="text-zinc-600">viver com medo</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              { icon: <AlertTriangle className="text-zinc-500" />, text: "O medo paralisante de como ele vai reagir ao término." },
              { icon: <DollarSign className="text-zinc-500" />, text: "A dependência financeira que te mantém presa em um ciclo sem fim." },
              { icon: <Users className="text-zinc-500" />, text: "A preocupação constante com a segurança e o futuro dos seus filhos." },
              { icon: <Heart className="text-zinc-500" />, text: "A manipulação emocional que te faz duvidar da sua própria capacidade de sair." }
            ].map((item, index) => (
              <motion.div key={index} variants={itemVariants} className="flex gap-4 items-start p-6 border border-white/5 bg-white/5">
                <div className="mt-1">{item.icon}</div>
                <p className="text-lg opacity-80">{item.text}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.p variants={itemVariants} className="text-2xl mb-12 italic text-center text-zinc-400">
            "Eu sei que você sente que está sem saída. Mas a saída existe, e ela é silenciosa."
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex justify-center">
            <CTAButton text="Preciso sair com segurança" />
          </motion.div>
        </motion.div>
      </Section>

      {/* SEÇÃO 3 — APRESENTAÇÃO DO EBOOK */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-[3/4] bg-zinc-900 border border-white/10 flex items-center justify-center p-8">
               <div className="absolute inset-4 border border-white/5"></div>
               <div className="text-center">
                  <h3 className="title-display text-4xl mb-2 italic">Saída</h3>
                  <h3 className="title-display text-6xl uppercase tracking-tighter font-bold">Silenciosa</h3>
                  <div className="w-12 h-1 bg-white mx-auto my-6"></div>
                  <p className="text-sm uppercase tracking-widest opacity-60">O Guia Estratégico de Recomeço</p>
               </div>
            </div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.span variants={itemVariants} className="text-sm font-bold uppercase tracking-widest text-zinc-500 block mb-4">O Método</motion.span>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6">Um guia estratégico e totalmente invisível</motion.h2>
            <motion.p variants={itemVariants} className="text-lg opacity-80 mb-8 leading-relaxed">
              O eBook "Saída Silenciosa" não é apenas um livro; é um roteiro tático. Você aprenderá como se planejar sem levantar suspeitas, protegendo sua integridade física e emocional em cada passo do caminho.
            </motion.p>
            <motion.div variants={itemVariants}>
              <CTAButton text="Quero o acesso agora" />
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* SEÇÃO 4 — O QUE VOCÊ VAI APRENDER */}
      <Section className="bg-zinc-900 border-none">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-bold mb-16 text-center">O MAPA DO <span className="italic font-normal">RECOMEÇO</span></motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Despedida Invisível", desc: "Como organizar sua saída sem que ele perceba nenhuma mudança na rotina." },
              { title: "Economia Secreta", desc: "Passo a passo para criar sua própria renda e reserva de emergência sem rastros." },
              { title: "Escudo Emocional", desc: "Técnicas de blindagem para lidar com a manipulação e a culpa durante o processo." },
              { title: "Plano para Filhos", desc: "Orientações críticas sobre como retirar os filhos com segurança e amparo legal." },
              { title: "Logística Discreta", desc: "O que levar, para onde ir e como garantir que você não seja encontrada se não quiser." },
              { title: "Novo Horizonte", desc: "Como reconstruir sua vida do zero com dignidade, força e sem olhar para trás." }
            ].map((item, index) => (
              <motion.div key={index} variants={itemVariants} className="p-8 border border-white/10 hover:bg-white/5 transition-colors">
                <div className="text-3xl font-bold mb-4 opacity-20">0{index + 1}</div>
                <h4 className="text-xl font-bold mb-4 uppercase">{item.title}</h4>
                <p className="opacity-70 leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div variants={itemVariants} className="mt-16 flex justify-center">
            <CTAButton text="Começar minha saída silenciosa" />
          </motion.div>
        </motion.div>
      </Section>

      {/* SEÇÃO 5 — BENEFÍCIOS */}
      <Section>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-16 uppercase italic font-display">A liberdade tem um plano</motion.h2>
          
          <div className="flex flex-wrap justify-center gap-12 mb-16">
            {[
              { label: "Sem confrontos", icon: <ShieldCheck /> },
              { label: "Sem brigas", icon: <Lock /> },
              { label: "Com planejamento", icon: <CheckCircle2 /> },
              { label: "Com segurança", icon: <ShieldCheck /> },
              { label: "Independência", icon: <DollarSign /> },
              { label: "Recomeço discreto", icon: <UserCheck /> }
            ].map((item, index) => (
              <motion.div key={index} variants={itemVariants} className="flex flex-col items-center gap-4">
                <div className="p-4 rounded-full border border-white/20">
                  {item.icon}
                </div>
                <span className="text-sm font-bold uppercase tracking-widest">{item.label}</span>
              </motion.div>
            ))}
          </div>
          
          <motion.div variants={itemVariants}>
            <CTAButton text="Quero comprar agora" />
          </motion.div>
        </motion.div>
      </Section>

      {/* SEÇÃO 6 — PARA QUEM É */}
      <Section className="bg-white text-black border-none">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-3xl mx-auto"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-black mb-12 uppercase tracking-tighter italic">Esse Guia foi feito para você que:</motion.h2>
          
          <ul className="space-y-6 mb-12">
            {[
              "Sente medo só de imaginar a reação dele ao término.",
              "Depende financeiramente e não sabe como sobreviveria sozinha.",
              "Está exausta de discussões intermináveis que não levam a nada.",
              "Quer proteger sua saúde mental e a segurança dos seus filhos.",
              "Deseja sair com dignidade, sem drama e sem escândalo."
            ].map((text, index) => (
              <motion.li key={index} variants={itemVariants} className="flex gap-4 items-center text-xl font-medium border-b border-black/10 pb-4">
                <CheckCircle2 className="text-black shrink-0" />
                {text}
              </motion.li>
            ))}
          </ul>
          
          <motion.div variants={itemVariants}>
            <motion.a
              href={CTA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-black text-white font-bold py-6 px-12 rounded-none transition-all duration-300 w-full uppercase tracking-widest text-lg flex items-center justify-center gap-2"
            >
              Esse guia é pra mim <ArrowRight size={20} />
            </motion.a>
          </motion.div>
        </motion.div>
      </Section>

      {/* SEÇÃO 7 — URGÊNCIA */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-red-950/20 pointer-events-none opacity-50"></div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center relative z-10"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold mb-8 uppercase tracking-tighter text-red-500">O tempo está passando</motion.h2>
          <motion.p variants={itemVariants} className="text-2xl md:text-3xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Quanto mais você adia seu planejamento, mais difícil fica recuperar sua vida. O primeiro passo da sua liberdade começa no silêncio.
          </motion.p>
          <motion.p variants={itemVariants} className="text-xl mb-12 font-bold uppercase tracking-widest text-zinc-500">
            Comece seu plano estratégico hoje mesmo.
          </motion.p>
          <motion.div variants={itemVariants}>
            <CTAButton text="Garantir meu acesso" className="md:px-16" />
          </motion.div>
        </motion.div>
      </Section>

      {/* SEÇÃO 8 — GARANTIA */}
      <Section className="bg-zinc-950">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <div className="w-48 h-48 rounded-full border-4 border-white/20 flex flex-col items-center justify-center text-center p-4">
               <span className="text-5xl font-black mb-1 leading-none">7</span>
               <span className="text-xs uppercase font-bold tracking-widest">Dias de</span>
               <span className="text-lg font-bold uppercase leading-none">Garantia</span>
            </div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-4 uppercase">Risco Zero para você</motion.h2>
            <motion.p variants={itemVariants} className="text-lg opacity-70 mb-8 max-w-xl">
              Eu acredito tanto no poder transformador deste guia que ofereço uma garantia incondicional de 7 dias. Se você sentir que o material não é para você, basta solicitar o reembolso total. Sem perguntas, sem burocracia.
            </motion.p>
            <motion.div variants={itemVariants}>
               <CTAButton text="Quero minha saída silenciosa agora" className="md:px-12 py-6 text-xl" />
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* RODAPÉ */}
      <footer className="py-12 px-6 border-t border-white/5 bg-black text-center text-zinc-600">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
          <div className="flex flex-wrap justify-center gap-8 text-xs uppercase tracking-widest font-bold">
            <div className="flex items-center gap-2"><Lock size={12} /> Compra 100% Segura</div>
            <div className="flex items-center gap-2"><Download size={12} /> Acesso Imediato</div>
            <div className="flex items-center gap-2"><CreditCard size={12} /> Material 100% Digital</div>
          </div>
          
          <div className="text-zinc-800 uppercase tracking-tighter text-4xl font-bold mb-4 italic opacity-50">
             Saída Silenciosa
          </div>
          
          <p className="text-[10px] opacity-40 max-w-lg mx-auto leading-relaxed">
            *Este material tem caráter educacional e preventivo. Se você estiver em situação de perigo imediato, entre em contato com as autoridades locais ou disque 180 (Central de Atendimento à Mulher).
          </p>
          
          <div className="text-[10px] opacity-40">
            &copy; 2026 SAÍDA SILENCIOSA. TODOS OS DIREITOS RESERVADOS.
          </div>
        </div>
      </footer>
    </div>
  );
}
