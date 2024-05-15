import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BlogsPage from "./pages/BlogsPage";
import ContactPage from "./pages/ContactPage";
// import PackagesPage from "./pages/PackagesPage";
import ContentMarketingPage from "./pages/ContentMarketingPage";
import MediaBuyingPage from "./pages/MediaBuyingPage";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { ThemeProvider } from "styled-components";
import {
  GlobalStyles,
  setThemeMode,
  getThemeMode,
} from "./darkmode/globalStyles";
import { lightTheme, darkTheme } from "./darkmode/Theme";
import SingleBlogPage from "./components/Blogs/SingleBlogPage";
import AddPost from "./admin/Blog/AddPost";

const App = () => {
  const [theme, setTheme] = useState(getThemeMode());
  useEffect(() => {
    setThemeMode(theme);
  }, [theme]);

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div className=" ">
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <>
          <GlobalStyles />
          <Header themeToggler={themeToggler} themeMode={theme} />
          
          <Outlet />
          <Footer />
        </>
      </ThemeProvider>
    </div>
  );
};

export const AppLayout = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/services",
        // element: <ServicesPage />,
        children: [
          // {
          //   path: "/services/packages",
          //   element: <PackagesPage />,
          // },
          {
            path: "/services/content-marketing",
            element: <ContentMarketingPage />,
          },
          {
            path: "/services/media-buying",
            element: <MediaBuyingPage />,
          },
        ],
      },
      {
        path: "/blogs",
        element: <BlogsPage />,
        children: [
          {
            path: "/blogs/:title",
            element: <SingleBlogPage />,
          },
        ],
      },

      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/admin",
        element: <AddPost />,
      },
    ],
  },
]);

export default App;
