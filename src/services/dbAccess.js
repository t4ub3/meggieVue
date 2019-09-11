const LS_KEY = "driveHistory";

export function addMileageRecord(driver, mileage) {
    console.log(driver);
    console.log(mileage);

    let driveSession = {
        driver: driver,
        mileage: mileage
    };

    let driveHistory = [];
    let localStorageHistory = localStorage.getItem(LS_KEY);

    if (localStorageHistory !== null) {
        driveHistory = JSON.parse(localStorageHistory);
    }
    driveHistory.push(driveSession);

    localStorage.setItem(LS_KEY, JSON.stringify(driveHistory));
}

export function readDriveHistory() {
    let localStorageHistory = localStorage.getItem(LS_KEY);
    if (localStorageHistory !== null) {
        return JSON.parse(localStorageHistory);
    } else {
        return [];
    }
}