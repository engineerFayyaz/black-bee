import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
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
import Register from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import PrivateRoute from "./components/PrivateRoutes";
import ContactRequest from "./admin/ContactInfo/ContactRequest";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import BlogSingle from "./pages/BlogsSingle";


const App = () => {
  const [theme, setTheme] = useState(getThemeMode());
  const auth = getAuth();
  const [user, setUser] = useState(null);
  const location = useLocation();
  useEffect(() => {
    setThemeMode(theme);
  }, [theme]);

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  // handle admin login
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [auth]);useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [auth]);

  // Define routes where you don't want to show Header and Footer
  const noHeaderFooterRoutes = ["/admin","/admin/add_Blog","/admin/signup", "/admin/Contacts_Info"];

  const shouldShowHeaderFooter = !noHeaderFooterRoutes.includes(location.pathname);

  return (
    <div className=" ">
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <>
        <GlobalStyles />
          {shouldShowHeaderFooter && <Header themeToggler={themeToggler} themeMode={theme} />}
          
          <Outlet />
          
          {shouldShowHeaderFooter && <Footer />}
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
      // {
      //   path: "/blogs/blogsSingle",
      //   element: <BlogSingle />,
      // },
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
      },
      {
        path: "/blogs/:id",
        element: <BlogSingle />,
      },

      {
        path: "/contact",
        element: <ContactPage />,
      },
      
      {
        path: "/admin",
        element: <SignIn />,
      },
      {
        path: "/admin/signup",
        element: <Register />,
      },
      {
        path: "/admin/add_Blog",
        element: <PrivateRoute />, // Wrap protected routes with PrivateRoute
        children: [
          {
            path: "/admin/add_Blog",
            element: <AddPost />,
          },
        ],
      },
      {
        path: "/admin/Contacts_Info",
        element: <PrivateRoute />, // Wrap protected routes with PrivateRoute
        children: [
          {
            path: "/admin/Contacts_Info",
            element: <ContactRequest />,
          },
        ],
      },
    ],
  },
]);

export default App;
