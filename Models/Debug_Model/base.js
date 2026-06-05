//------------------Debug Model------------------//

// Pull Document File Name
const fileName = window.location.pathname.split("/").pop();

// Debug if Enable Console logs all messages to the console.
const Enable = true;

// Log Use for loging Messages that have a state of run in it.
function log(message) {
    if(Enable === true) {
        console.log("[DEBUG LOG]", message, fileName);
    }
}

// Error Use for logging in most of the else statements if the code runs in a error or does not work. 
function error(message) {
    if(Enable === true) {
        console.log("[DEBUG ERROR]", message, fileName );
    }
}

// Warn Use for logging warning for System logic for version and software installed. 
function warn(message) {
    if (Enable === true) {
        console.log("[DEBUG WARNING]", message, fileName)
    }
}
