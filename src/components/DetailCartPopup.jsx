
import { Link} from 'react-router-dom'
import "./scss/Popup.scss";

const DetailCartPopup = ({onClose}) => {
  return (
    <div className="popup-wrap">
        <div className="popup">
            <h2>장바구니에 추가 되었습니다</h2>
            <div>
                <button onClick={onClose}>쇼핑 계속하기</button>
                <Link to="/cart">카트보기</Link>
            </div>
        </div>
    </div>
  )
}

export default DetailCartPopup