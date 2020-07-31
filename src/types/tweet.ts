export default interface Tweet {
  user: string;
  image: object;
  content: string;
  favorite: number;
  share: number;
  reTweet: Tweet;
  self: boolean;
  createdAt: string;
}
