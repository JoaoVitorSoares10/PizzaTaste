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
  const [flavor, setFlavor] = useState('');
  const [drink, setDrink] = useState('');
  const [idClient, setIdClient] = useState(0);

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
    }else if(idInput === 'flavor'){
      setFlavor(value); 
    }else if(idInput === 'drink'){
      setDrink(value); 
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
    if(clientName !== ''){      
      try{
        const req = await Api.post('client/register', data);
        setIdClient(req.data._id);
        setForm(true);
      }catch (err){
        console.log(err)
      }
    }else{
        setClientAlert(true)
    }
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
            <FormOrder 
              handleChange={handleChange}
              flavor={flavor}
              drink={drink}
              idClient={idClient}
            />
          :
            <RegisterClient 
              clientAlert={clientAlert}
              phone= {phone}
              table= {table}
              clientName= {clientName}
              address= {address}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          }
        </div>    
      </div> 
    </div>
  );
}

