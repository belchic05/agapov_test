import type { Metadata } from "next";
import "./styles/globals.css";
import { Inter, Manrope } from "next/font/google";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-text", weight: ["400","500"] });
const manrope = Manrope({ subsets: ["latin", "cyrillic"], variable: "--font-display", weight: ["600"] });

export const metadata: Metadata = {
  title: "Open-Book Accounting для high-tech серийного производства",
  description: "Прозрачность затрат, контроль рисков и прослеживаемость компонентов — по всей цепи кооперации.",
  icons: { icon: "/logo.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${inter.variable} ${manrope.variable}`}>
      <body className="font-sans bg-white text-ink">{children}</body>
    </html>
  );
}
