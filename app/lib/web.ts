// web3.ts
"use client"

import { ethers } from "ethers"


// get basic ethereum request
// window
export const getEtherAccount = async () => {
    const ethereum = typeof window !== "undefined" ? window.ethereum : null;
    try {     
        // Finshin connections
        const accounts = await ethereum.request({ method: "eth_requestAccounts" });
        
        return {
            status: "success",
            payload: accounts
        }
    } catch (error) {
        return {
            status: "error",
            payload: error
        }
    }
}