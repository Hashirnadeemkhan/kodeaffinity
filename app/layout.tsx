
import Footer from "./components/widgets/Footer";
import "./globals.css";
// import Navbar from "./components/widgets/Navbar";
import { Montserrat } from "next/font/google";
const poppins = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Adjust as needed
  variable: "--font-montserrat", // This creates a CSS variable
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={` bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
      {children}
      <Footer/>
    </body>
  </html>
  );
}