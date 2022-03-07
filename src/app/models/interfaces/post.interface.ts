export interface PostResponse {
  title: string;
  description: string;
  privatePost: boolean;
  scaledFileUrl: string;
  likes: number;
  liked: boolean;
  userId : string;
  username: string;
  avatar: string;
  originalFileUrl: string;
}
