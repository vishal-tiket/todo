import { GetServerSideProps } from "next"

export default function Home(){
    return(<>
    
    <h1>Todo comes here</h1></>)
}

export const getServerSideProps: GetServerSideProps = async(ctx) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos")
    const todos = await response.json()

    return {
        props:{
            todos: todos
        }
    }
}