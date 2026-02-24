import React from 'react';
import { ArrowRight } from 'lucide-react';
import SlideLayout from '../components/SlideLayout';

export default function Slide03() {
  return (
    <SlideLayout
      caption="Strategy & Hypothesis"
      header="'읽는 문서'를 '만지고 노는 게임'으로 바꿨습니다."
      subcopy="어려운 법률 용어와 공문서를 잘게 쪼갠 '인터랙티브 스니펫'으로 해체했습니다. 지루한 공부 대신 직관적인 조작(UX)을 유도하면 청년층의 실전 방어 역량을 단기간에 끌어올릴 수 있다는 가설을 세웠습니다."
    >
      <div className="w-full h-full flex flex-col py-8 gap-12 justify-center items-center">
        
        {/* Transformation Graphic */}
        <div className="flex w-full max-w-5xl items-center justify-between">
          {/* Before */}
          <div className="flex-1 flex flex-col items-center">
            <div className="bg-card w-64 h-80 rounded-[20px] shadow-sm border border-soft-border p-6 flex flex-col gap-4 relative overflow-hidden">
              <div className="w-full h-6 bg-gray-200 rounded-md"></div>
              <div className="w-3/4 h-4 bg-gray-200 rounded-md"></div>
              <div className="w-full h-4 bg-gray-200 rounded-md"></div>
              <div className="w-5/6 h-4 bg-gray-200 rounded-md"></div>
              <div className="w-full h-4 bg-gray-200 rounded-md"></div>
              <div className="w-full h-4 bg-gray-200 rounded-md"></div>
              <div className="w-3/4 h-4 bg-gray-200 rounded-md"></div>
              {/* Overlay warning */}
              <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] flex items-center justify-center">
                <span className="text-accent-red font-bold text-lg px-4 py-2 bg-white rounded-full shadow-sm border border-accent-red/20 transform -rotate-12">"너무 길고 어려워"</span>
              </div>
            </div>
            <h3 className="mt-8 text-lg font-extrabold text-secondary">기존: Text-Heavy</h3>
          </div>

          {/* Arrow */}
          <div className="flex flex-col items-center justify-center px-12 shrink-0">
            <ArrowRight className="w-24 h-24 text-brand-blue" strokeWidth={3} />
            <span className="mt-4 text-brand-blue font-bold text-xl px-6 py-2 bg-brand-blue/10 rounded-full">UX 전환</span>
          </div>

          {/* After */}
          <div className="flex-1 flex flex-col items-center">
            <div className="w-80 h-80 relative">
              {/* Floating interactive snippets */}
              <div className="absolute top-0 right-10 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.1)] rounded-[20px] p-5 w-48 rotate-6 z-20 border border-brand-blue/20">
                <div className="text-brand-blue font-bold text-lg mb-2">Match & Drag</div>
                <div className="h-2 bg-gray-100 rounded-full w-full"></div>
              </div>
              
              <div className="absolute top-24 -left-6 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.1)] rounded-[20px] p-5 w-56 -rotate-3 z-30 border border-brand-blue/20">
                <div className="text-primary font-extrabold text-lg mb-2">핫스팟 판독</div>
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded-full bg-accent-red/20 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-accent-red"></div>
                  </div>
                  <div className="flex-1 h-6 bg-gray-100 rounded-md"></div>
                </div>
              </div>

              <div className="absolute bottom-4 right-0 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.1)] rounded-[20px] p-5 w-64 rotate-2 z-10 border border-brand-blue/20">
                <div className="text-primary font-extrabold text-lg mb-2">위기 시뮬레이션</div>
                <div className="flex gap-2 mt-3">
                  <div className="flex-1 h-10 bg-brand-blue text-white rounded-lg flex items-center justify-center font-bold text-sm">수락</div>
                  <div className="flex-1 h-10 bg-gray-100 text-gray-500 rounded-lg flex items-center justify-center font-bold text-sm">거절</div>
                </div>
              </div>
            </div>
            <h3 className="mt-8 text-2xl font-extrabold text-brand-blue">bitelearn: Interactive Snippets</h3>
          </div>
        </div>

        {/* Bottom Hypothesis */}
        <div className="mt-8 w-full max-w-4xl bg-card-tinted border border-brand-blue/20 rounded-[24px] p-8 text-center flex flex-col items-center">
          <span className="text-brand-blue font-bold text-sm uppercase tracking-widest mb-4">Core Hypothesis</span>
          <p className="text-lg text-primary font-medium leading-relaxed">
            "지루한 공부 대신 <span className="text-brand-blue bg-brand-blue/10 px-2 py-1 rounded">직관적인 조작(UX)</span>을 유도하면,<br/>
            청년층의 실전 방어 역량을 <span className="text-accent-green">단기간에 스파이크</span> 시킬 수 있다."
          </p>
        </div>

      </div>
    </SlideLayout>
  );
}
