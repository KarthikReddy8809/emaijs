import React from "react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import ContactUs from "./ContactUs"
import { Menu } from 'lucide-react';
function SideBar() {
    const [view, setView] = React.useState<string>('')
    return (
        <>
        <Sheet>
            <SheetTrigger><Menu/></SheetTrigger>
            <SheetContent side="left" className="bg-black">
                <div className="flex flex-col items-center justify-start mt-20 gap-3 h-screen">
                    <div className="text-white w-full mx-auto font-semibold cursor-pointer hover:bg-muted-foreground">Home</div>
                    <div className="text-white w-full mx-auto font-semibold cursor-pointer hover:bg-muted-foreground">About Us</div>
                    <div className="text-white w-full mx-auto font-semibold cursor-pointer hover:bg-muted-foreground " onClick={()=>setView('contact')}>Contact Us</div>
                </div>
            </SheetContent>
        </Sheet>
        {view==='contact' && <ContactUs />}
        </>
    )
}
export default SideBar
