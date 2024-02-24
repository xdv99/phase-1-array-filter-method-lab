// Code your solution here
function findMatching (drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch (drivers, letters) {
    const endIndex = letters.length;
    return drivers.filter(driver => driver.slice(0, endIndex) === letters);
}


function matchName (drivers, name) {
    return drivers.filter(driver => driver.name === name);
}