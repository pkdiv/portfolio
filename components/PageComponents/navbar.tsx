import Link from "next/link"
import {
    NavigationMenu, NavigationMenuItem, NavigationMenuLink,
    NavigationMenuList, navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"

const navItems = [
    {
        label: "home",
        link: "/"
    },
    {
        label: "blog",
        link: "/blog"
    },
    {
        label: "projects",
        link: "/projects"
    },
    {
        label: "contact me",
        link: "/contactme"
    }
]

export default function NavBar() {
    return (
        <div className="w-full flex justify-center">
            <NavigationMenu>
                <NavigationMenuList>
                    {navItems.map((item) => (
                        <NavigationMenuItem key={item.label}>
                            <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} py-4 pt-10`}>
                                <Link href={item.link}  className="capitalize hover:text-hoverblue">{item.label}</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu >
        </div >
    )
}