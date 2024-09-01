import { stationStore } from "../models/station-store.js";
import { reportStore } from "../models/report-store.js";

export const reportController = {
  async index(request, response) {
    const stationId = request.params.stationid;
    const reportId = request.params.reportid;
    console.log(`Editing Report ${reportId} from Station ${stationId}`);
    const viewData = {
      title: "Edit Weather Details",
      station: await stationStore.getStationById(stationId),
      report: await reportStore.getReportById(reportId),
      weatherIcon: getWeatherIcon(report.code),
    };
    response.render("report-view", viewData);
  },

  async update(request, response) {
    const stationId = request.params.stationid;
    const reportId = request.params.reportid;
    const updatedReport = {
        code: request.body.code,
        temp: Number(request.body.temp),
        windSpeed: request.body.windSpeed,
        windDirection: request.body.windDirection,
        pressure: request.body.pressure,
    };
    console.log(`Updating Report ${reportId} from Station ${stationId}`);
    await reportStore.updateReport(reportId, updatedReport);
    response.redirect("/station/" + stationId);
  },
};