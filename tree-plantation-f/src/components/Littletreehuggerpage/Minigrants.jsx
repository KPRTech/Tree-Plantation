import React from 'react'
import Eligible from './Eligible'
import Whatcan from './Whatcan'
import Helpskids from './Helpskids'

const Minigrants = () => {
  return (
    <div className='pb-20'>
      <Eligible class="com" img="https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/childrensmilingwithtreesaplings-1662070064368.jpg?v=1662070071"
        title="WHO IS ELIGIBLE?"
        details="Kids in the US or Canada, between the ages of 5-12, that have a great idea related to Reforestation and are ready to make a real impact in their community."
      />

      <Whatcan className=""
        title="WHAT CAN YOU DO?"
        details="Kids who are awarded the grant will use the funding for their Little Tree Hugger project. This could include anything from planting a tree to starting a community garden, organizing a letter-writing campaign at their school, and more. The sky is the limit — and as our founder says, there are no bad ideas."
        img="https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/childsmilingwithshovelandtreesapling-1662070064353.jpg?v=1662070066"
      />
      <div className='mt-[-7%] helps'>
        <Helpskids img="https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/fatherdaughterplantingtreesapling-1662070064375.jpg?v=1662070077"
          title="WHO HELPS THE KIDS?"
          details="A responsible adult (that’s you, parents, guardians or teachers!) will receive the money and oversee the spending for the project. If the kid has a bank account the check can be made out directly to them. A One Tree Planted team member will also be available to help out every step of the way!"
        />
      </div>
    </div>
  )
}

export default Minigrants