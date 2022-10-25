import { useParams } from "react-router-dom";

function Detail(props){
  let {id} = useParams();

  let foundItem = props.shoes.find(ele => ele.id == id);
  console.log(foundItem);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{foundItem.title}</h4>
          <p>{foundItem.content}</p>
          <p>{foundItem.price}</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
    </div> 
  )
}

export default Detail;