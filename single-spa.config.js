import { registerApplication, start } from "single-spa";

registerApplication(
    "counter",
    () => import("./pacotes/counter"),
    location => location.pathname === "/counter"
)

registerApplication(
    "todo-list",
    () => import("./pacotes/todo-list"),
    location => location.pathname === "/todo-list"
)

start();