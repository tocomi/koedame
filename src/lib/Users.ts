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
]

export function getRandomUser(): any {
  return users[Math.floor(Math.random() * users.length)]
}