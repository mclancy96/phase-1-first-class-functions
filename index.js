const receivesAFunction = (callbackFunction) => {
    return callbackFunction();
}

const namedFunction = () => {
    console.log("I'm a function")
}

const returnsANamedFunction = () => {
    return namedFunction;
}

const returnsAnAnonymousFunction = () => {
    return () => console.log("I'm an anonymous function!")
}