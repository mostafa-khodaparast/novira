import type { Metadata } from "next"
import { ReduxProvider } from "@/redux/provider"
import { Header } from "@/components"
import { Toaster } from 'react-hot-toast'
import "./globals.scss"




export const metadata: Metadata = {
  title: "novira",
  description: "investing",
  icons: {
    icon: '/images/NOVIRATECH.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <Header />
          <Toaster position="top-right" />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
