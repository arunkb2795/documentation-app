import { Child } from './Child'

export default function Parent() {
    const onClick = () => {
        console.log("Clicked!")
    }
    return (
        <Child color={"red"} onClick={onClick}>Inside child</Child>
    )
}
