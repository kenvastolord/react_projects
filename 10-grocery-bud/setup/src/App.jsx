import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = () => {
  const list = localStorage.getItem('list')
  if (list) {
    return JSON.parse(list)
  } else {
    return []
  }
}

function App() {
  const [item, setItem] = useState('')
  const [list, setList] = useState(getLocalStorage())
  const [editID, setEditID] = useState(null);
  const [isEditing, setIsEditing] = useState(false)
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' })

  const showAlert = (show = false, msg = '', type = '') => {
    setAlert({ show, msg, type })
  }

  const clearList = () => {
    showAlert(true, 'Empty List', 'danger')
    setList([])
  }

  const removeItem = (id) => {
    showAlert(true, 'Item Removed', 'danger')
    const newList = list.filter(item => item.id !== id)
    setList([...newList])
  }
  // const editItem = (id) => {
  //   const specificItem = list.find((item) => item.id === id);
  //   setIsEditing(true);
  //   setEditID(id);
  //   setItem(specificItem.name);
  // };
  const editItem = (id) => {
    const newValue = list.find((item) => item.id === id)
    setIsEditing(true)
    setEditID(id)
    setItem(newValue.name)
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!item) {
      showAlert(true, 'Please Enter Value', 'danger')
    } else if (item && isEditing) {
      setList(
        list.map((newValue) => {
          if (newValue.id === editID) {
            return { ...newValue, name: item }
          }
          return newValue
        })
      )
      setItem('')
      setIsEditing(false)
      setEditID(null)
      showAlert(true, 'Item Edited', 'success')

    }
    else {
      showAlert(true, 'Item Added', 'success')
      const newItem = { id: Date.now(), name: item }
      setList([...list, newItem])
      setItem('')
    }
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  return (
    <section className='section-center'>
      <form onSubmit={handleSubmit} className='grocery-form' >
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>grocery bud</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='e.g. eggs'
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <button type='submit' className='submit-btn'>
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className='grocery-container'>
          <List
            items={list}
            removeItem={removeItem}
            editItem={editItem}
          />
          <button
            className='clear-btn'
            onClick={clearList}
          >
            clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App
