function Interest() {
  return (
    <div>
      <h3 className="interest-text">Pick an Interest</h3>
      <div className="container">
        <div className='interest-box1'>
          <img src="\images\fast-food.svg" alt="foodimage" />
          <h4>Fast Food</h4>
          <h5>All sorrows are less with bread</h5>
        </div>
        <div className='interest-box2'>
          <img src=".\images\Vegetables & Drinks.svg" alt="foodimage" />
          <h4>Vegetables and fruits</h4>
          <h5>May not want it, but good for you</h5>
        </div>
        <div className='interest-box3'>
          <img src="\images\Drinks & Cocktails.svg" alt="foodimage" />
          <h4>Drinks and cocktails</h4>
          <h5>I feel sad for those who don't drink</h5>
        </div>
        <div className='interest-box4'>
          <img src="\images\resturant.svg" alt="foodimage" />
          <h4>Restaurants</h4>
          <h5>All sorrows are less with bread</h5>
        </div>
      </div>
    </div>
  );
}

export default Interest;
