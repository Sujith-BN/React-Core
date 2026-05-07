const Shimmer = () => {
    return (
        <div className="shimmer-container">
            {
                Array(12).fill("").map((_, index) => (
                    <div className="shimmer-card" key={index}>
                        <div className="shimmer-img"></div>

                        <div className="shimmer-line big"></div>
                        <div className="shimmer-line medium"></div>
                        <div className="shimmer-line"></div>
                        <div className="shimmer-line small"></div>
                    </div>
                ))
            }
        </div>
    )
}

export default Shimmer