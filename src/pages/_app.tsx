import { type AppType } from "next/app";
import { Inter } from "next/font/google";

import { api } from "~/trpc/api";
import '@cloudscape-design/global-styles'

import "~/styles/globals.css";
import React from 'react'
if (typeof window === 'undefined'){ 
  React.useLayoutEffect = () => {
    console.log("Disable useLayoutEffect")
  }
  React.useEffect = () => {
    console.log("Disable useLayoutEffect")
  }
}


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});
const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={`font-sans ${inter.variable}`}>
      <Component {...pageProps} />
    </main>
  );
};

export default api.withTRPC(MyApp);
