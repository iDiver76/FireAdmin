import { Observable } from 'rxjs';

export interface Post {
  id?: string,
  lang: string,
  title: string,
  slug: string,
  date: number, // timestamp
  image?: File|string|Observable<string>|{ path: string|any, url: string|Observable<string> },
  content: string,
  status: PostStatus,
  categories: string[],
  createdAt?: number,
  updatedAt?: number,
  createdBy?: string,
  author?: string|Observable<string>,
  updatedBy?: string,
  translations?: PostTranslation,
  isTranslatable?: boolean
}

export enum PostStatus {
  Draft = 'draft',
  Published = 'published',
  Trash = 'trash'
}

export interface PostTranslation {
  [key: string]: string // key == lang, value == post id
}
