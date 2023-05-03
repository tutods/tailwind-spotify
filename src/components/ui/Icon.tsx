import { SpriteCategories } from "@/shared/enums/SpriteCategories";
import clsx from "clsx";

const sizes = {
  // 32px
  "2xl": "h-8 w-8",
  // 24px
  xl: "w-6 h-6",
  // 20px
  lg: "w-5 h-5",
  // 16px
  md: "h-4 w-4",
  // 14px
  sm: "h-3.5 w-3.5",
  // 12px
  xs: "h-3 w-3",
} as const;

type Props = {
  name: string;
  category?: SpriteCategories;
  size?: keyof typeof sizes;
  className?: string;
  onClick?: () => void;
};

export const Icon = ({
  name,
  category = SpriteCategories.COMMON,
  size,
  onClick,
  className = "",
}: Props) => {
  const spritePath = `assets/icons/${category}-sprite.svg`;
  const defaultSize = !size && !className ? sizes.md : "";

  return (
    <svg
      className={clsx([!!size && sizes[size], defaultSize, className])}
      onClick={onClick}
    >
      <use href={`${spritePath}#${name}`} />
    </svg>
  );
};
