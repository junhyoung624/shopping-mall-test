
import { useProductStore } from '../store/useProductStore'

const WishList = () => {
    const {WishLists, onRemoveWish} = useProductStore();
  return (
    <div className='cart-wrap'>
        <ul className="wish-list cart-list">
            {WishLists.map((list, id) => (
                <li key={id}>
                    <div className="cart-goods-info">
                        <img src={list.image} alt="" />
                    </div>
                    <div className="text-box">
                        <h3>{list.title}</h3>
                        <p>{list.price}</p>
                    </div>
                    <p><button onClick={() => onRemoveWish(list.id)}>삭제</button></p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default WishList