import { ListChecks } from "lucide-react";
import { AvatarDropdown } from "@/components/ui/AvatarDropdown";

export default function Dashboard() {
    return (
        <div className="min-h-screen container max-w-6xl mx-auto px-6">
            <header className="flex items-center justify-between h-24">
                <a href="#" className="flex items-center gap-2 self-center font-medium">
                    <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
                        <ListChecks className="size-4" />
                    </div>
                    TaskFlow.
                </a>

                <AvatarDropdown />
            </header>
        </div>
    )
}