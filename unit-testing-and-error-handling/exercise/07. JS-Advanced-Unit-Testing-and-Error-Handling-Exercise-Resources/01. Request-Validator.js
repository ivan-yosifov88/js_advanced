function requestValidator(requestObject){
    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    uriRegexPattern = /(^[\w+.]+)$/;
    messageRegexPattern = /([<>\\&'"])/;

    if (requestObject.method == undefined || !validMethods.includes(requestObject.method)){
        throw new Error('Invalid request header: Invalid Method');
    }else if (requestObject.uri == undefined || requestObject.uri == "" || (requestObject.uri != '*' && !uriRegexPattern.test(requestObject.uri))){
        throw new Error('Invalid request header: Invalid URI');
    }else if (requestObject.version == undefined || !validVersions.includes(requestObject.version)){
        throw new Error('Invalid request header: Invalid Version');
    }else if (requestObject.message == undefined || messageRegexPattern.test(requestObject.message)){
        throw new Error('Invalid request header: Invalid Message');
    }
    return requestObject
}




const requestObject = {
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.0',
    message: ''
}

// const requestObject = {
//     method: 'POST',
//     uri: 'home.bash',
//     message: 'rm -rf /*'
//   }

// const requestObject = {
//     method: 'OPTIONS',
//     uri: 'git.master',
//     version: 'HTTP/1.1',
//     message: '-recursive'
//   }

console.log(requestValidator(requestObject))