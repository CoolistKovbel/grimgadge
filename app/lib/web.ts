// web3.ts
"use client"
import { ethers } from "ethers"


export const getEtherAccount = async () => {
    try {
        // Finshin connections
        
        return {
            status: "success",
            payload: ""
        }
    } catch (error) {
        return {
            status: "error",
            payload: error
        }
    }
}