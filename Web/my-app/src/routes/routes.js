import PageNotFound from "../components/PageNotFound/PageNotFound";
import DealsPage from "../components/DealsPage/DealsPage";
import RecommendationsPage from "../components/RecommendationsPage/RecommendationPage";
import DetailsPage from "../components/DetailsPage/DetailsPage";
import LoginPage from "../components/LoginPage/LoginPage";
import RegisterPage from "../components/RegisterPage/RegisterPage";
import ProfilePage from "../components/ProfilePage/ProfilePage";


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
      exact: 'exact',
      private: true
    },
    {
      path: "/profile",
      component: ProfilePage,
      exact: 'exact',
      private: true
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