import React from 'react';
import { useInView } from 'react-intersection-observer';

const Reveal = ({ children, as: Tag = 'div', className = '', id, ...rest }) => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <Tag
      ref={ref}
      id={id}
      className={`${className} ${inView ? 'animate-slide-in-up' : 'opacity-0'}`}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
