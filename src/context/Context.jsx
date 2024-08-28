import { createContext } from "react"
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {

    const onSent = async (props) => {
        await runChat(prompt)
    }

    onSent("What is react Js?")
    const contextValue = {

    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider