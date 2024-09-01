import { userStore } from "../models/user-store.js";
import { accountsController } from "./accounts-controller.js";

export const userController = {
    index(request, response) {
      const viewData = {
        title: "User Details",
      };
      console.log("user details rendering");
      response.render("user-view", viewData);
    },

    async userDetails(request, response) {
        const user = await accountsController.getLoggedInUser(request);
        if (user) {
            const viewData {
                title: "User Details",
                user: user,
            };
            console.log("User details rendering");
            response.render("user-view", viewData);
        } else {
            response.redirect("/login");
        }
    },
  };