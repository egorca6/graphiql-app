import { LoginForm } from '../components/LoginForm';
import styles from './LoginPage.module.scss';

export const LoginPage = () => (
  <div className={styles.container}>
    <h1>Login</h1>
    <LoginForm />
  </div>
);
