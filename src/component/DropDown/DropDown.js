import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

class DropDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: this.props.optionData,
        };
    }
    componentWillMount() {
        window.customSelect();
    }
    render() {
        return (
            <>
                <div>
                    <div class="sel sel--black-panther">
                        <select name="select-profession" id="select-profession" >
                            {this.state.options.map(option => {
                                return (
                                    <option value={option.value} >{option.name}</option>
                                );
                            })}
                        </select>
                    </div>
                </div>
            </>
        );
    }
}
DropDown.propTypes = {
    data: PropTypes.array
};
export default DropDown;