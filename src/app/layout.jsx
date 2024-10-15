import "./globals.css";
import { Sofia_Sans_Condensed } from "next/font/google";

const chivo = Sofia_Sans_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Liquet Investments",
  description: "Let your money grow your portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={chivo.className}>{children}</body>
    </html>
  );
}
