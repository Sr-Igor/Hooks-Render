import { createBrowserRouter } from "react-router-dom";
import { MemoPage } from "../pages/memo";
import { UseMemoPage } from "../pages/useMemo";
import { CallbackPage } from "../pages/useCallback";

export const routes = createBrowserRouter([
    {path: '/memo', element: <MemoPage />},
    {path: '/useMemo', element: <UseMemoPage />},
    {path: '/useCallback', element: <CallbackPage />},
])