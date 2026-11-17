export const pets = {
  dogs: { icon: "fa-dog", color: "blue", subs: ["food", "treats", "toys", "beds", "gear"] },
  cats: { icon: "fa-cat", color: "pink", subs: ["food", "treats", "litter", "toys", "beds", "gear"] },
  reptiles: { icon: "fa-dragon", color: "mint", subs: ["habitat", "food", "heat", "decor", "care"] },
};

export const subIcons = {
  food: "fa-bowl-food",
  treats: "fa-cookie-bite",
  toys: "fa-baseball",
  beds: "fa-bed",
  gear: "fa-paw",
  litter: "fa-box-open",
  habitat: "fa-house-chimney",
  heat: "fa-temperature-half",
  decor: "fa-star",
  care: "fa-heart",
};

const types = {
  dryFood: { en: "Dry Dog Food", mn: "нохойн хуурай хоол", ko: "강아지 건식 사료" },
  wetFood: { en: "Wet Dog Food", mn: "нохойн нойтон хоол", ko: "강아지 습식 사료" },
  trainTreat: { en: "Training Treats", mn: "сургалтын амттан", ko: "훈련용 간식" },
  dentalChew: { en: "Dental Chews", mn: "шүд цэвэрлэх зажлуур", ko: "덴탈 껌" },
  ropeToy: { en: "Rope Toy", mn: "олсон тоглоом", ko: "로프 장난감" },
  squeakBall: { en: "Squeaky Ball", mn: "дуугардаг бөмбөг", ko: "소리 나는 공" },
  plushToy: { en: "Plush Toy", mn: "зөөлөн тоглоом", ko: "봉제 장난감" },
  cushionBed: { en: "Cushion Dog Bed", mn: "нохойн зөөлөн ор", ko: "강아지 쿠션 침대" },
  cozyBlanket: { en: "Cozy Blanket", mn: "дулаахан хөнжил", ko: "포근한 담요" },
  collar: { en: "Dog Collar", mn: "нохойн хүзүүвч", ko: "강아지 목걸이" },
  leash: { en: "Dog Leash", mn: "нохойн оосор", ko: "강아지 리드줄" },
  harness: { en: "Dog Harness", mn: "нохойн бүс оосор", ko: "강아지 하네스" },

  catDry: { en: "Dry Cat Food", mn: "муурын хуурай хоол", ko: "고양이 건식 사료" },
  catWet: { en: "Wet Cat Food", mn: "муурын нойтон хоол", ko: "고양이 습식 사료" },
  catTreat: { en: "Cat Treats", mn: "муурын амттан", ko: "고양이 간식" },
  clumpLitter: { en: "Clumping Litter", mn: "бөөгнөрдөг элс", ko: "응고형 모래" },
  crystalLitter: { en: "Crystal Litter", mn: "талстан элс", ko: "크리스탈 모래" },
  featherWand: { en: "Feather Wand", mn: "өдтэй саваа", ko: "깃털 낚싯대" },
  mouseToy: { en: "Toy Mouse", mn: "хулганан тоглоом", ko: "쥐 장난감" },
  scratchPost: { en: "Scratching Post", mn: "маажих багана", ko: "스크래칭 포스트" },
  catCave: { en: "Cat Cave", mn: "муурын агуй", ko: "고양이 동굴" },
  catCollar: { en: "Cat Collar", mn: "муурын хүзүүвч", ko: "고양이 목걸이" },

  terrarium: { en: "Terrarium Kit", mn: "терариумын иж бүрдэл", ko: "테라리움 키트" },
  tank: { en: "Glass Tank", mn: "шилэн сав", ko: "유리 사육장" },
  dryCricket: { en: "Dried Crickets", mn: "хатаасан царцаа", ko: "건조 귀뚜라미" },
  mealworms: { en: "Dried Mealworms", mn: "хатаасан хорхой", ko: "건조 밀웜" },
  reptilePellets: { en: "Reptile Pellets", mn: "хэвлээр явагчийн үрлэн хоол", ko: "파충류 펠릿" },
  heatLamp: { en: "Heat Lamp", mn: "дулаацуулах дэнлүү", ko: "히트 램프" },
  uvbLight: { en: "UVB Light", mn: "UVB гэрэл", ko: "UVB 조명" },
  thermometer: { en: "Thermometer", mn: "термометр", ko: "온도계" },
  hideCave: { en: "Hide Cave", mn: "нуугдах агуй", ko: "은신처" },
  plantDecor: { en: "Plant Decor", mn: "чимэглэлийн ургамал", ko: "장식 식물" },
  calcium: { en: "Calcium Powder", mn: "кальцийн нунтаг", ko: "칼슘 파우더" },
  waterDish: { en: "Water Dish", mn: "усны аяга", ko: "물그릇" },
};

const variants = {
  chicken: { en: "Chicken", mn: "тахианы", ko: "치킨" },
  beef: { en: "Beef", mn: "үхрийн", ko: "소고기" },
  salmon: { en: "Salmon", mn: "хулд загасны", ko: "연어" },
  lamb: { en: "Lamb", mn: "хонины", ko: "양고기" },
  tuna: { en: "Tuna", mn: "туна загасны", ko: "참치" },
  duck: { en: "Duck", mn: "нугасны", ko: "오리" },
};

const specs = [
  ["dogs", "food", "dryFood", "chicken", "PawNature", 24.99, 0, 1],
  ["dogs", "food", "dryFood", "beef", "BarkBuddy", 27.99, 15, 0],
  ["dogs", "food", "wetFood", "lamb", "GoldenBowl", 2.99, 0, 0],
  ["dogs", "food", "wetFood", "duck", "PawNature", 3.29, 0, 0],
  ["dogs", "treats", "trainTreat", "chicken", "BarkBuddy", 7.49, 0, 0],
  ["dogs", "treats", "trainTreat", "beef", "HappyTails", 6.99, 20, 0],
  ["dogs", "treats", "dentalChew", null, "GoldenBowl", 11.99, 0, 0],
  ["dogs", "toys", "ropeToy", null, "HappyTails", 9.99, 0, 1],
  ["dogs", "toys", "squeakBall", null, "BarkBuddy", 5.99, 0, 0],
  ["dogs", "toys", "plushToy", null, "HappyTails", 8.49, 10, 0],
  ["dogs", "beds", "cushionBed", null, "ZooComfort", 39.99, 0, 0],
  ["dogs", "beds", "cozyBlanket", null, "ZooComfort", 18.99, 0, 0],
  ["dogs", "gear", "collar", null, "TrailPup", 12.99, 0, 0],
  ["dogs", "gear", "leash", null, "TrailPup", 14.99, 0, 0],
  ["dogs", "gear", "harness", null, "TrailPup", 24.99, 15, 1],

  ["cats", "food", "catDry", "salmon", "WhiskerWorks", 19.99, 0, 1],
  ["cats", "food", "catDry", "chicken", "Purrfect", 17.99, 0, 0],
  ["cats", "food", "catWet", "tuna", "Purrfect", 1.89, 0, 0],
  ["cats", "food", "catWet", "salmon", "WhiskerWorks", 2.09, 10, 0],
  ["cats", "treats", "catTreat", "chicken", "Purrfect", 4.49, 0, 0],
  ["cats", "treats", "catTreat", "tuna", "WhiskerWorks", 4.99, 0, 0],
  ["cats", "litter", "clumpLitter", null, "SoftPaws", 14.99, 0, 1],
  ["cats", "litter", "crystalLitter", null, "SoftPaws", 17.99, 15, 0],
  ["cats", "toys", "featherWand", null, "WhiskerWorks", 6.99, 0, 0],
  ["cats", "toys", "mouseToy", null, "Purrfect", 3.99, 0, 0],
  ["cats", "beds", "scratchPost", null, "ZooComfort", 29.99, 20, 1],
  ["cats", "beds", "catCave", null, "ZooComfort", 29.99, 0, 0],
  ["cats", "gear", "catCollar", null, "TrailPup", 7.99, 0, 0],

  ["reptiles", "habitat", "terrarium", null, "TerraNest", 79.99, 0, 1],
  ["reptiles", "habitat", "tank", null, "TerraNest", 119.99, 0, 0],
  ["reptiles", "food", "dryCricket", null, "ScaleAndTail", 8.99, 0, 0],
  ["reptiles", "food", "mealworms", null, "ScaleAndTail", 7.99, 10, 0],
  ["reptiles", "food", "reptilePellets", null, "ScaleAndTail", 11.99, 0, 0],
  ["reptiles", "heat", "heatLamp", null, "TerraNest", 22.99, 0, 0],
  ["reptiles", "heat", "uvbLight", null, "SunScale", 29.99, 0, 1],
  ["reptiles", "heat", "thermometer", null, "SunScale", 9.99, 0, 0],
  ["reptiles", "decor", "hideCave", null, "TerraNest", 12.99, 0, 0],
  ["reptiles", "decor", "plantDecor", null, "TerraNest", 6.99, 15, 0],
  ["reptiles", "care", "calcium", null, "SunScale", 8.49, 0, 0],
  ["reptiles", "care", "waterDish", null, "TerraNest", 7.99, 0, 0],
];

export const products = specs.map(([pet, sub, type, variant, brand, usd, sale, popular], index) => ({
  id: `p${index + 1}`,
  pet,
  sub,
  type,
  variant,
  brand,
  usd,
  sale,
  popular: Boolean(popular),
}));

export const brands = [...new Set(products.map((product) => product.brand))].sort();

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function getProductName(product, language) {
  const type = types[product.type][language];
  if (!product.variant) return capitalize(type);
  return capitalize(`${variants[product.variant][language]} ${type}`);
}

export function getFinalPrice(product) {
  return product.sale ? product.usd * (1 - product.sale / 100) : product.usd;
}

const typeInfo = {
  dryFood: {
    icon: "fa-bowl-food",
    desc: {
      en: "Crunchy complete meals that keep your dog full of energy.",
      mn: "Нохойг эрч хүчтэй байлгах бүрэн дүүрэн хуурай хоол.",
      ko: "강아지를 활기차게 해주는 영양 만점 바삭한 사료.",
    },
  },
  wetFood: {
    icon: "fa-jar",
    desc: {
      en: "Soft, juicy meals dogs love, great for picky eaters.",
      mn: "Нохойн дуртай зөөлөн, шүүслэг хоол, сонгомол нохойд тохиромжтой.",
      ko: "입맛 까다로운 강아지도 좋아하는 부드럽고 촉촉한 습식 사료.",
    },
  },
  trainTreat: {
    icon: "fa-cookie-bite",
    desc: {
      en: "Tiny tasty bites for rewarding good behavior.",
      mn: "Сайн үйлийг шагнах жижиг амттай амттан.",
      ko: "잘했을 때 칭찬해 주기 좋은 작고 맛있는 간식.",
    },
  },
  dentalChew: {
    icon: "fa-tooth",
    desc: {
      en: "A chewy treat that helps keep teeth clean and breath fresh.",
      mn: "Шүдийг цэвэр, амьсгалыг сэргэг байлгахад тусалдаг зажлуур.",
      ko: "치아를 깨끗하게, 입 냄새를 상쾌하게 도와주는 껌.",
    },
  },
  ropeToy: {
    icon: "fa-bone",
    desc: {
      en: "Tough braided rope for tug games and chewing.",
      mn: "Татаж тоглох, зажлахад зориулсан бат бөх сүлжмэл олс.",
      ko: "줄다리기와 씹기에 좋은 튼튼한 땋은 로프.",
    },
  },
  squeakBall: {
    icon: "fa-baseball",
    desc: {
      en: "A bouncy ball with a squeak that makes fetch more fun.",
      mn: "Дуугардаг үсрэмтгий бөмбөг, шүүрч тоглоход илүү хөгжилтэй.",
      ko: "삑삑 소리로 공 놀이를 더 재미있게 해주는 탱탱볼.",
    },
  },
  plushToy: {
    icon: "fa-heart",
    desc: {
      en: "Soft cuddly toy for gentle play and naps.",
      mn: "Зөөлөн тоглож, унтахад тохиромжтой гэгээн тоглоом.",
      ko: "부드럽게 놀고 낮잠 잘 때 좋은 포근한 인형.",
    },
  },
  cushionBed: {
    icon: "fa-bed",
    desc: {
      en: "A cushy bed with raised edges for deep, cozy sleep.",
      mn: "Захтай зөөлөн ор, тайван унтахад тохиромжтой.",
      ko: "가장자리가 높아 푹 잘 수 있는 푹신한 침대.",
    },
  },
  cozyBlanket: {
    icon: "fa-couch",
    desc: {
      en: "A warm fleece blanket for chilly days.",
      mn: "Хүйтэн өдөрт зориулсан дулаахан хөнжил.",
      ko: "쌀쌀한 날에 좋은 따뜻한 플리스 담요.",
    },
  },
  collar: {
    icon: "fa-ring",
    desc: {
      en: "An adjustable collar with a sturdy buckle.",
      mn: "Тохируулдаг, бат бөх тэврэлттэй хүзүүвч.",
      ko: "길이 조절이 되는 튼튼한 버클 목걸이.",
    },
  },
  leash: {
    icon: "fa-link",
    desc: {
      en: "A strong, comfy leash for daily walks.",
      mn: "Өдөр тутмын алхалтад зориулсан бат бөх, эвтэйхэн оосор.",
      ko: "매일 산책에 좋은 튼튼하고 편한 리드줄.",
    },
  },
  harness: {
    icon: "fa-vest",
    desc: {
      en: "A padded harness that spreads pressure and reduces pulling.",
      mn: "Даралтыг жигд тараадаг, зөөлөн бүс оосор.",
      ko: "압력을 분산시켜 주는 푹신한 하네스.",
    },
  },

  catDry: {
    icon: "fa-bowl-food",
    desc: {
      en: "Crunchy kibble with the protein cats need every day.",
      mn: "Муурт өдөр бүр хэрэгтэй уураг агуулсан хуурай хоол.",
      ko: "매일 필요한 단백질을 담은 바삭한 고양이 사료.",
    },
  },
  catWet: {
    icon: "fa-jar",
    desc: {
      en: "Tender pieces in gravy, full of flavor and moisture.",
      mn: "Амт, чийг ихтэй зөөлөн хэсгүүд бүхий нойтон хоол.",
      ko: "풍미와 수분이 가득한 부드러운 습식 사료.",
    },
  },
  catTreat: {
    icon: "fa-fish",
    desc: {
      en: "Soft, tasty treats cats can't resist.",
      mn: "Муурын дургүй өнгөрөхгүй зөөлөн амттан.",
      ko: "고양이가 거부할 수 없는 부드럽고 맛있는 간식.",
    },
  },
  clumpLitter: {
    icon: "fa-box-open",
    desc: {
      en: "Forms tight clumps for easy scooping and less odor.",
      mn: "Бөөгнөрч, цэвэрлэхэд хялбар, үнэр багатай.",
      ko: "단단히 뭉쳐 치우기 쉽고 냄새가 적어요.",
    },
  },
  crystalLitter: {
    icon: "fa-gem",
    desc: {
      en: "Long-lasting crystals that absorb moisture and lock in smells.",
      mn: "Чийг шингээж, үнэрийг барьдаг урт удаан эдэлгээтэй талст.",
      ko: "수분을 흡수하고 냄새를 잡아주는 오래가는 크리스탈.",
    },
  },
  featherWand: {
    icon: "fa-feather",
    desc: {
      en: "A wand with feathers that wakes up your cat's inner hunter.",
      mn: "Муурын агнах авьяасыг сэрээх өдтэй саваа.",
      ko: "고양이의 사냥 본능을 깨우는 깃털 낚싯대.",
    },
  },
  mouseToy: {
    icon: "fa-cheese",
    desc: {
      en: "A little mouse for batting, chasing and pouncing.",
      mn: "Тоглож, хөөж, мөлхөх жижиг хулганан тоглоом.",
      ko: "굴리고 쫓고 덮치며 노는 작은 쥐 장난감.",
    },
  },
  scratchPost: {
    icon: "fa-tree",
    desc: {
      en: "A tall sisal post that saves your furniture.",
      mn: "Тавилгыг хамгаалдаг өндөр сизал багана.",
      ko: "가구를 지켜주는 높은 사이잘 스크래처.",
    },
  },
  catCave: {
    icon: "fa-igloo",
    desc: {
      en: "A snug hideaway for naps and quiet time.",
      mn: "Нойрмоглож, тайван байхад зориулсан дулаахан нуух газар.",
      ko: "낮잠과 휴식을 위한 아늑한 은신처.",
    },
  },
  catCollar: {
    icon: "fa-bell",
    desc: {
      en: "A light collar with a safety clasp and a bell.",
      mn: "Аюулгүй тэврэлттэй, хонхтой хөнгөн хүзүүвч.",
      ko: "안전 버클과 방울이 달린 가벼운 목걸이.",
    },
  },

  terrarium: {
    icon: "fa-leaf",
    desc: {
      en: "Everything to start: tank, lid, substrate and lighting.",
      mn: "Сав, таг, шороо, гэрэл зэрэг эхлэхэд хэрэгтэй бүх зүйл.",
      ko: "사육장, 뚜껑, 바닥재, 조명까지 시작에 필요한 모든 것.",
    },
  },
  tank: {
    icon: "fa-cube",
    desc: {
      en: "A clear glass tank with a secure, ventilated lid.",
      mn: "Агааржуулалттай найдвартай тагтай тунгалаг шилэн сав.",
      ko: "환기되는 안전한 뚜껑이 있는 투명 유리 사육장.",
    },
  },
  dryCricket: {
    icon: "fa-bug",
    desc: {
      en: "Protein-rich crunchy snack for lizards and more.",
      mn: "Гүрвэл зэрэгт зориулсан уураг ихтэй хатуу хоол.",
      ko: "도마뱀 등을 위한 단백질 가득 바삭한 간식.",
    },
  },
  mealworms: {
    icon: "fa-worm",
    desc: {
      en: "Easy, no-mess protein your reptile will love.",
      mn: "Хэвлээр явагчийн дуртай, бохирдолгүй уурагт хоол.",
      ko: "지저분하지 않고 파충류가 좋아하는 단백질 간식.",
    },
  },
  reptilePellets: {
    icon: "fa-bowl-food",
    desc: {
      en: "Balanced daily pellets with vitamins and minerals.",
      mn: "Витамин, эрдэс бүхий тэнцвэртэй өдөр тутмын үрлэн хоол.",
      ko: "비타민과 미네랄이 균형 잡힌 매일 펠릿.",
    },
  },
  heatLamp: {
    icon: "fa-lightbulb",
    desc: {
      en: "A warm basking light that keeps the habitat cozy.",
      mn: "Байрыг дулаан байлгадаг наранд хэвтэх дэнлүү.",
      ko: "서식지를 따뜻하게 해주는 일광욕 램프.",
    },
  },
  uvbLight: {
    icon: "fa-sun",
    desc: {
      en: "UVB light helps your reptile stay strong and healthy.",
      mn: "UVB гэрэл нь хэвлээр явагчийг эрүүл, хүчтэй байлгана.",
      ko: "UVB 조명이 파충류의 건강을 지켜줘요.",
    },
  },
  thermometer: {
    icon: "fa-temperature-half",
    desc: {
      en: "Check the habitat's temperature at a glance.",
      mn: "Байрны температурыг нэг харахад мэдэх термометр.",
      ko: "사육장 온도를 한눈에 확인해요.",
    },
  },
  hideCave: {
    icon: "fa-mountain",
    desc: {
      en: "A shady hideout where shy reptiles feel safe.",
      mn: "Ичимтгий амьтан аюулгүй мэдрэх сүүдэртэй нуугдах газар.",
      ko: "소심한 파충류가 안심하는 그늘진 은신처.",
    },
  },
  plantDecor: {
    icon: "fa-seedling",
    desc: {
      en: "Soft plastic plants that make the tank look lively.",
      mn: "Савыг амьд харагдуулдаг зөөлөн хуванцар ургамал.",
      ko: "사육장을 생기 있게 꾸며주는 부드러운 인조 식물.",
    },
  },
  calcium: {
    icon: "fa-bottle-droplet",
    desc: {
      en: "Calcium powder for strong bones and healthy growth.",
      mn: "Яс бэхжүүлж, эрүүл өсөлтөд тусалдаг кальцийн нунтаг.",
      ko: "튼튼한 뼈와 건강한 성장을 위한 칼슘.",
    },
  },
  waterDish: {
    icon: "fa-droplet",
    desc: {
      en: "A sturdy dish for fresh drinking and soaking water.",
      mn: "Цэвэр ус ууж, шимэгдэхэд зориулсан бат бөх аяга.",
      ko: "신선한 물을 마시고 몸을 담글 수 있는 튼튼한 그릇.",
    },
  },
};

export const variantIcons = {
  chicken: "fa-drumstick-bite",
  beef: "fa-cow",
  salmon: "fa-fish",
  lamb: "fa-cloud",
  tuna: "fa-fish",
  duck: "fa-feather",
};

export function getProductDescription(product, language) {
  return typeInfo[product.type].desc[language];
}

export function getProductIcon(product) {
  return typeInfo[product.type].icon;
}

export function getProductImage(product) {
  const name = getProductName(product, "en");
  return encodeURI(`./img/${product.pet}/${name}.jpg`);
}
