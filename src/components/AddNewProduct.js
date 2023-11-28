import { useState } from "react";
import { Button } from "react-bootstrap";

const AddNewProduct = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [size, setSize] = useState(0)
    const [color, setColor] = useState('')
    const [isShowdetail, setisShowdetail] = useState(true)

    const handleHideShow = () => {
        setisShowdetail(!isShowdetail) //Truyen mot gia tri khac cho isShowdetail
    }

    const handleclickBtn = () => {
        let object = {
            name, price, size, color
        }

        // console.log('hien data', object, JSON.stringify(object))


        let productList = localStorage.getItem('product')
        if (productList) {
            let arr = JSON.parse(productList)
            arr.push((object))
            localStorage.setItem('product', JSON.stringify(arr))
        } else {
            localStorage.setItem('product', JSON.stringify([object])) // [object] o day la mot Ham co chua mot gia tri object
        }
        setName('')
        setPrice('')
        setSize('')
        setColor('')
        console.log('Data productList:', JSON.parse(productList))
    }
    // const x = 1
    // let test = ''
    // test = x > 5 ? 'I`m > 5' : 'I`m < 5' //Neu x > 5 thi I`m > 5 : neu x < 5 thi I`m < 5 Thay doi KQ tra ve bang :
    // console.log('Check test: ', test);



    return (
        <div>
            <fieldset>
                <legend>Add New Product</legend>
                <div className="input-product">
                    <label>Name: </label>
                    <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
                </div>
                <div className="input-product">
                    <label>Price: </label>
                    <input type="text" value={price} onChange={(event) => setPrice(event.target.value)} />
                </div>
                <div className="input-product">
                    <label>Size: </label>
                    <input type="text" value={size} onChange={(event) => setSize(event.target.value)} />
                </div>
                <div className="input-product">
                    <label>Color: </label>
                    <input type="text" value={color} onChange={(event) => setColor(event.target.value)} />
                </div>
                <Button onClick={() => handleclickBtn()}>Add New</Button>

            </fieldset>
            {/* {isShowdetail === true &&
                
            } */}
            {/* {isShowdetail === true && <div onClick={() => { handleHideShow() }}>Hidden</div>}
            {isShowdetail === false && <div onClick={() => { handleHideShow() }}>Show</div>} */}

            {isShowdetail === true ?
                <div onClick={() => { handleHideShow() }}>Hidden
                    <br />
                    <div>List Product
                        <div>
                            {localStorage.getItem('product')}
                        </div>
                    </div>
                </div> //True
                :
                <div onClick={() => { handleHideShow() }}>Show</div>
            }

        </div>



    )
}

export default AddNewProduct;