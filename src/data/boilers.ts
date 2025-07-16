export interface Boiler {
  id: number;
  name: string;
  description: string;
  price: string;
  features: string[];
  image: string;
  specifications: {
    volume: string;
    power: string;
    efficiency: string;
    dimensions: string;
    weight: string;
    warranty: string;
  };
  benefits: string[];
  installation: string[];
}

export const boilers: Boiler[] = [
  {
    id: 1,
    name: 'Bigger Energy Pro',
    description: 'Высокоэффективный бойлер для больших помещений',
    price: '45 000 ₽',
    features: ['Объем 200л', 'Мощность 3кВт', 'Энергоэффективность A+'],
    image: '/img/ca88c2b6-d55f-4faf-9920-648d6a02d049.jpg',
    specifications: {
      volume: '200 литров',
      power: '3 кВт',
      efficiency: 'A+',
      dimensions: '150 x 60 x 60 см',
      weight: '85 кг',
      warranty: '5 лет'
    },
    benefits: [
      'Экономия электроэнергии до 30%',
      'Быстрый нагрев воды за 45 минут',
      'Антикоррозийное покрытие',
      'Система защиты от перегрева',
      'Цифровое управление температурой'
    ],
    installation: [
      'Профессиональная установка включена',
      'Подключение к электросети 220В',
      'Монтаж крепления на стену',
      'Пуско-наладочные работы',
      'Гарантийное обслуживание'
    ]
  },
  {
    id: 2,
    name: 'Bigger Compact',
    description: 'Компактное решение для квартир',
    price: '28 000 ₽',
    features: ['Объем 100л', 'Мощность 2кВт', 'Компактный дизайн'],
    image: '/img/c5b96907-c688-4d8b-9b81-31849c4d0d13.jpg',
    specifications: {
      volume: '100 литров',
      power: '2 кВт',
      efficiency: 'A',
      dimensions: '120 x 50 x 50 см',
      weight: '45 кг',
      warranty: '3 года'
    },
    benefits: [
      'Идеально для квартир',
      'Компактные размеры',
      'Простая установка',
      'Надежная изоляция',
      'Экономичное потребление'
    ],
    installation: [
      'Быстрая установка за 2 часа',
      'Подключение к стандартной розетке',
      'Настенное крепление',
      'Инструктаж по эксплуатации',
      'Годовое обслуживание'
    ]
  },
  {
    id: 3,
    name: 'Bigger Smart',
    description: 'Умный бойлер с управлением через приложение',
    price: '52 000 ₽',
    features: ['Объем 150л', 'Wi-Fi управление', 'Экономичный режим'],
    image: '/img/20437c07-394f-4029-b0c5-b4c14b96717c.jpg',
    specifications: {
      volume: '150 литров',
      power: '2.5 кВт',
      efficiency: 'A++',
      dimensions: '135 x 55 x 55 см',
      weight: '65 кг',
      warranty: '7 лет'
    },
    benefits: [
      'Умное управление через приложение',
      'Автоматическое поддержание температуры',
      'Статистика потребления',
      'Уведомления на смартфон',
      'Режимы экономии энергии'
    ],
    installation: [
      'Настройка Wi-Fi подключения',
      'Установка мобильного приложения',
      'Профессиональный монтаж',
      'Обучение работе с системой',
      'Расширенная гарантия'
    ]
  }
];