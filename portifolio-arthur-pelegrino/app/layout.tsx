import "./global.scss";
import { Poppins } from "next/font/google";

const inter = Poppins({ 
  subsets: ["latin"], 
  weight: ['300', '400', '500', '600'] 
});

export const metadata = {
  title: "Arthur Pelegrino",
  description: "Arthur Pelegrino is a software engineer full stack with a lot of skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
