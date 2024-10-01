import React, { useState } from "react";

import { LogOut, User2 } from "lucide-react";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Link } from "react-router-dom";

const Navbar = () => {
    // Manage user login state
    const [loggedIn, setLoggedIn] = useState(false); // Change this based on your authentication logic

    return (
        <div className="bg-white">
            <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
                <div>
                    <h1 className="text-2xl font-bold">
                        Job <span className="text-[#F83002]">Portal</span>
                    </h1>
                </div>

                <div className="flex items-center gap-12">
                    <ul className="flex font-medium items-center gap-5">
                        <li>Home</li>
                        <li>Job</li>
                        <li>Browser</li>
                    </ul>

                    <div className="flex items-center gap-2">
                        {/* Check if the user is logged in */}
                        {loggedIn ? (
                            // Show avatar and user profile options if logged in
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Avatar className="cursor-pointer">
                                        <AvatarImage
                                            src="https://github.com/shadcn.png"
                                            alt="@shadcn"
                                        />
                                    </Avatar>
                                </PopoverTrigger>
                                <PopoverContent className="w-80">
                                    <div>
                                        <div className="flex gap-2 space-y-2">
                                            <Avatar className="cursor-pointer">
                                                <AvatarImage
                                                    src="https://github.com/shadcn.png"
                                                    alt="@shadcn"
                                                />
                                            </Avatar>
                                            <div>
                                                <h4 className="font-medium">
                                                    Inshad
                                                </h4>
                                                <p className="text-sm text-muted-foreground">
                                                    Am Slilled FullStack
                                                    developer
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col my-2 text-gray-600">
                                            <div className="flex w-fit items-center gap-2 cursor-pointer">
                                                <User2 />
                                                <Button variant="link">
                                                    View Profile
                                                </Button>
                                            </div>
                                            <div
                                                className="flex w-fit items-center gap-2 cursor-pointer"
                                                onClick={() =>
                                                    setLoggedIn(false)
                                                } // Add logout functionality
                                            >
                                                <LogOut />
                                                <Button variant="link">
                                                    Logout
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        ) : (
                            // Show Login and Signup buttons if not logged in
                            <>
                                <Link to="/login">
                                    <Button variant="outline">Login</Button>
                                </Link>
                                <Link to="/signup">
                                    <Button className="bg-[#25193a] hover:bg-[#5a5a5a]">
                                        Signup
                                    </Button>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
