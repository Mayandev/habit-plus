export enum HabitCategory {
  Sports,
  Healthy,
}

export type Category = {
  title: string;
  habits: CategoryItem[];
};

export type CategoryItem = {
  emoji: string;
  text: string;
};
