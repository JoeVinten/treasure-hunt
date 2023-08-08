export const riddles = [
  {
    id: 1,
    riddle: `**Rise high** above the _common man's sight_, where **glass and steel** take their flight. A **giant among the city**, stands _tall and strong_, find me where **I belong**.`,
    question: "How many floors does the **Shard** have?",
    answer: `96`,
    hint: `The big pointy thing!`,
    riddleAnswer: "shard",
    latitude: 51.505192,
    longitude: -0.08782,
  },
  {
    id: 2,
    riddle: `A **feast of senses**, a _merchant's delight_, scents and sounds that **might incite**. Where fresh and old **beautifully unite**, find me in the day or under the _night light_.`,
    question: "Which year was the **Borough Market** officially established?",
    answer: `1756`,
    hint: `Delicious food and drink!`,
    riddleAnswer: "borough",
    latitude: 51.505444,
    longitude: -0.091249,
  },
  {
    id: 3,
    riddle: `**Ironclad** and standing _firm_, on the waters she's **confirmed**. A _warrior_ of battles past, find her between **masts vast**.`,
    question: "In which year was the **HMS Belfast** first launched?",
    answer: `1938`,
    hint: `A big boat!`,
    riddleAnswer: "belfast",
    latitude: 51.506579,
    longitude: -0.081389,
  },
  {
    id: 4,
    riddle: `**Seek now** a place of _prayer and grace_, where ancient and modern **embrace**. Look for the oldest Gothic church in _London's_ city's space.`,
    question:
      "In which year was the current building of **Southwark Cathedral** consecrated?",
    answer: `1897`,
    hint: `A big church!`,
    riddleAnswer: "southwark",
    latitude: 51.506132,
    longitude: -0.090062,
  },
  {
    id: 5,
    riddle: `On to a place where **words take flight**, where tales of old fill the _night_. A bard’s home, full of **wit and spite**, it stands by the river, bathing in the _light_.`,
    question:
      "Which year was the modern reconstruction of the **Globe Theatre** opened to the public?",
    answer: `1997`,
    hint: `To be or not to be`,
    riddleAnswer: "globe",
    latitude: 51.508021,
    longitude: -0.097074,
  },
];

export const cipher = {
  introduction: `You've collected **all** the necessary information. To find the Time Bandit and **save** London, it's time to **decode** their cryptic cipher.`,
  task: `We’re on a quest to find the **nine-letter word** which symbolises _freedom_ and _unorthodoxy_. We can use the answers from our previous parts to beat the **Time Thief**.  
  To solve this we need to add the numbers from each item together and then subtract a specific number outlined here:   

  **Q1: -3. Q2: -10. Q3: -19. Q4: -20, and Q5: -8**  

  So for example question 1 will be 9 + 6 and then -3. This corresponds to the alphabet and will give us the first few letter of our mystery word.  
  For the last part take out **TIME**, and switch out one of the letters.`,
  questionAnswerReminders: `To help you out here are the answers to the questions you answered: 96, 1756, 1938, 1897, 1997`,
  answer: `libertine`,
  answerAlert: `Well done, now head to **The Libertine** and **save** London!`,
};
