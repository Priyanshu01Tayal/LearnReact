function onsubmit(event)
{
    event.preventDefault();
    console.log("your form was submitted")
}

function Form()
{
    return (
        <>
        <form onSubmit={onsubmit}>
            <input type="text" placeholder="Enter your name" />
            <button type="submit">Submit</button>
        </form>
        </>
    )
}
export default Form;