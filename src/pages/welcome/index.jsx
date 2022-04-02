import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import WelcomeFooter from '../../svg/welcomefooter.svg'
export default function Welcome() {
    let history = useHistory();

    return (<>
        <div className="wrapper" style={{ background: "rgb(255 255 255)" }}>
            <div className="row" style={{width: "100%", padding: "5vw", position: "relative", top: "7vw", display: "flex",justifyContent: "flex-start",flexDirection: "column"}}>
                <h1 style={{ color: "rgb(14, 31, 42)", fontSize: "11vw" }}>Welcome</h1>
                <h3 style={{ color: "#eac700ba", fontSize: "7vw" }}>
                    0x43F44Fa7842dED402F...
                </h3>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <img src="https://d235dzzkn2ryki.cloudfront.net/celo-dollar_large.png"style={{ width: "10vw" }}/>
                    <div style={{display: "flex",alignItems: "flex-end",flexDirection: "row",marginLeft: "5vw"}}>
                        <h3 style={{ color: "#43ce86", fontSize: "9vw", marginBottom: 0 }}>
                            100
                        </h3>
                        <h5 style={{ color: "#4570ff", fontSize: "5vw", marginBottom: 4 }}>
                            {" "}
                            cUSD
                        </h5>
                    </div>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <img src="https://th.bing.com/th/id/R.a898a2b9811d2633506f46f9157cd511?rik=T8ZvXoV7ST95tA&pid=ImgRaw&r=0"style={{ width: "10vw" }}/>
                    <div style={{display: "flex",alignItems: "flex-end",flexDirection: "row",marginLeft: "5vw"}}>
                        <h3 style={{ color: "#46ce86", fontSize: "9vw", marginBottom: 0 }}>
                            200
                        </h3>
                        <h5 style={{ color: "#001affba", fontSize: "5vw", marginBottom: 4 }}>
                            {" "}
                            cEURO
                        </h5>
                    </div>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <img src="https://bittrexblobstorage.blob.core.windows.net/public/377c7c2b-3368-438d-95db-4d244404a498.png"style={{ width: "10vw" }}/>
                    <div style={{display: "flex",alignItems: "flex-end",flexDirection: "row",marginLeft: "5vw"}}>
                        <h3 style={{ color: "#fbcc5c", fontSize: "9vw", marginBottom: 0 }}>
                            6.30
                        </h3>
                        <h5 style={{ color: "#4558ff", fontSize: "5vw", marginBottom: 4 }}>
                            {" "}
                            CELO
                        </h5>
                    </div>
                </div>
            </div>
            <div className="row" style={{background: "rgb(14, 31, 42)",display: "flex",padding: 0,margin: 0,height: "75vw",position: "inherit",overflow: "hidden",flexDirection: "row",flexWrap: "nowrap"}}>
                <img src={WelcomeFooter} />
            </div>
        </div>

    </>

    );
}