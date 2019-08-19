const users: Array<any> = [
  {
    name: 'ナオキ',
    image: require('../assets/icon/naoki.jpg'),
  },
  {
    name: '三浦',
    image: require('../assets/icon/miura.jpg'),
  },
  {
    name: '織田信長',
    image: require('../assets/icon/nobunaga.jpg'),
  },
  {
    name: 'アメンホテプ4世',
    image: require('../assets/icon/amenhotep.jpg'),
  },
  {
    name: 'ナポレオン',
    image: require('../assets/icon/napoleon.jpg'),
  },
  {
    name: 'マルクス・アウレリウス・アントニヌス',
    image: require('../assets/icon/antoninus.jpg'),
  },
  {
    name: 'バッハ',
    image: require('../assets/icon/bach.jpg'),
  },
  {
    name: '豊臣秀吉',
    image: require('../assets/icon/hideyoshi.jpg'),
  },
  {
    name: '卑弥呼',
    image: require('../assets/icon/himiko.jpg'),
  },
  {
    name: '伊能忠敬',
    image: require('../assets/icon/inou.jpg'),
  },
  {
    name: '正岡子規',
    image: require('../assets/icon/masaoka.jpg'),
  },
  {
    name: 'モーツァルト',
    image: require('../assets/icon/mozart.jpg'),
  },
  {
    name: '千利休',
    image: require('../assets/icon/rikyu.jpg'),
  },
  {
    name: '武田信玄',
    image: require('../assets/icon/shingen.jpg'),
  },
  {
    name: 'フランシスコ・ザビエル',
    image: require('../assets/icon/xavier.jpg'),
  },
  {
    name: '与謝野晶子',
    image: require('../assets/icon/yosano.jpg'),
  },
  {
    name: '福沢諭吉',
    image: require('../assets/icon/yukichi.jpg'),
  },
]

export function getRandomUser(): any {
  return users[Math.floor(Math.random() * users.length)]
}