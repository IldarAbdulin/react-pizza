import React from 'react';
import ContentLoader from 'react-content-loader';

export const PizzaLoadingBlock = () => {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f0f0f0"
      foregroundColor="#e8e8e8"
    >
      <circle cx="140" cy="140" r="140" />
      <rect x="0" y="290" rx="3" ry="3" width="296" height="25" />
      <rect x="0" y="328" rx="6" ry="6" width="280" height="84" />
      <rect x="0" y="420" rx="3" ry="3" width="90" height="68" />
      <rect x="192" y="421" rx="3" ry="3" width="90" height="68" />
    </ContentLoader>
  );
};
