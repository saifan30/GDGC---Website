import React, { useState, useEffect } from 'react';

export interface AppImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  fallbackSrc?: string;
  alt: string;
}

export const AppImage: React.FC<AppImageProps> = ({
  src,
  fallbackSrc,
  alt,
  className,
  onError,
  ...props
}) => {
  const [currentSrc, setCurrentSrc] = useState<string>(src);
  const [hasTriedFallback, setHasTriedFallback] = useState<boolean>(false);

  useEffect(() => {
    setCurrentSrc(src);
    setHasTriedFallback(false);
  }, [src]);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (!hasTriedFallback && fallbackSrc && currentSrc !== fallbackSrc) {
      setHasTriedFallback(true);
      setCurrentSrc(fallbackSrc);
    } else if (onError) {
      onError(e);
    }
  };

  return (
    <img
      {...props}
      src={currentSrc}
      alt={alt}
      className={className}
      onError={handleError}
    />
  );
};
