import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://anthonymartini.github.io"),
  title: "Anthony Martini | Computer Engineer & Software Developer",
  description: "Portfolio of Anthony Martini, a Computer Engineering graduate from the University of South Florida. Specialized in software engineering, AI, and full-stack development.",
  keywords: ["Anthony Martini", "Computer Engineer", "Software Engineer", "University of South Florida", "Power Apps Developer", "Tampa", "USF"],
  icons: {
    icon: "/favicon_light.svg",
  },
  openGraph: {
    title: "Anthony Martini | Computer Engineer & Software Developer",
    description: "Portfolio of Anthony Martini, specializing in software engineering, AI applications, and full-stack systems.",
    url: "https://anthonymartini.github.io",
    siteName: "Anthony Martini Portfolio",
    images: [
      {
        url: "/img/pfp.jpg",
        width: 800,
        height: 800,
        alt: "Anthony Martini Profile Photo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anthony Martini | Computer Engineer & Software Developer",
    description: "Portfolio of Anthony Martini, specializing in software engineering, AI applications, and full-stack systems.",
    images: ["/img/pfp.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Anthony Martini",
              "jobTitle": "Software Engineer & Power Platform Developer",
              "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "University of South Florida"
              },
              "url": "https://anthonymartini.github.io",
              "image": "https://anthonymartini.github.io/img/pfp.jpg",
              "sameAs": [
                "https://github.com/AnthonyMartini",
                "https://www.linkedin.com/in/anthony-martini-b5a8b6256/"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
