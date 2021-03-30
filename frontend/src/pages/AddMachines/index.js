import React, {useState} from 'react';
import {api} from '../../services/api'
import './style.css'

function AddMachines() {
  const [name, setName] = useState('')
  const [group, setGroup] = useState('')
  const [tag, setTag] = useState('')
  const [serial_number, setSerialNumber] = useState('')
  const [model, setModel] = useState('')
  const [manufactured_date, setManufacturedDate] = useState()

  function handleSubmit(e){
    e.preventDefault()
    api.post('/new-machine',{
      name,
      group,
      tag,
      serial_number,
      model,
      manufactured_date
    })
  }

  return (
    <div className="container">
      <h1>Nova Máquina</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-col">
            <label htmlFor="">Nome</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
          </div>
          <div className="form-col">
            <label htmlFor="">Grupo</label>
            <input type="text" value={group} onChange={(e)=>setGroup(e.target.value)}/>
          </div>
        </div>
        <div className="form-row">
          <div className="form-col">
            <label htmlFor="">Tag</label>
            <input type="text" value={tag} onChange={(e)=>setTag(e.target.value)}/>
          </div>
          <div className="form-col">
            <label htmlFor="">Série</label>
            <input type="text" value={serial_number} onChange={(e)=>setSerialNumber(e.target.value)}/>
          </div>
        </div>
        <div className="form-row">
          <div className="form-col">
            <label htmlFor="">Modelo</label>
            <input type="text" value={model} onChange={(e)=>setModel(e.target.value)}/>
          </div>
          <div className="form-col">
            <label htmlFor="">Ano de Fabricação</label>
            <input type="text" value={manufactured_date} onChange={(e)=>setManufacturedDate(e.target.value)}/>
          </div>
        </div>
        <button className="button">Adicionar</button>
      </form>
    </div>
  )
}

export default AddMachines;