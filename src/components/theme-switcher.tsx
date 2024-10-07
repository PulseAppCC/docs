"use client";

import { ReactElement, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { UseThemeProps } from "next-themes/dist/types";
import { Monitor, MoonStar, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const themes = {
    dark: <MoonStar className="w-4 h-4" />,
    light: <Sun className="w-4 h-4" />,
    system: <Monitor className="w-4 h-4" />,
};

/**
 * The theme switcher component.
 *
 * @return the switcher jsx
 */
const ThemeSwitcher = (): ReactElement => {
    const [mounted, setMounted] = useState(false);
    const { theme: activeTheme, setTheme }: UseThemeProps = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="w-fit p-1 flex gap-1.5 bg-black/30 ring-1 ring-white/5 rounded-full">
            {Object.entries(themes).map(([theme, icon]) => {
                const active: boolean = mounted && theme === activeTheme;
                return (
                    <Button
                        key={theme}
                        className={cn(
                            "p-1 h-6 opacity-80 rounded-full",
                            active &&
                                "ring-1 bg-zinc-900 ring-white/15 opacity-100"
                        )}
                        variant="ghost"
                        onClick={() => setTheme(theme)}
                    >
                        {icon}
                    </Button>
                );
            })}
        </div>
    );
};

export default ThemeSwitcher;
