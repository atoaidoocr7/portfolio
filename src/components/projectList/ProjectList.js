import './ProjectList.css'
import Product from "../product/Product";
import { products } from "../../data/data.js";

export default function ProjectList() {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Featured Projects</h1>
        <p className="pl-desc">
           Below are some of my personal projects. <br></br>
          (Click on each project to run/learn more)
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};
