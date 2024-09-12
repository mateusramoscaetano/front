export async function createGoalCompletion(goalId: string) {
  await fetch(`${process.env.SERVER_URL}/completions`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ goalId }),
  });
}
