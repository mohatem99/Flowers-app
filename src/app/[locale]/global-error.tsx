"use client"

import { useTranslations } from "next-intl";


const Error = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {

    const t = useTranslations()

    return (
        <html>
            <body>
                <main>{t('error')} {error.message}</main>
                <button onClick={() => reset()}>{t('try-again')}</button>
            </body>
        </html>
    )
}

export default Error;