export const riddles = [
  {
    id: 1,
    riddle: `**Rise high** above the _common man's sight_, where **glass and steel** take their flight. A **giant among the city**, stands _tall and strong_, find me where **I belong**.`,
    question: "How many floors does the **Shard** have?",
    answer: `96`,
    hint: `The big pointy thing!`,
    latitude: 51.2,
    longitude: -0.5,
  },
  {
    id: 2,
    riddle: `A **feast of senses**, a _merchant's delight_, scents and sounds that **might incite**. Where fresh and old **beautifully unite**, find me in the day or under the _night light_.`,
    question: "Which year was the **Borough Market** officially established?",
    answer: `1756`,
    hint: `Delicious food and drink!`,
    latitude: 51.452984493085374,
    longitude: -0.151909667976197,
  },
  {
    id: 3,
    riddle: `**Ironclad** and standing _firm_, on the waters she's **confirmed**. A _warrior_ of battles past, find her between **masts vast**.`,
    question: "In which year was the **HMS Belfast** first launched?",
    answer: `1938`,
    hint: `A big boat!`,
    latitude: 51.452984493085374,
    longitude: -0.151909667976197,
  },
  {
    id: 4,
    riddle: `**Seek now** a place of _prayer and grace_, where ancient and modern **embrace**. Look for the oldest Gothic church in _London's_ city's space.`,
    question:
      "In which year was the current building of **Southwark Cathedral** consecrated?",
    answer: `1897`,
    hint: `A big church!`,
    latitude: 51.2,
    longitude: -0.5,
  },
  {
    id: 5,
    riddle: `On to a place where **words take flight**, where tales of old fill the _night_. A bard’s home, full of **wit and spite**, it stands by the river, bathing in the _light_.`,
    question:
      "Which year was the modern reconstruction of the **Globe Theatre** opened to the public?",
    answer: `1997`,
    hint: `To be or not to be`,
    latitude: 51.452984493085374,
    longitude: -0.151909667976197,
  },
];

export const cipher = {
  introduction: `You've collected **all** the necessary information. To find the Time Bandit and **save** London, it's time to **decode** their cryptic cipher.`,
  task: `Here are **five** encrypted parts: "**wx**", "**yx**", "**mk**", "**dm**", "**e**". For each part, calculate the **sum of digits** from the corresponding answer. Use this sum to **decode** each part. The first part "**wx**" corresponds to the **first answer**, "**yx**" corresponds to the **second answer**, and so on. After **decoding** each part, **combine** them to get a **single word**.`,
  questionAnswerReminders: `To help you out here are the answers to the questions you answered: 96, 1756, 1938, 1897, 1997`,
  answer: `Libertine`,
  answerAlert: `Well done, now head to **The Libertine** and **save** London!`,
};
