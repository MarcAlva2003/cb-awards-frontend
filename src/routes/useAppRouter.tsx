import {
  LibraryPage,
  NotFoundPage,
} from "../pages";
import { RouteObject, useRoutes } from "react-router-dom";

export interface IPublicRoutes {
  HOME: string;
  LIBRARY: string;
  LIBRARY_ITEM: string;
  NOT_FOUND: string;
}

export const useAppRouter = () => {
  const publicRoutes: IPublicRoutes = {
    LIBRARY: "/biblioteca",
    LIBRARY_ITEM: "biblioteca/:id",
    HOME: "/",
    NOT_FOUND: "*",
  };

  const publicRouter: RouteObject[] = [
    {
      path: publicRoutes.HOME,
      element: <LibraryPage />,
      errorElement: <NotFoundPage />,
    },
    {
      path: publicRoutes.LIBRARY,
      element: <LibraryPage />,
      errorElement: <NotFoundPage />,
    },
    {
      path: publicRoutes.LIBRARY_ITEM,
      element: <LibraryPage />,
      errorElement: <NotFoundPage />,
    },
    {
      path: publicRoutes.NOT_FOUND,
      element: <LibraryPage />,
    },
    
  ];

  return {
    publicRoutes,
    publicRouter: useRoutes(publicRouter),
  };
};
