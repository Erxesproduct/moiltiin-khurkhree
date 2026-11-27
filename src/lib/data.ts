export const resort = {
  name: "Мойлтын хүрхрээ",
  tagline: "Байгальд ойрхон, өөртөө илүү ойрхон.",
  location:
    "Налайх дүүрэг 1-р хороо, Тэрэлжийн гүүрний зүүн эрэг (гүүр гарахгүй баруун эргээд голын эрэг дээр модон дунд)",
  phones: ["8867-6600", "9592-6600"],
  phone: "+976 8867 6600",
  whatsapp: "https://wa.me/97688676600",
  viber: "viber://add?number=97688676600",
  messenger: "https://m.me/MoiltiinKhurhree",
  email: "moiltiinhurhree@gmail.com",
  facebook: "https://www.facebook.com/MoiltiinKhurhree",
  instagram: "https://www.instagram.com/moiltiinkhurhree/",
  maps: "https://maps.app.goo.gl/JC3tGB1fFzvNyZUA6",
  capacity: "300 хүн хүртэлх (хүлээн авалтын заал)",
  description:
    "Мойлтын хүрхрээ амралтын газар нь Тэрэлжийн гүүрний наагуур Мойлтын тохой амралтаар салаад, голын эрэг дээр, модон дунд байрладаг. Хамт олноороо, найз нөхдөөрөө болон гэр бүлээрээ амрахад тухтай орон зай.",
};

export const amenities = [
  { title: "Ресторан", icon: "UtensilsCrossed" },
  { title: "Сагсан бөмбөгийн талбай", icon: "CircleDot" },
  { title: "Гар бөмбөгийн талбай", icon: "Volleyball" },
  { title: "Ил зогсоол", icon: "Car" },
  { title: "Хүүхдийн тоглоомын талбай", icon: "Baby" },
];

export const additionalServices = [
  "Морь, тэмээ унуулах (захиалгат)",
  "Зун: Завиар явуулах үйлчилгээ",
  "Өвөл: Нохой чарга",
];

export const eventPackages = [
  "Хонхны баяр",
  "Дурсамж уулзалт",
  "Байгууллагын хүлээн авалт",
  "Энгийн багц",
];

export type Accommodation = {
  slug: string;
  name: string;
  image: string;
  guests: string;
  beds: string;
  area: string;
  price: string;
  description: string;
  amenities: string[];
};

export const accommodations: Accommodation[] = [
  {
    slug: "ger",
    name: "Гэр",
    image: "/images/ger.jpg",
    guests: "8 зочин",
    beds: "8 нарийн ор",
    area: "40 м²",
    price: "$58",
    description:
      "8 ханатай монгол гэр. 8 нарийн ортой, хамт олноороо амрахад тохиромжтой.",
    amenities: ["Монгол гэр", "Хамт олон", "Байгалийн орчин"],
  },
  {
    slug: "ger-1",
    name: "Гэр 1",
    image: "/images/ger1.jpg",
    guests: "5 зочин",
    beds: "5 нарийн ор",
    area: "16 м²",
    price: "$35",
    description: "5 нарийн ортой гэр. Гэр бүлээрээ амрахад тухтай.",
    amenities: ["Монгол гэр", "Гэр бүл"],
  },
  {
    slug: "summer-house",
    name: "Зуны Байшин",
    image: "/images/summer-house.jpg",
    guests: "4 зочин",
    beds: "2 өргөн ор",
    area: "20 м²",
    price: "$35",
    description:
      "Зуны байшин нь 2 өргөн ортой. Дотороо боловсон ариун цэврийн өрөөтэй.",
    amenities: ["Ариун цэврийн өрөө", "Зуны амралт"],
  },
  {
    slug: "half-lux",
    name: "Хагас Люкс Өрөө",
    image: "/images/half-lux.jpg",
    guests: "4 зочин",
    beds: "4 нарийн ор",
    area: "20 м²",
    price: "$52",
    description:
      "Давхар ортой хагас люкс өрөө. Дотроо шүршүүр, ариун цэврийн өрөө, хөргөгч, зурагттай.",
    amenities: ["Шүршүүр", "Хөргөгч", "Зурагт"],
  },
  {
    slug: "lux",
    name: "Люкс Өрөө",
    image: "/images/lux.jpg",
    guests: "4 зочин",
    beds: "2 өргөн ор",
    area: "20 м²",
    price: "$73",
    description:
      "Давхар ортой люкс өрөө. Дотроо шүршүүр, ариун цэврийн өрөө, хөргөгч, зурагттай.",
    amenities: ["Люкс", "Шүршүүр", "Хөргөгч", "Зурагт"],
  },
  {
    slug: "standard",
    name: "Энгийн Өрөө",
    image: "/images/standard.jpg",
    guests: "2 зочин",
    beds: "2 нарийн ор",
    area: "20 м²",
    price: "$43",
    description:
      "Энгийн өрөө нь 2 нарийн ортой. Дотороо шүршүүр болон ариун цэврийн өрөөтэй.",
    amenities: ["Шүршүүр", "Ариун цэврийн өрөө"],
  },
  {
    slug: "riverside-109",
    name: "Голын эргийн 109",
    image: "/images/view2.jpg",
    guests: "18 зочин",
    beds: "7 + 1 + 10 ор",
    area: "2 давхар",
    price: "Үнэ лавлах",
    description:
      "2 давхар, 3 унтлагын өрөөтэй (7, 1, 10 ор). 1-р давхарт проектор, яригч суурьлагдсан том заалтай — хурлын заал болгон ашиглаж болно. Хамт олонд тохиромжтой.",
    amenities: ["Хурлын заал", "Проектор", "Яригч", "Голын эрэг"],
  },
  {
    slug: "riverside-106",
    name: "Голын эргийн 106",
    image: "/images/view1.jpg",
    guests: "Хүчин чадал лавлах",
    beds: "Тодорхойгүй",
    area: "Голын эрэг",
    price: "Үнэ лавлах",
    description:
      "Голын эрэг дээрх байшин. Дэлгэрэнгүй мэдээллийг утсаар лавлана уу.",
    amenities: ["Голын эрэг", "Байгалийн орчин"],
  },
];

export const experiences = [
  { title: "Байгалийн сайханд алхах", image: "/images/view1.jpg" },
  { title: "Голын эрэгт амрах", image: "/images/view2.jpg" },
  { title: "Гэр бүлээрээ цаг өнгөрүүлэх", image: "/images/intro.jpg" },
  { title: "Найзуудтайгаа амрах", image: "/images/hero.jpg" },
  { title: "Амтат хоол зооглох", image: "/images/intro.jpg" },
  { title: "Спорт, чөлөөт цаг", image: "/images/view1.jpg" },
];

export const seasons = [
  {
    key: "spring",
    label: "Хавар",
    title: "Сэргэлтийн улирал",
    description:
      "Байгаль сэргэж, модод ногоорч, голын ус тунгалаг болох үе. Амралтын газрын эргэн тойрон амьдралын эрчим нэмэгдэнэ.",
    image: "/images/view1.jpg",
    accent: "#879776",
  },
  {
    key: "summer",
    label: "Зун",
    title: "Нарны улирал",
    description:
      "Нарны зөөлөн туяа, голын эрэг дээрх тайван амралт. Гэр бүл, найз нөхөдтэйгээ дурсамж бүтээх хамгийн тохиромжтой үе.",
    image: "/images/hero.jpg",
    accent: "#A68769",
  },
  {
    key: "autumn",
    label: "Намар",
    title: "Алтан намар",
    description:
      "Модод алтан өнгөөр будагдаж, тайван, дулаахан уур амьсгал. Зургийн цомогт үлдэх үзэсгэлэнт өнгө.",
    image: "/images/intro.jpg",
    accent: "#A68769",
  },
  {
    key: "winter",
    label: "Өвөл",
    title: "Цасан улирал",
    description:
      "Цасан бүрхүүл, тайван төв, дулаахан орчин. Өвлийн байгалийн сайхныг мэдрэх өвөрмөц туршлага.",
    image: "/images/view2.jpg",
    accent: "#243D32",
  },
];

export const escapeTypes = [
  {
    key: "family",
    label: "Гэр бүлээрээ",
    description: "Хүүхэд, эцэг эх хамтдаа амрах орон зай.",
    icon: "Users",
    image: "/images/ger.jpg",
    recommend: ["ger", "ger-1", "summer-house"],
  },
  {
    key: "friends",
    label: "Найзуудтайгаа",
    description: "Хамт олноороо цаг өнгөрүүлэх тухтай орчин.",
    icon: "UsersRound",
    image: "/images/ger.jpg",
    recommend: ["ger", "half-lux"],
  },
  {
    key: "couple",
    label: "Хосоороо",
    description: "Хоёр биеийн тайван, дотно амралт.",
    icon: "Heart",
    image: "/images/lux.jpg",
    recommend: ["lux", "half-lux"],
  },
  {
    key: "team",
    label: "Хамт олноороо",
    description: "Байгууллагын амралт, арга хэмжээ зохион байгуулахад тохиромжтой.",
    icon: "Briefcase",
    image: "/images/standard.jpg",
    recommend: ["ger", "standard"],
  },
];

export const galleryImages = [
  "/images/hero.jpg",
  "/images/intro.jpg",
  "/images/view1.jpg",
  "/images/view2.jpg",
  "/images/ger.jpg",
  "/images/ger1.jpg",
  "/images/summer-house.jpg",
  "/images/half-lux.jpg",
  "/images/lux.jpg",
  "/images/standard.jpg",
];