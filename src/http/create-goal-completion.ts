import dotenv from "dotenv";

dotenv.config();

export async function createGoalCompletion(goalId: string) {
  await fetch("https://back-bbu1.onrender.com/completions", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ goalId }),
  });
}
