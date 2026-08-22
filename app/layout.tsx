// app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme/ThemeContext";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { Analytics } from '@vercel/analytics/react'

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Heavensgate Wellness | Natural Bio-Tech Health",
  description: "Non-invasive bio-wellness assessment and 100% organic supplement.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const googleMapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.859665798953!2d7.5190835!3d5.5134722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1043dcab1c6d205b%3A0xc9fec16efc397321!2sEHIMIRI%20HOUSING%20ESTATE!5e0!3m2!1sen!2sng!4v1719860000000!5m2!1sen!2sng";

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        {/* ★ ADD THIS FONTAWESOME CDN LINK ★ */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col bg-stone-50 text-slate-800">
        <ThemeProvider>
          <Navbar />
          
          <div className="bg-emerald-800 text-emerald-50 text-xs py-2.5 px-4 text-center font-medium tracking-wide">
            <i className="fas fa-house-medical mr-2"></i> <strong>Compassionate Home Visits:</strong> We bring wellness sessions & relaxations to your home.
          </div>
          
          <main className="flex-grow">{children}</main>
          
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 mb-16 mt-8">
            <div className="w-full h-72 rounded-3xl bg-slate-100 border border-slate-200 shadow-md p-2 overflow-hidden group">
              <iframe
                title="Heavensgate Wellness Center Location Map"
                src={googleMapSrc}
                className="w-full h-full rounded-2xl border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          
          <Footer />
          <WhatsAppButton />          
          <Analytics /> 
        </ThemeProvider>
      </body>
    </html>
  );
}