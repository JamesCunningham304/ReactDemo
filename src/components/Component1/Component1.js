import './Component1.css'


const Component1 = (props) => {

    const name = 'Billy'

    return (
        <div>
            Hello {name} and {props.name}
        </div>
    )
}

export default Component1