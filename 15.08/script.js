function edu(subject, callback) {
    console.log(`I wanna teach ${subject}`);
    callback();
}

function done() {
    console.log("That's great");
}

edu("JavaScript", done);