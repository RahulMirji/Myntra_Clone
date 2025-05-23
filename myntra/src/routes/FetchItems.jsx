import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemActions } from "../store/itemSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) {
      return;
    }

    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:8080/items", { signal });
        const { items } = await res.json();
        dispatch(itemActions.addInitialItems(items[0]));
      } catch (err) {}
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [fetchStatus]);
};

export default FetchItems;
