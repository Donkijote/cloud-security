import type { ReactNode } from "react";

import { I18nextProvider } from "react-i18next";

import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";

import { Layout } from "@/layout/Layout";

import appCss from "../styles.css?url";
import i18n from "./i18n";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Cloud Security",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),

  shellComponent: RootDocument,
});

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <title></title>
        <link
          rel="icon"
          href="/favicon.svg"
          media="(prefers-color-scheme: dark)"
        />
        <HeadContent />
      </head>
      <body>
        <I18nextProvider i18n={i18n}>
          <Layout>{children}</Layout>
        </I18nextProvider>
        <TanStackDevtools
          config={{
            position: "bottom-left",
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  );
}
