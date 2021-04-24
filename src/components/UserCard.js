import React from "react";
import { useDispatch, useSelector } from "react-redux";
import app from '../base.js';
import { logoutUser } from "../store/curUser/actions";
import { Link } from 'react-router-dom';



export function UserCard() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.curUser);
    const defaultUserPic = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDgwIDQ4MCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDgwIDQ4MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0yNDAsMEMxMDcuNjY0LDAsMCwxMDcuNjY0LDAsMjQwYzAsNTcuOTYsMjAuNjU2LDExMS4xODQsNTQuOTkyLDE1Mi43MDRjMC4wODgsMC4xMiwwLjA5NiwwLjI3MiwwLjE5MiwwLjM4NA0KCQkJYzI0Ljc5MiwyOS44OTYsNTUuOTI4LDUyLjgxNiw5MC42MjQsNjcuNjI0YzAuNCwwLjE2OCwwLjc5MiwwLjM1MiwxLjE5MiwwLjUyYzIuODA4LDEuMTg0LDUuNjQ4LDIuMjgsOC40OTYsMy4zNTINCgkJCWMxLjEyLDAuNDI0LDIuMjQsMC44NTYsMy4zNzYsMS4yNjRjMi40NTYsMC44OCw0LjkyOCwxLjcxMiw3LjQxNiwyLjUxMmMxLjU5MiwwLjUxMiwzLjE4NCwxLjAxNiw0Ljc5MiwxLjQ5Ng0KCQkJYzIuMiwwLjY1Niw0LjQwOCwxLjI4OCw2LjYzMiwxLjg4OGMxLjk1MiwwLjUyOCwzLjkyLDEuMDE2LDUuODg4LDEuNDg4YzEuOTkyLDAuNDgsMy45OTIsMC45Niw2LDEuMzg0DQoJCQljMi4yNCwwLjQ4LDQuNTA0LDAuOTA0LDYuNzc2LDEuMzJjMS44MjQsMC4zMzYsMy42NCwwLjY4OCw1LjQ4LDAuOTg0YzIuNTIsMC40MDgsNS4wNTYsMC43MjgsNy42LDEuMDU2DQoJCQljMS42NCwwLjIwOCwzLjI3MiwwLjQ0OCw0LjkyLDAuNjI0YzIuODgsMC4zMDQsNS43ODQsMC41Miw4LjY5NiwwLjcyYzEuMzUyLDAuMDk2LDIuNjk2LDAuMjQsNC4wNTYsMC4zMTINCgkJCWM0LjI0OCwwLjI0LDguNTQ0LDAuMzY4LDEyLjg3MiwwLjM2OHM4LjYyNC0wLjEyOCwxMi44ODgtMC4zNTJjMS4zNi0wLjA3MiwyLjcwNC0wLjIxNiw0LjA1Ni0wLjMxMg0KCQkJYzIuOTEyLTAuMjA4LDUuODE2LTAuNDE2LDguNjk2LTAuNzJjMS42NDgtMC4xNzYsMy4yOC0wLjQxNiw0LjkyLTAuNjI0YzIuNTQ0LTAuMzI4LDUuMDgtMC42NDgsNy42LTEuMDU2DQoJCQljMS44MzItMC4yOTYsMy42NTYtMC42NDgsNS40OC0wLjk4NGMyLjI2NC0wLjQxNiw0LjUyOC0wLjg0LDYuNzc2LTEuMzJjMi4wMDgtMC40MzIsNC0wLjkwNCw2LTEuMzg0DQoJCQljMS45NjgtMC40OCwzLjkzNi0wLjk2OCw1Ljg4OC0xLjQ4OGMyLjIyNC0wLjU5Miw0LjQzMi0xLjIzMiw2LjYzMi0xLjg4OGMxLjYwOC0wLjQ4LDMuMi0wLjk4NCw0Ljc5Mi0xLjQ5Ng0KCQkJYzIuNDg4LTAuOCw0Ljk2LTEuNjMyLDcuNDE2LTIuNTEyYzEuMTI4LTAuNDA4LDIuMjQ4LTAuODQsMy4zNzYtMS4yNjRjMi44NTYtMS4wNzIsNS42ODgtMi4xNzYsOC40OTYtMy4zNTINCgkJCWMwLjQtMC4xNjgsMC43OTItMC4zNTIsMS4xOTItMC41MmMzNC42ODgtMTQuODA4LDY1LjgzMi0zNy43MjgsOTAuNjI0LTY3LjYyNGMwLjA5Ni0wLjExMiwwLjEwNC0wLjI3MiwwLjE5Mi0wLjM4NA0KCQkJQzQ1OS4zNDQsMzUxLjE4NCw0ODAsMjk3Ljk2LDQ4MCwyNDBDNDgwLDEwNy42NjQsMzcyLjMzNiwwLDI0MCwweiBNMzM3LjI1Niw0NDEuNzZjLTAuMTIsMC4wNTYtMC4yMzIsMC4xMi0wLjM1MiwwLjE3Ng0KCQkJYy0yLjg1NiwxLjM3Ni01Ljc2LDIuNjcyLTguNjg4LDMuOTM2Yy0wLjY2NCwwLjI4LTEuMzIsMC41NjgtMS45ODQsMC44NDhjLTIuNTYsMS4wNzItNS4xNTIsMi4wODgtNy43NiwzLjA2NA0KCQkJYy0xLjA4OCwwLjQwOC0yLjE3NiwwLjgwOC0zLjI3MiwxLjE5MmMtMi4zMTIsMC44MjQtNC42MzIsMS42MTYtNi45NzYsMi4zNjhjLTEuNDU2LDAuNDY0LTIuOTIsMC45MDQtNC4zODQsMS4zMzYNCgkJCWMtMi4wOCwwLjYyNC00LjE2OCwxLjIyNC02LjI4LDEuNzg0Yy0xLjc3NiwwLjQ3Mi0zLjU2OCwwLjkwNC01LjM2LDEuMzI4Yy0xLjg4LDAuNDQ4LTMuNzUyLDAuOTA0LTUuNjQ4LDEuMzA0DQoJCQljLTIuMDcyLDAuNDQtNC4xNiwwLjgxNi02LjI0LDEuMTkyYy0xLjY4OCwwLjMxMi0zLjM2OCwwLjY0LTUuMDcyLDAuOTEyYy0yLjM0NCwwLjM2OC00LjcxMiwwLjY2NC03LjA3MiwwLjk2DQoJCQljLTEuNDk2LDAuMTkyLTIuOTg0LDAuNDE2LTQuNDk2LDAuNTc2Yy0yLjY5NiwwLjI4OC01LjQxNiwwLjQ3Mi04LjEyOCwwLjY2NGMtMS4yMDgsMC4wOC0yLjQwOCwwLjIxNi0zLjYzMiwwLjI4DQoJCQljLTMuOTYsMC4yMDgtNy45MjgsMC4zMi0xMS45MTIsMC4zMnMtNy45NTItMC4xMTItMTEuOTA0LTAuMzJjLTEuMjE2LTAuMDY0LTIuNDE2LTAuMTkyLTMuNjMyLTAuMjgNCgkJCWMtMi43Mi0wLjE4NC01LjQzMi0wLjM3Ni04LjEyOC0wLjY2NGMtMS41MTItMC4xNi0zLTAuMzg0LTQuNDk2LTAuNTc2Yy0yLjM2LTAuMjk2LTQuNzI4LTAuNTkyLTcuMDcyLTAuOTYNCgkJCWMtMS43MDQtMC4yNzItMy4zODQtMC42LTUuMDcyLTAuOTEyYy0yLjA4OC0wLjM3Ni00LjE3Ni0wLjc2LTYuMjQtMS4xOTJjLTEuODk2LTAuNC0zLjc3Ni0wLjg1Ni01LjY0OC0xLjMwNA0KCQkJYy0xLjc5Mi0wLjQzMi0zLjU4NC0wLjg1Ni01LjM2LTEuMzI4Yy0yLjEwNC0wLjU2LTQuMi0xLjE2OC02LjI4LTEuNzg0Yy0xLjQ2NC0wLjQzMi0yLjkyOC0wLjg3Mi00LjM4NC0xLjMzNg0KCQkJYy0yLjM0NC0wLjc1Mi00LjY3Mi0xLjU0NC02Ljk3Ni0yLjM2OGMtMS4wOTYtMC4zOTItMi4xODQtMC43OTItMy4yNzItMS4xOTJjLTIuNjA4LTAuOTc2LTUuMi0xLjk5Mi03Ljc2LTMuMDY0DQoJCQljLTAuNjY0LTAuMjcyLTEuMzEyLTAuNTYtMS45NzYtMC44NGMtMi45MjgtMS4yNTYtNS44MzItMi41Ni04LjY5Ni0zLjkzNmMtMC4xMi0wLjA1Ni0wLjIzMi0wLjExMi0wLjM1Mi0wLjE3Ng0KCQkJYy0yNy45MTItMTMuNTA0LTUyLjU2OC0zMi42NzItNzIuNTc2LTU1Ljk1MmMxNS40NjQtNTYuOTQ0LDU5LjI0LTEwMi44NDgsMTE1LjU2LTEyMS4xMTJjMS4xMTIsMC42OCwyLjI3MiwxLjI4OCwzLjQxNiwxLjkyOA0KCQkJYzAuNjcyLDAuMzc2LDEuMzM2LDAuNzc2LDIuMDE2LDEuMTM2YzIuMzg0LDEuMjY0LDQuOCwyLjQ0OCw3LjI3MiwzLjUxMmMxLjg5NiwwLjgzMiwzLjg1NiwxLjUzNiw1LjgwOCwyLjI1Ng0KCQkJYzAuMzg0LDAuMTM2LDAuNzY4LDAuMjg4LDEuMTUyLDAuNDI0YzEwLjg0OCwzLjg0LDIyLjQ1Niw2LjA0LDM0LjYsNi4wNHMyMy43NTItMi4yLDM0LjU5Mi02LjA0DQoJCQljMC4zODQtMC4xMzYsMC43NjgtMC4yODgsMS4xNTItMC40MjRjMS45NTItMC43MiwzLjkxMi0xLjQyNCw1LjgwOC0yLjI1NmMyLjQ3Mi0xLjA2NCw0Ljg4OC0yLjI0OCw3LjI3Mi0zLjUxMg0KCQkJYzAuNjgtMC4zNjgsMS4zNDQtMC43NiwyLjAxNi0xLjEzNmMxLjE0NC0wLjY0LDIuMzEyLTEuMjQ4LDMuNDMyLTEuOTM2YzU2LjMyLDE4LjI3MiwxMDAuMDg4LDY0LjE3NiwxMTUuNTYsMTIxLjExMg0KCQkJQzM4OS44MjQsNDA5LjA4LDM2NS4xNjgsNDI4LjI0OCwzMzcuMjU2LDQ0MS43NnogTTE1MiwxNzZjMC00OC41MiwzOS40OC04OCw4OC04OHM4OCwzOS40OCw4OCw4OA0KCQkJYzAsMzAuODY0LTE2LjAwOCw1OC4wMjQtNDAuMTI4LDczLjczNmMtMy4xNTIsMi4wNDgtNi40MzIsMy44OC05LjgsNS40OGMtMC40LDAuMTkyLTAuNzkyLDAuMzkyLTEuMTkyLDAuNTc2DQoJCQljLTIzLjE2OCwxMC41MzYtNTAuNTkyLDEwLjUzNi03My43NiwwYy0wLjQtMC4xODQtMC44LTAuMzg0LTEuMTkyLTAuNTc2Yy0zLjM3Ni0xLjYtNi42NDgtMy40MzItOS44LTUuNDgNCgkJCUMxNjguMDA4LDIzNC4wMjQsMTUyLDIwNi44NjQsMTUyLDE3NnogTTQyMS44MzIsMzcwLjU4NGMtMTguMTM2LTUzLjU1Mi01OS41MTItOTYuODMyLTExMi4zNzYtMTE3LjM5Mg0KCQkJQzMzMC42LDIzNC4xNDQsMzQ0LDIwNi42NCwzNDQsMTc2YzAtNTcuMzQ0LTQ2LjY1Ni0xMDQtMTA0LTEwNHMtMTA0LDQ2LjY1Ni0xMDQsMTA0YzAsMzAuNjQsMTMuNCw1OC4xNDQsMzQuNTUyLDc3LjE5Mg0KCQkJYy01Mi44NjQsMjAuNTY4LTk0LjI0LDYzLjg0LTExMi4zNzYsMTE3LjM5MkMzMS42NzIsMzMzLjc5MiwxNiwyODguNzA0LDE2LDI0MEMxNiwxMTYuNDg4LDExNi40ODgsMTYsMjQwLDE2czIyNCwxMDAuNDg4LDIyNCwyMjQNCgkJCUM0NjQsMjg4LjcwNCw0NDguMzI4LDMzMy43OTIsNDIxLjgzMiwzNzAuNTg0eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"
    return (
        <div>
            <div className="bg-white rounded overflow-hidden shadow-lg">
                <div className="text-center p-6  border-b">
                    <img
                        className="h-24 w-24 rounded-full mx-auto"
                        src={user.photoURL === null ? defaultUserPic : user.photoURL}
                        alt={user.displayName === null ? user.email : user.displayName}
                    />
                    <p className="pt-2 text-lg font-semibold">{user.displayName === null ? user.email : user.displayName}</p>
                    <p className="text-sm text-gray-600 truncate">{user.email}</p>
                </div>
                <div className="border-b">
                    <a href="/addtrip" className="px-4 py-2 hover:bg-gray-100 flex">
                        <div className="flex items-center">
                            <div className="text-gray-800">
                                <svg height="20" viewBox="0 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m256 512c-141.164062 0-256-114.835938-256-256s114.835938-256 256-256 256 114.835938 256 256-114.835938 256-256 256zm0-480c-123.519531 0-224 100.480469-224 224s100.480469 224 224 224 224-100.480469 224-224-100.480469-224-224-224zm0 0" /><path d="m368 272h-224c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h224c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
                                    <path d="m256 384c-8.832031 0-16-7.167969-16-16v-224c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v224c0 8.832031-7.167969 16-16 16zm0 0" />
                                </svg>

                            </div>
                            <div className="pl-3">
                                <p className="text-sm font-medium text-gray-800 leading-none">Add trip</p>
                            </div>
                        </div>
                    </a>
                    <a href="/:user/trips" className="px-4 py-2 hover:bg-gray-100 flex">
                        <div className="flex items-center">
                            <div className="text-gray-800">
                                <img className="h-5 w-5" src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjU4MXB0IiB2aWV3Qm94PSIwIDAgNTgxIDU4MS4zNTgxNiIgd2lkdGg9IjU4MXB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0zMjkuMzk4NDM4IDM2Ny45ODA0NjljMCA1My40NzY1NjIgNDMuMzUxNTYyIDk2LjgyODEyNSA5Ni44MjgxMjQgOTYuODI4MTI1IDUzLjQ3MjY1NyAwIDk2LjgyNDIxOS00My4zNTE1NjMgOTYuODI0MjE5LTk2LjgyODEyNSAwLTUzLjQ3MjY1Ny00My4zNTE1NjItOTYuODI0MjE5LTk2LjgyNDIxOS05Ni44MjQyMTktNTMuNDUzMTI0LjA1ODU5NC05Ni43Njk1MzEgNDMuMzc1LTk2LjgyODEyNCA5Ni44MjQyMTl6bTk2LjgyODEyNC03Ny40NjA5MzhjNDIuNzgxMjUgMCA3Ny40NjA5MzggMzQuNjc5Njg4IDc3LjQ2MDkzOCA3Ny40NjA5MzhzLTM0LjY3OTY4OCA3Ny40NjA5MzctNzcuNDYwOTM4IDc3LjQ2MDkzNy03Ny40NjA5MzctMzQuNjc5Njg3LTc3LjQ2MDkzNy03Ny40NjA5MzdjLjA0Njg3NS00Mi43NTc4MTMgMzQuNjk5MjE5LTc3LjQxNDA2MyA3Ny40NjA5MzctNzcuNDYwOTM4em0wIDAiLz48cGF0aCBkPSJtMzcwLjg5ODQzOCA1NjEuNjM2NzE5aDExMC42NjQwNjJ2MTkuMzYzMjgxaC0xMTAuNjY0MDYyem0wIDAiLz48cGF0aCBkPSJtMzI5LjM5ODQzOCA1MjIuOTAyMzQ0aDE5My42NTYyNXYxOS4zNjcxODdoLTE5My42NTYyNXptMCAwIi8+PHBhdGggZD0ibTExNi4zNzg5MDYgNTIyLjkwMjM0NGgxOS4zNjcxODh2MTkuMzY3MTg3aC0xOS4zNjcxODh6bTAgMCIvPjxwYXRoIGQ9Im01OC4yODUxNTYgNTQyLjI2OTUzMWgxOS4zNjMyODJ2MTkuMzY3MTg4aC0xOS4zNjMyODJ6bTAgMCIvPjxwYXRoIGQ9Im0xMTcuMzQ3NjU2IDQ2OC40MTc5NjljNTAuNTU4NTk0LTg4LjA1NDY4OCA4Mi4yODEyNS0xODUuNjUyMzQ0IDkzLjE1NjI1LTI4Ni42MDU0NjlsOTAuMDUwNzgyIDg5LjUxNTYyNWMxLjgwMDc4MSAxLjc5Mjk2OSA0LjIzNDM3NCAyLjgwNDY4NyA2Ljc3NzM0MyAyLjgxNjQwNi41MjM0MzguMDAzOTA3IDEuMDUwNzgxLS4wMzkwNjIgMS41NjY0MDctLjEyNSAzLjA3MDMxMi0uNSA1LjcxMDkzNy0yLjQ0NTMxMiA3LjA5NzY1Ni01LjIyNjU2MiAxOC4yNTM5MDYtMzYuNDMzNTk0IDExLjEwNTQ2OC04MC40NjQ4NDQtMTcuNzM4MjgyLTEwOS4yNWwtNy45MTc5NjgtNy45MjE4NzVoNjguMTA1NDY4YzUuMzQ3NjU3LjAwMzkwNiA5LjY4NzUtNC4zMjgxMjUgOS42ODc1LTkuNjc1NzgyLjAwMzkwNy0xLjA0Njg3NC0uMTY3OTY4LTIuMDg1OTM3LS40OTYwOTMtMy4wNzQyMTgtMTIuODU5Mzc1LTM4LjY3MTg3NS00OS4wNDY4NzUtNjQuNzUtODkuODAwNzgxLTY0LjcxMDkzOGgtMTIuNTg1OTM4bDQ4LjM1NTQ2OS00OC42MzY3MThjMy43NzM0MzctMy43ODkwNjMgMy43NTc4MTItOS45MTc5NjktLjAzMTI1LTEzLjY5MTQwNy0uNzM0Mzc1LS43MzA0NjktMS41NzgxMjUtMS4zMzk4NDMtMi41MDM5MDctMS44MDA3ODEtMzYuNDQ5MjE4LTE4LjI3MzQzOC04MC41MDM5MDYtMTEuMTI4OTA2LTEwOS4zMDg1OTMgMTcuNzMwNDY5bC05LjI0NjA5NCA5LjI0NjA5M2MtMy4wMTU2MjUgMy4wMzUxNTctNS44MTY0MDYgNi4yNjk1MzItOC4zOTQ1MzEgOS42ODM1OTQtMi41NDY4NzUtMy40MTQwNjItNS4zMjgxMjUtNi42NDg0MzctOC4zMjAzMTMtOS42ODM1OTRsLTkuMjQ2MDkzLTkuMjQ2MDkzYy0yOC43ODEyNS0yOC44Mzk4NDQtNzIuODEyNS0zNS45ODQzNzUtMTA5LjIzODI4Mi0xNy43MzA0NjktNC43ODUxNTYgMi4zOTA2MjUtNi43MjY1NjIgOC4yMDcwMzEtNC4zMzU5MzcgMTIuOTg4MjgxLjQ2MDkzNy45MjU3ODEgMS4wNzAzMTIgMS43Njk1MzEgMS44MDA3ODEgMi41MDM5MDdsNDguNDEwMTU2IDQ4LjYzNjcxOGgtMTIuNzEwOTM3Yy00MC43NTM5MDctLjAzOTA2Mi03Ni45NDUzMTMgMjYuMDM5MDYzLTg5LjgwMDc4MSA2NC43MTA5MzgtMS42OTUzMTMgNS4wNzAzMTIgMS4wNDI5NjggMTAuNTU0Njg3IDYuMTE3MTg3IDEyLjI1Ljk4ODI4MS4zMzIwMzEgMi4wMjczNDQuNSAzLjA3NDIxOS41aDY4LjAzOTA2MmwtNy45MTc5NjggNy45MjE4NzVjLTI4Ljg0Mzc1IDI4Ljc4NTE1Ni0zNS45OTIxODggNzIuODE2NDA2LTE3Ljc0MjE4OCAxMDkuMjUgMS4zOTA2MjUgMi43ODEyNSA0LjAzMTI1IDQuNzI2NTYyIDcuMDk3NjU2IDUuMjI2NTYyLjUxOTUzMi4wODU5MzggMS4wNDI5NjkuMTI4OTA3IDEuNTcwMzEzLjEyNSAyLjU1ODU5MyAwIDUuMDExNzE5LTEuMDExNzE5IDYuODI0MjE5LTIuODE2NDA2bDgzLjg1NTQ2OC04My4zNTkzNzVjLTEwLjM4MjgxMiA5Mi43ODUxNTYtNDUuMzI4MTI1IDE4MS4xMjEwOTQtMTAxLjIzNDM3NSAyNTUuODk0NTMxLTEzLjAxNTYyNS0zLjQxNzk2OS0yNi4yMTA5MzctNi4xMDkzNzUtMzkuNTIzNDM3LTguMDU0Njg3bC02LjA1MDc4Mi0uNjA5Mzc1LTEuOTM3NSAxOS4yNzczNDMgNS42NDQ1MzIuNTUwNzgyYzkuNjgzNTk0IDEuMzg2NzE4IDE5LjMwNDY4NyAzLjM0Mzc1IDI4Ljg3NSA1LjU1ODU5NC0xLjkzNzUgMi40Mjk2ODctMy44NzUgNC44OTg0MzctNS44Nzg5MDYgNy4yOTI5NjhsMTQuODUxNTYyIDEyLjQyMTg3NWM3NC40MTAxNTYtODguNDY4NzUgMTE4Ljc2OTUzMS0xOTguMzAwNzgxIDEyNi42NzE4NzUtMzEzLjYzMjgxMmwxMS4xNDQ1MzEtMTEuMDc0MjE5IDguMzQzNzUgOC4yOTY4NzVjLTEwLjE3OTY4NyAxMjMuMzM5ODQ0LTUyLjUxNTYyNSAyNDEuODU5Mzc1LTEyMi43ODUxNTYgMzQzLjczNDM3NWwxNS44NTkzNzUgMTEuMDk3NjU2YzcuNjEzMjgxLTEwLjg2NzE4NyAxNC44NzUtMjIuMTQ0NTMxIDIxLjkxNDA2My0zMy42MzY3MTggNDUuMjkyOTY4IDIxLjY2NDA2MiA4NS4yODUxNTYgNTIuOTk2MDkzIDExNy4xNjAxNTYgOTEuNzg5MDYybDE0Ljk3NjU2Mi0xMi4yNjk1MzFjLTE4Ljg0NzY1Ni0yMi45MTQwNjMtNDAuNDQxNDA2LTQzLjQyNTc4MS02NC4zMDA3ODEtNjEuMDY2NDA3aDQwNS44MjAzMTN2LTE5LjM2NzE4N2gtNDM0LjUwNzgxM2MtOS40OTIxODctNS43MzA0NjktMTkuMjg5MDYzLTEwLjkyMTg3NS0yOS4yOTI5NjktMTUuNzUzOTA2em0xODYuNDI5Njg4LTIyMS4yMTA5MzgtMTAyLjMwNDY4OC0xMDEuNzE0ODQzYzI2LjE2Nzk2OS03LjgxMjUgNTQuNTExNzE5LS43MjI2NTcgNzMuOTE3OTY5IDE4LjQ5MjE4N2w5LjI0NjA5NCA5LjI1YzE5LjM3MTA5MyAxOS4zMzU5MzcgMjYuNjk5MjE5IDQ3LjY2Nzk2OSAxOS4xNDA2MjUgNzMuOTcyNjU2em0zOS44OTQ1MzEtMTE0Ljk0OTIxOWgtODAuMTcxODc1Yy0xOC42NzE4NzUtOC44ODY3MTgtMzkuNzM4MjgxLTExLjQwMjM0My01OS45NzY1NjItNy4xNTYyNSAxNC4wODk4NDMtMTkuODEyNSAzNi44OTQ1MzEtMzEuNTc4MTI0IDYxLjIwNzAzMS0zMS41NzQyMThoMTMuMDcwMzEyYzI3LjM3MTA5NC0uMDQyOTY5IDUyLjYwMTU2MyAxNC43OTI5NjggNjUuODcxMDk0IDM4LjczMDQ2OHptLTEzNy40OTYwOTQtODEuNTU4NTkzIDkuMjUtOS4yNDYwOTRjMTkuMzUxNTYzLTE5LjM3NSA0Ny42OTUzMTMtMjYuNzA3MDMxIDc0LjAxMTcxOS0xOS4xNDQ1MzFsLTU3LjM5ODQzOCA1Ny43MzgyODFjLTE4LjYyODkwNiA2Ljg1NTQ2OS0zNC42MjEwOTMgMTkuNDEwMTU2LTQ1LjcxMDkzNyAzNS44NzUtNC41MDM5MDYtMjMuNjg3NSAyLjkyNTc4MS00OC4wNzgxMjUgMTkuODc4OTA2LTY1LjIyMjY1NnptLTUzLjMzOTg0My05LjI0NjA5NCA5LjI0NjA5MyA5LjI0NjA5NGM0LjMxMjUgNC40MDIzNDMgOC4wNTQ2ODggOS4zMzIwMzEgMTEuMTM2NzE5IDE0LjY2Nzk2OS00LjM4NjcxOSAxMC4xOTkyMTgtNi44OTA2MjUgMjEuMTAxNTYyLTcuMzk4NDM4IDMyLjE4NzUtOC42OTE0MDYtNy41OTM3NS0xOC43MDMxMjQtMTMuNTIzNDM4LTI5LjUzMTI1LTE3LjUwNzgxM2wtNTcuNDEwMTU2LTU3LjczODI4MWMyNi4zMDg1OTQtNy41NTg1OTQgNTQuNjQ0NTMyLS4yMjY1NjMgNzMuOTg0Mzc1IDE5LjE0NDUzMXptLTYyLjM4NjcxOSA1Mi4wNzQyMTloMTMuMDc0MjE5YzI0LjMyODEyNC0uMDIzNDM4IDQ3LjE2NDA2MiAxMS43MzgyODEgNjEuMjY5NTMxIDMxLjU2MjUtMjAuMjI2NTYzLTQuMjMwNDY5LTQxLjI4NTE1Ny0xLjcxNDg0NC01OS45NDUzMTMgNy4xNjc5NjhoLTgwLjIwMzEyNWMxMy4yNjU2MjUtMjMuOTI1NzgxIDM4LjQ3NjU2My0zOC43NTc4MTIgNjUuODM1OTM4LTM4LjczMDQ2OHptLTI1LjkxMDE1NyAxNTMuNjc5Njg3Yy03LjU1ODU5My0yNi4zMDQ2ODctLjIyNjU2Mi01NC42MzY3MTkgMTkuMTQ0NTMyLTczLjk3MjY1Nmw5LjI0NjA5NC05LjI1YzEzLjkyOTY4Ny0xMy44OTQ1MzEgMzIuODIwMzEyLTIxLjY3MTg3NSA1Mi41LTIxLjYwOTM3NSA3LjI2MTcxOC4wMDM5MDYgMTQuNDg0Mzc0IDEuMDM5MDYyIDIxLjQ1NzAzMSAzLjA3ODEyNXptMCAwIi8+PC9zdmc+" />
                            </div>
                            <div className="pl-3">
                                <p className="text-sm font-medium text-gray-800 leading-none">My trips</p>
                            </div>
                        </div>
                    </a>
                    <a href="/:user/friends" className="px-4 py-2 hover:bg-gray-100 flex">
                        <div className="flex items-center">
                            <div className="text-green-600">
                                <img className="w-5 h-5" src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMXB0IiB2aWV3Qm94PSIwIC03MCA1MTEuOTk5ODcgNTExIiB3aWR0aD0iNTExcHQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTUxMS40NzI2NTYgMjYxLjU1MDc4MWMtOC40NTMxMjUtNDcuNjA5Mzc1LTQwLjA0Njg3NS04NS44MzU5MzctODEuNzA3MDMxLTEwMy41NjY0MDYgMTguNDg4MjgxLTE1LjUwMzkwNiAzMC4yOTY4NzUtMzguOTgwNDY5IDMwLjI5Njg3NS02NS4yMDcwMzEgMC00Ni41ODIwMzItMzcuMjM0Mzc1LTg0LjQ4MDQ2OS04My4wMDM5MDYtODQuNDgwNDY5LTQ1Ljc2OTUzMiAwLTgzLjAwMzkwNiAzNy44OTQ1MzEtODMuMDAzOTA2IDg0LjQ4MDQ2OSAwIDI2LjI0MjE4NyAxMS44MjAzMTIgNDkuNzI2NTYyIDMwLjMyODEyNCA2NS4yMzQzNzUtNi45MDYyNSAyLjk0NTMxMi0xMy41OTc2NTYgNi40NjA5MzctMTkuOTg4MjgxIDEwLjU1ODU5My0xNi4xMDU0NjkgMTAuMzI4MTI2LTI5Ljg1NTQ2OSAyMy45Mjk2ODgtNDAuNDUzMTI1IDM5Ljg1OTM3Ni0xMC43ODUxNTYtNy4xNjQwNjMtMjIuMzgyODEyLTEzLjEyNS0zNC42MDkzNzUtMTcuNjk5MjE5IDI2LjI3NzM0NC0xOC45OTYwOTQgNDMuNDU3MDMxLTUwLjIzMDQ2OSA0My40NTcwMzEtODUuNDc2NTYzIDAtNTcuNzYxNzE4LTQ2LjEzNjcxOC0xMDQuNzUzOTA2LTEwMi44NDc2NTYtMTA0Ljc1MzkwNi01Ni43MTA5MzcgMC0xMDIuODQ3NjU2IDQ2Ljk5MjE4OC0xMDIuODQ3NjU2IDEwNC43NTM5MDYgMCAzNS4yNDYwOTQgMTcuMTc5Njg4IDY2LjQ4MDQ2OSA0My40NTcwMzEgODUuNDc2NTYzLTU1LjkyMTg3NSAyMC45MjE4NzUtOTguODEyNSA3MC42NzU3ODEtMTA5LjkzNzUgMTMzLjMxNjQwNi0yLjA1NDY4NyAxMS41ODIwMzEgMS4xMDE1NjMgMjMuMzk0NTMxIDguNjUyMzQ0IDMyLjQxMDE1NiA3LjQ4MDQ2OSA4LjkyNTc4MSAxOC4zOTQ1MzEgMTQuMDQyOTY5IDI5Ljk0NTMxMyAxNC4wNDI5NjloMjYxLjQ2MDkzN2MxMS41NTA3ODEgMCAyMi40NjQ4NDQtNS4xMTcxODggMjkuOTQ1MzEzLTE0LjA0Mjk2OSA3LjU1NDY4Ny05LjAxNTYyNSAxMC43MDcwMzEtMjAuODI4MTI1IDguNjUyMzQzLTMyLjQxMDE1Ni0xLjM3MTA5My03LjcyNjU2My0zLjIzMDQ2OS0xNS4yNTM5MDYtNS41MzEyNS0yMi41NTQ2ODdoMTQ0LjUxNTYyNWM5Ljk0NTMxMyAwIDE5LjM0Mzc1LTQuNDA2MjUgMjUuNzgxMjUtMTIuMDg1OTM4IDYuNDkyMTg4LTcuNzQ2MDk0IDkuMjAzMTI1LTE3LjkwMjM0NCA3LjQzNzUtMjcuODU1NDY5em0tMTg3LjQxNzk2OC0xNjguNzczNDM3YzAtMzAuMDQyOTY5IDIzLjc3NzM0My01NC40ODA0NjkgNTMuMDAzOTA2LTU0LjQ4MDQ2OSAyOS4yMjY1NjIgMCA1My4wMDM5MDYgMjQuNDM3NSA1My4wMDM5MDYgNTQuNDgwNDY5IDAgMzAuMDM5MDYyLTIzLjc3NzM0NCA1NC40NzY1NjItNTMuMDAzOTA2IDU0LjQ3NjU2Mi0yOS4yMjY1NjMgMC01My4wMDM5MDYtMjQuNDM3NS01My4wMDM5MDYtNTQuNDc2NTYyem0tMjI2Ljk2MDkzOCAxMi40NzY1NjJjMC00MS4yMTg3NSAzMi42Nzk2ODgtNzQuNzUzOTA2IDcyLjg0NzY1Ni03NC43NTM5MDYgNDAuMTY3OTY5IDAgNzIuODUxNTYzIDMzLjUzNTE1NiA3Mi44NTE1NjMgNzQuNzUzOTA2cy0zMi42ODM1OTQgNzQuNzUzOTA2LTcyLjg1MTU2MyA3NC43NTM5MDZjLTQwLjE2Nzk2OCAwLTcyLjg0NzY1Ni0zMy41MzUxNTYtNzIuODQ3NjU2LTc0Ljc1MzkwNnptMjEwLjUzMTI1IDIzMS45MzM1OTRjLTEuMDM5MDYyIDEuMjM4MjgxLTMuMzIwMzEyIDMuMzEyNS02Ljk1MzEyNSAzLjMxMjVoLTI2MS40NjA5MzdjLTMuNjMyODEzIDAtNS45MTQwNjMtMi4wNzQyMTktNi45NTMxMjYtMy4zMTI1LTEuMDc4MTI0LTEuMjg5MDYyLTIuNzg5MDYyLTQuMDMxMjUtMi4xMDU0NjgtNy44OTg0MzggMTIuMjczNDM3LTY5LjExMzI4MSA3MS4wNjI1LTExOS4yODEyNSAxMzkuNzg5MDYyLTExOS4yODEyNSA2OC43MjY1NjMgMCAxMjcuNTE5NTMyIDUwLjE2Nzk2OSAxMzkuNzg5MDYzIDExOS4yODEyNS42ODc1IDMuODY3MTg4LTEuMDIzNDM4IDYuNjA5Mzc2LTIuMTA1NDY5IDcuODk4NDM4em0xNzMuNDE3OTY5LTY3LjA1MDc4MWMtLjQyNTc4MS41MDc4MTItMS4zNTE1NjMgMS4zNTU0NjktMi43ODUxNTcgMS4zNTU0NjloLTE1Ny4xMjg5MDZjLTguODc1LTE2LjYyODkwNy0yMC4yNzM0MzctMzEuNTQ2ODc2LTMzLjY0NDUzMS00NC4yNzM0MzggMTkuNTM5MDYzLTMxLjA4MjAzMSA1Mi45MzM1OTQtNDkuOTY0ODQ0IDg5LjU3NDIxOS00OS45NjQ4NDQgNTEuNTU4NTk0IDAgOTUuNjYwMTU2IDM3LjY1NjI1IDEwNC44NzUgODkuNTQyOTY5LjI4OTA2MiAxLjYzNjcxOS0uNDMzNTk0IDIuNzk2ODc1LS44OTA2MjUgMy4zMzk4NDR6bTAgMCIvPjwvc3ZnPg==" />
                            </div>
                            <div className="pl-3">
                                <p className="text-sm font-medium text-gray-800 leading-none">My friends
                                </p>
                            </div>
                            <span class="ml-2 text-xs p-3 rounded-full h-5 w-5 flex items-center justify-center bg-red-400">{user.friendRequests.length === 0 ? '' : ' +' + user.friendRequests.length}</span>
                        </div>
                    </a>
                </div>
                <Link to="/logout" className="px-4 py-2 hover:bg-gray-100 flex">
                    <div className="flex items-center">
                        <div className="">
                            <img className="w-4 h-4" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDcxLjIgNDcxLjIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ3MS4yIDQ3MS4yOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTIyNy42MTksNDQ0LjJoLTEyMi45Yy0zMy40LDAtNjAuNS0yNy4yLTYwLjUtNjAuNVY4Ny41YzAtMzMuNCwyNy4yLTYwLjUsNjAuNS02MC41aDEyNC45YzcuNSwwLDEzLjUtNiwxMy41LTEzLjUNCgkJCXMtNi0xMy41LTEzLjUtMTMuNWgtMTI0LjljLTQ4LjMsMC04Ny41LDM5LjMtODcuNSw4Ny41djI5Ni4yYzAsNDguMywzOS4zLDg3LjUsODcuNSw4Ny41aDEyMi45YzcuNSwwLDEzLjUtNiwxMy41LTEzLjUNCgkJCVMyMzUuMDE5LDQ0NC4yLDIyNy42MTksNDQ0LjJ6Ii8+DQoJCTxwYXRoIGQ9Ik00NTAuMDE5LDIyNi4xbC04NS44LTg1LjhjLTUuMy01LjMtMTMuOC01LjMtMTkuMSwwYy01LjMsNS4zLTUuMywxMy44LDAsMTkuMWw2Mi44LDYyLjhoLTI3My45Yy03LjUsMC0xMy41LDYtMTMuNSwxMy41DQoJCQlzNiwxMy41LDEzLjUsMTMuNWgyNzMuOWwtNjIuOCw2Mi44Yy01LjMsNS4zLTUuMywxMy44LDAsMTkuMWMyLjYsMi42LDYuMSw0LDkuNSw0czYuOS0xLjMsOS41LTRsODUuOC04NS44DQoJCQlDNDU1LjMxOSwyMzkuOSw0NTUuMzE5LDIzMS4zLDQ1MC4wMTksMjI2LjF6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=" />
                        </div>
                        <div className="pl-3">
                            <button className="text-sm font-medium" onClick={() => app.auth().signOut()}>Sign out</button>
                        </div>
                    </div>
                </Link>
            </div>
            <button class="bg-red-200 hover:bg-blue-dark text-gray-600 font-bold py-2 px-4 rounded mt-4 w-full shadow-lg">
                Return
                </button>
        </div>
    );
}