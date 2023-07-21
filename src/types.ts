type User = {
  name: string;
  avatar: string;
};

export type Notification = {
  user: User;
  dated: string;
  read?: boolean;
  //type: "react" | "follow" | "join" | "send" | "comment" | "left";
} & (
  | {
      type: "react";
      post: string;
    }
  | { type: "follow" }
  | { type: "join" | "left"; group: string }
  | { type: "send"; message: string }
  | { type: "comment"; image: string }
);
