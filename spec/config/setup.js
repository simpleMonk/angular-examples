if (typeof process !== 'undefined' && process.title === 'node') {
    setupForNode();
} else if (typeof process === "object" && process.title === "gulp") {
    setupForNode();
} else {
    setupForBrowser();
}

function setupForNode() {
    // We are in node. Require modules.
    expect = require('chai').expect;
    isBrowser = false;
}

function setupForBrowser() {
    // We are in the browser. Set up variables like above using served js files.
    expect = chai.expect;
    // num and sinon already exported globally in the browser.
    isBrowser = true;
}