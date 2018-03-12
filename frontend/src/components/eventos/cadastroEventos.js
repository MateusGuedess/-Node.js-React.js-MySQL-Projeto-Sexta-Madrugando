import React, { Component } from 'react'


class CadastroEventos extends Component {

    state = {
        nomeCompleto: '',
        telefone: '',
        celular: '',
        igreja: ''
    }

    

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    verifystatus = (res, val) => {
        console.log(res)
        console.log(val)
    }

    onSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:4000/clientes',{
            headers: {
                'Accept': 'application/json'
            },
            method: 'POST',
            body: this.state
        })
        .then(res => this.verifystatus(res.status, res))
        .catch(res => console.log(res))
    }
    render() {
        return(
            <div>
               <form>
                    <div className="row">
                        <div className="col">
                            <input 
                            name='nomeCompleto'
                            type="text" 
                            className="form-control" 
                            placeholder="Nome Completo" 
                            value={this.state.nomeCompleto} 
                            onChange={e =>this.change(e)} />
                        </div><br />
                        <div className="col">
                            <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Telefone"
                            value={this.state.telefone}
                            onChange={e =>this.change(e)} 
                            name='telefone' />
                        </div><br />
                        <div className="col">
                            <input type="text" 
                            className="form-control" 
                            placeholder="Celular"
                            value={this.state.celular}
                            onChange={e =>this.change(e)} 
                            name='celular' />
                        </div><br />
                        <div className="col">
                            <input type="text" 
                            className="form-control" 
                            placeholder="Igreja"
                            value={this.state.igreja}
                            onChange={e =>this.change(e)} 
                            name='igreja' />
                        </div>
                    </div>
                    <div className='row'>
                        <button onClick={e => this.onSubmit(e)}className='offset-md-1 btn btn-success'>Participarei!</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CadastroEventos