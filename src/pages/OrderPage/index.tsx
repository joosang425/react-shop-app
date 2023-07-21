import { useAuth } from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";
import OrderList from "./orders-list/OrdersList";

const OrderPage = () => {
  const { isAuth } = useAuth();

  if (!isAuth) return <Navigate to="/" />;

  return (
    <div className="page">
      <div className="container">
        <h1>주문 히스토리</h1>
        <OrderList />
      </div>
    </div>
  );
};

export default OrderPage;
