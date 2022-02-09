import React, {useState} from 'react'
import '../styles/registerOrder.css';
import Api from '../service/api'
import Header from '../Components/header';
import SideBar from '../Components/sideBar';
import RegisterClient from '../Components/formClient'
import FormOrder from '../Components/formOrder';

export default function OrderRegister(){
  const [phone, setphone] = useState('');
  const [table, setTable] = useState('');
  const [clientName, setClientName] = useState('');
  const [address, setAddress] = useState('');
  const [showSideBar, setShowSideBar] = useState(false);
  const [clientAlert, setClientAlert] = useState(false);
  const [form, setForm] = useState(false);

  const handleChange = (event) =>  {  
    const idInput = event.target.id  
    const value = event.target.value

    if(idInput === 'phone'){
      setphone(value)
    }else if(idInput === 'table'){
      setTable(value); 
    }else if(idInput === 'clientName'){
      setClientName(value); 
    }else if(idInput === 'address'){
      setAddress(value); 
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      clientName: clientName,
      table: table,   
      phone: phone, 
      address: address,
      status: false
    }
    console.log(data)
    if(clientName !== ''){      
      try{
        await Api.post('client/register', data)
        setForm(true);
      }catch (err){
        console.log(err)
      }
    }else{
        setClientAlert(true)
    }
  }

  const handleForm = () =>{

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
          activeNovos='active'
          activeEntregue=''
        />
        : <></> }
        <div className='data'>
          {form ? 
            <FormOrder />
          :
            <RegisterClient 
              clientAlert={clientAlert}
              phone= {phone}
              table= {table}
              clientName= {clientName}
              address= {address}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              handleForm={handleForm}
            />
          }
        </div>    
      </div> 
    </div>
  );
}

