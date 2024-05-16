import ArcadeIcon from "../../../assets/images/icon-arcade.svg";
import AdvancedIcon from "../../../assets/images/icon-advanced.svg";
import ProIcon from "../../../assets/images/icon-pro.svg";

export const plans = [
  { planType: "Arcade", price: { monthly: 9, yearly: 90 }, icon: ArcadeIcon },
  {
    planType: "Advanced",
    price: { monthly: 12, yearly: 120 },
    icon: AdvancedIcon,
  },
  { planType: "Pro", price: { monthly: 15, yearly: 150 }, icon: ProIcon },
];
