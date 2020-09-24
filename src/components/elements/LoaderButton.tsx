import React from "react";
import { Button } from "react-bootstrap";
// import { BiLoaderCircle } from "react-icons/bi";
import { VscLoading } from "react-icons/vsc";
import "../../styles/LoaderButton.css";

interface Props {
  isLoading: boolean;
  className: string;
  disabled: boolean;
  block: any;
  type: string;
  bsSize: string;
}

const LoaderButton: React.FC<Props> = ({
  isLoading,
  className = "",
  disabled = false,
  ...props
}) => {
  return (
    <Button
      className={`LoaderButton ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <VscLoading className="spinning" />}
      {!isLoading && props.children}
    </Button>
  );
};

export default LoaderButton;
