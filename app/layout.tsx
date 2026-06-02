import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { ThemeProvider } from "@/components/ThemeProvider";
import { PERSON } from "@/lib/data";

export const metadata: Metadata = {
  title: `${PERSON.nameShort}. — ${PERSON.role}`,
  description: `${PERSON.role} based in ${PERSON.location}. ${PERSON.bio[0]}`,
  openGraph: {
    title: `${PERSON.nameShort}. — ${PERSON.role}`,
    description: PERSON.bio[0],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Nav />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
