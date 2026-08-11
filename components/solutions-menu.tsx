"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { NavigationMenu } from "@base-ui/react/navigation-menu";
import { ourSolutions } from "@/lib/data";
import { cn } from "@/lib/utils";

export function SolutionsMenu({ active }: { active: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <NavigationMenu.Root
      value={open ? "solutions" : null}
      onValueChange={(value) => setOpen(value === "solutions")}
      className="relative"
    >
      <NavigationMenu.List className="flex">
        <NavigationMenu.Item value="solutions">
          <NavigationMenu.Trigger
            className={cn(
              "flex items-center gap-1.5 rounded-md px-4 py-2 text-sm font-semibold tracking-wide uppercase transition-colors outline-none",
              active ? "text-navy" : "text-steel hover:text-navy"
            )}
          >
            Our Solutions
            <NavigationMenu.Icon className="transition-transform duration-200 data-popup-open:rotate-180">
              <ChevronDown className="size-4" />
            </NavigationMenu.Icon>
          </NavigationMenu.Trigger>

          <NavigationMenu.Content>
            <div className="grid w-160 grid-cols-2 gap-1 p-4">
              {ourSolutions.map((item) => {
                const Icon = item.icon;
                return (
                  <NavigationMenu.Link
                    key={item.slug}
                    render={<Link href={item.href} />}
                    onClick={() => setOpen(false)}
                    className="group flex items-start gap-3 rounded-md p-3 text-left transition-colors hover:bg-offwhite"
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-navy/5 text-navy transition-colors group-hover:bg-navy group-hover:text-white">
                      <Icon className="size-4.5" />
                    </span>
                    <span>
                      <span className="block text-sm font-bold tracking-wide text-navy uppercase">
                        {item.name}
                      </span>
                      <span className="mt-0.5 block text-xs leading-snug text-steel">
                        {item.blurb}
                      </span>
                    </span>
                  </NavigationMenu.Link>
                );
              })}
            </div>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
      </NavigationMenu.List>

      <NavigationMenu.Portal>
        <NavigationMenu.Positioner
          sideOffset={12}
          collisionPadding={16}
          className="z-50 w-(--positioner-width) max-w-(--available-width) transition-[top,left,right,bottom] duration-200"
        >
          <NavigationMenu.Popup
            className={cn(
              "w-(--popup-width) origin-(--transform-origin)",
              "border border-border bg-white shadow-2xl",
              "transition-[opacity,transform] duration-200 ease-out",
              "data-starting-style:scale-95 data-starting-style:opacity-0",
              "data-ending-style:scale-95 data-ending-style:opacity-0"
            )}
          >
            <NavigationMenu.Viewport />
          </NavigationMenu.Popup>
        </NavigationMenu.Positioner>
      </NavigationMenu.Portal>
    </NavigationMenu.Root>
  );
}
