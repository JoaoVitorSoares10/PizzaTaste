export default (props) => {
    return (
        <>
            <h2 className='title'>Cadastrar pedido</h2>
            <div className="form">
                <form onSubmit={props.handleSubmit}>
                    <input className={props.clientAlert ? 'inputError' : 'InputRegister'} id='clientName' name='clientName' type="text" value={props.clientName} onChange={props.handleChange} placeholder='Nome do Cliente*' />
                    <input className='InputRegister' id='table' name='table' type="text" value={props.table} onChange={props.handleChange} placeholder='Número da mesa'/>
                    <input className='InputRegister' id='phone' name='phone' type="text" value={props.phone} onChange={props.handleChange} placeholder='Telefone'/>
                    <input className='InputRegister' id='address' name='address' type="text" value={props.address} onChange={props.handleChange} placeholder='Endereço'/>
                    <input type="submit" value="Proximo" />
                </form>
                <p>* campos obrigatórios</p>
            </div>
        </>
    )
}