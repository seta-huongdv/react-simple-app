import React from 'react';
import Typography from '@material-ui/core/Typography';

import styles from './styles.scss';

export default class NotFound extends React.Component {
  render() {
    return (
      <React.Fragment>
          <Typography variant="headline" className={styles.headline}>
            Page Not Found
          </Typography>
          <Typography variant="subheading" color="textSecondary">
            {
              "The page you are looking for has been moved, deleted or doesn't exist."
            }
          </Typography>
        </React.Fragment>
    );
  }
}
