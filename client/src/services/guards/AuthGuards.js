import store from "@/store";
import UserService from "@/services/userService";
import { createToaster } from "@meforma/vue-toaster";

const toaster = createToaster();

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
            toaster.info("Debes iniciar sesión para acceder a esta página");
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