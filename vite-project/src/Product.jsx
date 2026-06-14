import Price from "./Price";
function Product({ title, name, features, price ,idx}) {
  let featureList = features.map((item) => (
    <p key={item}>{item}</p>
  ));
  let oldPrice=[100,344,566];
  let newPrice=[111,434,900];
let styles={backgroundColor:"yellow" ,color:"black",color:price >= 1000? "green":"red"}
  return (
    <>
      <h2 style={styles}>{title}</h2>
      <p>{name}</p>

      {featureList}

      {price >= 1100 ? (
        <p>Discount Available</p>
      ) : (
        <p>No Discount</p>
      )}
      <Price oldPrice={oldPrice[idx-1]} newPrice={newPrice[idx-1]} />
    </>
  );
}

export default Product;