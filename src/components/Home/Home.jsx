import PropTypes from 'prop-types';

import { useUser } from '../../api/hooks/useUser';

import classes from './home.module.css';

function Home({ title, content, buttons, rating }) {
  const {
    user: { firstName, lastName }
  } = useUser();
  return (
    <div className={classes.container}>
      <div className={classes.block__greetings}>
        <p className={classes.greetings__text}>Welcome</p>
        <p className={classes.greetings__text}>{`${firstName} ${lastName}`}</p>
        {rating}
      </div>
      {title}
      <div className={classes.line} />
      {content}
      {buttons}
    </div>
  );
}

Home.propTypes = {
  title: PropTypes.node,
  content: PropTypes.node,
  buttons: PropTypes.node,
  rating: PropTypes.node
};

Home.defaultProps = {
  title: '',
  content: '',
  buttons: '',
  rating: ''
};

export default Home;
