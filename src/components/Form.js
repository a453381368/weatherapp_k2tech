import React from 'react';

const Form = props => (
    <form onSubmit={props.getWeather}>
        <input type="text" name="city" placeholder="城市..." />
        <input type="text" name="country" placeholder="国家..." />
        <button>一键查询</button>
    </form>
);

export default Form;