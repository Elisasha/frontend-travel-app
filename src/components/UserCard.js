import React from "react";
import { useDispatch } from "react-redux";
import app from '../base.js';
import { logoutUser } from "../store/actions";



export function UserCard() {
    const dispatch = useDispatch();
    return (
        <div>
            <div className="bg-white rounded overflow-hidden shadow-lg">
                <div className="text-center p-6  border-b">
                    <img
                        className="h-24 w-24 rounded-full mx-auto"
                        src="https://randomuser.me/api/portraits/men/27.jpg"
                        alt="Randy Robertson"
                    />
                    <p className="pt-2 text-lg font-semibold">Randy Robertson</p>
                    <p className="text-sm text-gray-600 truncate">randy.robertson@example.com</p>
                </div>
                <div className="border-b">

                    {/* <a href="#" className="px-4 py-2 hover:bg-gray-100 flex">
                        <div className="text-gray-800">
                        </div>
                        <div className="pl-3">
                            <p className="text-sm font-medium text-gray-800 leading-none">Add new trip</p>
                            <p className="text-xs text-gray-500">Add/manage trips</p>
                        </div>
                    </a> */}

                    <a href="/addtrip" className="px-4 py-2 hover:bg-gray-100 flex">
                        <div className="flex items-center">
                            <div className="text-gray-800">
                                {/* <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1"
                                    viewBox="0 0 24 24"
                                    className="w-5 h-5"
                                >
                                    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg> */}
                                <svg height="20" viewBox="0 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m256 512c-141.164062 0-256-114.835938-256-256s114.835938-256 256-256 256 114.835938 256 256-114.835938 256-256 256zm0-480c-123.519531 0-224 100.480469-224 224s100.480469 224 224 224 224-100.480469 224-224-100.480469-224-224-224zm0 0" /><path d="m368 272h-224c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h224c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
                                    <path d="m256 384c-8.832031 0-16-7.167969-16-16v-224c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v224c0 8.832031-7.167969 16-16 16zm0 0" />
                                </svg>

                            </div>
                            <div className="pl-3">
                                <p className="text-sm font-medium text-gray-800 leading-none">Add trip</p>
                                {/* <p className="text-xs text-gray-500">Add new trip</p> */}
                            </div>
                        </div>
                    </a>
                    <a href="/:user/trips" className="px-4 py-2 hover:bg-gray-100 flex">
                        <div className="flex items-center">
                            <div className="text-gray-800">
                                {/* <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1"
                                    viewBox="0 0 24 24"
                                    className="w-5 h-5"
                                >
                                    <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg> */}

                                <img className="h-5 w-5" src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjU4MXB0IiB2aWV3Qm94PSIwIDAgNTgxIDU4MS4zNTgxNiIgd2lkdGg9IjU4MXB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0zMjkuMzk4NDM4IDM2Ny45ODA0NjljMCA1My40NzY1NjIgNDMuMzUxNTYyIDk2LjgyODEyNSA5Ni44MjgxMjQgOTYuODI4MTI1IDUzLjQ3MjY1NyAwIDk2LjgyNDIxOS00My4zNTE1NjMgOTYuODI0MjE5LTk2LjgyODEyNSAwLTUzLjQ3MjY1Ny00My4zNTE1NjItOTYuODI0MjE5LTk2LjgyNDIxOS05Ni44MjQyMTktNTMuNDUzMTI0LjA1ODU5NC05Ni43Njk1MzEgNDMuMzc1LTk2LjgyODEyNCA5Ni44MjQyMTl6bTk2LjgyODEyNC03Ny40NjA5MzhjNDIuNzgxMjUgMCA3Ny40NjA5MzggMzQuNjc5Njg4IDc3LjQ2MDkzOCA3Ny40NjA5MzhzLTM0LjY3OTY4OCA3Ny40NjA5MzctNzcuNDYwOTM4IDc3LjQ2MDkzNy03Ny40NjA5MzctMzQuNjc5Njg3LTc3LjQ2MDkzNy03Ny40NjA5MzdjLjA0Njg3NS00Mi43NTc4MTMgMzQuNjk5MjE5LTc3LjQxNDA2MyA3Ny40NjA5MzctNzcuNDYwOTM4em0wIDAiLz48cGF0aCBkPSJtMzcwLjg5ODQzOCA1NjEuNjM2NzE5aDExMC42NjQwNjJ2MTkuMzYzMjgxaC0xMTAuNjY0MDYyem0wIDAiLz48cGF0aCBkPSJtMzI5LjM5ODQzOCA1MjIuOTAyMzQ0aDE5My42NTYyNXYxOS4zNjcxODdoLTE5My42NTYyNXptMCAwIi8+PHBhdGggZD0ibTExNi4zNzg5MDYgNTIyLjkwMjM0NGgxOS4zNjcxODh2MTkuMzY3MTg3aC0xOS4zNjcxODh6bTAgMCIvPjxwYXRoIGQ9Im01OC4yODUxNTYgNTQyLjI2OTUzMWgxOS4zNjMyODJ2MTkuMzY3MTg4aC0xOS4zNjMyODJ6bTAgMCIvPjxwYXRoIGQ9Im0xMTcuMzQ3NjU2IDQ2OC40MTc5NjljNTAuNTU4NTk0LTg4LjA1NDY4OCA4Mi4yODEyNS0xODUuNjUyMzQ0IDkzLjE1NjI1LTI4Ni42MDU0NjlsOTAuMDUwNzgyIDg5LjUxNTYyNWMxLjgwMDc4MSAxLjc5Mjk2OSA0LjIzNDM3NCAyLjgwNDY4NyA2Ljc3NzM0MyAyLjgxNjQwNi41MjM0MzguMDAzOTA3IDEuMDUwNzgxLS4wMzkwNjIgMS41NjY0MDctLjEyNSAzLjA3MDMxMi0uNSA1LjcxMDkzNy0yLjQ0NTMxMiA3LjA5NzY1Ni01LjIyNjU2MiAxOC4yNTM5MDYtMzYuNDMzNTk0IDExLjEwNTQ2OC04MC40NjQ4NDQtMTcuNzM4MjgyLTEwOS4yNWwtNy45MTc5NjgtNy45MjE4NzVoNjguMTA1NDY4YzUuMzQ3NjU3LjAwMzkwNiA5LjY4NzUtNC4zMjgxMjUgOS42ODc1LTkuNjc1NzgyLjAwMzkwNy0xLjA0Njg3NC0uMTY3OTY4LTIuMDg1OTM3LS40OTYwOTMtMy4wNzQyMTgtMTIuODU5Mzc1LTM4LjY3MTg3NS00OS4wNDY4NzUtNjQuNzUtODkuODAwNzgxLTY0LjcxMDkzOGgtMTIuNTg1OTM4bDQ4LjM1NTQ2OS00OC42MzY3MThjMy43NzM0MzctMy43ODkwNjMgMy43NTc4MTItOS45MTc5NjktLjAzMTI1LTEzLjY5MTQwNy0uNzM0Mzc1LS43MzA0NjktMS41NzgxMjUtMS4zMzk4NDMtMi41MDM5MDctMS44MDA3ODEtMzYuNDQ5MjE4LTE4LjI3MzQzOC04MC41MDM5MDYtMTEuMTI4OTA2LTEwOS4zMDg1OTMgMTcuNzMwNDY5bC05LjI0NjA5NCA5LjI0NjA5M2MtMy4wMTU2MjUgMy4wMzUxNTctNS44MTY0MDYgNi4yNjk1MzItOC4zOTQ1MzEgOS42ODM1OTQtMi41NDY4NzUtMy40MTQwNjItNS4zMjgxMjUtNi42NDg0MzctOC4zMjAzMTMtOS42ODM1OTRsLTkuMjQ2MDkzLTkuMjQ2MDkzYy0yOC43ODEyNS0yOC44Mzk4NDQtNzIuODEyNS0zNS45ODQzNzUtMTA5LjIzODI4Mi0xNy43MzA0NjktNC43ODUxNTYgMi4zOTA2MjUtNi43MjY1NjIgOC4yMDcwMzEtNC4zMzU5MzcgMTIuOTg4MjgxLjQ2MDkzNy45MjU3ODEgMS4wNzAzMTIgMS43Njk1MzEgMS44MDA3ODEgMi41MDM5MDdsNDguNDEwMTU2IDQ4LjYzNjcxOGgtMTIuNzEwOTM3Yy00MC43NTM5MDctLjAzOTA2Mi03Ni45NDUzMTMgMjYuMDM5MDYzLTg5LjgwMDc4MSA2NC43MTA5MzgtMS42OTUzMTMgNS4wNzAzMTIgMS4wNDI5NjggMTAuNTU0Njg3IDYuMTE3MTg3IDEyLjI1Ljk4ODI4MS4zMzIwMzEgMi4wMjczNDQuNSAzLjA3NDIxOS41aDY4LjAzOTA2MmwtNy45MTc5NjggNy45MjE4NzVjLTI4Ljg0Mzc1IDI4Ljc4NTE1Ni0zNS45OTIxODggNzIuODE2NDA2LTE3Ljc0MjE4OCAxMDkuMjUgMS4zOTA2MjUgMi43ODEyNSA0LjAzMTI1IDQuNzI2NTYyIDcuMDk3NjU2IDUuMjI2NTYyLjUxOTUzMi4wODU5MzggMS4wNDI5NjkuMTI4OTA3IDEuNTcwMzEzLjEyNSAyLjU1ODU5MyAwIDUuMDExNzE5LTEuMDExNzE5IDYuODI0MjE5LTIuODE2NDA2bDgzLjg1NTQ2OC04My4zNTkzNzVjLTEwLjM4MjgxMiA5Mi43ODUxNTYtNDUuMzI4MTI1IDE4MS4xMjEwOTQtMTAxLjIzNDM3NSAyNTUuODk0NTMxLTEzLjAxNTYyNS0zLjQxNzk2OS0yNi4yMTA5MzctNi4xMDkzNzUtMzkuNTIzNDM3LTguMDU0Njg3bC02LjA1MDc4Mi0uNjA5Mzc1LTEuOTM3NSAxOS4yNzczNDMgNS42NDQ1MzIuNTUwNzgyYzkuNjgzNTk0IDEuMzg2NzE4IDE5LjMwNDY4NyAzLjM0Mzc1IDI4Ljg3NSA1LjU1ODU5NC0xLjkzNzUgMi40Mjk2ODctMy44NzUgNC44OTg0MzctNS44Nzg5MDYgNy4yOTI5NjhsMTQuODUxNTYyIDEyLjQyMTg3NWM3NC40MTAxNTYtODguNDY4NzUgMTE4Ljc2OTUzMS0xOTguMzAwNzgxIDEyNi42NzE4NzUtMzEzLjYzMjgxMmwxMS4xNDQ1MzEtMTEuMDc0MjE5IDguMzQzNzUgOC4yOTY4NzVjLTEwLjE3OTY4NyAxMjMuMzM5ODQ0LTUyLjUxNTYyNSAyNDEuODU5Mzc1LTEyMi43ODUxNTYgMzQzLjczNDM3NWwxNS44NTkzNzUgMTEuMDk3NjU2YzcuNjEzMjgxLTEwLjg2NzE4NyAxNC44NzUtMjIuMTQ0NTMxIDIxLjkxNDA2My0zMy42MzY3MTggNDUuMjkyOTY4IDIxLjY2NDA2MiA4NS4yODUxNTYgNTIuOTk2MDkzIDExNy4xNjAxNTYgOTEuNzg5MDYybDE0Ljk3NjU2Mi0xMi4yNjk1MzFjLTE4Ljg0NzY1Ni0yMi45MTQwNjMtNDAuNDQxNDA2LTQzLjQyNTc4MS02NC4zMDA3ODEtNjEuMDY2NDA3aDQwNS44MjAzMTN2LTE5LjM2NzE4N2gtNDM0LjUwNzgxM2MtOS40OTIxODctNS43MzA0NjktMTkuMjg5MDYzLTEwLjkyMTg3NS0yOS4yOTI5NjktMTUuNzUzOTA2em0xODYuNDI5Njg4LTIyMS4yMTA5MzgtMTAyLjMwNDY4OC0xMDEuNzE0ODQzYzI2LjE2Nzk2OS03LjgxMjUgNTQuNTExNzE5LS43MjI2NTcgNzMuOTE3OTY5IDE4LjQ5MjE4N2w5LjI0NjA5NCA5LjI1YzE5LjM3MTA5MyAxOS4zMzU5MzcgMjYuNjk5MjE5IDQ3LjY2Nzk2OSAxOS4xNDA2MjUgNzMuOTcyNjU2em0zOS44OTQ1MzEtMTE0Ljk0OTIxOWgtODAuMTcxODc1Yy0xOC42NzE4NzUtOC44ODY3MTgtMzkuNzM4MjgxLTExLjQwMjM0My01OS45NzY1NjItNy4xNTYyNSAxNC4wODk4NDMtMTkuODEyNSAzNi44OTQ1MzEtMzEuNTc4MTI0IDYxLjIwNzAzMS0zMS41NzQyMThoMTMuMDcwMzEyYzI3LjM3MTA5NC0uMDQyOTY5IDUyLjYwMTU2MyAxNC43OTI5NjggNjUuODcxMDk0IDM4LjczMDQ2OHptLTEzNy40OTYwOTQtODEuNTU4NTkzIDkuMjUtOS4yNDYwOTRjMTkuMzUxNTYzLTE5LjM3NSA0Ny42OTUzMTMtMjYuNzA3MDMxIDc0LjAxMTcxOS0xOS4xNDQ1MzFsLTU3LjM5ODQzOCA1Ny43MzgyODFjLTE4LjYyODkwNiA2Ljg1NTQ2OS0zNC42MjEwOTMgMTkuNDEwMTU2LTQ1LjcxMDkzNyAzNS44NzUtNC41MDM5MDYtMjMuNjg3NSAyLjkyNTc4MS00OC4wNzgxMjUgMTkuODc4OTA2LTY1LjIyMjY1NnptLTUzLjMzOTg0My05LjI0NjA5NCA5LjI0NjA5MyA5LjI0NjA5NGM0LjMxMjUgNC40MDIzNDMgOC4wNTQ2ODggOS4zMzIwMzEgMTEuMTM2NzE5IDE0LjY2Nzk2OS00LjM4NjcxOSAxMC4xOTkyMTgtNi44OTA2MjUgMjEuMTAxNTYyLTcuMzk4NDM4IDMyLjE4NzUtOC42OTE0MDYtNy41OTM3NS0xOC43MDMxMjQtMTMuNTIzNDM4LTI5LjUzMTI1LTE3LjUwNzgxM2wtNTcuNDEwMTU2LTU3LjczODI4MWMyNi4zMDg1OTQtNy41NTg1OTQgNTQuNjQ0NTMyLS4yMjY1NjMgNzMuOTg0Mzc1IDE5LjE0NDUzMXptLTYyLjM4NjcxOSA1Mi4wNzQyMTloMTMuMDc0MjE5YzI0LjMyODEyNC0uMDIzNDM4IDQ3LjE2NDA2MiAxMS43MzgyODEgNjEuMjY5NTMxIDMxLjU2MjUtMjAuMjI2NTYzLTQuMjMwNDY5LTQxLjI4NTE1Ny0xLjcxNDg0NC01OS45NDUzMTMgNy4xNjc5NjhoLTgwLjIwMzEyNWMxMy4yNjU2MjUtMjMuOTI1NzgxIDM4LjQ3NjU2My0zOC43NTc4MTIgNjUuODM1OTM4LTM4LjczMDQ2OHptLTI1LjkxMDE1NyAxNTMuNjc5Njg3Yy03LjU1ODU5My0yNi4zMDQ2ODctLjIyNjU2Mi01NC42MzY3MTkgMTkuMTQ0NTMyLTczLjk3MjY1Nmw5LjI0NjA5NC05LjI1YzEzLjkyOTY4Ny0xMy44OTQ1MzEgMzIuODIwMzEyLTIxLjY3MTg3NSA1Mi41LTIxLjYwOTM3NSA3LjI2MTcxOC4wMDM5MDYgMTQuNDg0Mzc0IDEuMDM5MDYyIDIxLjQ1NzAzMSAzLjA3ODEyNXptMCAwIi8+PC9zdmc+" />
                            </div>
                            <div className="pl-3">
                                <p className="text-sm font-medium text-gray-800 leading-none">My trips</p>
                                {/* <p className="text-xs text-gray-500">Email, profile, notifications</p> */}
                            </div>
                        </div>
                    </a>
                    <a href="/:user/friends" className="px-4 py-2 hover:bg-gray-100 flex">
                        <div className="flex items-center">
                            <div className="text-green-600">
                                {/* <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1"
                                    viewBox="0 0 24 24"
                                    className="w-5 h-5"
                                >
                                    <path d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg> */}

                                <img className="w-5 h-5" src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMXB0IiB2aWV3Qm94PSIwIC03MCA1MTEuOTk5ODcgNTExIiB3aWR0aD0iNTExcHQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTUxMS40NzI2NTYgMjYxLjU1MDc4MWMtOC40NTMxMjUtNDcuNjA5Mzc1LTQwLjA0Njg3NS04NS44MzU5MzctODEuNzA3MDMxLTEwMy41NjY0MDYgMTguNDg4MjgxLTE1LjUwMzkwNiAzMC4yOTY4NzUtMzguOTgwNDY5IDMwLjI5Njg3NS02NS4yMDcwMzEgMC00Ni41ODIwMzItMzcuMjM0Mzc1LTg0LjQ4MDQ2OS04My4wMDM5MDYtODQuNDgwNDY5LTQ1Ljc2OTUzMiAwLTgzLjAwMzkwNiAzNy44OTQ1MzEtODMuMDAzOTA2IDg0LjQ4MDQ2OSAwIDI2LjI0MjE4NyAxMS44MjAzMTIgNDkuNzI2NTYyIDMwLjMyODEyNCA2NS4yMzQzNzUtNi45MDYyNSAyLjk0NTMxMi0xMy41OTc2NTYgNi40NjA5MzctMTkuOTg4MjgxIDEwLjU1ODU5My0xNi4xMDU0NjkgMTAuMzI4MTI2LTI5Ljg1NTQ2OSAyMy45Mjk2ODgtNDAuNDUzMTI1IDM5Ljg1OTM3Ni0xMC43ODUxNTYtNy4xNjQwNjMtMjIuMzgyODEyLTEzLjEyNS0zNC42MDkzNzUtMTcuNjk5MjE5IDI2LjI3NzM0NC0xOC45OTYwOTQgNDMuNDU3MDMxLTUwLjIzMDQ2OSA0My40NTcwMzEtODUuNDc2NTYzIDAtNTcuNzYxNzE4LTQ2LjEzNjcxOC0xMDQuNzUzOTA2LTEwMi44NDc2NTYtMTA0Ljc1MzkwNi01Ni43MTA5MzcgMC0xMDIuODQ3NjU2IDQ2Ljk5MjE4OC0xMDIuODQ3NjU2IDEwNC43NTM5MDYgMCAzNS4yNDYwOTQgMTcuMTc5Njg4IDY2LjQ4MDQ2OSA0My40NTcwMzEgODUuNDc2NTYzLTU1LjkyMTg3NSAyMC45MjE4NzUtOTguODEyNSA3MC42NzU3ODEtMTA5LjkzNzUgMTMzLjMxNjQwNi0yLjA1NDY4NyAxMS41ODIwMzEgMS4xMDE1NjMgMjMuMzk0NTMxIDguNjUyMzQ0IDMyLjQxMDE1NiA3LjQ4MDQ2OSA4LjkyNTc4MSAxOC4zOTQ1MzEgMTQuMDQyOTY5IDI5Ljk0NTMxMyAxNC4wNDI5NjloMjYxLjQ2MDkzN2MxMS41NTA3ODEgMCAyMi40NjQ4NDQtNS4xMTcxODggMjkuOTQ1MzEzLTE0LjA0Mjk2OSA3LjU1NDY4Ny05LjAxNTYyNSAxMC43MDcwMzEtMjAuODI4MTI1IDguNjUyMzQzLTMyLjQxMDE1Ni0xLjM3MTA5My03LjcyNjU2My0zLjIzMDQ2OS0xNS4yNTM5MDYtNS41MzEyNS0yMi41NTQ2ODdoMTQ0LjUxNTYyNWM5Ljk0NTMxMyAwIDE5LjM0Mzc1LTQuNDA2MjUgMjUuNzgxMjUtMTIuMDg1OTM4IDYuNDkyMTg4LTcuNzQ2MDk0IDkuMjAzMTI1LTE3LjkwMjM0NCA3LjQzNzUtMjcuODU1NDY5em0tMTg3LjQxNzk2OC0xNjguNzczNDM3YzAtMzAuMDQyOTY5IDIzLjc3NzM0My01NC40ODA0NjkgNTMuMDAzOTA2LTU0LjQ4MDQ2OSAyOS4yMjY1NjIgMCA1My4wMDM5MDYgMjQuNDM3NSA1My4wMDM5MDYgNTQuNDgwNDY5IDAgMzAuMDM5MDYyLTIzLjc3NzM0NCA1NC40NzY1NjItNTMuMDAzOTA2IDU0LjQ3NjU2Mi0yOS4yMjY1NjMgMC01My4wMDM5MDYtMjQuNDM3NS01My4wMDM5MDYtNTQuNDc2NTYyem0tMjI2Ljk2MDkzOCAxMi40NzY1NjJjMC00MS4yMTg3NSAzMi42Nzk2ODgtNzQuNzUzOTA2IDcyLjg0NzY1Ni03NC43NTM5MDYgNDAuMTY3OTY5IDAgNzIuODUxNTYzIDMzLjUzNTE1NiA3Mi44NTE1NjMgNzQuNzUzOTA2cy0zMi42ODM1OTQgNzQuNzUzOTA2LTcyLjg1MTU2MyA3NC43NTM5MDZjLTQwLjE2Nzk2OCAwLTcyLjg0NzY1Ni0zMy41MzUxNTYtNzIuODQ3NjU2LTc0Ljc1MzkwNnptMjEwLjUzMTI1IDIzMS45MzM1OTRjLTEuMDM5MDYyIDEuMjM4MjgxLTMuMzIwMzEyIDMuMzEyNS02Ljk1MzEyNSAzLjMxMjVoLTI2MS40NjA5MzdjLTMuNjMyODEzIDAtNS45MTQwNjMtMi4wNzQyMTktNi45NTMxMjYtMy4zMTI1LTEuMDc4MTI0LTEuMjg5MDYyLTIuNzg5MDYyLTQuMDMxMjUtMi4xMDU0NjgtNy44OTg0MzggMTIuMjczNDM3LTY5LjExMzI4MSA3MS4wNjI1LTExOS4yODEyNSAxMzkuNzg5MDYyLTExOS4yODEyNSA2OC43MjY1NjMgMCAxMjcuNTE5NTMyIDUwLjE2Nzk2OSAxMzkuNzg5MDYzIDExOS4yODEyNS42ODc1IDMuODY3MTg4LTEuMDIzNDM4IDYuNjA5Mzc2LTIuMTA1NDY5IDcuODk4NDM4em0xNzMuNDE3OTY5LTY3LjA1MDc4MWMtLjQyNTc4MS41MDc4MTItMS4zNTE1NjMgMS4zNTU0NjktMi43ODUxNTcgMS4zNTU0NjloLTE1Ny4xMjg5MDZjLTguODc1LTE2LjYyODkwNy0yMC4yNzM0MzctMzEuNTQ2ODc2LTMzLjY0NDUzMS00NC4yNzM0MzggMTkuNTM5MDYzLTMxLjA4MjAzMSA1Mi45MzM1OTQtNDkuOTY0ODQ0IDg5LjU3NDIxOS00OS45NjQ4NDQgNTEuNTU4NTk0IDAgOTUuNjYwMTU2IDM3LjY1NjI1IDEwNC44NzUgODkuNTQyOTY5LjI4OTA2MiAxLjYzNjcxOS0uNDMzNTk0IDIuNzk2ODc1LS44OTA2MjUgMy4zMzk4NDR6bTAgMCIvPjwvc3ZnPg==" />

                            </div>
                            <div className="pl-3">
                                <p className="text-sm font-medium text-gray-800 leading-none">My friends</p>
                                {/* <p className="text-xs text-gray-500">Google, slack, mail</p> */}
                            </div>
                        </div>
                    </a>
                </div>
                <a href="/logout" className="px-4 py-2 hover:bg-gray-100 flex">
                    <div className="flex items-center">
                        <div className="text-green-600">
                            {/* <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1"
                                    viewBox="0 0 24 24"
                                    className="w-5 h-5"
                                >
                                    <path d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg> */}

                            <img className="w-5 h-5" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDcxLjIgNDcxLjIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ3MS4yIDQ3MS4yOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTIyNy42MTksNDQ0LjJoLTEyMi45Yy0zMy40LDAtNjAuNS0yNy4yLTYwLjUtNjAuNVY4Ny41YzAtMzMuNCwyNy4yLTYwLjUsNjAuNS02MC41aDEyNC45YzcuNSwwLDEzLjUtNiwxMy41LTEzLjUNCgkJCXMtNi0xMy41LTEzLjUtMTMuNWgtMTI0LjljLTQ4LjMsMC04Ny41LDM5LjMtODcuNSw4Ny41djI5Ni4yYzAsNDguMywzOS4zLDg3LjUsODcuNSw4Ny41aDEyMi45YzcuNSwwLDEzLjUtNiwxMy41LTEzLjUNCgkJCVMyMzUuMDE5LDQ0NC4yLDIyNy42MTksNDQ0LjJ6Ii8+DQoJCTxwYXRoIGQ9Ik00NTAuMDE5LDIyNi4xbC04NS44LTg1LjhjLTUuMy01LjMtMTMuOC01LjMtMTkuMSwwYy01LjMsNS4zLTUuMywxMy44LDAsMTkuMWw2Mi44LDYyLjhoLTI3My45Yy03LjUsMC0xMy41LDYtMTMuNSwxMy41DQoJCQlzNiwxMy41LDEzLjUsMTMuNWgyNzMuOWwtNjIuOCw2Mi44Yy01LjMsNS4zLTUuMywxMy44LDAsMTkuMWMyLjYsMi42LDYuMSw0LDkuNSw0czYuOS0xLjMsOS41LTRsODUuOC04NS44DQoJCQlDNDU1LjMxOSwyMzkuOSw0NTUuMzE5LDIzMS4zLDQ1MC4wMTksMjI2LjF6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=" />

                        </div>
                        <div className="pl-3">
                            {/* <p className="text-sm font-medium text-gray-800 leading-none">Logout</p> */}
                            <button onClick={() => app.auth().signOut().then(() => dispatch(logoutUser()))}>Sign out</button>
                            {/* <p className="text-xs text-gray-500">Google, slack, mail</p> */}
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}