"use client";

import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button"; // Assuming you have a Button component
import { ModeToggle } from "./ModeToggle";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        <h1 className="text-3xl font-bold">
          <Link to="/" className="flex items-center space-x-2">
            <img className="h-6 w-6 text-white" /> {/* Example logo icon */}
            <span>Collaboralearn</span>
          </Link>
        </h1>
        <nav>
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-4 items-center">
              <li>
                <Link to="/login">
                  <Button variant="default" className="ml-4 flex items-center space-x-2">
                    <span>Login</span>
                  </Button>
                </Link>
              </li>

              <li>
                <Link to="/signup">
                  <Button variant="default" className="ml-4 flex items-center space-x-2">
                    <span>Sign Up</span>
                  </Button>
                </Link>
              </li>
              <ModeToggle />

            </NavigationMenuList>
          </NavigationMenu>
        </nav>
      </div>
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Header;
