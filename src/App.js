import { Component } from "react";
import Header from "./Header"
import Content from "./Content";
import Footer from "./Footer";

class App extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         users: []
    //     }
    // }
    //
    // fetchUser() {
    //     axios('https://randomuser.me/api/').then(({data}) => {
    //         this.setState({
    //             users: data.results
    //         })
    //     })
    // }
    //
    // componentWillMount() {
    //     this.fetchUser()
    // }

    render() {
        return <div className="Apps" style={{textAlign: "center"}}>
            <Header />
            <Content />
            <Footer />
        </div>
    }
}

export default App;
