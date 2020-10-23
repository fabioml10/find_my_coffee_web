import React, { useState } from 'react'
import ReactStars from 'react-rating-stars-component'
import styled from 'styled-components'

const NewRating = styled.div`
  padding-bottom: 50px;
`

const Input = styled.input`
  margin-bottom: 10px;
  height: 20px;
  width: 90%;
  border-width: 0;
`
const TextArea = styled.textarea`
  margin-bottom: 10px;
  height: 40px;
  width: 90%;
  border-width: 0;
`

const Button = styled.button`
  color: white;
  background-color: #a5572f;
  width: 90px;
  height: 30px;
  margin-top: 10px;
  border-color: #a5572f;
  font-weight: 800;
`

const Form = (props) => {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [value, setValue] = useState('')

  return (
    <>
      <h4>Deixe sua Opinião</h4>
      <form>
        <Input name="name"
          type="text"
          className="input"
          placeholder="Seu primeiro nome"
          onChange={(e) => setName(e.target.value)}
          value={name} />

        <TextArea name="message"
          className="textarea"
          placeholder="Sua opinião"
          onChange={(e) => setMessage(e.target.value)}
          value={message}></TextArea>

        <NewRating>
          <ReactStars
            count={5}
            value={value}
            size={24}
            activeColor="#ffd700"
            onChange={(e) => setValue(e)}/>

          <Button type="submit" className="button is-danger">Enviar</Button>
        </NewRating>
      </form>
    </>
  )
}

export default Form
