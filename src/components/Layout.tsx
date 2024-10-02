import React from "react";
import { Outlet } from "react-router-dom";
import NowPlaying from "./NowPlaying";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import BottomNav from "./BottomNav";

export const Layout: React.FC = () => {
    return (
        <div className="relative flex min-h-patch flex-col bg-background">
            <div className="flex flex-1 flex-col">
                <div className="max-w-7xl container mx-auto sticky top-0 z-10">
                    <Topbar />
                    <div className="bg-gradient-to-b from-background to-transparent w-full h-5 -mb-5 relative sm:hidden block" />
                </div>
                <div className="bg-border sticky top-[75px] h-[1px] z-20 sm:block hidden" />
                <div className="max-w-7xl flex gap-4 flex-1 container mx-auto sm:px-4 px-0">
                    <Sidebar />
                    <div className="sm:max-w-[calc(100%-216px)] w-full">
                        <Outlet />
                    </div>
                </div>
            </div>
            <footer className="sticky bottom-0 bg-muted z-30 w-full">
                <div className="bg-gradient-to-t from-background to-transparent w-full h-8 -mt-8 relative sm:hidden block" />
                <div className="max-w-7xl container sm:h-[95px] h-[84px] sm:px-0 w-full mx-auto">
                    <NowPlaying />
                </div>
                <BottomNav />
            </footer>
        </div>
    );
};

export default Layout;
