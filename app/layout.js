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
