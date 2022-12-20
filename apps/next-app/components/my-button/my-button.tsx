import styles from './my-button.module.css';

/* eslint-disable-next-line */
export interface MyButtonProps {}

export function MyButton(props: MyButtonProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MyButton!</h1>
    </div>
  );
}

export default MyButton;
