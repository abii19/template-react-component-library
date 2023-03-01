import React from "react";

interface LinkProps {
  Link: React.ElementType;
}

export interface ZebecLinkProps {
  Icon?: React.ElementType;
  label: string;
  path: string;
}

const ZebecLink: React.FC<ZebecLinkProps & LinkProps> = (props) => {
  const { Icon, label, path, Link } = props;
  return (
    <>
      <Link to={path} className="flex items-center gap-x-2">
        {Icon && (
          <div className="h-6 w-6 grid place-content-center bg-background-secondary rounded">
            <Icon />
          </div>
        )}
        <div className="text-body text-content-primary hover:text-primary">
          {label}
        </div>
      </Link>
    </>
  );
};

export default ZebecLink;
