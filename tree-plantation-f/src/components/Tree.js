import React from 'react';
import css from "./Tree.module.css";

const Tree = () => {
    return (
        <div>
            <div className={css.bg}>

                <h1 style={{
                    textAlign: "center",
                    color: "#fff",
                    fontFamily: "Raleway",
                    fontWeight: "800",
                    fontSize: "80px",
                    marginBottom: "0",
                    lineHeight: "1em",
                    border: "0"

                }}>
                    TYPES OF TREE</h1>

                <p style={{
                    textAlign: "center", color: "#fff",
                    fontSize: "25px",
                    fontFamily: "Raleway",
                    fontWeight: "50",

                    marginBottom: "0",
                    lineHeight: "1em",
                }}>LEARN ABOUT THE  DIFFERENT
                    TYPES OF TREE SPECIES</p>
            </div>
        </div>
    )
}
export default Tree;








