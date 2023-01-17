import store from "@/store";
import UserService from "@/services/userService";

export default {

    authGuardAdmin(to, from, next) {

        let user = JSON.parse(localStorage.getItem("user"));

        if (!user) {
            next("/login");
            return
        }

        UserService.checkAdmin(user.email)
            .then(function (user) {
                if (user.data) {
                    store.state.auth.isAdmin = true;
                    next();
                }
            })
            .catch(function (error) {
                store.state.auth.isAdmin = false;
                store.state.auth.isWorker = false;
                console.log("error!!!")
                next("/login");
            });

    },
    isAuth(to, from, next) {
        if (localStorage.getItem("token")) {
            next();
        } else {
            next("/login");
        }
    },
    isNotAuth(to, from, next) {
        if (localStorage.getItem("token")) {
            next("/");
        } else {
            next();
        }
    }

};