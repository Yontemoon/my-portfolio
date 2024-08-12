import React from "react";

const ExternalLink = ({
  href,
  className,
  children,
  ...props
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <a
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      className={className}
      {...props}
    >
      {children}
    </a>
  );
};

export default ExternalLink;
