import { Inter } from "next/font/google";
import Header from "@/components/header";
import Container from "@/components/container";
import "./globals.css";
import { Flex, ScrollArea, Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { ThemeOwnProps } from "@radix-ui/themes/props";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

const THEME: ThemeOwnProps = {
  accentColor: "violet",
  grayColor: "mauve",
  radius: "large",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(inter.className)}>
        <Theme {...THEME}>
          <Flex direction="column" className="h-screen">
            <Header />
            <main className="flex-1 overflow-hidden bg-white">
              <ScrollArea className="py-4">
                <Container>{children}</Container>
              </ScrollArea>
            </main>
          </Flex>
        </Theme>
      </body>
    </html>
  );
}
