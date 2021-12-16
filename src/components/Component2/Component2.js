import './Component2.css'


const Component2 = (props) => {

    const name = 'Sally'
    const changeName = () => {
        props.setName('Allison')
    }

    return (
        <div>
            Hello {props.name} and {name}
            <button onClick = {() => changeName()}> Change Name</button>
        </div>
    )
}

export default Component2