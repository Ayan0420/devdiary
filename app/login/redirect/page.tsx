"use client";
import React, { useEffect } from "react";

const page = () => {
    useEffect(() => {
        setTimeout(() => {
            window.location.href = "/";
        }, 1000);
    }, []);

    return (
        <div className="h-screen text-center ">
            <h1 className="text-3xl my-10 font-">Login Success!</h1>
            <p>Redirecting...</p>
        </div>
    );
};

export default page;
