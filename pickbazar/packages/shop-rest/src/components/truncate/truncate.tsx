import React, { useState } from "react";

type ReadMoreProps = {
  more?: string;
  less?: string;
  character?: number;
};

const ReadMore = ({ children, more, less, character }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleLines = (event) => {
    event.preventDefault();
    setExpanded(!expanded);
  };

  if (!children) return null;

  return (
    <>
      {(children && children.length < character) || expanded ? (
        <p style={{ fontSize: 14, margin: '15px 0' }}>{children}</p>
      ) : (
        <p style={{ fontSize: 14, margin: '15px 0' }}>{children.substring(0, character)}</p>
      )}
      {children && children.length > character && !expanded && (
        <>
          <br />
          <span>
            <a
              href="#"
              onClick={toggleLines}
              style={{ color: "#009e7f", fontWeight: "bold" }}
            >
              {more}
            </a>
          </span>
        </>
      )}
      {children && children.length > character && expanded && (
        <>
          <br />
          <span>
            <a
              href="#"
              onClick={toggleLines}
              style={{ color: "#009e7f", fontWeight: "bold" }}
            >
              {less}
            </a>
          </span>
        </>
      )}
    </>
  );
};

ReadMore.defaultProps = {
  character: 150,
  more: "Read more",
  less: "less",
};

export default ReadMore;
