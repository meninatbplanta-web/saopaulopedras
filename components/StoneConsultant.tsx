import React, { useState } from 'react';
import { Bot, Send, Loader2, Sparkles } from 'lucide-react';
import { consultStoneExpert } from '../services/geminiService';
import { CalculatorResponse } from '../types';

const StoneConsultant: React.FC = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<CalculatorResponse | null>(null);

  const handleConsult = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setResponse(null);
    try {
      const result = await consultStoneExpert(query);
      setResponse(result);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-stone-200">
      <div className="bg-gradient-to-r from-amber-600 to-amber-700 p-6 text-white">
        <div className="flex items-center gap-3 mb-2">
          <Bot size={32} />
          <h3 className="text-2xl font-bold">Consultor Virtual de Pedras</h3>
        </div>
        <p className="text-amber-100 text-sm">
          Dúvidas sobre qual pedra usar ou quantidade necessária? Pergunte à nossa IA especializada.
        </p>
      </div>

      <div className="p-6">
        <form onSubmit={handleConsult} className="relative">
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ex: Quero revestir uma parede de 4x3 metros com Pedra Madeira. Quanto vou gastar de material?"
            className="w-full p-4 pr-12 rounded-lg border border-stone-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent min-h-[100px] text-stone-700 resize-none bg-stone-50"
          />
          <button
            type="submit"
            disabled={loading || !query.trim()}
            className="absolute bottom-3 right-3 p-2 bg-amber-600 text-white rounded-full hover:bg-amber-700 disabled:opacity-50 transition-colors"
          >
            {loading ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
          </button>
        </form>

        {response && (
          <div className="mt-6 animate-fade-in">
            <div className="bg-stone-50 p-5 rounded-lg border border-stone-200">
              <div className="flex items-start gap-2 mb-3">
                <Sparkles className="text-amber-500 mt-1" size={20} />
                <h4 className="font-bold text-stone-800 text-lg">Recomendação Técnica</h4>
              </div>
              
              <div className="prose prose-stone text-stone-600 mb-4">
                <p className="whitespace-pre-line">{response.advice}</p>
              </div>

              {response.estimatedMaterial && (
                <div className="bg-amber-50 p-3 rounded border border-amber-200 mt-4">
                  <span className="font-bold text-amber-800 block text-sm uppercase tracking-wide mb-1">Estimativa de Material:</span>
                  <p className="text-amber-900 font-medium">{response.estimatedMaterial}</p>
                </div>
              )}

              <div className="mt-4 pt-4 border-t border-stone-200">
                <a href="/#/contato" className="block text-center w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded transition-colors">
                  Solicitar Orçamento Oficial
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StoneConsultant;