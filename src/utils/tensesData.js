// src/data/tensesData.js

const today = new Date();

const dynamicDate = {
  day: today.toLocaleDateString("en-US", { weekday: "long" }),
  fullDate: today.toISOString().split("T")[0],
  month: today.toLocaleDateString("en-US", { month: "long" }),
  year: today.getFullYear(),
};

const tensesData = {
  "Day-1": {
    date: dynamicDate,

    tenses: [
      {
        id: 1,
        title: "PRESENT",
        color: "bg-red-600",
        textColor: "text-red-600",

        items: [
          {
            name: "Simple",
            example: "I work every day.",
          },

          {
            name: "Continuous",
            example: "I am working now.",
          },

          {
            name: "Perfect",
            example: "I have completed my task.",
          },

          {
            name: "Perfect Continuous",
            example: "I have been learning React for 2 hours.",
          },
        ],
      },

      {
        id: 2,
        title: "PAST",
        color: "bg-green-600",
        textColor: "text-green-600",

        items: [
          {
            name: "Simple",
            example: "I worked yesterday.",
          },

          {
            name: "Continuous",
            example: "I was studying at night.",
          },

          {
            name: "Perfect",
            example: "I had finished the assignment.",
          },

          {
            name: "Perfect Continuous",
            example: "I had been practicing coding for weeks.",
          },
        ],
      },

      {
        id: 3,
        title: "FUTURE",
        color: "bg-blue-600",
        textColor: "text-blue-600",

        items: [
          {
            name: "Simple",
            example: "I will attend the meeting.",
          },

          {
            name: "Continuous",
            example: "I will be working tomorrow morning.",
          },

          {
            name: "Perfect",
            example: "I will have completed the course.",
          },

          {
            name: "Perfect Continuous",
            example: "I will have been learning English for 1 year.",
          },
        ],
      },
    ],
  },

  "Day-2": {
    date: dynamicDate,

    tenses: [
      {
        id: 1,
        title: "PRESENT",
        color: "bg-red-600",
        textColor: "text-red-600",

        items: [
          {
            name: "Simple",
            example: "She reads books daily.",
          },

          {
            name: "Continuous",
            example: "She is reading now.",
          },

          {
            name: "Perfect",
            example: "She has finished her homework.",
          },

          {
            name: "Perfect Continuous",
            example: "She has been practicing English for 3 months.",
          },
        ],
      },

      {
        id: 2,
        title: "PAST",
        color: "bg-green-600",
        textColor: "text-green-600",

        items: [
          {
            name: "Simple",
            example: "She visited Chennai yesterday.",
          },

          {
            name: "Continuous",
            example: "She was cooking dinner.",
          },

          {
            name: "Perfect",
            example: "She had completed the project.",
          },

          {
            name: "Perfect Continuous",
            example: "She had been studying for hours.",
          },
        ],
      },

      {
        id: 3,
        title: "FUTURE",
        color: "bg-blue-600",
        textColor: "text-blue-600",

        items: [
          {
            name: "Simple",
            example: "She will join the class tomorrow.",
          },

          {
            name: "Continuous",
            example: "She will be traveling next week.",
          },

          {
            name: "Perfect",
            example: "She will have finished the exam.",
          },

          {
            name: "Perfect Continuous",
            example: "She will have been working here for 2 years.",
          },
        ],
      },
    ],
  },
  "Day-3": {
    date: dynamicDate,
    tenses: [
      {
        id: 1,
        title: "PRESENT",
        color: "bg-red-600",
        textColor: "text-red-600",
        items: [
          {
            name: "Simple",
            example: "She is reading a book.",
          },

          {
            name: "Continuous",
            example: "She is reading now.",
          },

          {
            name: "Perfect",
            example: "She has finished her homework.",
          },

          {
            name: "Perfect Continuous",
            example: "She has been studying for hours.",
          },
        ],
      },

      {
        id: 2,
        title: "PAST",
        color: "bg-green-600",
        textColor: "text-green-600",
        items: [
          {
            name: "Simple",
            example: "She visited Chennai yesterday.",
          },

          {
            name: "Continuous",
            example: "She was cooking dinner.",
          },

          {
            name: "Perfect",
            example: "She had completed the project.",
          },

          {
            name: "Perfect Continuous",
            example: "She had been studying for hours.",
          },
        ],
      },

      {
        id: 3,
        title: "FUTURE",
        color: "bg-blue-600",
        textColor: "text-blue-600",
        items: [
          {
            name: "Simple",
            example: "She will join the class tomorrow.",
          },

          {
            name: "Continuous",
            example: "She will be traveling next week.",
          },

          {
            name: "Perfect",
            example: "She will have finished the exam.",
          },

          {
            name: "Perfect Continuous",
            example: "She will have been working here for 2 years.",
          },
        ],
      },
    ],
  },
  "Day-4": {
    date: dynamicDate,
    tenses: [
      {
        id: 1,
        title: "PRESENT",
        color: "bg-red-600",
        textColor: "text-red-600",
        items: [
          {
            name: "Simple",
            example: "We dance together.",
          },

          {
            name: "Continuous",
            example: "We are dancing now.",
          },

          {
            name: "Perfect",
            example: "We have finished our task.",
          },

          {
            name: "Perfect Continuous",
            example: "We have been learning for 2 months.",
          },
        ],
      },

      {
        id: 2,
        title: "PAST",
        color: "bg-green-600",
        textColor: "text-green-600",
        items: [
          {
            name: "Simple",
            example: "We danced yesterday.",
          },
          {
            name: "Continuous",
            example: "We were dancing.",
          },
          {
            name: "Perfect",
            example: "We had finished our task.",
          },
          {
            name: "Perfect Continuous",
            example: "We had been learning for 2 months.",
          },
        ],
      },
      {
        id: 3,
        title: "FUTURE",
        color: "bg-blue-600",
        textColor: "text-blue-600",
        items: [
          {
            name: "Simple",
            example: "We will dance tomorrow.",
          },
          {
            name: "Continuous",
            example: "We will be dancing next week.",
          },
          {
            name: "Perfect",
            example: "We will have finished our task.",
          },
          {
            name: "Perfect Continuous",
            example: "We will have been learning for 2 months.",
          },
        ],
      },
    ],
  },

  "Day-5": {
    date: dynamicDate,
    tenses: [
      {
        id: 1,
        title: "PRESENT",
        color: "bg-red-600",
        textColor: "text-red-600",
        items: [
          {
            name: "Simple",
            example: "It is raining today.",
          },

          {
            name: "Continuous",
            example: "It is raining now.",
          },

          {
            name: "Perfect",
            example: "It has rained for 2 days.",
          },

          {
            name: "Perfect Continuous",
            example: "It has been raining for 2 months.",
          },
        ],
      },
      {
        id: 2,
        title: "PAST",
        color: "bg-green-600",
        textColor: "text-green-600",
        items: [
          {
            name: "Simple",
            example: "It rained yesterday.",
          },
          {
            name: "Continuous",
            example: "It was raining.",
          },
          {
            name: "Perfect",
            example: "It had rained for 2 days.",
          },
          {
            name: "Perfect Continuous",
            example: "It had been raining for 2 months.",
          },
        ],
      },
      {
        id: 3,
        title: "FUTURE",
        color: "bg-blue-600",
        textColor: "text-blue-600",
        items: [
          {
            name: "Simple",
            example: "It will rain tomorrow.",
          },
          {
            name: "Continuous",
            example: "It will be raining next week.",
          },
          {
            name: "Perfect",
            example: "It will have rained for 2 days.",
          },
          {
            name: "Perfect Continuous",
            example: "It will have been raining for 2 months.",
          },
        ],
      },
    ],
  },
  "Day-6": {
    date: dynamicDate,
    tenses: [
      {
        id: 1,
        title: "PRESENT",
        color: "bg-red-600",
        textColor: "text-red-600",
        items: [
          {
            name: "Simple",
            example: "She does the shopping.",
          },
          {
            name: "Continuous",
            example: "She is doing the shopping.",
          },
          {
            name: "Perfect",
            example: "She has done the shopping.",
          },
          {
            name: "Perfect Continuous",
            example: "She has been doing the shopping for 2 hours.",
          },
        ],
      },
      {
        id: 2,
        title: "PAST",
        color: "bg-green-600",
        textColor: "text-green-600",
        items: [
          {
            name: "Simple",
            example: "She did the shopping.",
          },
          {
            name: "Continuous",
            example: "She was doing the shopping.",
          },
          {
            name: "Perfect",
            example: "She had done the shopping.",
          },
          {
            name: "Perfect Continuous",
            example: "She had been doing the shopping for 2 hours.",
          },
        ],
      },
      {
        id: 3,
        title: "FUTURE",
        color: "bg-blue-600",
        textColor: "text-blue-600",
        items: [
          {
            name: "Simple",
            example: "She will do the shopping.",
          },
          {
            name: "Continuous",
            example: "She will be doing the shopping.",
          },
          {
            name: "Perfect",
            example: "She will have done the shopping.",
          },
          {
            name: "Perfect Continuous",
            example: "She will have been doing the shopping for 2 hours.",
          },
        ],
      },
    ],
  },
};

export default tensesData;
