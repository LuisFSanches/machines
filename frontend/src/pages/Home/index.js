import React,{useEffect, useState} from 'react';
import{Link}from 'react-router-dom'
import {api} from '../../services/api'

import './style.css'

function Home() {

  const [machines, setMachines] = useState([''])

  useEffect(()=>{
    const getData = async ()=>{
      const response = await api.get('/machines')
      setMachines(response.data)
      console.log(response.data)
    }
    getData()
  },[])

  return (
      <div className="home-container">
             <h1>MÁQUINAS</h1>
        <div className="home-header">
          <Link to="/nova-maquina">
            <button className="button">Adicionar Máquina</button>
          </Link>
          
          <div className="group-machine">
            <label htmlFor="">Grupo</label>
            <select name="" id="">
              <option value="">Selecione</option>
              <option value="">Máquina de Solda</option>
              <option> Dobradeira</option>
            </select>
          </div>

          <div className="search-machine">
            <input type="text" placeholder= "Pesquisar..."/>
            <button>Pesquisar</button>
          </div>

        </div>

        <div className="home-content">
          <table className="content-table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Tag</th>
                <th>Série</th>
                <th>Modelo</th>
                <th>Ano Fabricação</th>
              </tr>
            </thead>
            <tbody>
              {machines.map((machine)=>{
                return(
                  <tr key={machine.id}>
                    <td>{machine.name}</td>
                    <td>{machine.machine_tag}</td>
                    <td>{machine.serial_number}</td>
                    <td>{machine.model}</td>
                    <td>{machine.manufactured_date}</td>
                </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

  )
}

export default Home;