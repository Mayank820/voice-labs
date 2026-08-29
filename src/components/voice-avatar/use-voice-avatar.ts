import { useMemo } from "react";
import { Avatar, Style } from "@dicebear/core";
import glass from "@dicebear/styles/glass.json";

export function useVoiceAvatar(seed: string) {
    return useMemo(() => {
        const style = new Style(glass);

        const avatar = new Avatar(style, {
            seed,
        });

        return avatar.toDataUri();
    }, [seed]);
}
