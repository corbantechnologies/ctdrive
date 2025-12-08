import type { Metadata } from "next";
import "./globals.css";
import { WhatsAppFloatingButton } from "@/components/landing/WhatsAppFloatingButton";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: {
    default:
      "CT Drive - Car Hire Mombasa | From KSh 3,500/day | Airport Pickup",
    template: "%s | CT Drive Mombasa",
  },
  description:
    "Reliable car hire in Mombasa. Self-drive from KSh 3,500/day. Airport transfers, chauffeur-driven, vans & SUVs. Instant booking via WhatsApp. Book now for Christmas & New Year 2025!",
  keywords:
    "car hire Mombasa, rent a car Mombasa, airport transfer Mombasa, self drive Mombasa, car rental Diani, Nyali, Bamburi, chauffeur driven Mombasa, festive car hire Kenya",
  authors: [{ name: "Corban Technologies" }],
  creator: "Corban Technologies",
  publisher: "CT Drive",
  metadataBase: new URL("https://ctdrive.co.ke"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CT Drive - Car Hire Mombasa from KSh 3,500/day",
    description:
      "Airport pickup • Self-drive • With driver • Instant WhatsApp booking",
    url: "https://ctdrive.co.ke",
    siteName: "CT Drive",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CT Drive Mombasa Car Hire",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "CT Drive - Car Hire Mombasa | Airport • Self-Drive • Chauffeur",
  //   description: "Book instantly via WhatsApp. Festive rates available now!",
  //   images: ["/og-image.jpg"],
  //   creator: "@ctdrive_ke",
  // },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />

        {/* Structured Data - LocalBusiness (Google loves this for car rental) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CarRental",
              name: "CT Drive Mombasa",
              image: "https://ctdrive.co.ke/logo.png",
              "@id": "https://ctdrive.co.ke/#organization",
              url: "https://ctdrive.co.ke",
              telephone: "+254 700 000 000", // Update with real number
              priceRange: "KSh",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Mombasa",
                addressRegion: "KE",
                addressCountry: "KE",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -4.0435,
                longitude: 39.6682,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "00:00",
                closes: "23:59",
              },
              sameAs: [
                "https://facebook.com/ctdrive",
                "https://instagram.com/ctdrive_ke",
                "https://wa.me/254710584581",
              ],
            }),
          }}
        />
      </head>

      <body className="min-h-screen bg-gray-50 antialiased">
        <Navbar />
        {children}
        <Footer />
        {/* Floating WhatsApp Button - This gets you bookings! */}
        <WhatsAppFloatingButton
          phoneNumber="254710584581" // Replace with your real number (no +)
          message="Hi CT Drive! I'd like to book a car for Mombasa. Please send available options and prices"
        />
      </body>
    </html>
  );
}
