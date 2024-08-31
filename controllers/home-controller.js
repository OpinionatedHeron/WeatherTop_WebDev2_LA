export const honeController = {
    async index(request, response) {
      const viewData = {
        title: "WeatherTop Homepage",
      };
      console.log("home rendering");
      response.render("home-view", viewData);
    },
  };
  