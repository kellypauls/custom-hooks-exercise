import axios from "axios";
import { useState, useEffect } from "react";

function useFlip(initialState = true){
    const [isFlipped, setIsFlipped] = useState(initialState);
    const toggle = () => {
        setIsFlipped(isUp => !isUp);
    }
    return [isFlipped, toggle];
}

function useAxios(keyInStorage, URL) {
    const [response, setResponse] = useLocalStorage(keyInStorage);

    const addResponse = async (formatter = data => data, restOfURL = "") => {
        const response = await axios.get(`${URL}${restOfURL}`);
        setResponse(data => [...data, formatter(response.data)])
    };

    const clearResponse = () => setResponse([]);

    return [response, addResponse, clearResponse]
}

function useLocalStorage(key, initialValue = []) {
    if (localStorage.getItem(key)) {
      initialValue = JSON.parse(localStorage.getItem(key));
    }
    const [value, setValue] = useState(initialValue);
  
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);
  
    return [value, setValue];
  }
  
  export default useLocalStorage;

export { useFlip, useAxios, useLocalStorage }
