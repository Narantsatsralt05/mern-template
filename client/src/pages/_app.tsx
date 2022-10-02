import { envConfig } from "@utils";
import { AppProps } from "next/app";
// import { Background } from "@components";
// import { user, users } from "@mock";
// import type { Todo } from "@types";
// import { theme } from "@theme";

import "../styles/global.css";
console.log(envConfig.port);

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
