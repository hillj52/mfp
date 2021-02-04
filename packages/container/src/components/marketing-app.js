import React, { useEffect, useRef } from 'react';
import { mountMarketing } from 'marketing/MarketingApp';

const MarketingApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    mountMarketing(ref.current);
  }, []);

  return <section ref={ref} />;
};

export default MarketingApp;
