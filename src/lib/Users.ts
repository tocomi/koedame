const users: Array<any> = [
  {
    user: 'ナオキ'
  },
  {
    user: '三浦'
  }
]

export function getRandomUser(): any {
  return users[Math.floor(Math.random() * users.length)]
}