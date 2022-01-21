import React from "react";

export const HeroContent = ({ children, ...rest }) => {
  return (
    <div className="hero-content" {...rest}>
      {children}
    </div>
  );
};

export function Hero({ children, ...rest }) {
  return <div className="hero">{children}</div>;
}
