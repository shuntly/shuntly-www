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
  const width = size * (149.99 / 261.1);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 149.99 261.1"
      className={className}
    >
      <path
        d="M61,100.11v60s59.41,59.54,59.41,59.54v40.45h-23.44s.03-31.98.03-31.98l-60-60v-36l-20,20L1,136.11l36-36h24ZM121.01,204.12l-24-24-.03-79.54h23.44s.6,103.54.6,103.54Z"
        fill={color}
        stroke={color}
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </svg>
  );
}
