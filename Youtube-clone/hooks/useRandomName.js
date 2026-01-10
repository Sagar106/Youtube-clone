import { useCallback } from "react";

const FIRST_NAMES = [
  "Aarav",
  "Vihaan",
  "Sofia",
  "Arjun",
  "Riya",
  "Kabir",
  "Ananya",
  "Rahul",
  "Isha",
  "Neha",
  "Alex",
  "Emma",
  "Liam",
  "Noah",
  "Olivia",
];

const LAST_NAMES = [
  "Sharma",
  "Verma",
  "Mehta",
  "Patel",
  "Gupta",
  "Singh",
  "Brown",
  "Johnson",
  "Miller",
  "Wilson",
];

export function useRandomName() {
  const generateRandomName = useCallback(() => {
    const first = FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)];
    const last = LAST_NAMES[Math.floor(Math.random() * LAST_NAMES.length)];

    return `${first} ${last}`;
  }, []);

  return { generateRandomName };
}
