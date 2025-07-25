
import React from 'react';

const AppImage = ({ 
  src, 
  alt = "", 
  className = "", 
  fallback = "/assets/images/no_image.png",
  loading = "lazy",
  ...props 
}) => {
  const [imageSrc, setImageSrc] = React.useState(src);
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    setImageSrc(src);
    setHasError(false);
  }, [src]);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImageSrc(fallback);
    }
  };

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      loading={loading}
      onError={handleError}
      {...props}
    />
  );
};

export default AppImage;
