import { Plus } from "lucide-react";
import { OutlineButton } from "./ui/outline-button";
import { getPendingGoals } from "../http/get-pending-goals";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createGoalCompletion } from "../http/create-goal-completion";

export function PendingGoals() {
  const queryClient = useQueryClient();
  const { data } = useQuery({
    queryKey: ["pending-goals"],
    queryFn: getPendingGoals,
    staleTime: 1000 * 60,
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: createGoalCompletion,
  });

  if (!data) {
    return null;
  }

  async function handleCompleteGoal(goalId: string) {
    await mutateAsync(goalId);
    queryClient.invalidateQueries({ queryKey: ["summary"] });
    queryClient.invalidateQueries({ queryKey: ["pending-goals"] });
  }

  return (
    <div className="flex gap-3 flex-wrap">
      {data.map((goal) => {
        return (
          <OutlineButton
            key={goal.id}
            disabled={
              goal.completionCount >= goal.desiredWeeklyFrequency || isPending
            }
            onClick={() => handleCompleteGoal(goal.id)}
          >
            <Plus className="size-4 text-zinc-600" />
            {goal.title}
          </OutlineButton>
        );
      })}
    </div>
  );
}
