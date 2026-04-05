import { LogoIcon } from "../../icons/logoIcon";

export const RotatingIcon = ({ rotatingText, className }) => {
  return (
    <div
      className={`relative w-32 h-32 flex items-center justify-center ${className || ''}`}>
      {/* Rotating text */}
      <svg
        className="absolute inset-0 w-full h-full animate-spin"
        style={{ animationDuration: '10s' }}
        viewBox="0 0 120 120">
        <defs>
          <path id="circle" d="M 60,60 m -45,0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0" />
        </defs>
        <text fontSize="9" letterSpacing="3">
          <textPath href="#circle">{rotatingText}</textPath>
        </text>
      </svg>

      {/* Center Logo */}
      <div className="absolute flex items-center justify-center">
        <LogoIcon />
      </div>
    </div>
  );
};
