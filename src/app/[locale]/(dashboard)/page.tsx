'use client'
import { useTranslations } from "next-intl";
import { useSession, signIn, signOut } from "next-auth/react"


const Dashboard = () => {

    const t = useTranslations()

    return (
        <main>
            <h1>{t('messages')}</h1>
            <button onClick={() => signIn()}>Sign in</button>
            <h1 className="bg-custom-rose-700 text-7xl text-custom-green-700 text-center">{t('e-commerce-application')} </h1>
        </main>
    )
}

export default Dashboard;