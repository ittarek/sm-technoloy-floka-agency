export const Stars = ({
  count = 5, // মোট star
  filled = 5, // ভরা star
  size = 6, // star size in px
  filledColor = '#f59e0b', // ভরা star color
  emptyColor = '#e5e7eb', // খালি star color
}) => {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => {
        // fractional fill check
        const isFull = i + 1 <= Math.floor(filled);
        const isHalf = !isFull && i < filled;

        return (
          <svg
            key={i}
            width={size}
            height={size}
            viewBox="0 0 12 12"
            fill={isFull ? filledColor : emptyColor}>
            <path d="M6 1l1.39 2.82L10.5 4.27l-2.25 2.19.53 3.1L6 8l-2.78 1.56.53-3.1L1.5 4.27l3.11-.45L6 1z" />
            {isHalf && (
              <path
                d="M6 1l1.39 2.82L10.5 4.27l-2.25 2.19.53 3.1L6 8l-2.78 1.56.53-3.1L1.5 4.27l3.11-.45L6 1z"
                fill={filledColor}
                style={{ clipPath: 'inset(0 50% 0 0)' }}
              />
            )}
          </svg>
        );
      })}
    </div>
  );
};