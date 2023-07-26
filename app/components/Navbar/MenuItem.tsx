"use client";

interface MenuItemProps {
  onClick: () => void;
  onBlur?: () => void;
  label: string;
  index?: number;
}

const MenuItem: React.FC<MenuItemProps> = ({
  onClick,
  label,
  onBlur,
  index,
}) => {
  return (
    <div
      onClick={onClick}
      onBlur={onBlur}
      tabIndex={index}
      className="
        px-4 
        py-3 
        hover:bg-neutral-100 
        transition
        font-semibold
      "
    >
      {label}
    </div>
  );
};

export default MenuItem;
