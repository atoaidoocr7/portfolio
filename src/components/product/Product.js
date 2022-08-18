import './Product.css'

export default function Product({ link, img}) {



  return (

    <div className="p">
      {/* <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div> */}
      {/* <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img" />
        
      </a> */}
      <a href={link}>
        <div style={{
          background: `url(${img})`, backgroundSize: 'cover',
          width: '100%', height: '100%', backgroundRepeat: 'no-repeat'
        }} className="bg-img">

        </div>
      </a>



    </div>


  );
}