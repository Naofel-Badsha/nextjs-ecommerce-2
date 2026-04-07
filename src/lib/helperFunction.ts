import { NextResponse } from "next/server";


export const response = (success: boolean, statusCode: number, message: string, data: any = {}) => {
    return NextResponse.json({ success, statusCode, message, data });
};

export const catchError = (error: any, customMessage: string ) => {
    //-------Handaling duplicate key erroe-------
    if (error.code === 11000) {
        const key = Object.keys(error.keyPattern).join(", ");
        error.message = `Duplicate key error: ${key} Those fields must be unique.`;
    } else {
        console.error("Error:", error);
    }

    let errorObj = {}

    if(process.env.NODE_ENV === "development"){
        errorObj = { 
            message: error.message, 
            error
        }
    }else{
        errorObj = { 
            message: customMessage || 'Internal Server Error', 
        }
    }
    return response(false, 500, customMessage, errorObj);
}