function shareMessage() {
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '안지연❤이태우',
        description: '7월 13일 안찌❤태우 결혼식\n여러분을 초대.',
        imageUrl:
          'https://teusee.github.io/assets/kakao_photo-DDb0D4Uw.webp',
        link: {
          // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
          mobileWebUrl: 'https://teusee.github.io',
          webUrl: 'https://teusee.github.io',
        },
      },
      buttons: [
        {
            title: '청첩장',
            link: {
                mobileWebUrl: 'https://teusee.github.io',
                webUrl: 'https://teusee.github.io',
            },
        },
        {
            title: '위치',
            link: {
                mobileWebUrl: 'https://naver.me/FRLNVrm6',
                webUrl: 'https://naver.me/FRLNVrm6',
            },
        },
      ],
    });
  }
  export default shareMessage;