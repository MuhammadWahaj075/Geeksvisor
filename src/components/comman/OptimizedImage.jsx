import Image from "next/image";

export const OptimizedImage = ({
  className,
  src,
  alt,
  width,
  height,
  style,
  ...props
}) => {
  return (
    <Image
    style={style}
      className={className}
      src={src}
      alt={src}
      width={width}
      height={height}
      {...props}
    />
  );
};
