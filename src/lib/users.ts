interface User {
  name: string;
  image: any;
}

const users: User[] = [
  { name: '織田信長', image: require('../assets/icon/nobunaga.jpg') },
  { name: 'アメンホテプ4世', image: require('../assets/icon/amenhotep.jpg') },
  { name: 'ナポレオン', image: require('../assets/icon/napoleon.jpg') },
  {
    name: 'マルクス・アウレリウス・アントニヌス',
    image: require('../assets/icon/antoninus.jpg'),
  },
  { name: 'バッハ', image: require('../assets/icon/bach.jpg') },
  { name: '豊臣秀吉', image: require('../assets/icon/hideyoshi.jpg') },
  { name: '卑弥呼', image: require('../assets/icon/himiko.jpg') },
  { name: '伊能忠敬', image: require('../assets/icon/inou.jpg') },
  { name: '正岡子規', image: require('../assets/icon/masaoka.jpg') },
  { name: 'モーツァルト', image: require('../assets/icon/mozart.jpg') },
  { name: '千利休', image: require('../assets/icon/rikyu.jpg') },
  { name: '武田信玄', image: require('../assets/icon/shingen.jpg') },
  {
    name: 'フランシスコ・ザビエル',
    image: require('../assets/icon/xavier.jpg'),
  },
  { name: '与謝野晶子', image: require('../assets/icon/yosano.jpg') },
  { name: '福沢諭吉', image: require('../assets/icon/yukichi.jpg') },
  { name: '徳川家康', image: require('../assets/icon/ieyasu.jpg') },
  { name: '犬養毅', image: require('../assets/icon/inukai.jpg') },
  { name: '井伊直弼', image: require('../assets/icon/naosuke.jpg') },
  { name: 'マッカーサー', image: require('../assets/icon/macarthur.jpg') },
  { name: '西郷隆盛', image: require('../assets/icon/saigo.jpg') },
  { name: '坂本龍馬', image: require('../assets/icon/ryoma.jpg') },
  { name: '大久保利通', image: require('../assets/icon/toshimichi.jpg') },
  { name: '聖徳太子', image: require('../assets/icon/shotokutaishi.jpg') },
  { name: '松尾芭蕉', image: require('../assets/icon/basho.jpg') },
  { name: '鑑真', image: require('../assets/icon/ganjin.jpg') },
  { name: '夏目漱石', image: require('../assets/icon/soseki.jpg') },
  { name: '野口英世', image: require('../assets/icon/hideyo.jpg') },
  { name: '新渡戸稲造', image: require('../assets/icon/inazo.jpg') },
  { name: '樋口一葉', image: require('../assets/icon/ichiyo.jpg') },
  { name: '平塚らいてう', image: require('../assets/icon/raicho.jpg') },
  { name: '二葉亭四迷', image: require('../assets/icon/futabatei.jpg') },
  { name: '明智光秀', image: require('../assets/icon/akechi.jpg') },
  { name: '沖田総司', image: require('../assets/icon/okita.jpg') },
  { name: '近藤勇', image: require('../assets/icon/isami.jpg') },
  { name: '伊藤博文', image: require('../assets/icon/hirobumi.jpg') },
  { name: '芥川龍之介', image: require('../assets/icon/akutagawa.jpg') },
  { name: '島崎藤村', image: require('../assets/icon/toson.jpg') },
];

export function getRandomUser(): User {
  return users[Math.floor(Math.random() * users.length)];
}
