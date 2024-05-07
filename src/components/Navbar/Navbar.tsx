"use client";

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import ProfileAvatar from "@/components/Navbar/Avatar";
import { authConfig } from "@/app/lib/auth";
import { getServerSession } from "next-auth";

const navItems = [
    { name: 'Home', link: '/', },
    { name: 'About', link: '/about' },
    { name: 'Services', link: '/services', sublink: 'service 1 ' },
    { name: 'Contact', link: '/contact' },

]

export default function Navbar() {

    return (
        <>
            <NavigationMenu>
                <NavigationMenuList>
                    {navItems.map((item, index) => (
                        <NavigationMenuItem key={index}>
                            <NavigationMenuTrigger>
                                <a href={item.link}>{item.name}</a>
                                <NavigationMenuLink href={item.sublink} />
                            </NavigationMenuTrigger>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>


        </>
    )
}