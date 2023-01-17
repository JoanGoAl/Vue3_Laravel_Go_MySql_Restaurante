import store from "@/store";
import UserService from "@/services/userService";

export default {

    authGuardWorker(to, from, next) {
        if (store.getters["user/isAuthWorker"]) {
            next();
        } else {
            next("/login");
        }
    },
    authGuardAdmin(to, from, next) {

        let user = JSON.parse(localStorage.getItem("user"));

        UserService.checkAdmin(user.email)
            .then(function (user) {
                console.log(user);
                if (user.data) {
                    store.state.auth.isAdmin = true;
                    next();
                }
                // user = user.data.user;
                // localStorage.token = user.token;
                // localStorage.setItem("user", JSON.stringify(user));
                // next();
            })
            .catch(function (error) {
                store.state.authUser.isAdmin = false;
                store.state.authUser.isWorker = false;
                console.log("error!!!")
                next("/signin");
            });

    },
    noAuth(to, from, next) {
        console.log(!store.getters["user/isAuthWorker"]);

        if (!store.getters["user/isAuthWorker"]) {
            next();
        } else {
            next("/signin");
        }
    },


};