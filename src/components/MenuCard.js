const MenuCard = (props) => {
    const { data } = props;

    return (
        <div className="menu-card">
            <img src={data.product_imageUrl} alt={data.product_name} />

            <div className="menu-card-body">
                <h2>{data.product_name}</h2>
                <p>{data.small_description}</p>

                <div className="menu-card-footer">
                    <div>
                        <span className="menu-card-rating">⭐ {data.rating}</span>
                        <h1>₹{data.price}</h1>
                    </div>
                    <button>Add</button>
                </div>
            </div>
        </div>
    );
};

export default MenuCard;