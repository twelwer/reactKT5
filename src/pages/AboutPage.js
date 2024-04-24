import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Stars from '../components/Stars';

function AboutPage() {
  const [products, setProducts] = useState([])
  let url = 'https://fakestoreapi.com/products'
  
  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => setProducts(data))
  }, [url])

  return(
    <div className="content">
      <ul>
        {products.map(elem =>
          <Link key={elem.id} to={'/product/'+elem.id} state={elem}>
            <li className="ProductPreview">{elem.title}
            <Stars rating={elem.rating?.rate}/></li>
          </Link>
        )}
      </ul>
    </div>
  )
}

export default AboutPage
