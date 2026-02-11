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
  const width = size * (161.83 / 255.91);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 161.83 255.91"
      className={className}
    >
      <path
        d="M8.84,116.11l16-16,107.41,107.54v32.47h-23.44s.03-24,.03-24L8.84,116.11ZM132.85,184.11l-24-24-.03-59.54h23.44s.6,83.54.6,83.54Z"
        fill={color}
        stroke={color}
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </svg>
  );
}
