export default function Logo({
  color = "#d3a12a",
  size = 150,
  className = "",
}: {
  color?: string;
  size?: number;
  className?: string;
}) {
  const height = size;
  const width = size * (157.99 / 255.91);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 157.99 255.91"
      className={className}
    >
      <path
        d="M69.01,100.11v48s59.41,59.54,59.41,59.54v32.47h-23.44s.03-24,.03-24l-60-60v-24l-28,28L1,144.11l44-44h24ZM129.01,184.11l-24-24-.03-59.54h23.44s.6,83.54.6,83.54Z"
        fill={color}
        stroke={color}
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </svg>
  );
}
