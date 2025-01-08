function shareMessage() {
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '안지연❤이태우',
        description: '7월 13일 안찌와 태우스의 결혼식으로 초대합니다',
        imageUrl:
          'https://i1.daumcdn.net/thumb/C148x148.fwebp.q85/?fname=https://blog.kakaocdn.net/dn/bvSBEi/btsKVJkm3Xa/IZIesvS8KW4QltksHxIvk1/img.webp',
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