import { CategoryTextMap } from './text';
import { Category, HabitCategory } from './types';

const HeathyHabitCategory: Category = {
  title: CategoryTextMap[HabitCategory.Healthy],
  habits: [
    { text: 'θ·ζ­₯', emoji: 'πββοΈ' },
    { text: 'ε₯θ΅°', emoji: 'πΆββ' },
    { text: 'ε₯θΊ«', emoji: 'ποΈ' },
    { text: 'ηδΌ½', emoji: 'π§ββοΈ' },
    { text: 'ιͺθ½¦', emoji: 'π΄' },
    { text: 'ζΈΈζ³³', emoji: 'π' },
    { text: 'εζ°΄', emoji: 'π₯' },
    { text: 'ζ©η‘', emoji: 'π' },
    { text: 'ζ©θ΅·', emoji: 'β°' },
  ],
};

export const HabitCategoryArray = [HeathyHabitCategory];

export const Unit = ['ζ¬‘', 'ει', 'ε¬ι', 'η±³', 'ζ―«ε', 'ε', 'ε¬ζ€', 'ζ€'];
