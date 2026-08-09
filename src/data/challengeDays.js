const lessonTitles = {
  1: "Hello World & Setup",
  2: "Variables & Data Types",
  3: "Functions That Do One Thing Well",
  4: "Arrays & Everyday Data",
  5: "Objects & Structured Thinking",
  6: "DOM Fundamentals",
  7: "Build a Habit Tracker",
  8: "Async JavaScript",
  9: "Fetching Real Data",
  10: "Error Handling",
  11: "REST API Fundamentals",
  12: "Build Your First API",
  15: "API Mastery Sprint",
  30: "Midpoint Portfolio Project",
  45: "Full-Stack Product Sprint",
  60: "Final Capstone Launch",
};

const buildFocus = {
  12: "Create a small REST API for a reading list. It should accept new books, return all saved books, update reading status, and delete an entry.",
  30: "Design and ship a polished portfolio experience that presents your strongest work, process, and personality.",
  60: "Launch your capstone product with authentication, persistent data, thoughtful empty states, and a public project story.",
};

export const challengeDays = Array.from({ length: 60 }, (_, index) => {
  const day = index + 1;
  const title = lessonTitles[day] || "Core Concepts & Practice";

  return {
    id: day,
    eyebrow: day % 7 === 0 ? "Weekly build" : "Daily challenge",
    title: `Day ${day}: ${title}`,
    shortTitle: title,
    duration: day % 7 === 0 ? "90 min" : "45 min",
    difficulty: day < 15 ? "Foundation" : day < 40 ? "Intermediate" : "Advanced",
    description: `Day ${day} turns an important development concept into something you can actually build, test, and explain. Follow the brief, ship a working version, and reflect on what you learned.`,
    task: buildFocus[day] || "Build a focused mini-project that applies today's concept to a real interface. Prioritize a working core experience, then add one thoughtful improvement of your own.",
    requirements: [
      "Read the lesson and define the smallest working version.",
      "Build and test the core experience.",
      "Add one original improvement beyond the brief.",
      "Submit a project link and a short reflection.",
    ],
    outcomes: [
      "Explain the core concept in your own words",
      "Translate a brief into working code",
      "Test the important happy and error paths",
    ],
  };
});

export const challengeStats = [
  { value: "60", label: "focused days" },
  { value: "12+", label: "portfolio builds" },
  { value: "24h", label: "mentor response" },
  { value: "4.9/5", label: "student rating" },
];

export const landingFeatures = [
  {
    icon: "code",
    number: "01",
    title: "Build, don't binge",
    description: "Every lesson ends with a real deliverable, so your confidence grows alongside your portfolio.",
  },
  {
    icon: "users",
    number: "02",
    title: "Never get stuck alone",
    description: "Ask peers, compare approaches, or open a mentor ticket when a bug refuses to move.",
  },
  {
    icon: "zap",
    number: "03",
    title: "Create momentum",
    description: "A visible streak, focused daily brief, and milestones make consistent progress feel natural.",
  },
];
