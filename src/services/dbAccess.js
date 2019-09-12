const LS_DRIVEHISTORY = "driveHistory";
const LS_LAST_PAID_MILEAGE = "lastPaidMileage";

export function addMileageRecord(driver, mileage) {
    console.log(driver);
    console.log(mileage);

    let driveHistory = readDriveHistory();

    let driveSession = {
        driver: driver,
        mileage: parseInt(mileage),
        distance: calcDistance(mileage, driveHistory)
    };

    driveHistory.push(driveSession);

    localStorage.setItem(LS_DRIVEHISTORY, JSON.stringify(driveHistory));
}

export function readDriveHistory() {
    let localStorageHistory = localStorage.getItem(LS_DRIVEHISTORY);
    if (localStorageHistory !== null) {
        return JSON.parse(localStorageHistory);
    } else {
        return [];
    }
}

export function setLastPaidMileage(mileage) {
    localStorage.setItem(LS_LAST_PAID_MILEAGE, mileage.toString());
}

export function getLastPaidMileage() {
    let lastPaidMileage = localStorage.getItem(LS_LAST_PAID_MILEAGE);
    if (lastPaidMileage !== null) {
        return parseInt(lastPaidMileage);
    } else {
        return 0;
    }
}

function calcDistance(newMileage, driveHistory) {
    let lastMileage = 0;

    if (driveHistory.length !== 0) {
        lastMileage = driveHistory[driveHistory.length - 1].mileage;
    }
    return newMileage - lastMileage;
}