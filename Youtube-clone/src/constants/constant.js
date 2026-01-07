export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?key=[YOUR_API_KEY]";

export const comments = [
  {
    id: 1,
    name: "frontend_fan",
    text: "This video cleared so many React doubts for me.",
    replies: [
      {
        id: 11,
        name: "sagar_up",
        text: "Glad it helped! Which concept stood out?",
        replies: [
          {
            id: 111,
            name: "frontend_fan",
            text: "Reconciliation finally made sense.",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "js_beginner",
    text: "Can someone explain useEffect dependency array again?",
    replies: [
      {
        id: 21,
        name: "react_pro",
        text: "Think of it as when React should rerun the effect.",
        replies: [
          {
            id: 211,
            name: "js_beginner",
            text: "So empty array = run once?",
            replies: [
              {
                id: 2111,
                name: "react_pro",
                text: "Exactly 👍",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "deep_dsa",
    text: "Recursion in comments feels similar to tree traversal.",
    replies: [
      {
        id: 31,
        name: "algo_guy",
        text: "Yes, it’s basically DFS.",
        replies: [],
      },
    ],
  },
  {
    id: 4,
    name: "curious_dev",
    text: "How does this scale with thousands of comments?",
    replies: [
      {
        id: 41,
        name: "perf_master",
        text: "You need pagination and virtualization.",
        replies: [
          {
            id: 411,
            name: "curious_dev",
            text: "Any library suggestions?",
            replies: [
              {
                id: 4111,
                name: "perf_master",
                text: "React Window or TanStack Virtual.",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "ui_enthusiast",
    text: "The UI looks super clean!",
    replies: [],
  },
  {
    id: 6,
    name: "mern_builder",
    text: "Is this approach good for MERN apps?",
    replies: [
      {
        id: 61,
        name: "sagar_up",
        text: "Yes, backend just returns nested or normalized data.",
        replies: [],
      },
    ],
  },
  {
    id: 7,
    name: "typescript_fan",
    text: "Would typing recursive comments be hard?",
    replies: [
      {
        id: 71,
        name: "type_safe",
        text: "Not really, it’s a self-referencing type.",
        replies: [
          {
            id: 711,
            name: "typescript_fan",
            text: "Makes sense now!",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: 8,
    name: "backend_guy",
    text: "How would MongoDB store this?",
    replies: [
      {
        id: 81,
        name: "db_arch",
        text: "Usually flat with parentId reference.",
        replies: [],
      },
    ],
  },
  {
    id: 9,
    name: "system_design",
    text: "This is a classic tree problem in frontend.",
    replies: [],
  },
  {
    id: 10,
    name: "react_newbie",
    text: "My recursion breaks after 2 levels 😅",
    replies: [
      {
        id: 101,
        name: "mentor_dev",
        text: "Check your base condition and keys.",
        replies: [
          {
            id: 1011,
            name: "react_newbie",
            text: "Keys were the issue!",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: 11,
    name: "code_reviewer",
    text: "This is interview gold.",
    replies: [],
  },
  {
    id: 12,
    name: "daily_learner",
    text: "I revisit this video every week.",
    replies: [],
  },
  {
    id: 13,
    name: "architecture_nerd",
    text: "Recursive UI is underrated.",
    replies: [],
  },
  {
    id: 14,
    name: "side_project_builder",
    text: "Using this in my YouTube clone.",
    replies: [
      {
        id: 141,
        name: "sagar_up",
        text: "Nice! It fits perfectly there.",
        replies: [],
      },
    ],
  },
  {
    id: 15,
    name: "growth_mindset",
    text: "Learning so much from the comments too.",
    replies: [],
  },
];
