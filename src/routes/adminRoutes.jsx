import LayoutAdmin from "../layouts/admin/LayoutAdmin";
import DashboardPage from "../pages/admin/DashboardPage";
import OrderManagement from "../pages/admin/OrderManagement";
import ProductManagement from "../pages/admin/ProductManagement";

const adminRoutes = {
  path: "/admin",
  element: <LayoutAdmin />,
  children: [
    { path: "", element: <DashboardPage /> },
    // * /admin/products
    { path: "products", element: <ProductManagement /> },
    { path: "orders", element: <OrderManagement /> },
  ],
};

export default adminRoutes;
