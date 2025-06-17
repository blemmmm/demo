import { useQuery } from "@tanstack/react-query";
import { Badge } from "../components/components/ui/badge";

interface Task {
  id: string;
  name: string;
  description: string;
  status: string;
}

const statusColors = {
  pending: "bg-yellow-200 text-yellow-800",
  in_progress: "bg-blue-200 text-blue-800",
  completed: "bg-green-200 text-green-800",
};

const Home = () => {
  const abortController = new AbortController();
  const signal = abortController.signal;

  const { data: tasks } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const response = await fetch("http://localhost:8080/tasks", { signal });
      const tasks = await response.json();
      return tasks as Task[];
    },
  });

  return (
    <div className="w-full flex flex-col gap-2 h-full">
      {tasks?.map((task) => (
        <div
          key={task.id}
          className="rounded-lg border border-gray-200 bg-neutral-100 p-4 hover:shadow-md min-w-[320px] min-h-28 cursor-pointer"
        >
          <p>{task.name}</p>
          <p>{task.description}</p>
          <Badge
            variant="secondary"
            className={`border ${
              statusColors[task.status as keyof typeof statusColors]
            } `}
          >
            {task.status}
          </Badge>
        </div>
      ))}
    </div>
  );
};

export default Home;
