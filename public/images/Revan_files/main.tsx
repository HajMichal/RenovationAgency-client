import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=a6332ed8"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=a6332ed8"; const React = __vite__cjsImport1_react.__esModule ? __vite__cjsImport1_react.default : __vite__cjsImport1_react;
import __vite__cjsImport2_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=a6332ed8"; const ReactDOM = __vite__cjsImport2_reactDom_client.__esModule ? __vite__cjsImport2_reactDom_client.default : __vite__cjsImport2_reactDom_client;
import Home from "/src/pages/Home/index.tsx";
import { createBrowserRouter, RouterProvider } from "/node_modules/.vite/deps/react-router-dom.js?v=a6332ed8";
import { ErrorPage } from "/src/components/index.ts?t=1712502945988";
import Advertisements from "/src/pages/Advertisements/index.tsx?t=1712502945988";
import SingleAd from "/src/pages/Advertisements/[SingleAd]/index.tsx";
import Register from "/src/pages/Auth/Register/index.tsx";
import SignIn from "/src/pages/Auth/Signin/index.tsx?t=1712502945988";
import "/src/pages/main.sass";
import { MantineProvider } from "/node_modules/.vite/deps/@mantine_core.js?v=a6332ed8";
import "/node_modules/@mantine/core/styles.css";
import { QueryClient, QueryClientProvider } from "/node_modules/.vite/deps/@tanstack_react-query.js?v=a6332ed8";
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: /* @__PURE__ */ jsxDEV(Home, {}, void 0, false, {
        fileName: "/home/michal/Programming/revan/src/pages/main.tsx",
        lineNumber: 18,
        columnNumber: 12
      }, this),
      errorElement: /* @__PURE__ */ jsxDEV(ErrorPage, {}, void 0, false, {
        fileName: "/home/michal/Programming/revan/src/pages/main.tsx",
        lineNumber: 19,
        columnNumber: 17
      }, this)
    },
    {
      path: "/advertisements",
      element: /* @__PURE__ */ jsxDEV(Advertisements, {}, void 0, false, {
        fileName: "/home/michal/Programming/revan/src/pages/main.tsx",
        lineNumber: 23,
        columnNumber: 12
      }, this),
      children: [
        {
          path: ":adid",
          element: /* @__PURE__ */ jsxDEV(SingleAd, {}, void 0, false, {
            fileName: "/home/michal/Programming/revan/src/pages/main.tsx",
            lineNumber: 27,
            columnNumber: 14
          }, this)
        }
      ]
    },
    {
      path: "/auth",
      children: [
        {
          path: "register",
          element: /* @__PURE__ */ jsxDEV(Register, {}, void 0, false, {
            fileName: "/home/michal/Programming/revan/src/pages/main.tsx",
            lineNumber: 36,
            columnNumber: 14
          }, this)
        },
        {
          path: "signin",
          element: /* @__PURE__ */ jsxDEV(SignIn, {}, void 0, false, {
            fileName: "/home/michal/Programming/revan/src/pages/main.tsx",
            lineNumber: 40,
            columnNumber: 14
          }, this)
        }
      ]
    }
  ]
);
export const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxDEV(React.StrictMode, { children: /* @__PURE__ */ jsxDEV(MantineProvider, { children: /* @__PURE__ */ jsxDEV(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxDEV(RouterProvider, { router }, void 0, false, {
    fileName: "/home/michal/Programming/revan/src/pages/main.tsx",
    lineNumber: 51,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "/home/michal/Programming/revan/src/pages/main.tsx",
    lineNumber: 50,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/home/michal/Programming/revan/src/pages/main.tsx",
    lineNumber: 49,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "/home/michal/Programming/revan/src/pages/main.tsx",
    lineNumber: 48,
    columnNumber: 3
  }, this)
);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBaUJhO0FBakJiLE9BQU9BLFdBQVc7QUFDbEIsT0FBT0MsY0FBYztBQUNyQixPQUFPQyxVQUFVO0FBQ2pCLFNBQVNDLHFCQUFxQkMsc0JBQXNCO0FBQ3BELFNBQVNDLGlCQUFpQjtBQUMxQixPQUFPQyxvQkFBb0I7QUFDM0IsT0FBT0MsY0FBYztBQUNyQixPQUFPQyxjQUFjO0FBQ3JCLE9BQU9DLFlBQVk7QUFDbkIsT0FBTztBQUNQLFNBQVNDLHVCQUF1QjtBQUNoQyxPQUFPO0FBQ1AsU0FBU0MsYUFBYUMsMkJBQTJCO0FBRWpELE1BQU1DLFNBQVNWO0FBQUFBLEVBQW9CO0FBQUEsSUFDakM7QUFBQSxNQUNFVyxNQUFNO0FBQUEsTUFDTkMsU0FBUyx1QkFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBSztBQUFBLE1BQ2RDLGNBQWMsdUJBQUMsZUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVU7QUFBQSxJQUMxQjtBQUFBLElBQ0E7QUFBQSxNQUNFRixNQUFNO0FBQUEsTUFDTkMsU0FBUyx1QkFBQyxvQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQWU7QUFBQSxNQUN4QkUsVUFBVTtBQUFBLFFBQ1I7QUFBQSxVQUNFSCxNQUFNO0FBQUEsVUFDTkMsU0FBUyx1QkFBQyxjQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVM7QUFBQSxRQUNwQjtBQUFBLE1BQUM7QUFBQSxJQUVMO0FBQUEsSUFDQTtBQUFBLE1BQ0VELE1BQU07QUFBQSxNQUNORyxVQUFVO0FBQUEsUUFDUjtBQUFBLFVBQ0VILE1BQU07QUFBQSxVQUNOQyxTQUFTLHVCQUFDLGNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUztBQUFBLFFBQ3BCO0FBQUEsUUFDQTtBQUFBLFVBQ0VELE1BQU07QUFBQSxVQUNOQyxTQUFTLHVCQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBTztBQUFBLFFBQ2xCO0FBQUEsTUFBQztBQUFBLElBRUw7QUFBQSxFQUFDO0FBQ0Y7QUFFTSxhQUFNRyxjQUFjLElBQUlQLFlBQVk7QUFDM0NWLFNBQVNrQixXQUFXQyxTQUFTQyxlQUFlLE1BQU0sQ0FBRSxFQUFFQztBQUFBQSxFQUNwRCx1QkFBQyxNQUFNLFlBQU4sRUFDQyxpQ0FBQyxtQkFDQyxpQ0FBQyx1QkFBb0IsUUFBUUosYUFDM0IsaUNBQUMsa0JBQWUsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUErQixLQURqQztBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRUEsS0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBSUEsS0FMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBTUE7QUFDRiIsIm5hbWVzIjpbIlJlYWN0IiwiUmVhY3RET00iLCJIb21lIiwiY3JlYXRlQnJvd3NlclJvdXRlciIsIlJvdXRlclByb3ZpZGVyIiwiRXJyb3JQYWdlIiwiQWR2ZXJ0aXNlbWVudHMiLCJTaW5nbGVBZCIsIlJlZ2lzdGVyIiwiU2lnbkluIiwiTWFudGluZVByb3ZpZGVyIiwiUXVlcnlDbGllbnQiLCJRdWVyeUNsaWVudFByb3ZpZGVyIiwicm91dGVyIiwicGF0aCIsImVsZW1lbnQiLCJlcnJvckVsZW1lbnQiLCJjaGlsZHJlbiIsInF1ZXJ5Q2xpZW50IiwiY3JlYXRlUm9vdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsibWFpbi50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9Ib21lXCI7XG5pbXBvcnQgeyBjcmVhdGVCcm93c2VyUm91dGVyLCBSb3V0ZXJQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBFcnJvclBhZ2UgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9cIjtcbmltcG9ydCBBZHZlcnRpc2VtZW50cyBmcm9tIFwiLi9BZHZlcnRpc2VtZW50c1wiO1xuaW1wb3J0IFNpbmdsZUFkIGZyb20gXCIuL0FkdmVydGlzZW1lbnRzL1tTaW5nbGVBZF1cIjtcbmltcG9ydCBSZWdpc3RlciBmcm9tIFwiLi9BdXRoL1JlZ2lzdGVyXCI7XG5pbXBvcnQgU2lnbkluIGZyb20gXCIuL0F1dGgvU2lnbmluXCI7XG5pbXBvcnQgXCIuL21haW4uc2Fzc1wiO1xuaW1wb3J0IHsgTWFudGluZVByb3ZpZGVyIH0gZnJvbSBcIkBtYW50aW5lL2NvcmVcIjtcbmltcG9ydCBcIkBtYW50aW5lL2NvcmUvc3R5bGVzLmNzc1wiO1xuaW1wb3J0IHsgUXVlcnlDbGllbnQsIFF1ZXJ5Q2xpZW50UHJvdmlkZXIgfSBmcm9tIFwiQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5XCI7XG5cbmNvbnN0IHJvdXRlciA9IGNyZWF0ZUJyb3dzZXJSb3V0ZXIoW1xuICB7XG4gICAgcGF0aDogXCIvXCIsXG4gICAgZWxlbWVudDogPEhvbWUgLz4sXG4gICAgZXJyb3JFbGVtZW50OiA8RXJyb3JQYWdlIC8+LFxuICB9LFxuICB7XG4gICAgcGF0aDogXCIvYWR2ZXJ0aXNlbWVudHNcIixcbiAgICBlbGVtZW50OiA8QWR2ZXJ0aXNlbWVudHMgLz4sXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCI6YWRpZFwiLFxuICAgICAgICBlbGVtZW50OiA8U2luZ2xlQWQgLz4sXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBwYXRoOiBcIi9hdXRoXCIsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCJyZWdpc3RlclwiLFxuICAgICAgICBlbGVtZW50OiA8UmVnaXN0ZXIgLz4sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcInNpZ25pblwiLFxuICAgICAgICBlbGVtZW50OiA8U2lnbkluIC8+LFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuXSk7XG5cbmV4cG9ydCBjb25zdCBxdWVyeUNsaWVudCA9IG5ldyBRdWVyeUNsaWVudCgpO1xuUmVhY3RET00uY3JlYXRlUm9vdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIikhKS5yZW5kZXIoXG4gIDxSZWFjdC5TdHJpY3RNb2RlPlxuICAgIDxNYW50aW5lUHJvdmlkZXI+XG4gICAgICA8UXVlcnlDbGllbnRQcm92aWRlciBjbGllbnQ9e3F1ZXJ5Q2xpZW50fT5cbiAgICAgICAgPFJvdXRlclByb3ZpZGVyIHJvdXRlcj17cm91dGVyfSAvPlxuICAgICAgPC9RdWVyeUNsaWVudFByb3ZpZGVyPlxuICAgIDwvTWFudGluZVByb3ZpZGVyPlxuICA8L1JlYWN0LlN0cmljdE1vZGU+XG4pO1xuIl0sImZpbGUiOiIvaG9tZS9taWNoYWwvUHJvZ3JhbW1pbmcvcmV2YW4vc3JjL3BhZ2VzL21haW4udHN4In0=