import router from "./router";
import { BrowserRouter, RouterProvider, useLocation } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { useEffect } from "react";

export default function App() {
  return (
    <MantineProvider
      theme={{
        fontFamily: "Circular",
        colors: {
          brand: [
            "#E9F2EA",
            "#CBE4CF",
            "#ADDBB5",
            "#8DD899",
            "#69DB7C",
            "#5CC76E",
            "#53B463",
            "#519B5D",
            "#508558",
            "#4C7353",
          ],
        },
        primaryShade: 5,
        primaryColor: "brand",
        components: {
          TextInput: {
            defaultProps: {
              variant: "filled",
              size: "md",
            },
          },
          Textarea: {
            defaultProps: {
              variant: "filled",
              size: "md",
            },
          },
          Button: {
            defaultProps: {
              radius: "xs",
            },
          },
        },
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      {/* <Layout> */}
      <RouterProvider router={router} />
      {/* </Layout> */}
    </MantineProvider>
  );
}
