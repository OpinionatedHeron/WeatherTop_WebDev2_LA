export const weatherInfo = {
    getMaxTemp(station) {
        let maxTemp = null;
        if (station.reports.length > 0) {
            maxTemp = station.reports[0];
            for (let i = 1; i <  station.reports.length; i++) {
                if (station.reports[i].temp > maxTemp.temp) {
                    maxTemp = station.reports[i];
                }
            }
        }
    return maxTemp;
    },
};