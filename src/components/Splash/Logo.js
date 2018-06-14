import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  animation: burst 2s ease-out;

  @keyframes burst {
    0% {
      opacity: 1;
      transform: scale(0.5);
    }
    100% {
      transform: scale(1.5);
      opacity: 0.5;
    }
  }
`;

const Logo = () => (
  <Svg
    width="172"
    height="170"
    viewBox="0 0 172 170"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {paths.map(({ translate, fill, d, options = {} }, i) => (
      <path
        key={i}
        fillRule="evenodd"
        clipRule="evenodd"
        transform={`translate(${translate})`}
        d={d}
        fill={fill}
        {...options}
      />
    ))}
  </Svg>
);

const paths = [
  {
    d:
      'M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100Z',
    translate: '24 46',
    fill: '#9AF4EF'
  },
  {
    options: { opacity: '0.3' },
    d:
      'M38.4373 0C16.3053 5.90879 0 26.0869 0 50.0814C0 65.8361 7.0373 79.9387 18.1289 89.4463C41.3182 85.1031 58.8717 64.7654 58.8717 40.3158C58.8717 23.7658 50.8256 9.10039 38.4373 0Z',
    translate: '65.1283 55.6843',
    fill: '#FFFFF4'
  },
  {
    d:
      'M41.3561 12.1441C39.1592 10.3268 35.985 11.9422 34.276 10.4773C31.9918 8.51953 31.473 8.00742 29.3871 7.47266C27.4828 6.98437 25.7586 8.08906 23.9244 5.64336C22.6061 3.88555 21.3625 4.06348 19.7715 4.4541C18.1805 4.84473 17.6916 4.4123 15.5504 2.64043C14.1344 1.46855 12.8404 1.05352 9.91074 1.15117C7.43984 1.23359 5.49648 0.685938 3.69023 0C1.95332 3.89414 0.694141 8.04648 0 12.3902C7.07617 13.133 9.20312 12.8102 11.9615 13.7C14.9889 14.6766 44.416 20.6336 44.9369 20.3406C45.4578 20.0477 45.8033 15.3984 45.8033 15.3984C42.848 14.8645 42.8078 13.3451 41.3561 12.1441Z',
    translate: '24.6361 75.6594',
    fill: '#36B294'
  },
  {
    options: { opacity: '0.4' },
    d:
      'M0 22.9166C0 33.9543 7.80527 43.1646 18.1963 45.3414C25.5248 36.6426 29.9479 25.4156 29.9479 13.151C29.9479 8.84609 29.4031 4.66855 28.3801 0.682813C26.6262 0.25293 24.8031 0 22.9166 0C10.2602 0 0 10.26 0 22.9166Z',
    translate: '94.0522 82.8489',
    fill: '#FFFFF4'
  },
  {
    d:
      'M0.987109 12.5977C0.441602 12.5977 0 12.1559 0 11.6111V0.986523C0 0.441797 0.441797 0 0.987109 0C1.53262 0 1.97422 0.441797 1.97422 0.986523V11.6111C1.97422 12.1561 1.53262 12.5977 0.987109 12.5977Z',
    translate: '105.533 87.5076',
    fill: '#674447'
  },
  {
    d:
      'M12.4348 13.9893C12.4348 17.423 9.65117 20.2066 6.21738 20.2066C2.78359 20.2066 0 17.423 0 13.9893C0 10.5555 2.78359 0 6.21738 0C9.65117 0.000195313 12.4348 10.5555 12.4348 13.9893Z',
    translate: '100.303 73.5996',
    fill: '#43AB5F'
  },
  {
    d:
      'M2.4291 0C1.56719 0 0.746289 0.666211 0 1.71699H0.000195313C3.14297 1.71699 5.69063 11.3779 5.69063 14.5207C5.69063 17.2545 3.76133 19.5338 1.19102 20.0818C1.59121 20.1627 2.00488 20.2066 2.42891 20.2066C5.8627 20.2066 8.64629 17.423 8.64629 13.9893C8.64649 10.5555 5.8627 0 2.4291 0Z',
    translate: '104.091 73.5996',
    fill: '#71BE63'
  },
  {
    options: { opacity: '0.6' },
    d:
      'M0 5.34297C0 3.27754 1.67441 1.60293 3.74004 1.60293C4.05176 1.60293 4.3498 1.65215 4.63926 1.72402C5.61523 0.670117 6.99883 0 8.54844 0C11.4992 0 13.8912 2.39199 13.8912 5.34277H0V5.34297Z',
    translate: '56.5481 68.3179',
    fill: '#F8FEFD'
  },
  {
    options: { opacity: '0.6' },
    d:
      'M0 4.77012C0 2.92598 1.49492 1.43105 3.33906 1.43105C3.61738 1.43105 3.88359 1.475 4.14199 1.53926C5.01328 0.598242 6.24863 0 7.63223 0C10.2666 0 12.4023 2.13574 12.4023 4.77012H0Z',
    translate: '56.0889 53.9253',
    fill: '#F8FEFD'
  },
  {
    options: { opacity: '0.6' },
    d:
      'M9.96094 3.83125C9.96094 2.3502 8.76016 1.14941 7.2791 1.14941C7.05547 1.14941 6.8418 1.18477 6.63418 1.23633C5.93437 0.480664 4.94219 0 3.83105 0C1.71523 0.000195313 0 1.71543 0 3.83125H9.96094Z',
    translate: '92.1641 58.6951',
    fill: '#F8FEFD'
  },
  {
    d:
      'M51.5387 12.5C50.2242 12.5 50.0051 11.2002 49.8762 10.9375C48.4375 8.00781 46.6959 9.375 43.8385 9.375C41.6045 9.375 41.1479 6.11973 39.901 6.25C38.6541 6.38027 36.6453 8.46348 34.9135 7.8125C32.4283 6.87813 32.3504 5.46875 29.9258 4.6875C27.7863 3.99805 25.9773 4.49219 24.9381 3.125C22.9148 0.462891 21.4572 3.36914 18.2879 1.5625C15.0646 -0.275 14.0623 3.125 11.6379 3.125C9.09082 3.125 9.9752 0 6.6502 0C4.7666 0 3.65645 2.29688 1.27402 2.94629C0.449805 6.52285 0 10.2398 0 14.0625C0 16.0336 0.128516 17.974 0.353516 19.8854C1.11816 20.5949 1.94492 21.2189 2.77402 21.575C5.74648 22.8516 68.1641 23.9482 68.1641 23.9482V18.75C63.592 18.75 63.592 15.625 59.8514 15.625C54.8117 15.625 55.2793 12.5 51.5387 12.5Z',
    translate: '24 81.9375',
    fill: '#00A07D'
  },
  {
    d:
      'M20.8984 35.543L67.1875 10.7512L66.0156 8.22229C54.8076 8.22229 35.3582 -3.17107 0 0.865455C0 13.3199 4.56406 24.7014 12.0973 33.4545C16.8289 34.5848 20.8984 35.543 20.8984 35.543Z',
    translate: '24 95.1343',
    fill: '#94D75B'
  },
  {
    d:
      'M57.5475 8.21356C47.2695 8.21356 30.0512 -1.35851 0 0.164143C26.7178 0.18719 43.1025 12.1472 51.4928 12.1472L53.8365 11.2729L57.6172 8.36434L57.5475 8.21356Z',
    translate: '32.4682 95.1433',
    fill: '#B0EB81'
  },
  {
    d:
      'M18.5754 2.85781C18.1256 2.85781 17.7006 2.94629 17.2932 3.0748C16.0027 1.21973 13.8619 0 11.4311 0C9.0002 0 6.85938 1.21973 5.56895 3.0748C5.16152 2.94629 4.73652 2.85781 4.28672 2.85781C1.91934 2.85781 0 4.77695 0 7.14453H22.8621C22.8619 4.77715 20.9428 2.85781 18.5754 2.85781Z',
    translate: '40.6319 66.5161',
    fill: '#F8FEFD'
  },
  {
    d:
      'M20.3125 3.125C19.8207 3.125 19.3559 3.22188 18.9104 3.3623C17.4992 1.33379 15.1584 0 12.5 0C9.8416 0 7.50078 1.33379 6.08965 3.3623C5.64414 3.22188 5.1793 3.125 4.6875 3.125C2.09863 3.125 0 5.22363 0 7.8125H25C25 5.22363 22.9014 3.125 20.3125 3.125Z',
    translate: '72.4375 62.2761',
    fill: '#F8FEFD'
  },
  {
    d:
      'M0 7.16152C0 4.39297 2.24434 2.14844 5.01309 2.14844C5.43086 2.14844 5.83047 2.21445 6.21856 2.31094C7.52656 0.898242 9.38125 0 11.4584 0C15.4135 0 18.6199 3.20625 18.6199 7.16152H0Z',
    translate: '60.0752 55.1145',
    fill: '#F8FEFD'
  },
  {
    d:
      'M0 22.1191C7.84297 39.473 25.2912 51.5559 45.5729 51.5559C73.1871 51.5559 95.5729 29.1701 95.5729 1.55586C95.5729 1.03398 95.5494 0.517969 95.5336 0C64.6143 0.141797 50.5936 21.8684 0 21.8684V22.1191Z',
    translate: '28.4272 94.4441',
    fill: '#71BE63'
  },
  {
    d:
      'M1.12031 14.2953C0.501367 14.2953 0 13.7941 0 13.176V1.11934C0 0.501172 0.501172 0 1.12031 0C1.73945 0 2.24043 0.501172 2.24043 1.11934V13.176C2.24043 13.7941 1.73926 14.2953 1.12031 14.2953Z',
    translate: '91.0442 92.1206',
    fill: '#674447'
  },
  {
    d:
      'M14.1105 15.8746C14.1105 19.7711 10.9518 22.9299 7.05527 22.9299C3.15879 22.9299 0 19.7711 0 15.8746C0 11.9781 3.15879 0 7.05527 0C10.9518 0 14.1105 11.9779 14.1105 15.8746Z',
    translate: '85.1088 76.3386',
    fill: '#43AB5F'
  },
  {
    d:
      'M2.75645 0C1.77832 0 0.846875 0.756055 0 1.94844H0.000195313C3.5666 1.94844 6.45762 12.9113 6.45762 16.4777C6.45762 19.5799 4.26836 22.1664 1.35156 22.7885C1.80566 22.8803 2.2752 22.9301 2.75625 22.9301C6.65273 22.9301 9.81172 19.7713 9.81172 15.8748C9.81191 11.9779 6.65293 0 2.75645 0Z',
    translate: '89.4076 76.3386',
    fill: '#71BE63'
  },
  {
    d:
      'M84.2301 0C62.2549 0.107812 30.7512 30.5135 0 33.0043C8.95703 41.4947 21.0311 46.7266 34.3484 46.7266C60.8617 46.7266 82.5424 26.0867 84.2301 0Z',
    translate: '39.6516 99.2734',
    fill: '#43AB5F'
  },
  {
    d:
      'M1.30215 2.6043C2.02131 2.6043 2.6043 2.02131 2.6043 1.30215C2.6043 0.582992 2.02131 0 1.30215 0C0.582992 0 0 0.582992 0 1.30215C0 2.02131 0.582992 2.6043 1.30215 2.6043Z',
    translate: '60.8894 132.328',
    fill: '#B0EB81'
  },
  {
    d:
      'M1.30215 2.6043C2.02131 2.6043 2.6043 2.02131 2.6043 1.30215C2.6043 0.582992 2.02131 0 1.30215 0C0.582992 0 0 0.582992 0 1.30215C0 2.02131 0.582992 2.6043 1.30215 2.6043Z',
    translate: '66.9688 117.015',
    fill: '#94D75B'
  },
  {
    d:
      'M1.30215 2.6043C2.02131 2.6043 2.6043 2.02131 2.6043 1.30215C2.6043 0.582992 2.02131 0 1.30215 0C0.582992 0 0 0.582992 0 1.30215C0 2.02131 0.582992 2.6043 1.30215 2.6043Z',
    translate: '102.203 99.9146',
    fill: '#94D75B'
  },
  {
    d:
      'M1.30215 2.6043C2.02131 2.6043 2.6043 2.02131 2.6043 1.30215C2.6043 0.582992 2.02131 0 1.30215 0C0.582992 0 0 0.582992 0 1.30215C0 2.02131 0.582992 2.6043 1.30215 2.6043Z',
    translate: '80.4645 134.411',
    fill: '#71BE63'
  },
  {
    d:
      'M1.30215 2.6043C2.02131 2.6043 2.6043 2.02131 2.6043 1.30215C2.6043 0.582992 2.02131 0 1.30215 0C0.582992 0 0 0.582992 0 1.30215C0 2.02131 0.582992 2.6043 1.30215 2.6043Z',
    translate: '87.4812 126.339',
    fill: '#B0EB81'
  },
  {
    d:
      'M1.30215 2.6043C2.02131 2.6043 2.6043 2.02131 2.6043 1.30215C2.6043 0.582992 2.02131 0 1.30215 0C0.582992 0 0 0.582992 0 1.30215C0 2.02131 0.582992 2.6043 1.30215 2.6043Z',
    translate: '72.6979 128.19',
    fill: '#71BE63'
  },
  {
    d:
      'M1.30215 2.6043C2.02131 2.6043 2.6043 2.02131 2.6043 1.30215C2.6043 0.582992 2.02131 0 1.30215 0C0.582992 0 0 0.582992 0 1.30215C0 2.02131 0.582992 2.6043 1.30215 2.6043Z',
    translate: '50.8229 133.63',
    fill: '#71BE63'
  },
  {
    d:
      'M1.30215 2.6043C2.02131 2.6043 2.6043 2.02131 2.6043 1.30215C2.6043 0.582992 2.02131 0 1.30215 0C0.582992 0 0 0.582992 0 1.30215C0 2.02131 0.582992 2.6043 1.30215 2.6043Z',
    translate: '52.125 122.637',
    fill: '#B0EB81'
  },
  {
    d:
      'M1.30215 2.6043C2.02131 2.6043 2.6043 2.02131 2.6043 1.30215C2.6043 0.582992 2.02131 0 1.30215 0C0.582992 0 0 0.582992 0 1.30215C0 2.02131 0.582992 2.6043 1.30215 2.6043Z',
    translate: '74 112.146',
    fill: '#B0EB81'
  },
  {
    d:
      'M1.30215 2.6043C2.02131 2.6043 2.6043 2.02131 2.6043 1.30215C2.6043 0.582992 2.02131 0 1.30215 0C0.582992 0 0 0.582992 0 1.30215C0 2.02131 0.582992 2.6043 1.30215 2.6043Z',
    translate: '41.444 121.986',
    fill: '#94D75B'
  },
  {
    d:
      'M1.30215 2.6043C2.02131 2.6043 2.6043 2.02131 2.6043 1.30215C2.6043 0.582992 2.02131 0 1.30215 0C0.582992 0 0 0.582992 0 1.30215C0 2.02131 0.582992 2.6043 1.30215 2.6043Z',
    translate: '96.6153 120.684',
    fill: '#B0EB81'
  },
  {
    d:
      'M1.30215 2.6043C2.02131 2.6043 2.6043 2.02131 2.6043 1.30215C2.6043 0.582992 2.02131 0 1.30215 0C0.582992 0 0 0.582992 0 1.30215C0 2.02131 0.582992 2.6043 1.30215 2.6043Z',
    translate: '109.222 117.015',
    fill: '#B0EB81'
  },
  {
    d:
      'M1.30215 2.6043C2.02131 2.6043 2.6043 2.02131 2.6043 1.30215C2.6043 0.582992 2.02131 0 1.30215 0C0.582992 0 0 0.582992 0 1.30215C0 2.02131 0.582992 2.6043 1.30215 2.6043Z',
    translate: '85.1087 119.381',
    fill: '#71BE63'
  },
  {
    d:
      'M1.30215 2.6043C2.02131 2.6043 2.6043 2.02131 2.6043 1.30215C2.6043 0.582992 2.02131 0 1.30215 0C0.582992 0 0 0.582992 0 1.30215C0 2.02131 0.582992 2.6043 1.30215 2.6043Z',
    translate: '96.6153 129.375',
    fill: '#71BE63'
  },
  {
    d:
      'M1.30215 2.6043C2.02131 2.6043 2.6043 2.02131 2.6043 1.30215C2.6043 0.582992 2.02131 0 1.30215 0C0.582992 0 0 0.582992 0 1.30215C0 2.02131 0.582992 2.6043 1.30215 2.6043Z',
    translate: '100.563 113.448',
    fill: '#71BE63'
  },
  {
    d:
      'M1.30215 2.6043C2.02131 2.6043 2.6043 2.02131 2.6043 1.30215C2.6043 0.582992 2.02131 0 1.30215 0C0.582992 0 0 0.582992 0 1.30215C0 2.02131 0.582992 2.6043 1.30215 2.6043Z',
    translate: '109.222 105.886',
    fill: '#71BE63'
  },
  {
    d:
      'M45.2697 53.2527L55.4038 0L3.44628 10.3867L15.3459 22.583L0 37.929L17.6777 55.6064L32.806 40.4783L45.2697 53.2527Z',
    translate: '116 0.748779',
    fill: '#1A5F67'
  },
  {
    d:
      'M74 148C114.869 148 148 114.869 148 74C148 33.1309 114.869 0 74 0C33.1309 0 0 33.1309 0 74C0 114.869 33.1309 148 74 148ZM74 124C101.614 124 124 101.614 124 74C124 46.3857 101.614 24 74 24C46.3858 24 24 46.3857 24 74C24 101.614 46.3858 124 74 124Z',
    translate: '0 22',
    fill: '#1A5F67'
  }
];

export default Logo;