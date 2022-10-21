import { CHAT_ROUTE, LOGIN_ROUTE, USER_INFO_ROUTE } from "../utils/consts";
import Chat from "./Chat";
import Login from "./Login";
import UserInfo from "./UserInfo";

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
    },
    {
        path: USER_INFO_ROUTE,
        Component: UserInfo,
    },
]