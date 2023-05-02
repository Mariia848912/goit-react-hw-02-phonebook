import css from './Container.module.css'
import PropTypes from 'prop-types';

export const Container = ({ children }) => (
    <div className={css.container}>{children}</div>
)

Container.propTypes = {
    children: PropTypes.node.isRequired
}