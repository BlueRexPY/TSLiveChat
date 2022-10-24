import { CHAT_ROUTE, LOGIN_ROUTE, USER_INFO_ROUTE } from "../utils/consts";
import Chat from "./Chat";
import Login from "./Login";
import UserInfo from "./UserInfo";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login,
    }
]

export const privateRoutes = [
    {
        path: CHAT_ROUTE,
        Component: Chat,
    },
    {
        path: USER_INFO_ROUTE,
        Component: UserInfo,
    },
]