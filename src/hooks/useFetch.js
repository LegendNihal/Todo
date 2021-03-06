import { useEffect,useState } from "react";

const useFetch = (url) => {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then(res => {
                if(!res.ok){
                    throw Error("Could not Fetch Data");
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setLoading(false);
                setError(null);
            })
            .catch(err => {
                setLoading(false);
                setError(err.message);
            })
    },[url]);

    return {data,loading,error}
}

export default useFetch;