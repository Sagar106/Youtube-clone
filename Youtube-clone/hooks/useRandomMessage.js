import { useCallback } from "react";

const MESSAGES = [
  "Hey, how’s it going?",
  "Just finished reviewing the code.",
  "Can you push the latest changes?",
  "This looks good to me 👍",
  "Let’s sync up in 10 minutes.",
  "Deployment completed successfully 🚀",
  "Found a small bug, fixing it now.",
  "Nice work on the UI!",
  "Can we refactor this later?",
  "I’ll update the docs shortly.",
];

export function useRandomMessage() {
  const generateRandomMessage = useCallback(() => {
    return MESSAGES[Math.floor(Math.random() * MESSAGES.length)];
  }, []);

  return { generateRandomMessage };
}
