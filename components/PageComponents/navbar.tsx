"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"

const navItems = [
  { label: "home", link: "/" },
  { label: "blog", link: "/blog" },
  { label: "projects", link: "/projects" },
  { label: "contact me", link: "/contactme" },
]

export default function NavBar() {
  const pathname = usePathname()

  return (
    <div className="w-full flex justify-center">
      <NavigationMenu>
        <NavigationMenuList>
          {navItems.map((item) => {
            const isActive = pathname === item.link
            return (
              <NavigationMenuItem key={item.label}>
                <NavigationMenuLink
                  asChild
                  className={`${navigationMenuTriggerStyle()} py-4 pt-10`}
                >
                  <Link
                    href={item.link}
                    className={`capitalize relative group transition-colors ${
                      isActive ? "text-hoverblue font-semibold" : "hover:text-hoverblue"
                    }`}
                  >
                    {item.label}
                    {/* underline effect */}
                    <span
                      className={`absolute left-0 -bottom-1 h-0.5 bg-hoverblue rounded-full origin-left transform transition-transform duration-300
                        ${isActive ? "w-full scale-x-100" : "w-full scale-x-0 group-hover:scale-x-100"}`}
                    />
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            )
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
