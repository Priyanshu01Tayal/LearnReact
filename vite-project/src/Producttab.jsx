import Product from "./Product";
function Producttab()
{
   
    return <>
    <Product title="Product 1" name="Name 1" features={["affordable", "easy to use"]} price={1200} idx={1} />
    <Product title="Product 2" name="Name 2" features={["durable", "eco-friendly"]} price={900} idx={2} />
    </>
}
export default Producttab;