import React from "react";

export function FriendCard(props) {
    console.log(props)
    return (
        <div className="text-center p-6">
            <img
                className="h-24 w-24 rounded-md mx-auto"
                src="https://randomuser.me/api/portraits/women/22.jpg"
                alt="Friend Name"
            />
            <p className="pt-2 text-lg font-semibold">Friend Name</p>
        </div>
    );
}