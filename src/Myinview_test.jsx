import React, { useState, useEffect } from 'react';
import { InView } from 'react-intersection-observer';

const Myinview_test = ({ children, debug, offset_y}) => {


  return (
    <InView
      triggerOnce={true}
      initialInView={false}
      threshold={1}
      delay = {400}
      rootMargin={`-${offset_y}px 0px 0px 0px`}
    >
      {({ inView, ref, entry }) =>{
        return (
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
        )
      } 
      }
    </InView>
  );
};

export default Myinview_test;