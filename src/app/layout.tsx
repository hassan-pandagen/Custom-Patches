import type { Metadata } from "next";
import Script from "next/script";
import { Poppins } from "next/font/google";
import "./globals.css";
import { TawkToChat } from "@/components/TawkToChat";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Reduced from 6 to 3 weights for faster loading
  variable: "--font-poppins",
  display: "swap", // Prevent FOUT (Flash of Unstyled Text)
});

export const metadata: Metadata = {
  title: "My Custom Patches",
  description: "Custom patches built with Next.js",
  icons: {
    icon: "/assets/logo.png",
    shortcut: "/assets/logo.png",
    apple: "/assets/logo.png",
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
        {/* Meta Pixel Code */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1305564264730590');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1305564264730590&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
      <body
        className={`${poppins.variable} font-sans antialiased bg-white text-gray-900`}
        suppressHydrationWarning
      >
        <TawkToChat />
        {children}
      </body>
    </html>
  );
}