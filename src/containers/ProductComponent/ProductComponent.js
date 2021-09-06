import React from "react";
import { useSelector } from "react-redux";
import {Link} from 'react-router-dom';

// class ProductComponent extends React.Component {


  
//   componentDidMount = () => {
//       products: this.props.currentproduct;
//       renderList: this.products.map((product) => {
//         product
//       }
//  )}


//   render() {
//     return (
//       <>
//         {/* <div className="four wide column" key={this.product.id}>
//             <br/>
//           <Link to={`/product/${this.product.id}`}>
//             <div className="ui link cards">
//               <div className="card">
//                 <div className="image">
//                   <img src={this.product.image} alt={this.product.title} />
//                 </div>
//                 <div className="content">
//                   <div className="header">{this.product.title}</div>
//                   <div className="meta price">$ {this.product.price}</div>
//                   <div className="meta">{this.product.category}</div>
//                 </div>
//               </div>
//             </div>
//           </Link>
//         </div>
//         {renderList} */}
//       </>
//     )
//   }
// }
// export default ProductComponent;

const ProductComponent = (props) => {
//     // const products = useSelector((state) => state.allProducts.products);
    const products = props.currentproduct;

    const renderList = products.map((product) => {
      const { id, title, image, price, category } = product;
    
      return (
          
        <div className="four wide column" key={id}>
            <br/>
          <Link to={`/product/${id}`}>
            <div className="ui link cards">
              <div className="card">
                <div className="image">
                  <img src={image} alt={title} />
                </div>
                <div className="content">
                  <div className="header">{title}</div>
                  <div className="meta price">$ {price}</div>
                  <div className="meta">{category}</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      );
    });
    return <>
        {renderList}
    </>;
  };
  
  export default ProductComponent;
