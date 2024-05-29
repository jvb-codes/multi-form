import { PropsWithChildren } from "react";

export type PlanSelectionContainerProps = PropsWithChildren<{
  planId: number;
  planType: string;
  cost: { monthly: number; yearly: number };
  isSelected: boolean;
}>;
