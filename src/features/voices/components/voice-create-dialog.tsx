"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { useIsMobile } from "@/hooks/use-mobile";
import { VoiceCreateForm } from "./voice-create-form";
import { Button } from "@/components/ui/button";

interface VoiceCreateDialogProps {
    children?: React.ReactNode;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}

export function VoiceCreateDialog({
    children,
    open,
    onOpenChange,
}: VoiceCreateDialogProps) {
    const isMobile = useIsMobile();

    if (isMobile) {
        return (
            <Drawer open={open} onOpenChange={onOpenChange}>
                {children && <DrawerTrigger render={children as React.ReactElement} />}
                <DrawerContent className="max-h-[90vh]">
                    <DrawerHeader>
                        <DrawerTitle>Create custom voice</DrawerTitle>
                        <DrawerDescription>
                            Upload or record an audio sample to add a new voice to your
                            library.
                        </DrawerDescription>
                    </DrawerHeader>
                    <VoiceCreateForm
                        scrollable
                        footer={(submit) => (
                            <DrawerFooter>
                                {submit}
                                <DrawerClose render={<Button variant="outline">Cancel</Button>} />
                            </DrawerFooter>
                        )}
                    />
                </DrawerContent>
            </Drawer>
        );
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            {children && <DialogTrigger render={children as React.ReactElement} />}
            <DialogContent className="sm:max-w-lg max-h-[90vh] flex flex-col p-0 gap-0 overflow-hidden">
                <DialogHeader className="p-6 pb-2 text-left shrink-0">
                    <DialogTitle>Create custom voice</DialogTitle>
                    <DialogDescription>
                        Upload or record an audio sample to add a new voice to your library.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex-1 min-h-0 overflow-y-auto px-6 pb-6 pt-2">
                    <VoiceCreateForm />
                </div>
            </DialogContent>
        </Dialog>
    );
};