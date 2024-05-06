async function scrollDownToCoordinates(driver, x, y) {
    await driver.executeScript(`window.scrollTo(${x}, ${y})`);
}

exports.scrollDownToCoordinates = scrollDownToCoordinates;
