import React, { useState, useEffect } from 'react';
import { InView } from 'react-intersection-observer';

const Myinview = ({ children, debug }) => {


  return (
    <InView
      triggerOnce={true}
      initialInView={false}
      threshold={0.75}
      delay = {400}
      
    >
      {({ inView, ref }) => (
        <div ref={ref}>
          {inView ? (
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