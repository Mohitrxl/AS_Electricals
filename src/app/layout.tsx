// import "./globals.css";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Reliable Electrical Services",
//   description: "Powering Your World with Reliable Electrical Solutions",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body>
//         <Header />
//         <main>{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import type { Metadata } from "next";
import Providers from "./providers"; // 👈 client wrapper

export const metadata: Metadata = {
  title: "Reliable Electrical Services",
  description: "Powering Your World with Reliable Electrical Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
