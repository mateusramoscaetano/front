import dotenv from "dotenv";

dotenv.config();

export type SummaryResponse = {
  completed: number;
  total: number;
  goalsPerDay: Record<
    string,
    {
      id: string;
      title: string;
      completedAt: string;
    }[]
  >;
};

export async function getSummary(): Promise<SummaryResponse> {
  const response = await fetch(`${process.env.SERVER_URL}/summary`);
  const data = await response.json();
  return data.summary;
}
