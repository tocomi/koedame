const users: Array<any> = [
  {
    name: 'ナオキ',
    image: require('../assets/icon/naoki.jpg'),
  },
  {
    name: '三浦',
    image: require('../assets/icon/miura.jpg'),
  }
]

export function getRandomUser(): any {
  return users[Math.floor(Math.random() * users.length)]
}