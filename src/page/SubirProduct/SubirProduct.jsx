import Rect, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import Sidebar from "../../components/sidebar/sidebar"
import Select from "react-select";
import RegisterProduct from "../../Service/RegisterProduct";

const SubirProduct=() => {

    const [inputList, setInputList] = useState([{ costo_compra: ""}]);
  console.log(inputList)
  // handle input change
  const handleInputChanger = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };    


  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { costo_compra: ""}]);
  };


    const [data, setData] =useState();

    useEffect(() =>{
        fetch("http://localhost:8000/api/auth/getprovedor")
        .then(resp => resp.json())
        .then(data => setData(data))
    },[setData])

    console.log(data)
    const navigate = useHistory()

    const [checked, setChecked] = useState([]);
    const ray =[]
    const [datos, setDatos] = useState({
      nameproduct:"",
      codebarra: "",
      imagen:"",
      precioventa:"",
  })

  
  console.log(inputList)
  const re = inputList?.map(index=> {
      ray.push(index.costo_compra)
  })

  console.log(datos)
  
  const handleInputChange = (event) => {
      setDatos({
          ...datos,
          [event.target.name] : event.target.value
      })
  } 

  
  
    const [loading,setLoading] =useState(false)
  
    const handleSubmit = (e) => {
      e.preventDefault();
      RegisterProduct({nameproduct:datos.nameproduct,codebarra:datos.codebarra,imagen:datos.imagen,costo_compra:ray,precioventa:datos.precioventa,checked}).then(index=>{
          setLoading(true)
          console.log(index)
      }).catch(e => {
          console.log(e)
      })
    };
  
   
    const handNextLogin =() =>{
      navigate.push("/Login")
    }



    
  
    const handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
          updatedList = [...checked, event.target.value];
        } else {
          updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
      };

      
    
    
      var isChecked = (item) =>
            checked.includes(item) ? "checked-item" : "not-checked-item";

    
    console.log(loading)
    
    return (
       <div>
           <Sidebar />
           
          <main className={"expenses"}>
            <div className={"expensesCard"}>
              <section className={"expensesOverview"}>
              <div className="container"  >
                {loading ?  <h1>Producto creado</h1>:
                <form onSubmit={handleSubmit} className="prod" >
                  <h1>Crear producto producto</h1>
                  <div className="ui divider"></div>
                  <div className="ui form">
                  <div className="field">
                      <label>Nombre del producto</label>
                      <input
                        type="text"
                        name="nameproduct"
                        placeholder="Nombre del producto"
                        value={datos.nameproduct}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="field">
                      <label>codigo del barra del producto</label>
                      <input
                        type="text"
                        name="codebarra"
                        placeholder="Nombre del colaborador"
                        value={datos.codebarra}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="field">
                      <label>imagen</label>
                      <input
                        type="text"
                        name="imagen"
                        placeholder="Apellido del colaborador"
                        value={datos.imagen}
                        onChange={handleInputChange}
                      />
                    </div>
                    
                    <div className="field">
                      <label>precio venta</label>
                      <input
                        type="number"
                        name="precioventa"
                        placeholder="precio venta"
                        value={datos.precioventa}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="field">
                      <label>Costo de compra</label>
                      {inputList?.map((x, i) => {
                          return (
                          <div className="box">
                              <input
                              type="number"
                              name="costo_compra"
                              placeholder="Costo de compra"
                              value={x.costo_compra}
                              onChange={e => handleInputChanger(e, i)}
                              />
                              <div className="btn-box">
                              {inputList.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
                              </div>
                          </div>
                  );
                      })}
                
              </div>



              <div className="field">
                <label>Provedor</label>

            
                <div className="app-container">
                <div className="checkList">
                    <div className="list-container">
                    {data?.result.map((item, index) => (
                        <div key={index.nom_prov} className="provedor-check" >
                            <span className={isChecked(item)}>{item.nom_prov}</span>
                            <input value={item.cod_prov} type="checkbox" onChange={handleCheck} />
                        
                        </div>
                    ))}
                    </div>
                </div>
                </div>

                        
                
              </div>
              
              <button className="fluid ui button ">Crear Producto</button>
            </div>
          </form>
            }
        </div>
              </section>
            </div>
          </main>
       </div>
    )
}
export default SubirProduct