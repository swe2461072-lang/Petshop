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
