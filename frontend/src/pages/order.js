import React, {useState, useEffect} from 'react'
import Swal from 'sweetalert2'

import '../styles/order.css';
import Api from '../service/api'
import Header from '../Components/header';
import SideBar from '../Components/sideBar';
import api from '../service/api';

export default function OrderRegister(){
  const [id, setId] = useState()
  const [flavor, setFlavor] = useState()
  const [drink, setDrink] = useState()
  const [phone, setPhone] = useState()
  const [table, setTable] = useState()
  const [clientName, setClientName] = useState()
  const [address, setAddress] = useState()
  const [status, setStatus] = useState()

  const [disabled, setDisabled] = useState(true)
  const [showSideBar, setShowSideBar] = useState(false)

  const [flavorAlert, setflavorAlert] = useState(false)
  const [clientAlert, setClientAlert] = useState(false)
  const [tableAlert, setTableAlert] = useState(false)
  
  useEffect(() => {
    if(disabled){
      const url_string = window.location.href;
      const find = url_string.indexOf('order')
      let id = url_string.slice(find + 6)
      const loadOrders = async () => {  
        try{
          const response = await Api.get('/order/'+id)
          setFlavor(response.data.flavor)  
          setDrink(response.data.drink)  
          setPhone(response.data.phone)
          setTable(response.data.table)   
          setClientName(response.data.clientName) 
          setAddress(response.data.address) 
          setStatus(response.data.status)
          setId(response.data._id)
        }catch (err){
          console.log(err)
        }
      }
      loadOrders()
    }
  });

  const handleChange = (event) =>  {  
    const idInput = event.target.id  

    if(idInput === 'flavor'){
      setFlavor(event.target.value); 
    }else if(idInput === 'drink'){
      setDrink(event.target.value); 
    }else if(idInput === 'phone'){
      setPhone(event.target.value); 
    }else if(idInput === 'address'){
      setAddress(event.target.value); 
    }else if(idInput === 'table'){
      setTable(event.target.value); 
    }else if(idInput === 'clientName'){
      setClientName(event.target.value); 
    }else if(idInput === 'address'){
      setAddress(event.target.value); 
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      flavor: flavor,
      drink: drink,
      phone: phone,
      table: table,
      clientName: clientName,
      address: address,
      status: false
    }

    if(flavor !== '' && clientName !== ''){
      try{
        await Api.put('/order/'+id+'/update', data)
        if(status){
          window.location.href = '/orderDelivered'
        }else{
          window.location.href = '/'
        }   
      }catch (err){
        console.log(err)
      }
    }else{
      if(flavor === ''){
        setflavorAlert(true)
        setClientAlert(false)
        setTableAlert(false)
      }else if(table === ''){
        setTableAlert(true)
        setflavorAlert(false)
        setClientAlert(false)
      }else{
        setClientAlert(true)
        setflavorAlert(false)
        setTableAlert(false)
      }
    }
  }

  const handleDelete = () => {
    Swal.fire({
      title: 'Tem certeza?',
      text: "Não é possivel reverter a ação!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ff0000',
      cancelButtonColor: '#fc9303',
      confirmButtonText: 'Sim, apagar'
    }).then(async(result) => {
      if (result.isConfirmed) {
        try{
          await api.delete('/order/'+id+'/delete')
          window.location.href = '/'
        }catch(err){
          console.log(err)
        }
      }
    })
  }

  return (
    <div className='container'>
       <Header 
        showSideBar={showSideBar}
        setShowSideBar={setShowSideBar}
      />
      <div className='content'> 
      {showSideBar? 
        <SideBar 
          activePedidos=''
          activeNovos=''
          activeEntregues='active'
        />
        : <></> }
        <div className='data'>
        <h2 className='title'>Detalhes do pedido</h2>
        <div className="form">
            <form id='update' onSubmit={handleSubmit}>
            <label htmlFor="lflavor">Sabor*</label>
              <input className={flavorAlert? 'inputError' : 'InputRegister' } id='flavor' name='flavor' type="text" value={flavor} onChange={handleChange} disabled={disabled?'disabled':''} placeholder={flavorAlert? 'campo obrigatório ⚠️' : '' }/>

              <label htmlFor="ldrink">Bebida</label>
              <input className='InputRegister' id='drink' name='drink' type="text" value={drink} onChange={handleChange} disabled={disabled?'disabled':''}/>           
        
              <label htmlFor="lphone">Telefone</label>
              <input className='InputRegister' id='phone' name='phone' type="text" value={phone} onChange={handleChange} disabled={disabled?'disabled':''}/>

              <label htmlFor="lTable">Mesa*</label>
              <input className={tableAlert? 'inputError' : 'InputRegister' } id='table' name='table' type="text" value={table} onChange={handleChange} disabled={disabled?'disabled':''} placeholder={tableAlert? 'campo obrigatório ⚠️' : '' }/>  

              <label htmlFor="lClientName">Nome do cliente*</label>
              <input className={clientAlert? 'inputError' : 'InputRegister' } id='clientName' name='clientName' type="text" value={clientName} onChange={handleChange} disabled={disabled?'disabled':''} placeholder={clientAlert? 'campo obrigatório ⚠️' : '' }/>  

              <label htmlFor="lAddress">Endereço</label>
              <input className='InputRegister' id='address' name='address' type="text" value={address} onChange={handleChange} disabled={disabled?'disabled':''}/>  
        
              <input type={disabled?'hidden':'submit'} value="Atualizar" disabled={disabled?'disabled':''}/>
            </form>
            <p>* Campos obrigatórios</p>
          </div> 
            <div className='buttonMenu'>
              <button id='buttonDelete' onClick={handleDelete}>Deletar</button>
              <button id='buttonUpdate' onClick={disabled?()=>setDisabled(false):()=>setDisabled(true)}>{disabled?'Atualizar':'cancelar'}</button>
            </div>
        </div>
      </div> 
    </div>
  );
}

