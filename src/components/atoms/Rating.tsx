import { StarIcon } from "@/assets/icons";

interface RatingProps {
  initialRating: number;
  className?: string;
}

export default function Rating({ initialRating = 0, className }: RatingProps) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <StarIcon
        key={i}
        className={i <= initialRating ? "text-orange-ff" : "text-gray-de"}
      />
    );
  }
  return <div className={`flex ${className}`}>{stars}</div>;
}
