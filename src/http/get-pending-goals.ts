import dotenv from "dotenv";

dotenv.config();

export type PendingGoalsResponse = {
  id: string;
  title: string;
  desiredWeeklyFrequency: number;
  completionCount: number;
}[];

export async function getPendingGoals(): Promise<PendingGoalsResponse> {
  const response = await fetch(`${process.env.SERVER_URL}/pending-goals`);
  const data = await response.json();
  return data.pendingGoals;
}
