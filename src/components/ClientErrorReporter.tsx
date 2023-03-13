"use client";

import {useEffect} from "react";

export const ClientErrorReporter = () => {
    useEffect(() => {
        // @ts-ignore
        if (typeof window!=="undefined" && !window.reportReportingEnabled) {
            window.addEventListener("error", (e)=>{
                console.log("error catch",e)
            });
            console.info("Error reporting enabled");
            // @ts-ignore
            window.reportReportingEnabled = true;
        }
    }, []);
    return null;
};
