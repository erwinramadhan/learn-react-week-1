const Biodata = (props) => {
    return(
        <>
            <p>Name: {props.data.name}</p>
            <p>Job: {props.data.job}</p>
        </>
    )
}

export default Biodata;