import React, { useState, useEffect } from 'react';
import { InView } from 'react-intersection-observer';

const Myinview = ({ children, debug }) => {
  const [hasBeenInView, setHasBeenInView] = useState(false);
  const [isFirstMount, setIsFirstMount] = useState(true);

  useEffect(() => {
    setIsFirstMount(false);
  }, []);

  return (
    <InView
      triggerOnce={true}
      threshold={0.25}
      delay = {400}
      onChange={(inView, entry) => {
        if (!isFirstMount && inView && !hasBeenInView) {
          setHasBeenInView(true);
        }
      }}
    >
      {({ ref }) => (
        <div ref={ref}>
          {hasBeenInView ? (
            <div className="fade-in" style={{ border: debug }}>
              {children}
            </div>
          ) : (
            <div style={{ visibility: 'hidden' }}>
              {children}
            </div>
          )}
        </div>
      )}
    </InView>
  );
};

export default Myinview;