import React from "react";

/**
 * Icône basé sur la sprite SVG
 * @param {{name: string}} props
 * @param {{size: integer}} props
*/
const Icon = ({name, size}) => {
    const className = `icon icon-${name}`
    const href = `/sprite.svg#${name}`
    return (
        <svg className={className} width={size} height={size}>
            <use xlinkHref={href} />
        </svg>
    );
}

export default Icon;