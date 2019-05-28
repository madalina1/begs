import PageNotFound from "../components/PageNotFound/PageNotFound";
import DealsPage from "../components/DealsPage/DealsPage";
import RecommendationsPage from "../components/RecommendationsPage/RecommendationPage";
import DetailsPage from "../components/DetailsPage/DetailsPage";
import LoginPage from "../components/LoginPage/LoginPage";
import RegisterPage from "../components/RegisterPage/RegisterPage";
import ProfilePage from "../components/ProfilePage/ProfilePage";
import CategoriesPage from "../components/CategoriesPage/CategoriesPage";
import QRPage from "../components/QRPage/QRPage";


export const routes = [
    {
      path: "/",
      component: DealsPage,
      exact: 'exact'
    },
    {
      path: "/login",
      component: LoginPage
    },
    {
      path: "/register",
      component: RegisterPage
    },
    {
      path: "/recommendations",
      component: RecommendationsPage,
      exact: 'exact'
    },
    {
      path: "/categoriesPage",
      component: CategoriesPage,
      exact: 'exact'
    },
    {
      path: "/qr",
      component: QRPage,
      exact: 'exact'
    },
    {
      path: "/profile",
      component: ProfilePage,
      exact: 'exact'
    },
    {
      path: "/:id/details",
      component: DetailsPage,
      exact: 'exact'
    },
    {
      component: PageNotFound
    }
];