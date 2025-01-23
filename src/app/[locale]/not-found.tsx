import { Button } from "@/components/ui/button"
import { useTranslations } from "next-intl"
import Link from "next/link"

const NotFound = () => {

    const t = useTranslations()

    return (
        <html>
            <body>
                <main className="min-h-screen grid place-items-center items-center">
                    <div>
                        <h1 className="text-4xl text-red-500 font-bold">{t('not-found-message')}</h1>
                        <div className="flex justify-center">
                        <Button className=" mt-5" variant='destructive' asChild>
                            <Link href="/">
                                {t('back-to-home')}
                            </Link>
                        </Button>
                        </div>
                    </div>
                </main>
            </body>
        </html>
    )
}

export default NotFound