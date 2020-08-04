import React from 'react';
import Typography from '@material-ui/core/Typography';

const Title = props => {
  return (
    <Typography variant="h3" color="primary" gutterBottom>
      {props.text}
    </Typography>
  );
};

export default Title;
