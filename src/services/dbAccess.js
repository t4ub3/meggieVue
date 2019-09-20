const LS_DRIVEHISTORY = "driveHistory";
const LS_LAST_PAID_MILEAGE = "lastPaidMileage";
const LS_REFUEL_DATA = "refuelData";

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

export function addRefuel(newRefuel) {
    let refuelData = getRefuelData();
    refuelData.push(parseInt(newRefuel));
    localStorage.setItem(LS_REFUEL_DATA, JSON.stringify(refuelData));
}

export function getRefuelData() {
    let refuelData = localStorage.getItem(LS_REFUEL_DATA);
    if (refuelData !== null) {
        return JSON.parse(refuelData);
    } else {
        return [];
    }
}

export function clearRefuelData() {
    localStorage.setItem(LS_REFUEL_DATA, JSON.stringify([]));
}