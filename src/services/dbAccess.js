import axios from 'axios';
const DB_DRIVEHISTORY = "driveHistory";
const DB_LAST_PAID_MILEAGE = "lastPaidMileage";
const DB_REFUEL_DATA = "refuelData";
const ROOT_URL = "https://meggie.lkg-leipzig.de/wp-json/meggie/v1/";

// axios.defaults.headers.common['X-WP-Nonce'] = window.meggie ? window.meggie.nonce : null

export async function addMileageRecord(driver, mileage) {

    let driveHistory = await readDriveHistory();

    let driveSession = {
        driver: driver,
        mileage: parseInt(mileage),
        distance: calcDistance(mileage, driveHistory)
    };

    driveHistory.push(driveSession);

    await axios.post(ROOT_URL + 'update-' + DB_DRIVEHISTORY, {
        "driveHistory": JSON.stringify(driveHistory)
      })
    }

export async function readDriveHistory() {
    let dbHistory = (await axios.get(ROOT_URL + DB_DRIVEHISTORY)).data;
    if (dbHistory !== null) {
        return JSON.parse(dbHistory);
    } else {
        return [];
    }
}

export async function setLastPaidMileage(mileage) {
    await axios.post(ROOT_URL + 'update-' + DB_LAST_PAID_MILEAGE, {
        "lastPaidMileage": mileage.toString()
    })
}

export async function getLastPaidMileage() {
    let lastPaidMileage = (await axios.get(ROOT_URL + DB_LAST_PAID_MILEAGE)).data;
    if (lastPaidMileage !== null) {
        return parseInt(lastPaidMileage);
    } else {
        return 0;
    }
}

export async function getLastMileage() {
    let driveHistory = await readDriveHistory();
    if (driveHistory.length > 0) {
        return driveHistory[driveHistory.length - 1].mileage;
    } else {
        return 0;
    }
}

export async function addRefuel(newRefuel) {
    let refuelData = await getRefuelData();
    refuelData.push(parseInt(newRefuel));
    await axios.post(ROOT_URL + 'update-' + DB_REFUEL_DATA, {
        "refuelData": JSON.stringify(refuelData)
      })
}

export async function getRefuelData() {
    let refuelData = (await axios.get(ROOT_URL + DB_REFUEL_DATA)).data;
    if (refuelData !== null) {
        return JSON.parse(refuelData);
    } else {
        return [];
    }
}

export async function clearRefuelData() {
    await axios.post(ROOT_URL + 'update-' + DB_REFUEL_DATA, {
        "refuelData": JSON.stringify([])
      })
}

function calcDistance(newMileage, driveHistory) {
    let lastMileage = 0;

    if (driveHistory.length !== 0) {
        lastMileage = driveHistory[driveHistory.length - 1].mileage;
    }
    return newMileage - lastMileage;
}