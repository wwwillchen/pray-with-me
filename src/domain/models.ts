export type UtcDate = string & { __brandedUtcDate: true };

export type UserId = string & { __brandedUserId: true };

export interface User {
  userId: UserId;
  prayers: PrayerMap;
  friends: UserSet;
}

export interface PrayerMap {
  [index: string]: Prayer;
}

export type PrayerId = string & { __brandedPrayerId: true };

export interface Prayer {
  prayerId: PrayerId;
  createdAt: UtcDate;
  editedAt: UtcDate;
  author: UserId;
  target: UserSet;
  members: UserSet; // author and target should be included in members
  comments: CommentMap;
  text: string;
  prayerCount: number;
}

export interface UserSet {
  [index: string]: boolean;
}

export type CommentId = string & { __brandedUserId: true };

export interface CommentMap {
  [index: string]: Comment;
}

export interface Comment {
  commentId: CommentId;
  createdAt: UtcDate;
  editedAt: UtcDate;
  author: UserId;
  text: string;
}
