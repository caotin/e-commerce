import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

const myFont = localFont({
  src: [
    {
      path: "./fonts/Inter_28pt-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Inter_28pt-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Inter_28pt-Medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={myFont.className}>
      <Component {...pageProps} />
    </main>
  );
}
