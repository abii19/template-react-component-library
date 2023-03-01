import React from "react";
import "./Card.css";
import "../index.css";

interface CardProps {
  Icon?: React.ElementType;
  title: string;
  description: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = (props) => {
  const { Icon, title, description, children } = props;
  return (
    <>
      <div className="p-6 rounded shadow bg-background-primary">
        <div className="flex gap-x-4">
          {Icon && (
            <div className="shrink-0 bg-background-secondary w-9 h-9 rounded-lg grid place-content-center">
              <Icon />
            </div>
          )}
          <div className="flex flex-col gap-y-6">
            <h6 className="text-small-title text-content-tertiary">{title}</h6>
            <p className="text-body text-content-primary">{description}</p>
          </div>
        </div>
        {children && (
          <>
            <div className="h-1 bg-outline-border my-4" />
            {children}
          </>
        )}
      </div>
    </>
  );
};

export default Card;
