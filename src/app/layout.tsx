import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://anthonymartini.github.io"),
  title: "Anthony Martini | Computer Engineer & Software Developer",
  description: "Portfolio of Anthony Martini — USF Computer Engineering graduate (4.0 GPA, Honors College), 138th Commencement student speaker, and software engineer specializing in AI, full-stack development, and Microsoft Power Platform.",
  keywords: ["Anthony Martini", "Tony Martini", "Tony", "Computer Engineer", "Software Engineer", "University of South Florida", "USF Commencement Speaker", "Power Apps Developer", "Power Platform", "Machine Learning", "Tampa", "USF", "Velocity Canvas"],
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Anthony Martini", url: "https://anthonymartini.github.io" }],
  creator: "Anthony Martini",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
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
        url: "/img/og-image.png",
        width: 1200,
        height: 630,
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
    images: ["/img/og-image.png"],
  },
  verification: {
    google: "0KMWUSdoyMtr5Zoj_O01ywzMQuALvpl4mldBB4793bs",
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
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://anthonymartini.github.io/#website",
                  "url": "https://anthonymartini.github.io/",
                  "name": "Anthony Martini Portfolio",
                  "publisher": { "@id": "https://anthonymartini.github.io/#person" },
                  "inLanguage": "en-US"
                },
                {
                  "@type": "ProfilePage",
                  "@id": "https://anthonymartini.github.io/#webpage",
                  "url": "https://anthonymartini.github.io/",
                  "name": "Anthony Martini | Computer Engineer & Software Developer",
                  "isPartOf": { "@id": "https://anthonymartini.github.io/#website" },
                  "mainEntity": { "@id": "https://anthonymartini.github.io/#person" },
                  "inLanguage": "en-US"
                },
                {
                  "@type": "Person",
                  "@id": "https://anthonymartini.github.io/#person",
                  "name": "Anthony Martini",
                  "alternateName": ["Tony Martini"],
                  "givenName": "Anthony",
                  "familyName": "Martini",
                  "jobTitle": "Software Engineer & Power Platform Developer",
                  "description": "Computer Engineering graduate from the University of South Florida (4.0 GPA, Honors College) and student speaker at USF's 138th Commencement. Software engineer specializing in AI, machine learning, full-stack development, and the Microsoft Power Platform.",
                  "alumniOf": {
                    "@type": "CollegeOrUniversity",
                    "name": "University of South Florida",
                    "sameAs": "https://www.usf.edu/"
                  },
                  "worksFor": {
                    "@type": "Organization",
                    "name": "Intertape Polymer Group"
                  },
                  "url": "https://anthonymartini.github.io",
                  "image": "https://anthonymartini.github.io/img/pfp.jpg",
                  "sameAs": [
                    "https://github.com/AnthonyMartini",
                    "https://www.linkedin.com/in/anthony-martini/"
                  ],
                  "knowsAbout": [
                    "Software Engineering",
                    "Machine Learning",
                    "Reinforcement Learning",
                    "Natural Language Processing",
                    "Full-Stack Development",
                    "React",
                    "Next.js",
                    "Python",
                    "TypeScript",
                    "PyTorch",
                    "AWS",
                    "Microsoft Power Platform",
                    "FPGA Design"
                  ],
                  "award": [
                    "National Merit Scholarship Finalist",
                    "Eagle Scout",
                    "Microsoft Power Platform App Maker Certification"
                  ],
                  "subjectOf": {
                    "@type": "VideoObject",
                    "name": "USF 138th Commencement Student Speech by Anthony Martini",
                    "description": "Anthony Martini delivers the student commencement speech for the USF College of Engineering and the Bellini College of AI, Cybersecurity and Computing, May 2026.",
                    "url": "https://www.youtube.com/live/S-m-dw9Z6yo?t=2857"
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
