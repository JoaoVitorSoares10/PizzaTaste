import './style.css';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export default (props) => {
    const registerOrder = async () => {
        const data = {
          idClient: props.idClient,
          pizza: props.flavor,
          drink: props.drink
        }
        console.log(data);
        /* if(clientName !== ''){      
          try{
            const req = await Api.post('client/register', data);
            setIdClient(req.data._id);
            setForm(true);
          }catch (err){
            console.log(err)
          }
        }else{
            setClientAlert(true)
        } */
    }

    return (
        <>
            <h2 className='title'>Escolha os Sabores</h2>
            <div className="orderContainer">
                <div className="orderForm">
                    <div className='InputArea'>
                        <div className='inputItem'>                           
                            <input className='InputRegister' id='table' name='table' type="text" placeholder='Digite o sabor'/>
                            <a className="addIcon" onClick={registerOrder}>
                                <AddCircleIcon 
                                    fontSize="large"
                                />
                            </a>
                        </div>
                        <div className='inputItem'>
                            <input className='InputRegister' id='table' name='table' type="text" placeholder='Digite a bebida' />
                            <a className="addIcon" onClick={registerOrder}>
                                <AddCircleIcon 
                                    fontSize="large"
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="orderList">
                </div>
            </div>
        </>
    )
}