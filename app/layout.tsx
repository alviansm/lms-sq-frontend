import { FC, PropsWithChildren } from "react";
import FlowbiteContext from "./context/FlowbiteContext";
import "./globals.css";

const RootLayout: FC<PropsWithChildren> = function ({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Simple Quiz</title>
      </head>
      <body>
        <FlowbiteContext>{children}</FlowbiteContext>
      </body>
    </html>
  );
};

export default RootLayout;
