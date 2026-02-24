import React from 'react';

export default function Slide01() {
  return (
    <div className="w-full h-full p-24 flex flex-col justify-center items-start text-left bg-canvas">
      <div className="max-w-6xl">
        <h2 className="text-caption text-sm font-bold mb-8 uppercase tracking-wider">
          Project Overview
        </h2>
        <h1 className="text-primary text-4xl font-extrabold leading-tight tracking-tight mb-12">
          생존을 위협하는 문해력 저하,<br />마이크로 러닝으로 끊어내다
        </h1>
        <p className="text-secondary text-lg font-medium leading-relaxed max-w-5xl">
          인생 실전 튜토리얼 <strong className="text-brand-blue font-bold">'bitelearn'</strong>. 첫 번째 거점 시장인 부동산 검증을 통해 타겟의 실전 방어력을 입증하고, 인생 전반의 지식 플랫폼으로 확장하는 <span className="font-bold text-primary">0→1 기획안</span>입니다.
        </p>
      </div>

      {/* Decorative Brand Element */}
      <div className="absolute right-0 bottom-0 top-0 w-1/3 bg-card-tinted flex items-center justify-center border-l border-soft-border/50 overflow-hidden">
        <div className="w-[800px] h-[800px] rounded-full mix-blend-multiply filter blur-3xl opacity-50 bg-gradient-to-br from-brand-blue/20 to-transparent absolute -right-40 -bottom-40"></div>
        <div className="text-[12rem] font-black text-brand-blue/5 tracking-tighter -rotate-90">
          bitelearn
        </div>
      </div>
    </div>
  );
}
