import React from 'react';
import { AlertCircle, FileX } from 'lucide-react';

export default function Slide04() {
  return (
    <div className="w-full h-full p-24 flex flex-col bg-canvas text-left relative overflow-hidden">
      
      <div className="flex-1 w-full max-w-6xl flex flex-col justify-start z-10">
        
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-caption text-sm font-bold mb-8 uppercase tracking-wider">
            MVP Target & Market Gap
          </h2>
          <h1 className="text-primary text-4xl font-extrabold leading-tight tracking-tight mb-12">
            정부 앱도 못 막은 전세 사기,<br />
            <span className="text-brand-blue">문제는 '데이터'가 아닙니다.</span>
          </h1>
          <p className="text-secondary text-lg font-medium leading-relaxed max-w-5xl">
            정부가 사기를 막겠다며 만든 공공 앱은 청년 87%에게 철저히 외면받았습니다. 집주인의 '동의'를 받아야만 정보를 볼 수 있는 함정 때문입니다. 결국 주어지는 데이터에 의존하지 않고, 내 눈으로 원본 서류를 해독하는 <strong className="text-brand-blue font-bold">실전 문해력</strong>만이 유일한 무기입니다.<br/>그래서 우리의 첫 타겟은 부동산입니다.
          </p>
        </div>

        {/* Data & Insight Section - Unboxed Layout */}
        <div className="flex items-center gap-24 mt-12">
          
          {/* Key Statistic (Left - Donut Chart Restored) */}
          <div className="flex flex-col w-auto mt-4 px-8">
            <h3 className="text-xl font-bold text-gray-400 mb-8 text-center uppercase tracking-widest">
              전세 사기 피해자 연령 분포
            </h3>
            
            <div className="relative w-[320px] h-[320px] mx-auto mb-8">
              {/* Donut Chart Background */}
              <div 
                className="absolute inset-0 rounded-full"
                style={{ background: 'conic-gradient(#ff4b4b 0% 75.1%, #f3f4f6 75.1% 100%)' }}
              ></div>
              {/* Donut Hole */}
              <div className="absolute inset-[32px] bg-canvas rounded-full flex flex-col items-center justify-center shadow-inner">
                <span className="text-accent-red text-6xl font-black leading-none tracking-tighter">75.1%</span>
              </div>
            </div>
            
            <p className="text-center text-lg font-bold text-primary mt-2">
              2030 세대에 집중된 치명적 피해
            </p>
            <p className="text-center text-sm font-medium text-gray-400 mt-2">
              출처: 국토교통부 (2024.05 기준)
            </p>
          </div>

          {/* Market Insight / Gap (Right) */}
          <div className="flex-1 flex flex-col gap-10">
            <h3 className="text-2xl font-extrabold text-primary">기존 정부 제공 앱의 치명적 한계</h3>

            {/* Unboxed Review Item 1 */}
            <div className="flex items-start gap-6">
              <div className="bg-red-50 p-4 rounded-full flex-shrink-0">
                <FileX className="w-8 h-8 text-accent-red" />
              </div>
              <div className="pt-1">
                <h4 className="text-xl font-bold text-primary mb-2">"임대인 동의 없인 무용지물"</h4>
                <p className="text-secondary text-base leading-relaxed max-w-lg">
                  계약 전 가장 위험한 순간에 확인해야 하는데, 집주인이 동의를 안 해주면 세금 체납 내역을 볼 수가 없어요. 사실상 빈껍데기입니다.
                </p>
              </div>
            </div>

            {/* Unboxed Review Item 2 */}
            <div className="flex items-start gap-6">
              <div className="bg-red-50 p-4 rounded-full flex-shrink-0">
                <AlertCircle className="w-8 h-8 text-accent-red" />
              </div>
              <div className="pt-1">
                <h4 className="text-xl font-bold text-primary mb-2">"용어가 너무 어려워요"</h4>
                <p className="text-secondary text-base leading-relaxed max-w-lg">
                  안심전세앱에서 등기부등본을 열람해도 '선순위 뭐시기' 같은 단어 뜻을 몰라서 이게 위험한 건지 안전한 건지 결국 해석을 못 하겠어요.
                </p>
              </div>
            </div>

            {/* Insight Conclusion Line */}
            <div className="mt-4 pt-6 border-t-2 border-brand-blue/20">
              <p className="text-xl font-medium text-brand-blue leading-relaxed">
                <strong className="font-extrabold text-brand-blue uppercase tracking-widest mr-4">Insight</strong>
                결국 3자에게 책임을 넘기지 않는 나 스스로의 '해독 능력'이 필요하다.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
