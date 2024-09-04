function Card({url, name, price, description }) {
    return (
      <div className="foodContainer">
        <div className="foodCard">
          <div className="imgdiv">
            <img
              src={url}
              alt="img"
            />
          </div>
          <div>
            <div className="inner-area">
              <div className="first-column">
                <div className="name">{name}</div>
                <div className="price">{price}</div>
              </div>
              <div className='disciption'>{description}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default Card;