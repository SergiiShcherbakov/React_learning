import React from "react";

export const Book = ({author="No author", title="No title", pages=0, freeBookmark}) => {
    return (
        <section>
            <h3>{title}</h3>
            <p>by: {author}</p>
            <p>pages: {pages}</p>
            <p>freeBookmark: {freeBookmark ? "yes!" : "no!"}</p>
        </section>
    )

}
