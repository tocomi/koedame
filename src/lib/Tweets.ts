const tweets: Array<string> = [
  '草',
  '草不可避',
  '素直に草だｗ',
  'ここで草をひとつまみ',
  '大草原の小さな家',
  '分かりみが深い',
  'わかる',
  '1億いいねした',
  'ほんとこれ',
  '全く同じこと考えてた',
  'こマ？',
  'おっそうだな',
  'そうだよ',
  'やりますねぇ！',
]

export function getRandomTweet(): any {
  return tweets[Math.floor(Math.random() * tweets.length)]
}