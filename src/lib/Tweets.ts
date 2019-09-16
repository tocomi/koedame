const tweets: Array<string> = [
  '草',
  '草不可避',
  '素直に草だｗ',
  'ここで草をひとつまみ',
  '大草原の小さな家',
  'わかりみが深い',
  'わかる',
  '1億いいねした',
  'ほんとこれ',
  '全く同じこと考えてた',
  'こマ？',
  'おっそうだな',
  'そうだよ',
  'やりますねぇ！',
  'は？',
  '深い',
  'やべぇよやべぇよ...',
  'こいつやべえ',
  'マジハンパねぇ',
  '一理ある',
  '涙出てきた',
  'マジ卍',
  'あげぽよ',
  'こいつマジないわ',
  '【朗報】',
  '【悲報】',
  'わろた',
  'クソワロタ',
  'ですよねー',
  'これは興味深い',
  'いとをかし',
  'がんばえー',
  'こいつとはうまい酒が飲めそうだ',
  'ちょっと何言ってるかわからない',
  'こういうこと言えるのマジ尊敬するわ',
  'ちょっと非常識なんじゃないの',
  '((((；ﾟДﾟ))))ｶﾞｸｶﾞｸﾌﾞﾙﾌﾞﾙ',
  '心打たれるなあ',
  '処す？処す？',
  'あながち間違っていないんじゃないか',
  '冗談は顔だけにしてくれよ',
  'なんか芸術的',
  'いつもどおりで安心した',
  'まるで成長していない',
]

export function getRandomTweet(): any {
  return tweets[Math.floor(Math.random() * tweets.length)]
}