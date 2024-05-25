import React, { useState } from 'react'
import AllUserCards from './allUserCards'
import Layout from '../../components/layout'
import Tabs from '../../components/tabs'
import GeneratedCards from './generatedCards'
import LinkedCards from './linkedCards'
import Search from '../../components/search'
import getPageTitle from '../../utilities/getPageTitle'
import Button from '../../components/button'
import './cardManagement.scss'
import { HiPlusCircle } from 'react-icons/hi'
import GenerateCardModal from './generateCardModal'
import LinkedCardModal from './linkedCardModal'

const tabs = [
  {
    id: 1,
    label: 'User Cards',
  },
  {
    id: 2,
    label: 'Generated Cards',
  },
  {
    id: 3,
    label: 'Linked Cards',
  },
]

const CardManagement = () => {
  const [activeTab, setActiveTab] = useState(tabs[0])
  const [isGenerateCard, setIsGenerateCard] = useState(false)
  const [isLinkedCard, setIsLinkedCard] = useState(false)

  return (
    <Layout>
      <div className='page-heading'>
        <h6>
          {getPageTitle(activeTab ? activeTab?.label : location?.pathname)}
        </h6>
        <div className='action_buttons'>
          <Button
            theme='secondary'
            size='sm'
            onClick={() => setIsGenerateCard(true)}
          >
            <HiPlusCircle />
            <p>Generate Card</p>
          </Button>
          <Button
            theme='secondary'
            size='sm'
            onClick={() => setIsLinkedCard(true)}
          >
            <HiPlusCircle />
            <p>Link Card</p>
          </Button>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginBottom: '10px',
        }}
      >
        <Search />
      </div>
      <div>
        <Tabs tabs={tabs} active={activeTab} setActive={setActiveTab} />
      </div>
      {activeTab.label === 'User Cards' && <AllUserCards />}
      {activeTab.label === 'Generated Cards' && <GeneratedCards />}
      {activeTab.label === 'Linked Cards' && <LinkedCards />}
      {isGenerateCard && (
        <GenerateCardModal
          isShown={isGenerateCard}
          setIsShown={setIsGenerateCard}
        />
      )}
      {isLinkedCard && (
        <LinkedCardModal isShown={isLinkedCard} setIsShown={setIsLinkedCard} />
      )}
    </Layout>
  )
}

export default CardManagement
