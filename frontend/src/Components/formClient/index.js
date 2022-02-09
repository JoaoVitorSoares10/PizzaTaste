export default (props) => {
    return (
        <>
            <h2 className='title'>Cadastrar pedido</h2>
            <div className="form">
                <form onSubmit={props.handleSubmit}>
                    <label htmlFor="lClientName">Nome do cliente*</label>
                    <input className={props.clientAlert ? 'inputError' : 'InputRegister'} id='clientName' name='clientName' type="text" value={props.clientName} onChange={props.handleChange} placeholder={props.clientAlert ? 'campo obrigatório ⚠️' : ''} />

                    <label htmlFor="lTable">Mesa</label>
                    <input className='InputRegister' id='table' name='table' type="text" value={props.table} onChange={props.handleChange} />

                    <label htmlFor="lphone">Telefone</label>
                    <input className='InputRegister' id='phone' name='phone' type="text" value={props.phone} onChange={props.handleChange} />

                    <label htmlFor="lAddress">Endereço</label>
                    <input className='InputRegister' id='address' name='address' type="text" value={props.address} onChange={props.handleChange} />

                    <input type="submit" onClick={props.handleForm} value="Cadastrar" />
                </form>
                <p>* campos obrigatórios</p>
            </div>
        </>
    )
}