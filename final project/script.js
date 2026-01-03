const headerNavs = [
    {title: 'About', link: '#about'},
    {title: 'HTML', link: '#html'},
    {title: 'CSS', link: '#css'},
    {title: 'Curriculum', link: '#curriculum'},
    {title: 'Contact', link: '#contact'}
]
const $headerNavUl = document.querySelector('.header__nav ul')

for(const nav of headerNavs) {
    const $li = document.createElement('li');
    $li.classList.add('header__nav-item')

    const $a = document.createElement('a');
    $a.textContent = nav.title;
    $a.setAttribute('href', nav.link);

    $li.appendChild($a);
    $headerNavUl.appendChild($li);
}

const aboutCards = [
    {
        img: './images/about_1.svg',
        title: '빠른 강의',
        descs: [
            '군더더기 없는 진행으로',
            '여러분의 시간을 절약합니다.'
        ]
    },
    {
        img: './images/about_2.svg',
        title: '빠른 강의',
        descs: [
            '군더더기 없는 진행으로',
            '여러분의 시간을 절약합니다.'
        ]
    },
    {
        img: './images/about_3.svg',
        title: '빠른 강의',
        descs: [
            '군더더기 없는 진행으로',
            '여러분의 시간을 절약합니다.'
        ]
    }
];

const $aboutDiv = document.querySelector('.about');
for(let i = 0; i<aboutCards.length; i++){
    const card = aboutCards[i];

    const $div = document.createElement('div');
    $div.classList.add('about__card');

    const $img = document.createElement('img');
    $img.classList.add('about__icon');
    $img.setAttribute('src', card.img);

    const $h2 = document.createElement('h2');
    $h2.classList.add('about__title')
    $h2.classList.add('_' + (i+1));
    $h2.textContent = card.title;

    const $p = document.createElement('p');
    $p.classList.add('about__text');

    for(const desc of card.descs){
        const $word = document.createElement('div');
        $word.textContent = desc;
        $p.appendChild($word);
    }
    $div.appendChild($img);
    $div.appendChild($h2);
    $div.appendChild($p);

    $aboutDiv.appendChild($div);
}

const $planets = document.querySelectorAll('.planet');
const $planetLabel = document.querySelector('.planet-label');

$planets.forEach(($planet) => {
    // 1. 데스크톱 마우스 오버 시 이름 표시
    $planet.addEventListener('mouseenter', () => {
        $planetLabel.textContent = $planet.dataset.name;
    });

    $planet.addEventListener('mouseleave', () => {
        // 활성화된 행성이 없다면 기본 문구로
        const activePlanet = document.querySelector('.planet.active');
        $planetLabel.textContent = activePlanet ? activePlanet.dataset.name : "행성을 선택하세요";
    });

    // 2. 클릭 이벤트 (모바일 및 데스크톱 공용)
    $planet.addEventListener('click', (e) => {
        const isActive = $planet.classList.contains('active');

        // 모든 행성의 빛남 제거
        $planets.forEach(p => p.classList.remove('active'));

        if (!isActive) {
            // 클릭한 게 비활성 상태였다면 활성화
            $planet.classList.add('active');
            $planetLabel.textContent = $planet.dataset.name;
        } else {
            // 이미 활성 상태였다면 (다시 클릭) 해제
            $planet.classList.remove('active');
            $planetLabel.textContent = "행성을 선택하세요";
        }
        
        e.stopPropagation(); // 바디 클릭 이벤트 전파 방지
    });
});

// 바탕 화면 클릭 시 효과 해제
document.body.addEventListener('click', () => {
    $planets.forEach(p => p.classList.remove('active'));
    $planetLabel.textContent = "행성을 선택하세요";
});

const $contactTabs = document.querySelectorAll('input[name=contact]');
const $contactSlideCon = document.querySelector('.contact__slide-con')

for(let i = 0; i<$contactTabs.length; i++){
    const $tab = $contactTabs[i];
    const marginLeft = [0, '-100%'][i];

    $tab.addEventListener('click', () => {
        $contactSlideCon.style.marginLeft = marginLeft;
    });
}

const $menuBtn = document.querySelector('.header__menu-btn');
const $headerNav = document.querySelector('.header__nav');

$menuBtn.addEventListener('click', (e) => {
    $menuBtn.classList.toggle('on');
    $headerNav.classList.toggle('active');

    e.stopPropagation();
});

document.querySelector('body').addEventListener('click', () => {
    $menuBtn.classList.remove('on');
    $headerNav.classList.remove('active');
});