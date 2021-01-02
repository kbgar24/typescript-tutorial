
// Arguments must always have type annotations!
// Don't NEED to have type annotations for return value, BUT YOU SHOULD!
const add = (a: number, b: number): number => {
    return a + b;
}

function divide(a: number, b: number): number {
    return a / b;
}

// Return nothing (or undefined, or null )
const logger = (message: string): void => {
    console.log(message);
}

// When never, ever expect something to return (or to reach return statement)
const throwError = (message: string): never => {
    throw new Error(message)
}