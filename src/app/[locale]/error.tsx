'use client'

import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

const Error = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {

    const t = useTranslations()

    return (
        <html>
            <body>
                <main className="min-h-screen grid place-items-center">
                    <div>
                        <h1 className="text-red-500 text-5xl font-bold">{t('error')} {error.message}</h1>
                        <div className="mt-4 flex justify-center">
                        <Button variant='destructive' onClick={() => reset()}>{t('try-again')}</Button>
                        </div>
                    </div>
                </main>
            </body>
        </html>
    )
}

export default Error