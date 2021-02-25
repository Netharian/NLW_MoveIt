<<<<<<< HEAD
import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: '50%' }} />
                <span className={styles.currentExperience} style={{ left: "50%" }}>300 xp</span>
=======
export function ExperienceBar() {
    return (
        <header className="experience-bar">
            <span>0 xp</span>
            <div>
                <div style={{ width: '50%' }} />
                <span className="current-experience" style={{ left: "50%" }}>300 xp</span>
>>>>>>> 56e9748da9092b52554ec327ab2b0bebd74dc8aa
            </div>
            <span>600 xp</span>
        </header>
    );
}