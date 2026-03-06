"use client";

import { useState } from "react";
import AnimateOnScroll from "./AnimateOnScroll";

const guides = [
  {
    tab: "설치",
    title: "프로그램 설치하기",
    steps: [
      {
        title: "다운로드",
        content: "위 다운로드 버튼을 클릭하여 OS에 맞는 파일을 받으세요.",
      },
      {
        title: "Windows - 압축 해제 & 실행",
        content:
          "다운로드한 ZIP 파일을 압축 해제하고, InstagramDMPro.exe를 실행합니다. Windows SmartScreen 경고가 뜨면 '추가 정보 > 실행'을 클릭하세요.",
      },
      {
        title: "macOS - DMG 설치",
        content:
          "DMG 파일을 열고 InstagramDMPro를 Applications 폴더로 드래그합니다. 처음 실행 시 '확인되지 않은 개발자' 경고가 뜨면 시스템 설정 > 개인정보 및 보안에서 '확인 없이 열기'를 클릭하세요.",
      },
      {
        title: "프로그램 실행",
        content:
          "실행하면 자동으로 브라우저에 대시보드가 열립니다. (http://localhost:8080)",
      },
    ],
  },
  {
    tab: "계정 연동",
    title: "인스타그램 계정 로그인",
    steps: [
      {
        title: "계정 관리 탭으로 이동",
        content:
          "대시보드 좌측 메뉴에서 '계정 관리'를 클릭합니다.",
      },
      {
        title: "계정 추가",
        content:
          "'계정 추가' 버튼을 클릭하고 인스타그램 아이디를 입력합니다.",
      },
      {
        title: "로그인 버튼 클릭",
        content:
          "Chrome 브라우저가 자동으로 열리며 인스타그램 로그인 페이지로 이동합니다. 직접 아이디/비밀번호를 입력하여 로그인하세요.",
      },
      {
        title: "로그인 완료 확인",
        content:
          "로그인이 완료되면 자동으로 감지됩니다. 세션이 Chrome 프로필에 저장되어 다음 실행 시 재로그인이 필요 없습니다.",
      },
      {
        title: "멀티 계정",
        content:
          "위 과정을 반복하여 여러 계정을 추가할 수 있습니다. 각 계정은 독립된 Chrome 프로필로 관리됩니다.",
      },
    ],
  },
  {
    tab: "크롤링",
    title: "해시태그로 타겟 유저 수집",
    steps: [
      {
        title: "크롤링 탭으로 이동",
        content:
          "대시보드에서 '크롤링' 탭을 선택합니다.",
      },
      {
        title: "해시태그 입력",
        content:
          "타겟 해시태그를 입력합니다. 예: #맛집, #카페투어, #인테리어 등. 여러 해시태그를 한 번에 입력할 수 있습니다.",
      },
      {
        title: "크롤링 계정 선택",
        content:
          "크롤링에 사용할 로그인된 계정을 선택합니다.",
      },
      {
        title: "수집 시작",
        content:
          "'크롤링 시작' 버튼을 클릭하면 해당 해시태그의 게시물에서 유저를 자동으로 수집합니다. 진행 상황이 실시간으로 표시됩니다.",
      },
      {
        title: "결과 확인",
        content:
          "수집된 유저 목록은 '유저 관리' 탭에서 확인하고, 엑셀로 내보내기할 수 있습니다.",
      },
    ],
  },
  {
    tab: "DM 발송",
    title: "자동 DM 발송하기",
    steps: [
      {
        title: "DM 발송 탭으로 이동",
        content:
          "대시보드에서 'DM 발송' 탭을 선택합니다.",
      },
      {
        title: "메시지 템플릿 작성",
        content:
          "DM 메시지를 작성합니다. {username} 변수를 사용하면 받는 사람의 이름이 자동으로 삽입됩니다. 여러 템플릿을 등록하면 랜덤으로 발송됩니다.",
      },
      {
        title: "발송 계정 & 템플릿 선택",
        content:
          "DM을 보낼 계정을 선택합니다. 여러 계정을 선택하면 대상이 자동 분배되어 병렬 발송됩니다.",
      },
      {
        title: "발송 시작",
        content:
          "'DM 발송 시작' 버튼을 클릭합니다. 오타 시뮬레이션과 릴스 브라우징이 자동으로 적용되어 자연스럽게 발송됩니다.",
      },
      {
        title: "진행 상황 모니터링",
        content:
          "계정별 발송 현황, 성공/실패 수, 남은 대상 수가 실시간으로 표시됩니다. 언제든 '중지' 버튼으로 안전하게 멈출 수 있습니다.",
      },
    ],
  },
];

export default function Guide() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="px-6 py-24" style={{ background: "var(--gray-50)" }}>
      <div className="max-w-4xl mx-auto">
        <AnimateOnScroll>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            사용 가이드
          </h2>
          <p
            className="text-center text-lg mb-12"
            style={{ color: "var(--gray-700)" }}
          >
            단계별로 따라하면 누구나 쉽게 사용할 수 있습니다
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          {/* Tabs */}
          <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
            {guides.map((guide, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className="px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300"
                style={{
                  background: activeTab === i ? "var(--primary)" : "white",
                  color: activeTab === i ? "white" : "var(--gray-700)",
                  border: `1px solid ${activeTab === i ? "var(--primary)" : "var(--gray-200)"}`,
                }}
              >
                {guide.tab}
              </button>
            ))}
          </div>

          {/* Content */}
          <div
            className="bg-white rounded-2xl p-6 md:p-10"
            style={{ border: "1px solid var(--gray-200)" }}
          >
            <h3 className="text-2xl font-bold mb-8">
              {guides[activeTab].title}
            </h3>

            <div className="space-y-6">
              {guides[activeTab].steps.map((step, i) => (
                <div key={i} className="flex gap-4">
                  {/* Step number */}
                  <div className="flex-shrink-0">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                      style={{
                        background: "var(--primary-light)",
                        color: "var(--primary)",
                      }}
                    >
                      {i + 1}
                    </div>
                  </div>

                  {/* Step content */}
                  <div className="pb-6" style={{ borderBottom: i < guides[activeTab].steps.length - 1 ? "1px solid var(--gray-100)" : "none" }}>
                    <h4 className="font-semibold mb-1.5">{step.title}</h4>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--gray-700)" }}
                    >
                      {step.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
