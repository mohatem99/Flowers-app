import Providers from "@/components/providers";
import { Toaster } from "@/components/ui/toaster";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Inter, Roboto } from "next/font/google";
import { cn } from "@/lib/utils/cn";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-roboto",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({ params: { locale }, children }: LayoutProps) {
  // Check if the `locale` is valid
  if (!routing.locales.includes(locale)) notFound();

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className={cn(inter.variable, roboto.variable, inter.className, "antialiased")}>
        <Providers>
          {/* Main content */}
          {children}

          {/* Toast */}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
