import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    question: "Qual a melhor pedra para calçadas e rampas?",
    answer: "A Pedra Miracema é a mais indicada para calçadas e rampas de garagem devido à sua alta resistência e propriedade antiderrapante natural. O Paralelepípedo também é uma excelente opção para tráfego pesado."
  },
  {
    question: "Vocês executam Muros de Arrimo?",
    answer: "Sim, somos especialistas na construção de Muros de Arrimo de pedra bruta. Este serviço inclui a fundação, drenagem e a colocação das pedras, garantindo segurança e durabilidade para o seu terreno."
  },
  {
    question: "A Pedra Madeira pode ser usada no chão?",
    answer: "Sim, a Pedra Madeira é muito resistente e pode ser utilizada tanto em revestimentos de paredes (fachadas) quanto em pisos, desde que assentada corretamente sobre uma base de concreto."
  },
  {
    question: "Qual a diferença entre Canjiquinha e Filete?",
    answer: "Na verdade, são nomes diferentes para o mesmo estilo de corte. A Canjiquinha ou Filete de Pedra (geralmente São Tomé ou Pedra Madeira) são tiras finas de pedra usadas para decoração de paredes internas, lareiras e detalhes de fachada."
  },
  {
    question: "Como funciona a entrega?",
    answer: "Possuímos frota própria de caminhões para entrega em toda a Grande São Paulo e interior. Para obras de grande porte (como paralelepípedo a granel), atendemos todo o estado."
  },
  {
    question: "Vocês vendem a pedra ou só fazem a colocação?",
    answer: "Trabalhamos das duas formas: vendemos apenas a pedra se você já tiver mão de obra, ou oferecemos o pacote completo (pedra + colocação) para sua maior comodidade e garantia."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-stone-200">
      <div className="bg-stone-900 p-6 text-white">
        <div className="flex items-center gap-3 mb-2">
          <HelpCircle size={32} className="text-amber-500" />
          <h3 className="text-2xl font-bold">Dúvidas Frequentes</h3>
        </div>
        <p className="text-stone-300 text-sm">
          Perguntas comuns sobre nossos produtos e serviços de colocação.
        </p>
      </div>

      <div className="divide-y divide-stone-100">
        {FAQS.map((faq, index) => (
          <div key={index} className="bg-white">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-5 text-left hover:bg-stone-50 transition-colors"
            >
              <span className="font-bold text-stone-800 pr-4">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="text-amber-600 shrink-0" size={20} />
              ) : (
                <ChevronDown className="text-stone-400 shrink-0" size={20} />
              )}
            </button>
            
            {openIndex === index && (
              <div className="px-5 pb-5 text-stone-600 leading-relaxed animate-fade-in text-sm">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="p-5 bg-amber-50 border-t border-amber-100 text-center">
        <p className="text-amber-900 text-sm mb-2 font-medium">Ainda tem dúvidas?</p>
        <a 
          href="https://wa.me/5511999999999" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block text-green-700 font-bold hover:underline"
        >
          Fale direto no WhatsApp
        </a>
      </div>
    </div>
  );
};

export default FAQ;