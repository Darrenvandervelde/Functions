const fileName = window.location.pathname.split("/").pop();
const DEBUG = true;

// Debug function
function debug(message) {
    if (DEBUG) {
        console.log("[DEBUG]:", message , " : " , fileName);
    }
}

// Example usage
function testFunction() {

    debug("Test function started");
    debug("hello World")

    const isActive = true;

    if (isActive) {
        debug("User is active");
    }

    debug("Test function finished");
}

testFunction();
