import logoElCalden from "../../imports/logo_el_calden.jpg";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  textClassName?: string;
}

export default function Logo({
  className = "",
  size = "md",
  showText = true,
  textClassName = ""
}: LogoProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16"
  };

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl"
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src={logoElCalden}
        alt="El Calden Logo"
        className={`${sizeClasses[size]} object-cover rounded-full`}
      />
      {showText && (
        <span className={`font-bold ${textSizeClasses[size]} ${textClassName}`}>
          El Caldén
        </span>
      )}
    </div>
  );
}
