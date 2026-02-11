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
  const width = size * (169.99 / 255.91);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 169.99 255.91"
      className={className}
    >
      <path
        d="M81.01,100.11v48s59.41,59.54,59.41,59.54v32.47h-23.44s.03-24,.03-24l-60-60v-32H1v-24h56s24,0,24,0ZM141.01,180.11l-24-24-.03-55.54h23.44s.6,79.54.6,79.54Z"
        fill={color}
        stroke={color}
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </svg>
  );
}
