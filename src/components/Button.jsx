import React from "react";
import PropTypes from "prop-types";

// Primary Button

// const ButtonPrimary = ({ href, target = "_self", label, icon, classes }) => {
//   if (href) {
//     return (
//       <a href={href} target={target} className={"btn btn-primary " + classes}>
//         {label}
//         {icon ? (
//           <span className="material-symbols-rounded" aria-hidden="true">
//             {icon}
//           </span>
//         ) : undefined}
//       </a>
//     );
//   } else {
//     return (
//       <button className={"btn btn-primary " + classes}>
//         {label}
//         {icon ? (
//           <span className="material-symbols-rounded" aria-hidden="true">
//             {icon}
//           </span>
//         ) : undefined}
//       </button>
//     );
//   }
// };

const ButtonPrimary = ({ href, target = "_self", label, icon, classes }) => {
  const isDownloadable = href && href.endsWith(".pdf"); // Check if it's a PDF file

  return href ? (
    <a
      href={href}
      target={target}
      className={"btn btn-primary " + classes}
      {...(isDownloadable ? { download: true } : {})} // Add download attribute if it's a file
    >
      {label}
      {icon && (
        <span className="material-symbols-rounded" aria-hidden="true">
          {icon}
        </span>
      )}
    </a>
  ) : (
    <button className={"btn btn-primary " + classes}>
      {label}
      {icon && (
        <span className="material-symbols-rounded" aria-hidden="true">
          {icon}
        </span>
      )}
    </button>
  );
};

ButtonPrimary.propType = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
};

// Button Outlined

const ButtonOutline = ({ href, target = "_self", label, icon, classes }) => {
  if (href) {
    return (
      <a href={href} target={target} className={"btn btn-outline " + classes}>
        {label}
        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : undefined}
      </a>
    );
  } else {
    return (
      <button className={"btn btn-outline " + classes}>
        {label}
        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : undefined}
      </button>
    );
  }
};

ButtonOutline.propType = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
};

export { ButtonPrimary, ButtonOutline };
