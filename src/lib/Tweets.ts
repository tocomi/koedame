const tweets: Array<string> = [
  '草',
  '素直に草だｗ',
  'ここで草をひとつまみ',
  '分かりみが深い',
  'わかる',
  '1億いいねした',
  'ほんとこれ',
  'こマ？',
]

export function getRandomTweet(): any {
  return tweets[Math.floor(Math.random() * tweets.length)]
}