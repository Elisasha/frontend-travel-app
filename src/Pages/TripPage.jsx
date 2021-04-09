import React from 'react';
import { Container } from '../components/Container';

export function TripPage() {
    return (
        <Container>
            <div className="w-full flex flex-wrap h-full">
                <div className="w-full lg:w-1/2 flex flex-col p-10 relative">
                    <div className="flex flex-col md:justify-start">
                    {/* <div className="w-full lg:w-1/2 flex flex-col relative">
                    <div className="flex flex-col md:justify-start pt-8 md:pt-0 mt-3 px-10"> */}
                        <p className="text-center text-3xl">Iceland</p>
                        {/* <form className="flex flex-col pt-3 md:pt-8"> */}
                        <div className="flex flex-col pt-4">
                            <label for="email" className="text-lg">Reikjavik</label>
                        </div>
                        <div className="flex flex-col pt-4">
                            <label for="password" className="text-lg">Keflavik</label>
                        </div>
                        {/* </form> */}
                    </div>
                    <div className="absolute bottom-0 left-1/2 translate-x-1/2">
                        <input type="submit" value="Remove trip" className="w-full bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8 mx-auto"></input>
                    </div>
                </div>

                <div className="lg:w-1/2 shadow-2xl  md:mx-auto flex-col bg-red-300">
                    <p className="text-center text-xl">Map</p>
                    {/* <img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1539639087565-41c59f40f3d7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"></img> */}
                </div>
            </div>
        </Container>
    );
}