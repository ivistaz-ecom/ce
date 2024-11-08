import Footer from "@/components/Footer/Footer"
import "../styles/globals.css"
import { AppProvider } from "@/context/AppContext"
import Script from "next/script"

export const metadata = {
  title: "Building Stronger Communities through Insight and Engagement",
  description:
    "Transforming insights into actions, we empower organisations to drive impactful change through community engagement and precise data analysis.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="dWyKw8N9m91OmkrlNedt_-UKt0U6Ez0CWkTrQ3hu1YY"
        />
      </head>
      <body>
        <AppProvider>
          <main>
            {children}
            <Footer />
          </main>
        </AppProvider>
        {/* Google Tag Manager */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-HGLVN18PC5"
        ></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HGLVN18PC5', {
              cookie_flags: 'SameSite=None;Secure'
            });
          `}
        </Script>

        {/* Additional Google Analytics Tag */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-T5PFLJC7VT"
        ></Script>
        <Script id="additional-google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-T5PFLJC7VT');
          `}
        </Script>
      </body>
    </html>
  )
}
