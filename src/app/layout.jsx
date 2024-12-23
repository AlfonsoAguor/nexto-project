import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Next Project",
  description: "Primer proyecto de next",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar/>
        <main className="container mx-auto h-screen flex justify-center items-center">{children}</main>
      </body>
    </html>
  );
}
