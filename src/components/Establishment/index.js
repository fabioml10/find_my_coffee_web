import React, { useState, useEffect} from 'react'

import GoogleListEstablishmentsService from '../../services/google_list_establishments'

import styled from 'styled-components'

const LeftBar = styled.div`
  heigth: 100%;
  overflow-y: auto;
  width: 250px;
  position: absolute;
  color: white;
  background-color: rgba(10, 10, 10, 0.9);
  padding: 20px;
`

const Title = styled.h1`
  font-size: 20px;
  color: rgba(220, 110, 50, 0.7);
`

const Paragraph = styled.p`
  font-size: 13px;
  line-heigth: 14px
`

const Image = styled.img`
  heigth: 150px;
  width: 100%;
`

const Establishment = (props) => {
  const [establishment, setEstablishment] = useState([])
  const { REACT_APP_GOOGLE_API_KEY } = process.env

  useEffect(() => {
    getEstablishmentInfos()
  }, [props.place])

  async function getEstablishmentInfos() {
    try {
      const response = await GoogleListEstablishmentsService.show(props.place.place_id)
      setEstablishment(response.data.result)
    } catch (error) {
      setEstablishment([])
    }
  }

  return (
    <LeftBar>
      {
        (establishment.photos) ? 
        <Image
          src={`
            https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&
            photoreference=${establishment.photos[0].photo_reference}&sensor=false&
            key=${REACT_APP_GOOGLE_API_KEY}`} alt="Store perfil"
          />
        :
        <Image src="/images/no-photo.spg" alt="No photo"></Image>
      }
      <Title>{establishment.name}</Title>
      {
        (establishment.opening_hours) ?
        <div>
          {(establishment.opening_hours.open_now === true) ? "Aberto" : "Fechado"}
          <hr/>
          {
            establishment.opening_hours.weekday_text.map((schedule, index) => {
              return(
                <Paragraph key={index}>{schedule}</Paragraph>
              )
            })
          }
        </div>
        :
        <Paragraph>Não há informações.</Paragraph>
      }
      <hr/>
    <Paragraph>{establishment.formatted_address}</Paragraph>
    </LeftBar>
  )
}

export default Establishment