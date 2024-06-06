import { PropsWithChildren } from "react";

export type PlanSelectionContainerProps = PropsWithChildren<{
  id: number;
  planType: string;
  cost: { monthly: number; yearly: number };
  isSelected: boolean;
}>;
