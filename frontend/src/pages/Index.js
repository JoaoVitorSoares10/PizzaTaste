import React, {useEffect, useState} from 'react';
import Api from '../service/api'
import '../styles/index.css'
import Header from '../Components/header';
import SideBar from '../Components/sideBar';
import Loader from '../Components/loader';

export default function Home() {
  const [data, setData] = useState([])
  const [showLoader, setShowLoader] = useState(true)
  const [showSideBar, setShowSideBar] = useState(false)
  
  useEffect(() => {
    const loadOrders = async () => {  
      try{
        const response = await Api.get('/')
        setData(response.data)  
        setShowLoader(false)
      }catch (err){
        console.log(err)
      }
    }
    loadOrders()
  });

  const handleStatus = async (id) => {
      try{
        const response = await Api.put('/status/'+id, { status: true })
        console.log(response)
      }catch (err){
        console.log(err)
      }
  }

  const handleOrder = (id) => {
    window.location.href = '/order/'+id
  }

  const listItems = data.map(
    (data, key) =>  
      <tr key={data._id}>
        <td onClick={()=>handleOrder(data._id)}>{key+1}</td>
        <td onClick={()=>handleOrder(data._id)}>{data.flavor}</td>
        <td onClick={()=>handleOrder(data._id)}>{data.drink}</td>
        <td onClick={()=>handleOrder(data._id)}>{data.table}</td>
        <td onClick={()=>handleOrder(data._id)}>{data.clientName}</td>
        <td><input type="submit" onClick={()=>handleStatus(data._id)} value={data.status === false ? 'Confirmar' : 'Desfazer'}/></td>
      </tr>
  );
  
  return(
    <div className='container'>
      <Header 
        showSideBar={showSideBar}
        setShowSideBar={setShowSideBar}
      />
      <div className='content'> 
      {showSideBar? 
        <SideBar 
          activePedidos='active'
          activeNovos=''
          activeEntregue=''
        />
        : <></> }
        <div className='data'>
          <h2 className='title'>Pedidos pendentes</h2>
          {
            showLoader? 
              <Loader/> : 
              <>
              <table className='orderTable'>
                <tbody>
                  <tr>
                    <th>Nº</th>
                    <th>Sabor</th>
                    <th>Bebida</th>
                    <th>Mesa</th>
                    <th>cliente</th>
                    <th>Situação</th>
                  </tr>
                  {listItems}        
                </tbody>
              </table>
              <p id='msg'>{data.length === 0 ? 'Não há pedidos entregues no momento' : ''}</p>
              </>
          }
        </div>    
      </div> 
    </div>
  )
}
