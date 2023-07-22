import Link from "next/link";
import GoalCard from "../../components/GoalCard";
import Header from "@/components/Header";
import { useRouter } from "next/router";

export default function GoalList({ goals, deleteGoal, updateGoal }) {
  const router = useRouter();

  function handleGoalClick(id) {
    router.push(`/goal/${id}`);
  }

  function handleGoalDelete(id) {
    deleteGoal(id);
  }

  return (
    <div>
      <Header title="my goals" />
      {goals.map((goal) => (
        <GoalCard
          key={goal.id}
          goal={goal}
          onGoalClick={handleGoalClick}
          onDeleteClick={() => handleGoalDelete(goal.id)}
          updateGoal={updateGoal}
        />
      ))}
      <Link href="/">Back to Homepage</Link>
    </div>
  );
}
