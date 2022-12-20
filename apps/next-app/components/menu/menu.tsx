import styles from './menu.module.css';

/* eslint-disable-next-line */
export interface MenuProps {}

export function Menu(props: MenuProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Menu!</h1>
    </div>
  );
}

export default Menu;
