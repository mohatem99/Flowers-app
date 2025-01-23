import { NextIntlClientProvider, useMessages } from "next-intl";
import NextAuthProvider from "./components/nextAuthProvider";
type ProvidersProps = {
    children: React.ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
    // Translation
    const messages = useMessages();

    return (
        <NextIntlClientProvider messages={messages}>
            <NextAuthProvider>
                {children}
            </NextAuthProvider>
        </NextIntlClientProvider>
    );
}