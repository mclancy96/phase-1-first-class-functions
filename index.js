const receivesAFunction = (callbackFunction) => {
    return callbackFunction();
}

const namedFunction = () => {
    console.log("I'm a function")
}

const returnsANamedFunction = () => {
    return namedFunction;
}