import React from 'react';
import { Hand } from 'lucide-react';

export default function Slide01() {
  return (
    <div className="w-full h-full p-24 flex items-center justify-between text-left bg-canvas">
      
      {/* Left Text Block */}
      <div className="max-w-4xl pr-12 z-10 block">
        <h2 className="text-caption text-sm font-bold mb-8 uppercase tracking-wider">
          Project Overview
        </h2>
        <h1 className="text-primary text-4xl font-extrabold leading-tight tracking-tight mb-12">
          읽지 못하면 잃게 됩니다.<br/>
          <span className="text-brand-blue">생존을 위한 마이크로 러닝</span>
        </h1>
        <p className="text-secondary text-lg font-medium leading-relaxed max-w-5xl">
          인생 실전에 필요한 법률·금융 지식을 게임처럼 배웁니다. 긴 글을 피하는 2030 세대가 내 돈과 권리를 스스로 지키도록 돕는 튜토리얼 앱, <strong className="text-brand-blue font-bold">'bitelearn'</strong>입니다.
        </p>
      </div>

      {/* Right Visual Block - Clean Mockup */}
      <div className="relative w-[600px] h-[750px] flex items-center justify-center">
        
        {/* Background Decorative Blur */}
        <div className="absolute inset-0 bg-brand-blue/10 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-accent-red/10 rounded-full blur-[80px] -z-10"></div>

        {/* Smartphone Hardware Frame */}
        <div className="relative w-[340px] h-[680px] bg-white rounded-[40px] shadow-2xl border-4 border-gray-100 overflow-hidden flex flex-col transform rotate-[-4deg] transition-transform hover:rotate-0 duration-700">
          
          {/* Top Notch/Speaker */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-gray-100 rounded-b-3xl z-50"></div>

          {/* Screen Content - Interactive Quiz Concept */}
          <div className="flex-1 bg-gray-50 flex flex-col p-6 pt-16 relative">
            
            <div className="text-sm font-bold text-gray-400 mb-2">실전 용어 훈련</div>
            <h3 className="text-xl font-extrabold text-primary mb-8 leading-tight">
              이 서류에서 <span className="text-accent-red">위험한 부분</span>을 터치하세요!
            </h3>

            {/* Mock Document Block */}
            <div className="relative w-full h-64 bg-white rounded-xl shadow-sm border border-gray-200 p-4 font-mono text-xs text-gray-500 overflow-hidden">
              <div className="w-1/2 h-2 bg-gray-200 rounded mb-4"></div>
              <div className="w-full h-2 bg-gray-100 rounded mb-2"></div>
              <div className="w-3/4 h-2 bg-gray-100 rounded mb-2"></div>
              <div className="w-full h-2 bg-gray-100 rounded mb-6"></div>
              
              {/* Highlight Target */}
              <div className="absolute top-24 left-4 right-4 p-3 border-2 border-accent-red bg-accent-red/5 rounded-lg group cursor-pointer">
                <div className="text-accent-red font-bold text-sm mb-1">[을구] 근저당권설정</div>
                <div className="w-full h-1 bg-accent-red/20 rounded"></div>
              </div>

              <div className="w-full h-2 bg-gray-100 rounded mb-2 mt-8"></div>
              <div className="w-2/3 h-2 bg-gray-100 rounded mb-2"></div>
            </div>

            {/* Floating Finger/Hand Interaction Graphic */}
            <div className="absolute bottom-[200px] right-[60px] animate-bounce z-20">
              <div className="relative">
                <Hand className="w-16 h-16 text-brand-blue transform rotate-[-15deg]" strokeWidth={1.5} fill="#ffffff" />
                <div className="absolute top-1 left-2 w-4 h-4 rounded-full bg-brand-blue opacity-50 animate-ping"></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
