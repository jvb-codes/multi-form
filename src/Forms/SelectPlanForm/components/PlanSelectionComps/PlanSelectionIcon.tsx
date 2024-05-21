type PlanSelectionProps = {
  item: {
    planType: string;
    price: {
      monthly: number;
      yearly: number;
    };
    icon: string;
  };
};

function PlanSelectionIcon({ item }: PlanSelectionProps) {
  return (
    <div className="p-2 sm:px-0 ">
      <img src={item.icon} alt="plan type icon" />
    </div>
  );
}
export default PlanSelectionIcon;
