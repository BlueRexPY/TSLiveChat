import { CHAT_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import Chat from "./Chat";
import Login from "./Login";

export const publicRouts = [
    {
    path: LOGIN_ROUTE,
    Component: Login,
    }   
]

export const privatRouts = [
    {
    path: CHAT_ROUTE,
    Component: Chat,
    }   
]