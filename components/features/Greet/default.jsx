import React from 'react';
import PropTypes from '@arc-fusion/prop-types';

const Greet = ({ customFields }) => (
<div className="hello_text">
    Hello
    {customFields.name || 'User'}
    !
</div>
);

Greet.propTypes = {
customFields: PropTypes.shape({
    name: PropTypes.string.tag({
    label: 'Name',
    description: 'What is your name?',
    }),
}),
};

export default Greet;
