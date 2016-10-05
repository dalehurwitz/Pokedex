import React from "react";

const Badge = ({ classes, text }) => {
    return (
        <span className={`badge ${classes}`}>{text}</span>
    );
};

export default Badge;
