import Footer from "@/components/Footer/Footer"
import "../styles/globals.css"
import { AppProvider } from "@/context/AppContext"

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
      </body>
    </html>
  )
}
