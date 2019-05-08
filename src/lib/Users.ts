const users: Array<any> = [
  {
    user: 'ナオキ',
    image: '../assets/icon/naoki.jpg',
  },
  {
    user: '三浦',
    image: '../assets/icon/miura.jpg',
  }
]

export function getRandomUser(): any {
  return users[Math.floor(Math.random() * users.length)]
}