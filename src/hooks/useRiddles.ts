import { useEffect, useState } from "react";

export const useRiddles = () => {
  const [viewNumber, setViewNumber] = useState(
    Number(localStorage.getItem("treasurehunt-view")) || 0
  );

  const [completedRiddles, setCompletedRiddles] = useState(
    new Set(
      JSON.parse(
        localStorage.getItem("treasurehunt-completed") || "[]"
      ) as number[]
    )
  );

  useEffect(() => {
    localStorage.setItem("treasurehunt-view", viewNumber.toString());
    localStorage.setItem(
      "treasurehunt-completed",
      JSON.stringify(Array.from(completedRiddles))
    );
  }, [viewNumber, completedRiddles]);

  const completeRiddle = (riddleId: number) => {
    setViewNumber((viewNumber) => viewNumber + 1);
    setCompletedRiddles(
      (completedRiddles) => new Set([...completedRiddles, riddleId])
    );
  };

  return { viewNumber, setViewNumber, completedRiddles, completeRiddle };
};
