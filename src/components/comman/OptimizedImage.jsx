import Image from "next/image";

export const OptimizedImage = ({
  className,
  src,
  alt,
  width,
  height,
  ...props
}) => {
  return (
    <Image
      className={className}
      src={src}
      alt={src}
      width={width}
      height={height}
      {...props}
    />
  );
};
