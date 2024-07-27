
import { useState } from 'react';
import AccordionItemCard from './Cards/AccordionItemCard';
import members from './Content/memberscontent';

const AccordionItems = ({ header, text }) => {
    const [active, setActive] = useState(false);

    const handleToggle = (event) => {
      event.preventDefault();
      setActive(!active);
    };

    return (
       <AccordionItemCard
       header={header}
       text={text}
       active={active}
       handleToggle={handleToggle}/>
      );
    };

function Board() {

    

  return (
    <div className='sm:px-8 md:px-4 lg:px-8 xl:px-8 h-screen'> 
      <h2 className="py-16 text-3xl text-center font-extrabold text-[#3ea498]">Board Members</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 text-justify">
           {members.map((member) =>(
              <AccordionItems
              header={member.header}
              text={member.text}
            />
            ))}
      </div>
    </div>
  )
}

export default Board