import React from 'react';

export class Items extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            stateVar1: 0,
            stateVar2: "this is state var 2",
        }
    }

    render() {
        const { list } = this.props;
        console.log("List", list);
        return (
            <div>
                <div>
                    <h2>Items</h2>
                </div>
                <div>
                    <span>
                        {this.state.stateVar1}
                    </span><br/>
                    <span> Count 
                        <button onClick={() => this.setState({ stateVar1: this.state.stateVar1 + 1 })}>+</button>
                        
                    </span>
                </div>
            </div>
        )
    }
}