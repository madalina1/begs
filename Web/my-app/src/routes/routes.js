import PageNotFound from "../components/PageNotFound/PageNotFound";
import DealsPage from "../components/DealsPage/DealsPage";
import RecommendationsPage from "../components/RecommendationsPage/RecommendationPage";
import DetailsPage from "../components/DetailsPage/DetailsPage";


export const routes = [
    {
      path: "/",
      component: DealsPage,
      exact: 'exact'
    },
    {
      path: "/recommendations",
      component: RecommendationsPage,
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