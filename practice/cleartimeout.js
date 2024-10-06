const timeoutId = setTimeout(function(){console.log("Hi");}, 2000);
    clearTimeout(timeoutId);
    console.log(`Timeout ID ${timeoutId} has been cleared`);