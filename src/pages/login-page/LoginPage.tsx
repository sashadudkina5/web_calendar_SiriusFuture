import styles from "./styles.module.scss";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";
import { useState } from "react";
import { testUser, testUserInfo, extraUserInfo, scheduleInfo } from "../../utils/mock-data";
import { useAppDispatch, useAppSelector } from "../../service/store";
import { loginFailure, loginSuccess } from "../../service/slices/authSlice";
import { getAuthStatus, getCurrentLang, getLoginError } from "../../service/selectors";
import showIcon from "../../images/show_password.svg";
import { toggleLangEng, toggleLangRu } from "../../service/slices/langSlice";

export default function LoginPage() {

  const getText = (key: string) => {
    switch (key) {
      case 'title':
        return lang === 'RU' ? 'Вход в Sirius Future' : 'Login to Sirius Future';
      case 'emailPlaceholder':
        return lang === 'RU' ? 'Электронная почта' : 'E-mail';
      case 'passwordPlaceholder':
        return lang === 'RU' ? 'Пароль' : 'Password';
      case 'rememberMe':
        return lang === 'RU' ? 'Запомнить меня' : 'Remember me';
      case 'loginButton':
        return lang === 'RU' ? 'Войти' : 'Login';
      case 'forgotPassword':
        return lang === 'RU' ? 'Я забыл пароль' : 'Forgot Password';
      case 'loginAsTrainer':
        return lang === 'RU' ? 'Войти как тренер' : 'Login as Trainer';
      case 'noAccount':
        return lang === 'RU' ? 'Нет аккаунта?' : 'Don\'t have an account?';
      case 'register':
        return lang === 'RU' ? 'Зарегистрироваться' : 'Register';
      default:
        return '';
    }
  };

  const useSelector = useAppSelector;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const lang = useAppSelector(getCurrentLang);

  const location = useLocation();

  const loginError = useSelector(getLoginError);
  const handlePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleLangChange = () => {
    if (lang === "RU") {
      console.log("d")
      dispatch(toggleLangEng())
    }
    else if (lang === "EN"){
      dispatch(toggleLangRu())
    }
  };

  const activeStyle = {
    color: "#7362BC",
    fontSize: "40px",
  };

  //imitation of backend request
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const user = testUser.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      dispatch(
        loginSuccess({
          userInfo: testUserInfo,
          extraUserInfo: [extraUserInfo],
          scheduleInfo: scheduleInfo
        })
      ); //the data is passed here only to imitate backend response and update store data
      navigate("/user");
    } else {
      dispatch(loginFailure("Invalid email or password"));
    }
  };


  const isAuthenticated = useSelector(getAuthStatus);

  if (isAuthenticated) {
    return <Navigate to={"/user"} state={{ from: location }} />;
  }


  return (
    <section className={styles.login_section}>
      <div className={styles.login_container}>
        <img src={logo} alt="Sirius Future Logo" />
        <h1 className={styles.login_title}>{getText('title')}</h1>
        <form className={styles.login_form} onSubmit={handleSubmit}>
          <label htmlFor="email">
            <input
              type="email"
               id="email"
               name="email"
              placeholder={getText('emailPlaceholder')}
              className={styles.login_data}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <label className={styles.login_data__label} htmlFor="password">
            <input
              placeholder={getText('passwordPlaceholder')}
              className={styles.login_data}
              value={password}
              id="password"
            name="password"
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
              type={isPasswordVisible ? 'text' : 'password'}
              required
            />

            <span
              className={styles.password_toggle_icon}
              onClick={handlePasswordVisibility}
            >
              <img src={showIcon} alt="Toggle Password Visibility" />
            </span>
          </label>

          <label className={styles.login_remember_me_label} htmlFor="rememberMe">
            <input type="checkbox"  id="rememberMe" name="rememberMe"/>
            <p className={styles.login_remember_me}>{getText('rememberMe')}</p>
          </label>

          <p className={styles.login_error}>{loginError}</p>

          <button
            type="submit"
            className={styles.login_button}
            disabled={!email || !password}
          >
            {getText('loginButton')}
          </button>
        </form>

        <div className={styles.login_options}>
          <Link to="#" className={styles.login_option}>
            {getText('forgotPassword')}
          </Link>
          <Link to="#" className={styles.login_option}>
            {getText('loginAsTrainer')}
          </Link>
        </div>
      </div>

      <div className={styles.login_no_data_wrapper}>
        <p className={styles.login_no_data}>{getText('noAccount')}</p>
        <Link to="#" className={styles.login_no_data_register}>
          {getText('register')}
        </Link>
      </div>

      <div className={styles.login_lang_wrapper}>
        <button
          type="button"
          className={styles.login_lang}
          style={lang === 'RU' ? activeStyle : {}}
          onClick={handleLangChange}
        >
          RU
        </button>
        <button
          type="button"
          className={styles.login_lang}
          style={lang === 'EN' ? activeStyle : {}}
          onClick={handleLangChange}
        >
          EN
        </button>
      </div>
    </section>
  );
}