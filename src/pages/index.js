import * as React from "react"

class YourComponent extends React.Component {
    componentDidMount() {
        window.location.href = '/en';
    }

    render() {
        return(
            <div className="YourComponentHere"></div>
        )
    }
}

export default YourComponent
