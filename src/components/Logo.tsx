interface LogoProps {
  className?: string;
  variant?: "color" | "white";
}

export function Logo({ className = "h-16 w-auto", variant = "color" }: LogoProps) {
  const isWhite = variant === "white";

  return (
    <img
      src="/images/baja-pro-logo.png"
      alt="Baja Pro Home Improvement Logo"
      className={`${className} object-contain`}
      style={{
        filter: isWhite ? "brightness(0) invert(1)" : undefined,
      }}
      id="baja-pro-logo-svg"
      referrerPolicy="no-referrer"
    />
  );
}
