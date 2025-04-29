
const defaultButtonClickListener = () => {
    alert("Keep Clicking! This is not getting you anywhere");
}

function Button(props) {
    const buttonStyle = {
        color: props.color,
        backgroundColor: props.backgroundColor,
    }
    let onClick = defaultButtonClickListener;
    if (props.onClick) {
        onClick = props.onClick;    
    }
    return <button style={buttonStyle} onClick={onClick}>{props.label}</button>;
}

export default Button;
