import React from 'react';
import { Quote } from 'lucide-react';

export default function Slide09() {
  return (
    <div className="w-full h-full p-24 flex flex-col bg-canvas text-left relative overflow-hidden">
      
      <div className="flex-1 w-full max-w-7xl mx-auto flex flex-col justify-start z-10">
        
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-caption text-sm font-bold mb-8 uppercase tracking-wider">
            MVP Validation
          </h2>
          <h1 className="text-primary text-4xl font-extrabold leading-tight tracking-tight mb-12">
            가짜 서류로 테스트해 보니,<br />
            <span className="text-accent-green">'완독률 85%'를 달성했습니다.</span>
          </h1>
          <p className="text-secondary text-lg font-medium leading-relaxed max-w-5xl">
            '부동산' 모듈을 초기 MVP로 배포하여 핵심 가설을 테스트했습니다. 지루한 텍스트 대신 스와이프 인터랙션을 도입한 결과, 중도 이탈 없는 <strong>'학습 완독률 85%'</strong>와 숨겨진 위험을 찾아내는 <strong>'과업 성공률 78%'</strong>를 기록했습니다. 무엇보다 학습에 재미를 느껴 돌아오는 <strong>'3일 차 재방문율 45%'</strong>를 달성하며 성공적인 마이크로 러닝 시스템을 검증했습니다.
          </p>
        </div>

        {/* Validation Data Dashboard - Unboxed minimal columns */}
        <div className="flex flex-col gap-16 flex-1 mt-6">
          
          <div className="grid grid-cols-3 gap-16 relative">
            {/* Divider lines between columns */}
            <div className="absolute top-0 bottom-0 left-1/3 w-px bg-gray-200"></div>
            <div className="absolute top-0 bottom-0 left-2/3 w-px bg-gray-200"></div>
            
            {/* Metric 1 */}
            <div className="flex flex-col pr-8">
              <h3 className="text-xl font-bold text-gray-500 mb-4 uppercase tracking-wider">Completion Rate</h3>
              <div className="text-primary text-[6rem] font-black leading-none tracking-tighter mb-4">
                85<span className="text-5xl text-gray-300 font-bold ml-1">%</span>
              </div>
              <p className="text-xl font-extrabold text-brand-blue mb-2">기존 정보성 글 대비 +52%p 상승</p>
              <p className="text-secondary text-base font-medium leading-relaxed">이탈 없이 학습 사이클 완료</p>
            </div>

            {/* Metric 2 */}
            <div className="flex flex-col px-8">
              <h3 className="text-xl font-bold text-gray-500 mb-4 uppercase tracking-wider">Task Success Rate</h3>
              <div className="text-primary text-[6rem] font-black leading-none tracking-tighter mb-4">
                78<span className="text-5xl text-gray-300 font-bold ml-1">%</span>
              </div>
              <p className="text-xl font-extrabold text-accent-green mb-2">스스로 위험 신호 발견</p>
              <p className="text-secondary text-base font-medium leading-relaxed">서류 판독 실무 테스트 통과율</p>
            </div>

            {/* Metric 3 */}
            <div className="flex flex-col pl-8">
              <h3 className="text-xl font-bold text-gray-500 mb-4 uppercase tracking-wider">Day-3 Retention</h3>
              <div className="text-primary text-[6rem] font-black leading-none tracking-tighter mb-4">
                45<span className="text-5xl text-gray-300 font-bold ml-1">%</span>
              </div>
              <p className="text-xl font-extrabold text-purple-600 mb-2">교육 카테고리 대비 이례적 유지</p>
              <p className="text-secondary text-base font-medium leading-relaxed">자발적 훈련 참여 지속 확인</p>
            </div>
          </div>

          {/* VOC Bottom Bar - Minimal quote style */}
          <div className="w-full pt-10 border-t border-gray-200 relative flex items-start gap-8 mt-4">
            <Quote className="w-16 h-16 text-brand-blue opacity-20 flex-shrink-0" fill="currentColor" />
            <div className="flex-1 flex flex-col items-start gap-4">
              <p className="text-3xl font-extrabold text-primary leading-snug">
                "태어나서 등기부등본이란 걸 처음 읽어봤는데, 재밌게 게임 한 판 하고 나니까 <span className="text-brand-blue bg-blue-50 px-2 py-1 leading-snug">내 자취방 서류를 당장 떼어보고 싶어졌어요!</span>"
              </p>
              <span className="text-gray-500 font-bold text-lg">
                – 25세 대학생, MVP 앱 테스트 그룹 참여자
              </span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
