
import Footer from "./components/widgets/Footer";
import "./globals.css";
// import Navbar from "./components/widgets/Navbar";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Adjust as needed
  variable: "--font-poppins", // This creates a CSS variable
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body>

  
      {/* <Navbar/> */}

        {children}
        <Footer/>

      </body>
    </html>
  );
}
