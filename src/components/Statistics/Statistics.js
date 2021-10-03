import PropTypes from 'prop-types';
import styles from './statistical.module.css';

const Statistics = ({title, stats}) => {
    return (<section class={styles.statistics}>
        <h2 class={styles.title}>{title}</h2>

        <ul class={styles.stat_list}>
        {stats.map(stat => (
          <li class={styles.item} key={stat.id}>
                <span class={styles.label}>{stat.label}</span>
                <span class={styles.percentage}>{stat.percentage}%</span>
          </li>))} 
        </ul>
    </section>);

};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;