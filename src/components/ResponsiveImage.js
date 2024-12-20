import React, { useState, useEffect } from 'react';

const ResponsiveImage = ({ src, alt, aspectRatio = 16 / 9 }) => {
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth * 0.8; // Example: 80% of the screen width
      const height = width / aspectRatio;
      setImageSize({ width, height });
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial resize calculation

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [aspectRatio]);

  return (
    <div className="flex justify-center items-center" style={{ width: imageSize.width, height: imageSize.height }}>
      <img
        src={src}
        alt={alt}
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
      />
    </div>
  );
};

export default ResponsiveImage;
