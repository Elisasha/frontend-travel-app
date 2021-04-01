import React from "react";

export function FriendCard() {
    return (
        <div className="text-center p-6">
            <img
                className="h-24 w-24 rounded-full mx-auto"
                src="https://randomuser.me/api/portraits/women/22.jpg"
                alt="Edith Piaf"
            />
            <p className="pt-2 text-lg font-semibold">Edith Piaf</p>
        </div>
    );
}