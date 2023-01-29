import React from 'react';
import css from "./Home.module.css";

const Home = () => {
    return (
        <div className={css.bg}>

            <h1 style={{
                textAlign: "center", color: "gray"
                , fontSize: "60px"
            }}>
                TYPES OF TREE</h1>

            <p style={{
                textAlign: "center", color: "gray"
                , fontSize: "25px"
            }}>LEARN ABOUT THE  DiFFERENT
                TYPES OF TREE SPECIES</p>
            <div style={{
                textAlign: "center"
            }}>
                <button style={{
                    textAlign: "center", color: "black",
                    width: "200px",
                    padding: "0px",
                    boxSizing: "border-box",
                    verticalAlign: "middle",
                    fontSize: "25px",
                }}>PLANT A TREE
                </button>
            </div>
        </div>
    );
};

























export default Home;