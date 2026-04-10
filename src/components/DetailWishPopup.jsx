
import { Link } from 'react-router-dom'
import "./scss/Popup.scss";
import { useAuthStore } from '../store/useAuthStore';

const DetailWishPopup = ({onClose}) => {
  const {user} = useAuthStore();
  return (
    <div className="popup-wrap">
        <div className="popup">
            <h2>찜 목록이 추가 되었습니다</h2>
            <div>
                <button onClick={onClose}>쇼핑 계속하기</button>
                {/* <Link to="/userInfo" state={{menu: "찜목록"}}>찜 목록보기</Link> */}
                <Link to={user ? "/userInfo" : "/login"} 
                state={user ? {menu: "찜록록"} : null}>
                  찜목록보기
                </Link>
            </div>
        </div>
    </div>
  )
}

export default DetailWishPopup