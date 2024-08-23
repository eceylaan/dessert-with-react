import { useState } from "react";
import "./App.css";

const products = [
  {
    id: 1,
    image: {
      thumbnail: "https://dummyjson.czaylabs.com.tr/images/image-waffle-thumbnail.jpg",
      mobile: "https://dummyjson.czaylabs.com.tr/images/image-waffle-mobile.jpg",
      tablet: "https://dummyjson.czaylabs.com.tr/images/image-waffle-tablet.jpg",
      desktop: "https://dummyjson.czaylabs.com.tr/images/image-waffle-desktop.jpg",
    },
    name: "Waffle with Berries",
    category: "Waffle",
    price: 6.5,
  },
  {
    id: 2,
    image: {
      thumbnail: "https://dummyjson.czaylabs.com.tr/images/image-creme-brulee-thumbnail.jpg",
      mobile: "https://dummyjson.czaylabs.com.tr/images/image-creme-brulee-mobile.jpg",
      tablet: "https://dummyjson.czaylabs.com.tr/images/image-creme-brulee-tablet.jpg",
      desktop: "https://dummyjson.czaylabs.com.tr/images/image-creme-brulee-desktop.jpg",
    },
    name: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    price: 7,
  },
  {
    id: 3,
    image: {
      thumbnail: "https://dummyjson.czaylabs.com.tr/images/image-macaron-thumbnail.jpg",
      mobile: "https://dummyjson.czaylabs.com.tr/images/image-macaron-mobile.jpg",
      tablet: "https://dummyjson.czaylabs.com.tr/images/image-macaron-tablet.jpg",
      desktop: "https://dummyjson.czaylabs.com.tr/images/image-macaron-desktop.jpg",
    },
    name: "Macaron Miproduct of Five",
    category: "Macaron",
    price: 8,
  },
  {
    id: 4,
    image: {
      thumbnail: "https://dummyjson.czaylabs.com.tr/images/image-tiramisu-thumbnail.jpg",
      mobile: "https://dummyjson.czaylabs.com.tr/images/image-tiramisu-mobile.jpg",
      tablet: "https://dummyjson.czaylabs.com.tr/images/image-tiramisu-tablet.jpg",
      desktop: "https://dummyjson.czaylabs.com.tr/images/image-tiramisu-desktop.jpg",
    },
    name: "classNameic Tiramisu",
    category: "Tiramisu",
    price: 5.5,
  },
  {
    id: 5,
    image: {
      thumbnail: "https://dummyjson.czaylabs.com.tr/images/image-baklava-thumbnail.jpg",
      mobile: "https://dummyjson.czaylabs.com.tr/images/image-baklava-mobile.jpg",
      tablet: "https://dummyjson.czaylabs.com.tr/images/image-baklava-tablet.jpg",
      desktop: "https://dummyjson.czaylabs.com.tr/images/image-baklava-desktop.jpg",
    },
    name: "Pistachio Baklava",
    category: "Baklava",
    price: 4,
  },
  {
    id: 6,
    image: {
      thumbnail: "https://dummyjson.czaylabs.com.tr/images/image-meringue-thumbnail.jpg",
      mobile: "https://dummyjson.czaylabs.com.tr/images/image-meringue-mobile.jpg",
      tablet: "https://dummyjson.czaylabs.com.tr/images/image-meringue-tablet.jpg",
      desktop: "https://dummyjson.czaylabs.com.tr/images/image-meringue-desktop.jpg",
    },
    name: "Lemon Meringue Pie",
    category: "Pie",
    price: 5,
  },
  {
    id: 7,
    image: {
      thumbnail: "https://dummyjson.czaylabs.com.tr/images/image-cake-thumbnail.jpg",
      mobile: "https://dummyjson.czaylabs.com.tr/images/image-cake-mobile.jpg",
      tablet: "https://dummyjson.czaylabs.com.tr/images/image-cake-tablet.jpg",
      desktop: "https://dummyjson.czaylabs.com.tr/images/image-cake-desktop.jpg",
    },
    name: "Red Velvet Cake",
    category: "Cake",
    price: 4.5,
  },
  {
    id: 8,
    image: {
      thumbnail: "https://dummyjson.czaylabs.com.tr/images/image-brownie-thumbnail.jpg",
      mobile: "https://dummyjson.czaylabs.com.tr/images/image-brownie-mobile.jpg",
      tablet: "https://dummyjson.czaylabs.com.tr/images/image-brownie-tablet.jpg",
      desktop: "https://dummyjson.czaylabs.com.tr/images/image-brownie-desktop.jpg",
    },
    name: "Salted Caramel Brownie",
    category: "Brownie",
    price: 4.5,
  },
  {
    id: 9,
    image: {
      thumbnail: "https://dummyjson.czaylabs.com.tr/images/image-panna-cotta-thumbnail.jpg",
      mobile: "https://dummyjson.czaylabs.com.tr/images/image-panna-cotta-mobile.jpg",
      tablet: "https://dummyjson.czaylabs.com.tr/images/image-panna-cotta-tablet.jpg",
      desktop: "https://dummyjson.czaylabs.com.tr/images/image-panna-cotta-desktop.jpg",
    },
    name: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    price: 6.5,
  },
];

function App() {
  const [data, setData] = useState(products);
  const totalProducts = data.reduce((total, product) => total + (product.count || 0), 0);
  const totalPrice = data.reduce((total, product) => total + (product.count * product.price || 0), 0);

  function handleMinus(product) {
    const index = data.findIndex((x) => x.id === product.id);
    if (product.count < 1) {
      return;
    } else {
      data[index].count--;
      setData([...data]);
    }
  }
  function handlePlus(product) {
    const index = data.findIndex((x) => x.id === product.id);

    if (!product.count) {
      data[index].count = 1;
      setData([...data]);
    } else {
      data[index].count++;
      setData([...data]);
    }
    console.log(data);
  }
  return (
    <>
      <div className="container">
        <div id="products">
          <header>Desserts</header>
          <div id="productContainer">
            {data.map((x) => (
              <ProductCard product={x} key={x.id} handleMinus={handleMinus} handlePlus={handlePlus} />
            ))}
          </div>
        </div>
        <div id="cart">
          <header id="totalProducts">Your Cart ({totalProducts})</header>
          {totalProducts === 0 && (
            <div className="empty-cart-content">
              <img src="/Empty Illustration.svg" alt="" />
              <p>Your added items will appear here</p>
            </div>
          )}

          <div className="product-list">
            <BasketProducts data={data} setData={setData} />
          </div>

          <p className="ot-text">Order Total</p>
          <p className="calc-ot">${totalPrice}</p>
          <div id="deliveryType">
            <img src="/carbon_tree.svg" alt="tree-icon" />

            <p>
              This is a <strong>carbon-neutral</strong> delivery
            </p>
          </div>

          <button id="confirmBtn">Confirm Order</button>
        </div>
      </div>
    </>
  );
}

function ProductCard({ product, handleMinus, handlePlus }) {
  return (
    <div>
      {product.count ? (
        <div id="product">
          <img src={product.image.desktop} alt="" />
          <div id={product.id} className="btns">
            <button onClick={() => handleMinus(product)} className="minus-btn"></button>
            <p className="count-in-btn">{product.count}</p>
            <button onClick={() => handlePlus(product)} id={product.id} className="plus-btn"></button>
          </div>
          <div className="card-content">
            <p className="dessert-name">{product.category}</p>
            <p className="dessert-info">{product.name}</p>
            <p className="dessert-price">${product.price}</p>
          </div>
        </div>
      ) : (
        <div id="product">
          <img src={product.image.desktop} alt="" />
          <button onClick={() => handlePlus(product)} id={product.id} className="btn">
            <img src="/carbon_shopping-cart-plus.svg" alt="cart-icon" />
            <p>Add to cart</p>
          </button>
          <div className="card-content">
            <p className="dessert-name">{product.category}</p>
            <p className="dessert-info">{product.name}</p>
            <p className="dessert-price">${product.price}</p>
          </div>
        </div>
      )}
    </div>
  );
}

function BasketProducts({ data, setData }) {
  function removeProduct(index) {
    data[index].count = 0;
    setData([...data]);
  }
  return (
    <>
      {data.map((x, index) =>
        x.count ? (
          <div
            key={x.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "12px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <p className="spname">{x.name}</p>
              <div className="pricencountdiv">
                <h4 className="spcount" id={`product-count-${x.id}`}>
                  {x.count}x
                </h4>
                <p className="spprice">${x.price}</p>
                <p className="sptotal" id={`total-${x.id}`}>
                  ${x.price * x.count}
                </p>
              </div>
            </div>
            <button
              onClick={() => removeProduct(index)}
              className="remove-all-btn"
              data-id={x.id}
              style={{
                width: "28px",
                borderRadius: "50%",
                height: "28px",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                border: "2px solid #AD8A85",
                color: "#AD8A85",
                backgroundColor: "#fff",
              }}
            >
              <strong>x</strong>
            </button>
          </div>
        ) : null
      )}
    </>
  );
}

export default App;
