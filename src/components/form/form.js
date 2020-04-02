import React from 'react';
import { render } from '@testing-library/react';

export default class SampleForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '', selection: ['lime'] };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value + '\n' + 'selected: ' + this.state.selection);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                    <textarea value={this.state.value} onChange={this.handleChange} />
                </label>
                <br/>
                <label>
                    Pick your favorite flavor:
                    <select multiple={true} value={this.state.selection} onChange={e => this.setState({selection: Array.prototype.map.call(e.target.selectedOptions, _=> _.value)})}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>

                <input type="submit" value="Submit" />
            </form>
        );
    }
}