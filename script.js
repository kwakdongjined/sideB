/* =========================================
   도거박스 소개 페이지 스크립트
   ========================================= */

(function () {
  'use strict';

  // CTA 버튼 액션 매핑
  const CTA_ACTIONS = {
    subscribe: {
      label: '정기배송',
      message: '정기배송 페이지로 이동합니다.\n\n1:1 상담을 통해 우리 아이에게 맞는 식단을 설계해드려요.',
      url: 'https://doggerbox.com/members'
    },
    recommend: {
      label: '라인업 추천',
      message: '라인업 추천 페이지로 이동합니다.\n\n건강 상태에 따라 시그니처 · 저알러지 · 저단저지 중 맞춤 추천을 받아보세요.',
      url: 'https://doggerbox.com/'
    },
    calculator: {
      label: '급여량 계산기',
      message: '급여량 계산기로 이동합니다.\n\n반려견의 몸무게와 활동량에 따른 적정 급여량을 계산해드려요.',
      url: 'https://doggerbox.com/'
    }
  };

  /**
   * CTA 버튼 클릭 핸들러
   */
  function handleCtaClick(event) {
    const action = event.currentTarget.dataset.action;
    const config = CTA_ACTIONS[action];

    if (!config) {
      console.warn('알 수 없는 액션:', action);
      return;
    }

    // 데모용 알림 — 실제 서비스에서는 window.location.href = config.url 로 교체
    const proceed = window.confirm(config.message + '\n\n이동하시겠습니까?');
    if (proceed) {
      window.open(config.url, '_blank', 'noopener,noreferrer');
    }
  }

  /**
   * 라인업 카드 클릭 시 확대 효과 (데모)
   */
  function handleLineupHover(event) {
    const card = event.currentTarget;
    const heading = card.querySelector('h3');
    if (heading) {
      console.log('라인업 조회:', heading.textContent.trim());
    }
  }

  /**
   * 스크롤 시 요소 페이드인 애니메이션
   */
  function setupScrollAnimation() {
    // IntersectionObserver 미지원 브라우저는 그냥 종료
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const targets = document.querySelectorAll(
      '.hero, .stats, .lineup-grid, .process-card, .review'
    );

    targets.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(16px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(el);
    });
  }

  /**
   * 초기화
   */
  function init() {
    // CTA 버튼 바인딩
    const ctaButtons = document.querySelectorAll('.cta-group button[data-action]');
    ctaButtons.forEach((btn) => {
      btn.addEventListener('click', handleCtaClick);
    });

    // 라인업 카드 호버 로깅
    const lineupCards = document.querySelectorAll('.lineup-card');
    lineupCards.forEach((card) => {
      card.addEventListener('mouseenter', handleLineupHover);
    });

    // 스크롤 애니메이션
    setupScrollAnimation();

    console.log('🐶 도거박스 소개 페이지가 로드되었습니다.');
  }

  // DOM 준비되면 실행
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
