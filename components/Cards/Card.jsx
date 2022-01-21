export const CardHeader = ({ children, ...rest }) => (
  <div className="card-header" {...rest}>
    {children}
  </div>
);
export const CardTitle = ({ children, ...rest }) => (
  <div className="card-title" {...rest}>
    {children}
  </div>
);

export const CardSubtitle = ({ children, ...rest }) => (
  <div className="card-subtitle" {...rest}>
    {children}
  </div>
);

export const CardContent = ({ children, ...rest }) => (
  <div className="card-content" {...rest}>
    {children}
  </div>
);
export const CardFooter = (
  { children, ...rest } // eslint-disable-line
) => (
  <div className="card-footer" {...rest}>
    {children}
  </div>
);

export const Card = ({ children, ...rest }) => (
  <article className="card" {...rest}>
    {children}
  </article>
);
