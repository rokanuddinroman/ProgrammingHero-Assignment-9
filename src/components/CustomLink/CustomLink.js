import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';


function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                style={{ backgroundColor: match ? "rgba(182, 182, 182, 0.041)" : "transparent", padding: match ? "8px 15px" : "15px 15px", color: match ? "#1F75FC" : "#fff", borderRadius: match ? "12px" : "0px" }}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
}

export default CustomLink;