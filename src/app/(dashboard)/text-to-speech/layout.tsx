import { TextToSpeechLayout } from "@/features/text-to-speech/views/text-to-speech-layout";
import { ReactNode } from "react";

export default function Layout({
    children
}: {
    children: ReactNode
}) {
    return <TextToSpeechLayout>{children}</TextToSpeechLayout>;
};