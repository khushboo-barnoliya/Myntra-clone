import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { itemsActions } from "../data/ItemSlice"


const FetchItems = () => {

  const fetchStatus = useSelector(store => store.fetchStatus)
  const dispatch = useDispatch()

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({items}) => {
        dispatch(itemsActions.addInitialItems(items[0]))
        console.log("Items Fetched:", items)

      })
    return () => {
      controller.abort();
    }
  }, [dispatch, fetchStatus])

  return (
    <>
      <div>
        Fetch Done: {fetchStatus.fetchDone}
        Currently Fetching: {fetchStatus.currentlyFetching}
      </div>
    </>
  )
}

export default FetchItems