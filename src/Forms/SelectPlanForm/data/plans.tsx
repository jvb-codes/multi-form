import ArcadeIcon from "../../../assets/images/icon-arcade.svg";
import AdvancedIcon from "../../../assets/images/icon-advanced.svg";
import ProIcon from "../../../assets/images/icon-pro.svg";

export const plansData = [
  {
    id: 1,
    planType: "Arcade",
    price: { monthly: 9, yearly: 90 },
    icon: ArcadeIcon,
    isSelected: false,
  },
  {
    id: 2,
    planType: "Advanced",
    price: { monthly: 12, yearly: 120 },
    icon: AdvancedIcon,
    isSelected: false,
  },
  {
    id: 3,
    planType: "Pro",
    price: { monthly: 15, yearly: 150 },
    icon: ProIcon,
    isSelected: false,
  },
];
