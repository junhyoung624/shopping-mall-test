

const ProductIem = ({item}) => {
  return (
    <div>
        <div className="img-box">
            <img src={item.image} alt="img" />
        </div>
        <div className="text-box">
            <h3>{item.title}</h3>
            <div>
                <strong>{item.price}</strong>
                <span>20%</span>
            </div>
        </div>
    </div>
  )
}

export default ProductIem