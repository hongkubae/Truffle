import React from 'react';
import { Image } from 'react-native';

const vegetable = [
  // 채소
  { name: '가지', amount: 0, unit: '' , img: require('../assets/ingredients/EggplantIcon.png')},
  { name: '고추', amount: 0, unit: '', img:require('../assets/ingredients/PepperIcon.png')},
  { name: '김치', amount: 0, unit: '', img:require('../assets/ingredients/KimchiIcon.png')},
  { name: '깻잎', amount: 0, unit: '' , img:require('../assets/ingredients/SesameIcon.png')},
  { name: '당근', amount: 0, unit: '' , img:require('../assets/ingredients/CarrotIcon.png')},
  { name: '대파', amount: 0, unit: '' , img:require('../assets/ingredients/GreenonionIcon.png')},
  { name: '마늘', amount: 0, unit: '' , img:require('../assets/ingredients/GarlicIcon.png')},
  { name: '무', amount: 0, unit: '', img:require('../assets/ingredients/RadishIcon.png')},
  { name: '배추', amount: 0, unit: '', img:require('../assets/ingredients/NapacabbageIcon.png')},
  { name: '브로콜리', amount: 0, unit: '' , img:require('../assets/ingredients/BroccoliIcon.png')},
  { name: '비트', amount: 0, unit: '' , img:require('../assets/ingredients/BeetIcon.png')},
  { name: '상추', amount: 0, unit: '' , img:require('../assets/ingredients/LettuceIcon.png')},
  { name: '샐러리', amount: 0, unit: '' , img:require('../assets/ingredients/CeleryIcon.png')},
  { name: '시금치', amount: 0, unit: '', img:require('../assets/ingredients/SpinachIcon.png')},
  { name: '아스파라거스', amount: 0, unit: '', img:require('../assets/ingredients/AsparagusIcon.png')},
  { name: '애호박', amount: 0, unit: '' , img:require('../assets/ingredients/SquashIcon.png')},
  { name: '양배추', amount: 0, unit: '' , img:require('../assets/ingredients/CabbageIcon.png')},
  { name: '양송이버섯', amount: 0, unit: '' , img:require('../assets/ingredients/WhiteMushroomIcon.png')},
  { name: '양파', amount: 0, unit: '' , img:require('../assets/ingredients/OnionIcon.png')},
  { name: '열무', amount: 0, unit: '', img:require('../assets/ingredients/YeolmuIcon.png')},
  { name: '오이', amount: 0, unit: '', img:require('../assets/ingredients/CucumberIcon.png')},
  { name: '콩나물', amount: 0, unit: '' , img:require('../assets/ingredients/BeansproutsIcon.png')},
  { name: '토마토', amount: 0, unit: '' , img:require('../assets/ingredients/TomatoIcon.png')},
  { name: '파프리카', amount: 0, unit: '' , img:require('../assets/ingredients/PaprikaIcon.png')},
  { name: '팽이버섯', amount: 0, unit: '' , img:require('../assets/ingredients/EnokiMushroomIcon.png')},
  { name: '표고버섯', amount: 0, unit: '', img:require('../assets/ingredients/ShiitakeMushroomIcon.png')},
  { name: '호박', amount: 0, unit: '', img:require('../assets/ingredients/PumpkinIcon.png')},
  { name: '숙주', amount: 0, unit: '' , img:require('../assets/ingredients/MungBeanSproutsIcon.png')},
]
const bread =[
  // 빵/떡
  { name: '가래떡', amount: 0, unit: '' , img:require('../assets/ingredients/RicecakeIcon.png')},
  { name: '떡국떡', amount: 0, unit: '' , img:require('../assets/ingredients/TteokgukricecakeIcon.png')},
  { name: '떡볶이 떡', amount: 0, unit: '' , img:require('../assets/ingredients/TteokbokkiricecakeIcon.png')},
  { name: '바게트', amount: 0, unit: '', img:require('../assets/ingredients/BaguetteIcon.png')},
  { name: '베이글', amount: 0, unit: '', img:require('../assets/ingredients/BagelIcon.png')},
  { name: '식빵', amount: 0, unit: '' , img:require('../assets/ingredients/BreadIcon.png')},
  { name: '모닝빵', amount: 0, unit: '' , img:require('../assets/ingredients/MorningBreadIcon.png')},
]

const sausage=[
  // 햄/소시지
  { name: '미트볼', amount: 0, unit: '' , img:require('../assets/ingredients/MeatballIcon.png')},
  { name: '베이컨', amount: 0, unit: '' , img:require('../assets/ingredients/BaconIcon.png')},
  { name: '비엔나 소시지', amount: 0, unit: '', img:require('../assets/ingredients/ViennaSausageIcon.png')},
  { name: '소시지', amount: 0, unit: '', img:require('../assets/ingredients/SausageIcon.png')},
  { name: '순대', amount: 0, unit: '' , img:require('../assets/ingredients/SundaeIcon.png')},
  { name: '스팸', amount: 0, unit: '' , img:require('../assets/ingredients/SpamIcon.png')},
  { name: '햄', amount: 0, unit: '' , img:require('../assets/ingredients/HamIcon.png')},
]
const seafood=[
  // 해산물
  { name: '갈치', amount: 0, unit: '' , img:require('../assets/ingredients/CutlassfishIcon.png')},
  { name: '건새우', amount: 0, unit: '', img:require('../assets/ingredients/DriedshrimpIcon.png')},
  { name: '게맛살', amount: 0, unit: '', img:require('../assets/ingredients/CrabmeatIcon.png')},
  { name: '고등어', amount: 0, unit: '' , img:require('../assets/ingredients/MackerelIcon.png')},
  { name: '골뱅이', amount: 0, unit: '' , img:require('../assets/ingredients/WhelkIcon.png')},
  { name: '굴', amount: 0, unit: '' , img:require('../assets/ingredients/OysterIcon.png')},
  { name: '꼬막', amount: 0, unit: '' , img:require('../assets/ingredients/CockleIcon.png')},
  { name: '꽁치', amount: 0, unit: '', img:require('../assets/ingredients/PacificSauryIcon.png')},
  { name: '꽃게', amount: 0, unit: '', img:require('../assets/ingredients/CrabIcon.png')},
  { name: '낙지', amount: 0, unit: '' , img:require('../assets/ingredients/SmallOctopusIcon.png')},
  { name: '다시마', amount: 0, unit: '' , img:require('../assets/ingredients/KelpIcon.png')},
  { name: '대합', amount: 0, unit: '' , img:require('../assets/ingredients/ClamIcon.png')},
  { name: '도다리', amount: 0, unit: '' , img:require('../assets/ingredients/FlounderIcon.png')},
  { name: '동태', amount: 0, unit: '', img:require('../assets/ingredients/FrozenPollackIcon.png')},
  { name: '멸치', amount: 0, unit: '', img:require('../assets/ingredients/AnchovyIcon.png')},
  { name: '명태', amount: 0, unit: '' , img:require('../assets/ingredients/PollockIcon.png')},
  { name: '문어', amount: 0, unit: '' , img:require('../assets/ingredients/OctopusIcon.png')},
  { name: '미역', amount: 0, unit: '' , img:require('../assets/ingredients/SeaweedIcon.png')},
  { name: '바지락', amount: 0, unit: '' , img:require('../assets/ingredients/ClamsIcon.png')},
  { name: '새우', amount: 0, unit: '', img:require('../assets/ingredients/ShrimpIcon.png')},
  { name: '소라', amount: 0, unit: '', img:require('../assets/ingredients/ConchIcon.png')},
  { name: '아귀', amount: 0, unit: '' , img:require('../assets/ingredients/CrotchIcon.png')},
  { name: '어묵', amount: 0, unit: '' , img:require('../assets/ingredients/FishcakeIcon.png')},
  { name: '연어', amount: 0, unit: '' , img:require('../assets/ingredients/SalmonIcon.png')},
  { name: '오징어', amount: 0, unit: '' , img:require('../assets/ingredients/SquidIcon.png')},
  { name: '전복', amount: 0, unit: '', img:require('../assets/ingredients/AbaloneIcon.png')},
  { name: '전어', amount: 0, unit: '', img:require('../assets/ingredients/ShadIcon.png')},
  { name: '조개', amount: 0, unit: '' , img:require('../assets/ingredients/ShellFishIcon.png')},
  { name: '조기', amount: 0, unit: '' , img:require('../assets/ingredients/CroakerIcon.png')},
  { name: '쭈꾸미', amount: 0, unit: '' , img:require('../assets/ingredients/WebfootoctopusIcon.png')},
  { name: '홍합', amount: 0, unit: '' , img:require('../assets/ingredients/MusselIcon.png')},
]

const milk =[
  // 유제품
  { name: '계란', amount: 0, unit: '', img:require('../assets/ingredients/EggIcon.png')},
  { name: '메추리알', amount: 0, unit: '', img:require('../assets/ingredients/QuailEggIcon.png')},
  { name: '모짜렐라 치즈', amount: 0, unit: '' , img:require('../assets/ingredients/MozzarellaIcon.png')},
  { name: '요거트', amount: 0, unit: '' , img:require('../assets/ingredients/YogurtIcon.png')},
  { name: '체다치즈', amount: 0, unit: '' , img:require('../assets/ingredients/CheddarCheeseIcon.png')},

]
const meat=[
  // 고기류
  { name: '닭고기', amount: 0, unit: '', img:require('../assets/ingredients/ChickenIcon.png')},
  { name: '돼지고기', amount: 0, unit: '', img:require('../assets/ingredients/PorkIcon.png')},
  { name: '소고기', amount: 0, unit: '' , img:require('../assets/ingredients/BeefIcon.png')},
  { name: '양고기', amount: 0, unit: '' , img:require('../assets/ingredients/LambIcon.png')},
  { name: '오리고기', amount: 0, unit: '' , img:require('../assets/ingredients/DuckMeatIcon.png')},
]
const fruit=[
  // 과일
  { name: '감', amount: 0, unit: '' , img:require('../assets/ingredients/PersimmonIcon.png')},
  { name: '건포도', amount: 0, unit: '', img:require('../assets/ingredients/RaisinIcon.png')},
  { name: '귤', amount: 0, unit: '', img:require('../assets/ingredients/MandarinIcon.png')},
  { name: '딸기', amount: 0, unit: '' , img:require('../assets/ingredients/StrawberryIcon.png')},
  { name: '라임', amount: 0, unit: '' , img:require('../assets/ingredients/LimeIcon.png')},
  { name: '레몬', amount: 0, unit: '' , img:require('../assets/ingredients/LemonIcon.png')},
  { name: '망고', amount: 0, unit: '', img:require('../assets/ingredients/MangoIcon.png')},
  { name: '메론', amount: 0, unit: '', img:require('../assets/ingredients/MelonIcon.png')},
  { name: '바나나', amount: 0, unit: '' , img:require('../assets/ingredients/BananaIcon.png')},
  { name: '배', amount: 0, unit: '' , img:require('../assets/ingredients/PearIcon.png')},
  { name: '복숭아', amount: 0, unit: '' , img:require('../assets/ingredients/PeachIcon.png')},
  { name: '블루베리', amount: 0, unit: '', img:require('../assets/ingredients/BlueberriesIcon.png')},
  { name: '사과', amount: 0, unit: '', img:require('../assets/ingredients/AppleIcon.png')},
  { name: '수박', amount: 0, unit: '' , img:require('../assets/ingredients/WatermelonIcon.png')},
  { name: '아보카도', amount: 0, unit: '' , img:require('../assets/ingredients/AvocadoIcon.png')},
  { name: '오렌지', amount: 0, unit: '' , img:require('../assets/ingredients/OrangeIcon.png')},
  { name: '자두', amount: 0, unit: '', img:require('../assets/ingredients/PlumIcon.png')},
  { name: '체리', amount: 0, unit: '', img:require('../assets/ingredients/CherryIcon.png')},
  { name: '키위', amount: 0, unit: '' , img:require('../assets/ingredients/KiwiIcon.png')},
  { name: '파인애플', amount: 0, unit: '' , img:require('../assets/ingredients/PineappleIcon.png')},
  { name: '포도', amount: 0, unit: '' , img:require('../assets/ingredients/GrapeIcon.png')},
]
const grain=[
  // 곡물
  { name: '감자', amount: 0, unit: '', img:require('../assets/ingredients/PotatoIcon.png')},
  { name: '고구마', amount: 0, unit: '', img:require('../assets/ingredients/SweetPotatoIcon.png')},
  { name: '귀리', amount: 0, unit: '' , img:require('../assets/ingredients/OatsIcon.png')},
  { name: '누룽지', amount: 0, unit: '' , img:require('../assets/ingredients/NurungjiIcon.png')},
  { name: '밀가루', amount: 0, unit: '' , img:require('../assets/ingredients/FlourIcon.png')},
  { name: '부침가루', amount: 0, unit: '', img:require('../assets/ingredients/PancakePowderIcon.png')},
  { name: '빵가루', amount: 0, unit: '', img:require('../assets/ingredients/BreadcrumbsIcon.png')},
  { name: '옥수수', amount: 0, unit: '' , img:require('../assets/ingredients/CornIcon.png')},
  { name: '찹쌀가루', amount: 0, unit: '' , img:require('../assets/ingredients/GlutinousRicePowderIcon.png')},
  { name: '통밀', amount: 0, unit: '' , img:require('../assets/ingredients/WholeWheatIcon.png')},
]
const bean=[
  // 콩/견과류
  { name: '검은콩', amount: 0, unit: '', img:require('../assets/ingredients/BlackBeansIcon.png')},
  { name: '깨', amount: 0, unit: '', img:require('../assets/ingredients/SesameIcon.png')},
  { name: '두부', amount: 0, unit: '' , img:require('../assets/ingredients/TofuIcon.png')},
  { name: '땅콩', amount: 0, unit: '' , img:require('../assets/ingredients/PeanutIcon.png')},
  { name: '순두부', amount: 0, unit: '' , img:require('../assets/ingredients/SoftTofuIcon.png')},
  { name: '아몬드', amount: 0, unit: '', img:require('../assets/ingredients/AlmondIcon.png')},
  { name: '완두콩', amount: 0, unit: '', img:require('../assets/ingredients/PeaIcon.png')},
  { name: '콩', amount: 0, unit: '' , img:require('../assets/ingredients/BeanIcon.png')},
  { name: '호두', amount: 0, unit: '' , img:require('../assets/ingredients/WalnutIcon.png')},
]
const spice=[
  // 조미료/양념
  { name: '간장', amount: 0, unit: '' , img:require('../assets/ingredients/SoySauceIcon.png')},
  { name: '고추장', amount: 0, unit: '', img:require('../assets/ingredients/ChiliPepperPasteIcon.png')},
  { name: '고춧가루', amount: 0, unit: '', img:require('../assets/ingredients/ChiliPowderIcon.png')},
  { name: '굴소스', amount: 0, unit: '' , img:require('../assets/ingredients/OysterSauceIcon.png')},
  { name: '굵은소금', amount: 0, unit: '' , img:require('../assets/ingredients/CoarseSaltIcon.png')},
  { name: '까나리액젓', amount: 0, unit: '' , img:require('../assets/ingredients/CanaryFishSauceIcon.png')},
  { name: '깨소금', amount: 0, unit: '', img:require('../assets/ingredients/SesameSaltIcon.png')},
  { name: '꿀', amount: 0, unit: '', img:require('../assets/ingredients/HoneyIcon.png')},
  { name: '다진마늘', amount: 0, unit: '' , img:require('../assets/ingredients/ChoppedGarlicIcon.png')},
  { name: '데리야끼 소스', amount: 0, unit: '' , img:require('../assets/ingredients/TeriyakiSauceIcon.png')},
  { name: '돈까스 소스', amount: 0, unit: '' , img:require('../assets/ingredients/TonkatsuSauceIcon.png')},
  { name: '된장', amount: 0, unit: '', img:require('../assets/ingredients/SoybeanPasteIcon.png')},
  { name: '마요네즈', amount: 0, unit: '', img:require('../assets/ingredients/MayonnaiseIcon.png')},
  { name: '머스타드 소스', amount: 0, unit: '' , img:require('../assets/ingredients/MustardIcon.png')},
  { name: '멸치액젓', amount: 0, unit: '' , img:require('../assets/ingredients/AnchovyFishSauceIcon.png')},
  { name: '명란젓갈', amount: 0, unit: '' , img:require('../assets/ingredients/SaltedPollackRoeIcon.png')},
  { name: '물엿', amount: 0, unit: '', img:require('../assets/ingredients/CornSyrupIcon.png')},
  { name: '미원', amount: 0, unit: '', img:require('../assets/ingredients/MiwonIcon.png')},
  { name: '버터', amount: 0, unit: '' , img:require('../assets/ingredients/ButterIcon.png')},
  { name: '설탕', amount: 0, unit: '' , img:require('../assets/ingredients/SugarIcon.png')},
  { name: '소금', amount: 0, unit: '' , img:require('../assets/ingredients/SaltIcon.png')},
  { name: '쇠고기 다시다', amount: 0, unit: '', img:require('../assets/ingredients/BeefSeasoningIcon.png')},
  { name: '식초', amount: 0, unit: '', img:require('../assets/ingredients/VinegarIcon.png')},
  { name: '쌈장', amount: 0, unit: '' , img:require('../assets/ingredients/SsamjangIcon.png')},
  { name: '오징어 젓갈', amount: 0, unit: '' , img:require('../assets/ingredients/SaltedSquidIcon.png')},
  { name: '올리고당', amount: 0, unit: '' , img:require('../assets/ingredients/OligosaccharideIcon.png')},
  { name: '올리브유', amount: 0, unit: '', img:require('../assets/ingredients/OliveOilIcon.png')},
  { name: '짜장가루', amount: 0, unit: '', img:require('../assets/ingredients/JjajangPowderIcon.png')},
  { name: '참기름', amount: 0, unit: '' , img:require('../assets/ingredients/SesameOilIcon.png')},
  { name: '청국정', amount: 0, unit: '' , img:require('../assets/ingredients/CheonggukjangIcon.png')},
  { name: '초고추장', amount: 0, unit: '' , img:require('../assets/ingredients/SuperRedPepperPasteIcon.png')},
  { name: '춘장', amount: 0, unit: '', img:require('../assets/ingredients/ChunjangIcon.png')},
  { name: '칠리소스', amount: 0, unit: '', img:require('../assets/ingredients/ChiliSauceIcon.png')},
  { name: '카레가루', amount: 0, unit: '' , img:require('../assets/ingredients/CurryPowderIcon.png')},
  { name: '케첩', amount: 0, unit: '' , img:require('../assets/ingredients/KetchupIcon.png')},
  { name: '토마토소스', amount: 0, unit: '' , img:require('../assets/ingredients/TomatoSauceIcon.png')},
  { name: '핫소스', amount: 0, unit: '', img:require('../assets/ingredients/HotSauceIcon.png')},
  { name: '후추', amount: 0, unit: '', img:require('../assets/ingredients/PepperIcon.png')},
]
const noodle=[
  // 면
  { name: '당면', amount: 0, unit: '' , img:require('../assets/ingredients/NoodleIcon.png')},
  { name: '라면', amount: 0, unit: '' , img:require('../assets/ingredients/RamenIcon.png')},
  { name: '소면', amount: 0, unit: '' , img:require('../assets/ingredients/PlainNoodlesIcon.png')},
  { name: '수제비', amount: 0, unit: '', img:require('../assets/ingredients/SujebiIcon.png')},
  { name: '스파게티 면', amount: 0, unit: '', img:require('../assets/ingredients/SpaghettiNoodlesIcon.png')},
  { name: '우동면', amount: 0, unit: '' , img:require('../assets/ingredients/UdongNoodlesIcon.png')},
  { name: '칼국수면', amount: 0, unit: '' , img:require('../assets/ingredients/KalguksuNoodlesIcon.png')},
]
const truffle=[
  // 트러플
  { name: '트러플', amount: 0, unit: '' , img:require('../assets/ingredients/TruffleIcon.png')},
  { name: '트러플 소금', amount: 0, unit: '', img:require('../assets/ingredients/TruffleSaltIcon.png')},
  { name: '트로플 오일', amount: 0, unit: '', img:require('../assets/ingredients/TruffleOilIcon.png')},
];
const selected=[
  // 빈어레이
  { name: '배추', amount: 3, unit: 'g' , img:''},
  { name: '가지', amount: 4, unit: '개' , img:''},
];

export { vegetable, bread, fruit, sausage, seafood, truffle, noodle, spice, bean, grain, meat, milk, selected};