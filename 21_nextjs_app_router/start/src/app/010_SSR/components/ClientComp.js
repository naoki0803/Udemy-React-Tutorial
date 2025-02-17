"use client";
import { useState, useEffect } from "react";
const ClientComp = () => {
    const [state, setState] = useState(undefined);
    useEffect(() => {
        setState("client loaded");
    }, []);

    return <span style={{ color: "red", padding: "15px" }}>{state}</span>;
};

export default ClientComp;
