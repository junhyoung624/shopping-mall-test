
import { Navigation, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useProductStore } from '../store/useProductStore'
import ProductIem from './ProductIem'
import { Link } from 'react-router-dom'

const SectionSwiper = ({ category, count, direction, delay }) => {
    const { onItemsCategory } = useProductStore();
    const cateItems = onItemsCategory(category);

    // items이 다 불려지기 전에 카테고리가 실행됨
    // if(!items.length) return <div>로딩중...</div>
    console.log("카테고리 섹션@@@@", category,cateItems);

    return (
        <div className="home-goods-list">
            <Swiper className='mySwiper'
                modules={[Navigation, Scrollbar]}
                spaceBetween={40}
                slidesPerView={count}
                loop={true}
                autoplay={{
                    delay: delay ? delay : 3000,
                }}
                direction={direction ? direction : "horizontal"}
                navigation
                scrollbar
            >
                {cateItems.map((cate, id) =>
                    <SwiperSlide >
                        <Link to={`/product/${cate.id}`}>
                            <ProductIem item={cate} />
                        </Link>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    )
}

export default SectionSwiper