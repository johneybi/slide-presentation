import React from 'react';
import { ArrowRight, XCircle, CheckCircle2 } from 'lucide-react';

export default function Slide03() {
  return (
    <div className="w-full h-full p-24 flex flex-col bg-canvas text-left relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[100px] -z-10"></div>

      <div className="flex-1 w-full max-w-7xl mx-auto flex flex-col justify-start z-10">
        
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h2 className="text-caption text-sm font-bold mb-8 uppercase tracking-wider">
            Core Solution
          </h2>
          <h1 className="text-primary text-4xl font-extrabold leading-tight tracking-tight mb-12">
            '읽는 사전'을 버리고, <span className="text-brand-blue">'만지고 노는 스니펫'</span>으로.
          </h1>
          <p className="text-secondary text-lg font-medium leading-relaxed max-w-5xl mx-auto">
            긴 글을 피하는 세대에게 두꺼운 텍스트 사전을 주는 건 정답이 아닙니다. bitelearn은 복잡한 실전 용어와 공문서를 잘게 쪼갠 <strong>'인터랙티브 스니펫'</strong>으로 해체했습니다. 지루한 공부 대신 <strong>직관적인 조작(UX)</strong>을 유도하면 실전 방어력을 단기간에 높일 수 있습니다.
          </p>
        </div>

        {/* AS-IS vs TO-BE Section (Unboxed) */}
        <div className="flex items-center justify-between gap-16 flex-1 mt-8">
          
          {/* AS-IS Element */}
          <div className="flex-1 flex flex-col items-center h-[520px] relative group overflow-hidden grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <div className="flex items-center gap-3 mb-8">
              <XCircle className="w-6 h-6 text-gray-400" />
              <h3 className="text-xl font-bold text-gray-500">AS-IS. 지루한 텍스트 사전</h3>
            </div>

            {/* Mock Wiki Concept */}
            <div className="w-full bg-gray-50 rounded-2xl p-8 border border-gray-200 overflow-hidden relative shadow-inner">
              <h4 className="text-xl font-bold text-gray-700 mb-6 font-serif border-b pb-4">근저당권 (根抵當權)</h4>
              <div className="space-y-4">
                <div className="w-full h-3 bg-gray-200 rounded"></div>
                <div className="w-11/12 h-3 bg-gray-200 rounded"></div>
                <div className="w-full h-3 bg-gray-200 rounded"></div>
                <div className="w-4/5 h-3 bg-gray-200 rounded"></div>
                <div className="w-full h-3 bg-gray-200 rounded mt-8"></div>
                <div className="w-9/12 h-3 bg-gray-200 rounded"></div>
                <div className="w-full h-3 bg-gray-200 rounded"></div>
                <div className="w-5/6 h-3 bg-gray-200 rounded"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
            </div>
          </div>

          {/* Center Arrow */}
          <div className="flex-shrink-0 flex items-center justify-center w-16">
            <ArrowRight className="w-12 h-12 text-brand-blue opacity-50" strokeWidth={1.5} />
          </div>

          {/* TO-BE Element */}
          <div className="flex-1 flex flex-col items-center h-[520px] relative transform transition-transform duration-500 hover:-translate-y-2">
            <div className="flex items-center gap-3 mb-8">
              <CheckCircle2 className="w-6 h-6 text-brand-blue" />
              <h3 className="text-xl font-bold text-primary">TO-BE. 직관적 카드 스니펫</h3>
            </div>

            {/* Mock TO-BE Snippet Concept */}
            <div className="w-full bg-white rounded-3xl p-10 shadow-2xl border border-brand-blue/20 flex flex-col relative overflow-hidden">
              <div className="flex justify-between items-start mb-10">
                <span className="px-4 py-1.5 bg-brand-blue text-white text-xs font-bold rounded-full tracking-wider uppercase">핵심 용어</span>
                <span className="text-gray-300 font-bold text-sm">1 / 5</span>
              </div>
              
              <h4 className="text-3xl font-extrabold text-primary mb-6 text-center mt-4">근저당권이란?</h4>
              
              <div className="bg-brand-blue/5 rounded-2xl p-8 text-center mb-8 relative">
                <p className="text-xl font-medium text-brand-blue leading-relaxed">
                  "집주인이 <strong className="font-extrabold text-primary">이 집을 담보로 은행에 빚</strong>을 지고 있다는 뜻표시입니다."
                </p>
                {/* Visual anchor */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-white border-2 border-brand-blue rounded-full flex items-center justify-center shadow-sm">
                  <div className="w-3 h-3 bg-brand-blue rounded-full"></div>
                </div>
              </div>

              {/* Fake UI Button */}
              <div className="mt-auto w-full py-4 bg-primary text-white font-bold rounded-2xl flex items-center justify-center text-lg shadow-lg">
                이해했어요 (Swipe)
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
