import React, {useState} from 'react'
import Row from '../row';
import { StarshipList,StarshipItemDetails } from '../sw-components';
import {Record} from '../item-details/item-details'


const StarshipsPage = () => {
    const [state, setState] = useState({itenId: 2})

    const leftElement=(
      <StarshipList setItemId ={(id) => setState({itemId :id})}>
         {(item) => `${item.name} - ${item.passengers}`}
      </StarshipList>
    )

    const rightElement = (
      <StarshipItemDetails itemId={state.itemId}>
              <Record label='CostInCredits'label_key='costInCredits'/>
              <Record label='Manufacturer'label_key='manufacturer'/>
              <Record label='Model'label_key='model'/>
              <Record label='Passengers'label_key='passengers'/>
      </StarshipItemDetails>
  )

  return (
     <Row left={leftElement} right={rightElement} />
  )
}

export default StarshipsPage ;


































































































































































































































































































































