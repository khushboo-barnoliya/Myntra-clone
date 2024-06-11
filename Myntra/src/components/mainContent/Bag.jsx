
import BagSummary from './BagSummary'
import EmptyBag from './EmptyBag'

function Bag() {

  

  return (
    <>
      <div className="container-fluid">
        <EmptyBag />
        <BagSummary />
      </div>
    </>

  )
}

export default Bag