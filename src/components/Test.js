import React from 'react';
import { connect } from 'react-redux';

function Test(props) {
    return (
        <div>
            <input value={props.count}/>
        </div>
    )
}

function mapStateToProps(state){
    return {
        count: state.count
    }
}

export default connect(mapStateToProps)(Test);

