import anime from 'animejs/lib/anime.es.js';
const tl = anime.timeline({
    easing: 'easeInOutCubic',
    delay: (el, i) => i * 70,
    duration: 750,
  });
  
  tl.add({
    targets: '#floppy',
    translateY: [
      {
        value: 0,
        duration: 100,
      },
      {
        value: -20,
        duration: 500,
      },
      {
        value: 0,
        duration: 450,
      },
    ],
    rotate: [
      {
        value: 0,
        duration: 100,
      },
      {
        value: -4,
        duration: 500,
      },
      {
        value: 0,
        duration: 450,
      },
    ],
    scale: [
      {
        value: 0.9,
        duration: 100,
      },
      {
        value: 1.2,
        duration: 500,
      },
      {
        value: 1,
        duration: 450,
      },
    ],
  })
    .add(
      {
        targets: '#floppy-shadow',
        scale: [
          {
            value: 0.9,
            duration: 100,
          },
          {
            value: 1.3,
            duration: 500,
          },
          {
            value: 1,
            duration: 450,
          },
        ],
        rotate: [
          {
            value: 0,
            duration: 100,
          },
          {
            value: 4,
            duration: 500,
          },
          {
            value: 0,
            duration: 450,
          },
        ],
        translateY: [
          {
            value: 0,
            duration: 100,
          },
          {
            value: 20,
            duration: 500,
          },
          {
            value: 0,
            duration: 450,
          },
        ],
        opacity: [
          {
            value: 0.9,
            duration: 100,
          },
          {
            value: 0.3,
            duration: 500,
          },
          {
            value: 1,
            duration: 450,
          },
        ],
      },
      30
    )
    .add(
      {
        targets: '#magnetic',
        opacity: [0, 0.43],
        r: [
          {
            value: 94,
            duration: 100,
          },
          {
            value: 158,
            duration: 500,
          },
          {
            value: 126.7,
            duration: 450,
          },
        ],
      },
      60
    )
    .add(
      {
        targets: '#media-hub circle',
        easing: 'easeOutQuad',
        opacity: [0, 1],
        r: [
          {
            value: 32,
            duration: 100,
          },
          {
            value: 52,
            duration: 500,
          },
          {
            value: 42,
            duration: 450,
          },
        ],
      },
      90
    )
    .add(
      {
        targets: '#media-hub .square',
        easing: 'easeOutQuad',
        duration: 400,
        opacity: [0, 1],
        d:
          'M491.6,482.9h-9c-1.66,0-3,1.34-3,3v9c0,1.66,1.34,3,3,3h9c1.66,0,3-1.34,3-3v-9 C494.6,484.24,493.26,482.9,491.6,482.9z',
      },
      '-=650'
    )
    .add(
      {
        targets: '#media-hub .rect',
        easing: 'easeOutQuad',
        duration: 350,
        opacity: [0, 1],
        d:
          'M513.94,509.83l-3.31-9.44c-0.55-1.56-2.26-2.39-3.82-1.84l-18.87,6.62c-0.75,0.26-1.37,0.81-1.71,1.53 s-0.39,1.54-0.13,2.29l3.31,9.44c0.43,1.23,1.59,2.01,2.83,2.01c0.33,0,0.66-0.05,0.99-0.17l18.87-6.62 c0.75-0.26,1.37-0.81,1.71-1.53S514.2,510.58,513.94,509.83z',
      },
      '-=500'
    )
    .add(
      {
        targets: '#top-cover-rails',
        easing: 'easeOutElastic',
        duration: 1000,
        opacity: [0, 1],
        strokeWidth: 6,
        d:
          'M579.1,428.9h-138c-9.9,0-18-8.1-18-18v-74h174v74C597.1,420.9,589,428.9,579.1,428.9z',
      },
      '-=300'
    )
    .add(
      {
        targets: '#top-cover-shape',
        easing: 'easeOutCubic',
        duration: 500,
        opacity: [0, 1],
        strokeWidth: 6,
        d:
          'M529.1,428.9h-88c-9.9,0-18-8.1-18-18v-74h124v74C547.1,420.9,539,428.9,529.1,428.9z',
      },
      '-=800'
    )
    .add(
      {
        targets: '#top-cover-shadow',
        easing: 'easeOutCubic',
        duration: 350,
        opacity: [0, 0.48],
        translateX: [-25, 0],
      },
      '-=600'
    )
    .add(
      {
        targets: '#top-cover-mark-shape',
        easing: 'easeOutCubic',
        duration: 400,
        opacity: [0, 1],
        width: 24,
      },
      '-=800'
    )
    .add(
      {
        targets: '#top-cover-mark-shadow',
        easing: 'easeOutCubic',
        duration: 400,
        opacity: [0, 1],
        width: 13.4,
      },
      '-=800'
    )
    .add(
      {
        targets: '#top-cover-rect',
        easing: 'easeOutCubic',
        duration: 400,
        opacity: [0, 1],
        width: {
          value: 12,
        },
        x: {
          value: 522.2,
        },
        height: {
          value: 6,
          delay: 500,
        },
        y: {
          value: 347.9,
          delay: 500,
        },
      },
      '-=400'
    )
    .add(
      {
        targets: '.shine',
        easing: 'easeOutQuint',
        duration: (el, i) => i * 35 + 750,
        delay: (el, i) => i * 90,
        opacity: [0, 1],
        translateX: [-20, 0],
      },
      '-=550'
    )
    .add(
      {
        targets: '#static circle',
        easing: 'easeInOutSine',
        duration: (el, i) => i * 30 + 200,
        delay: (el, i) => i * 185,
        opacity: [0, 1],
        r: [
          {
            value: 2,
            duration: 100,
          },
          {
            value: 12.5,
            duration: 300,
          },
          {
            value: 8.5,
            duration: 250,
          },
        ],
      },
      '-=600'
    )
    .add(
      {
        targets: '#static .semicircle-r',
        easing: 'easeInOutSine',
        duration: 400,
        opacity: [0, 1],
        d:
          'M638.1,371.9c-8.27,0-15,6.73-15,15s6.73,15,15,15c1.66,0,3-1.34,3-3v-24 C641.1,373.24,639.76,371.9,638.1,371.9z',
      },
      '-=300'
    )
    .add(
      {
        targets: '#static .semicircle-l',
        easing: 'easeInOutSine',
        duration: 400,
        opacity: [0, 1],
        d:
          'M338.1,371.9c-1.66,0-3,1.34-3,3v24c0,1.66,1.34,3,3,3c8.27,0,15-6.73,15-15S346.37,371.9,338.1,371.9z',
      },
      '-=300'
    )
    .add(
      {
        targets: '#static .bottom-cover',
        easing: 'easeOutQuart',
        duration: 450,
        opacity: [0, 1],
        d:
          'M574.1,590.9h-172c-11.58,0-21,9.42-21,21v25c0,1.66,1.34,3,3,3h208c1.66,0,3-1.34,3-3v-25C595.1,600.32,585.68,590.9,574.1,590.9z',
        baseFrequency: 0,
        scale: 1,
      },
      '-=300'
    )
    .add(
      {
        targets: '#static .rect',
        easing: 'easeOutQuart',
        duration: 450,
        opacity: [0, 1],
        d:
          'M619.6,590.9h-14c-1.66,0-3,1.34-3,3v14c0,1.66,1.34,3,3,3h14c1.66,0,3-1.34,3-3v-14 C622.6,592.24,621.26,590.9,619.6,590.9z',
        baseFrequency: 0,
        scale: 1,
      },
      '-=360'
    )
    .add(
      {
        targets: '#static .line-v',
        easing: 'easeOutQuart',
        duration: 200,
        opacity: [0, 1],
        y2: [636.9, 612.9],
      },
      '-=200'
    )
    .add(
      {
        targets: '#static .line-h-1',
        easing: 'easeOutQuart',
        duration: 600,
        opacity: [0, 1],
        x2: [530.1, 580.6],
      },
      '-=150'
    )
    .add(
      {
        targets: '#static .line-h-2',
        easing: 'easeOutQuart',
        duration: 450,
        opacity: [0, 1],
        x1: [580.6, 547.1],
      },
      '-=300'
    );
    