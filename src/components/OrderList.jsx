
import { useProductStore } from '../store/useProductStore'

const OrderList = () => {
  const { orderLists, onCancleOrder } = useProductStore();
  return (
    <div className='order-list-wrap'>
      {orderLists.map((order) => (
        <div>
          <div className="order-top">
            <p>주문번호 : {order.id}</p>
            <p>주문날짜 : {order.date}</p>
            <p>주문상태 : {order.status}</p>
          </div>
          <div className="order-middle cart-wrap">
            <ul className='cart-list'>
              {order.items?.map((item, id) => (
                <li>
                  <div className="cart-goods-info"><img src={item.image} alt="" /></div>
                  <div>
                    <p>상품명 : {item.title}</p>
                    <p>주문개수 : {item.count}</p>
                  </div>
                  <button 
                  disabled={order.status==="취소신청중"}
                  onClick={() => onCancleOrder(order.id)}>취소</button>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-bottom">
            <p>총결제금액 : {order.totalPrice}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default OrderList