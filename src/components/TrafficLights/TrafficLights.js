import styles from './TrafficLights.module.css';
const TrafficLights = () => {
  return (
    <div className={styles.container}>
      <svg xmlns="http://www.w3.org/2000/svg" width="52" height="12" viewBox="0 0 52 12" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z" fill="#EC6A5E"/>
        <path d="M11.75 6C11.75 9.17564 9.17564 11.75 6 11.75C2.82436 11.75 0.25 9.17564 0.25 6C0.25 2.82436 2.82436 0.25 6 0.25C9.17564 0.25 11.75 2.82436 11.75 6Z" stroke="black" strokeOpacity="0.12" strokeWidth="0.5"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M26 12C29.3137 12 32 9.31371 32 6C32 2.68629 29.3137 0 26 0C22.6863 0 20 2.68629 20 6C20 9.31371 22.6863 12 26 12Z" fill="#F5BF4F"/>
        <path d="M31.75 6C31.75 9.17564 29.1756 11.75 26 11.75C22.8244 11.75 20.25 9.17564 20.25 6C20.25 2.82436 22.8244 0.25 26 0.25C29.1756 0.25 31.75 2.82436 31.75 6Z" stroke="black" strokeOpacity="0.12" strokeWidth="0.5"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M46 12C49.3137 12 52 9.31371 52 6C52 2.68629 49.3137 0 46 0C42.6863 0 40 2.68629 40 6C40 9.31371 42.6863 12 46 12Z" fill="#61C554"/>
        <path d="M51.75 6C51.75 9.17564 49.1756 11.75 46 11.75C42.8244 11.75 40.25 9.17564 40.25 6C40.25 2.82436 42.8244 0.25 46 0.25C49.1756 0.25 51.75 2.82436 51.75 6Z" stroke="black" strokeOpacity="0.12" strokeWidth="0.5"/>
        </svg>
    </div>
  )
};

export default TrafficLights;
