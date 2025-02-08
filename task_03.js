//Write a node js program to read and display the environment varible of the system.

// Read and display all Environment variables
//console.log("System Environment variables: ");
//console.log(process.env);

// Access specific Environment variable
console.log("\nSpecific Environment variable: ");
console.log("HOME: ", process.env.HOME); // For Unix-like systems
console.log("USER: ", process.env.USER); // For Unix-like systems
console.log("PATH: ", process.env.PATH); // Shows system path
console.log("OS: ", process.env.OS); // System's OS name
console.log("PLATFORM: ", process.platform); // Platform 'win32' for Windows, 'darwin' for macOS, 'linux' for Linux

// We can also check for windows specific environment variables
if(process.platform === 'win32'){
    console.log("-------------------------------------------");
    console.log("\nWINDOWS SPECIFIC ENVIRONMENT VARIABLES: ");
    console.log("USERPROFILE: ", process.env.USERPROFILE);
    console.log("TEMP: ", process.env.TEMP);
    console.log("PROGRAMDATA: ", process.env.PROGRAMDATA);
    console.log("-------------------------------------------");
}