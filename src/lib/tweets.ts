const tweets: string[] = [
  '草',
  '草不可避',
  'わかりみが深い',
  'わかる',
  '1億いいねした',
  'ほんとこれ',
  '全く同じこと考えてた',
  'そうだよ',
  'は？',
  '深い',
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
  'いつもどおりで安心した',
  'まるで成長していない',
  'やばいよやばいよ～',
  'え、待って。ヤバいんだけど。',
  'あげみざわ',
  'どんだけ～',
  'たかまる〜',
  '脳味噌腐ってんじゃねえの',
  'そんなことよりサメの話しようぜ',
  '神ってる',
  '地獄の業火に焼かれて死んでほしい',
  '世界はそれを愛と呼ぶんだぜ',
  'ぴえん🥺',
];

export function getRandomTweet(): string {
  return tweets[Math.floor(Math.random() * tweets.length)];
}
