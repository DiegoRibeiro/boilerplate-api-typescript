export enum operation {
    ADDITION = 0,
    SUBTRACTION = 1,
    MULTIPLICATION = 2,
    DIVISION = 3
}

export enum errorCodes {
    UNSUPPORTED_OPERATION = -1,
    DIVISION_BY_ZERO = -2
}

export interface params {
    a: number,
    b: number
}

export interface responseOperation {
    errorCode?: number,
    errorMessage?: string,
    result?: number
}

export interface userModel {
    firstName: string,
    lastName: string,
    age: number
}