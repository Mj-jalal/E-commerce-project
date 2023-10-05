import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import "./App.css"
import{ CartShopping, Header, ProductContainer, SideBar, WrapperContainer, WrapperSection} from './Sections/index'
import { useState, useEffect, useRef } from 'react'
import Products from './Data/Data'







function App() {
  const [products, setProducts] = useState([])
  const [filterProducts, SetFilterProducts] = useState([])
  const [cartPoducts, setCartPoducts] = useState([])
  const [inputValue, SetInputValue] = useState("")
  const [recommended, SetRecommended] = useState([])
  const [radioValue, setRadioValue] = useState({})
  const [showCart, setShowCart] = useState(false)
  const [subtotal, SetSubtotal] = useState(0.00)
  const refe = useRef([])
  const inputRef = useRef()
  const inputRadioRef = useRef([])
  const cartRef = useRef()


  const removeClass =()=>{
    refe.current.forEach(el=>{
      el.classList.remove("toggle")
    })
  }
  const restInputValue = ()=>{
    inputRef.current.value = ''
  }
  const restRadioValue = ()=>{
    if(Object.keys(radioValue).length) setRadioValue({})
    inputRadioRef.current.forEach(el=> el.checked = false )
  }
  const restRecommendedValue =()=>{
    if(recommended.length) SetRecommended([])
  }
  useEffect(()=>{
      setProducts(Products)
      return ()=> false
  },[])

  useEffect(()=>{
    SetFilterProducts(products)
  },[products])

  const hundleClick =(e)=>{
    const target = e.target
    restInputValue()
    restRadioValue()
    if(!recommended.includes(target.value)){
      SetRecommended(prev=> [...prev, target.value])
      target.classList.add("toggle") 
    }else{
      const reco = recommended.filter(el=> el !== target.value)
      SetRecommended(reco)
      target.classList.remove("toggle")
    }
  }
  
  useEffect(()=>{
    const filter = []
    products.map(item =>{
      recommended.forEach(el=>{
        item.company === el && filter.push(item)
      })
    })
    filter.length ? SetFilterProducts(filter) : SetFilterProducts(Products)
  },[recommended])

 const handleChange=(e)=>{
  const target = e.target.value
  SetInputValue(target.toLowerCase())
  restRecommendedValue()
  removeClass()
  restRadioValue()
 }

 useEffect(()=>{
    const filter = products.filter(item=>item.title.toLowerCase().includes(inputValue))
    SetFilterProducts(filter)
  },[inputValue])

  const handleChange2=(e)=>{
    const targetValue = e.target.value.toLowerCase()
    const targetName = e.target.name.toLowerCase()
    restInputValue()
    restRecommendedValue()
    removeClass()
    if(targetValue === 'all'){
      const {[targetName]: romove, ...filterObj} = radioValue;
      setRadioValue(filterObj)
    }else{
      if(targetName === 'price'){
        const arrayNb = targetValue.match(new RegExp(/\d+/g)).map(el=> Number(el))
        setRadioValue({...radioValue, [targetName] : arrayNb})
      }else{
        setRadioValue({...radioValue, [targetName] : targetValue})
      }
    }
  }

  useEffect(()=>{
    if( Object.keys(radioValue).length){
      const filter = products.filter(item=>{
        return Object.keys(radioValue)?.every(key=>{
          if(key === 'price'){
              return radioValue[key][0] <= item[key] & radioValue[key][1] >= item[key]
          }
          return radioValue[key] === item[key] 
        })
      })
      SetFilterProducts(filter)
    }else{
      if(recommended.length<=0) SetFilterProducts(products)
    }
  },[radioValue])
  
// setion of products in cart  

  const handleClick2 =(e)=>{
    const target = e.target.getAttribute("id")
    setShowCart(true)
    products.map(el=>{
      el.id == target & !cartPoducts.includes(el) && setCartPoducts([...cartPoducts, el])
    })
  }
  const removeItemCart =(e)=>{
    const target = e.target.parentNode.getAttribute('id')
    const filter = cartPoducts.filter(item=> item.id != target)
    setCartPoducts(filter)
  }
  const downUpQauntity =(e)=>{
    const targetName = e.target.name
    const targetId = e.target.parentNode.parentNode.getAttribute('id')
    
    const newProduct =  cartPoducts.map(item=>{
    let count = item.Quantity
        count =   targetName === 'up' ? count += 1 : count !== 1 ? count -= 1 : count = 1
    if(item.id == targetId){
        return {...item, Quantity: count}
      }
        return item
    })
    setCartPoducts(newProduct)
   
  }
 

  const toggleSlideCart = ()=>{
    setShowCart(!showCart)
  }

  useEffect(()=>{
  showCart ?  cartRef.current.classList.add('cartSlide') : cartRef.current.classList.remove('cartSlide')
},[showCart])

  useEffect(()=>{
      const subtotal = cartPoducts?.reduce((ac, item )=>{
      return ac + item.Quantity * item.price
    }, 0)

    SetSubtotal(subtotal)
  },[cartPoducts])

  return (
    <WrapperContainer>
      <Header refs = {inputRef}  action={handleChange} action1={toggleSlideCart} cartPoductsLenght={cartPoducts.length}/>
        <WrapperSection>
            <SideBar inputRadioRef={inputRadioRef} action={handleChange2} action1={removeItemCart}/>
            <ProductContainer refe={refe} action1={handleClick2} action={hundleClick} products={filterProducts}/>
        </WrapperSection>
      <CartShopping cartRef={cartRef}  action={removeItemCart} action1={downUpQauntity} action2={toggleSlideCart} products={cartPoducts} subtotal={subtotal}/>
    </WrapperContainer>
  )
}

export default App