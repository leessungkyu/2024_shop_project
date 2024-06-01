import { useState } from "react";
import { faEnvelope, faLock, faEye, faEyeSlash, faXmark } from '@fortawesome/free-solid-svg-icons'; // 사용할 아이콘 import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./LoginPage.css";

export default function LoginPage(){
  const [username, setUsername] = useState(''); // 입력한 아이디(이메일)
  const [password, setPassword] = useState(''); // 입력한 비밀번호
  const [showPassword, setShowPassword] = useState(false); // 비밀번호 보이기 여부를 관리하는 상태

  // 로그인 버튼 클릭 시 로그인 상태 변경
  const handleLogin = () => {
    // 아무 이메일이나 비밀번호를 입력하면 로그인에 성공한다고 가정합니다.
    if (username && password) {
      alert(`${username}님, 환영합니다!`);
    } else {
      alert('로그인 실패. 아이디 또는 비밀번호를 확인해주세요.');
    }
  };

  // 회원가입 버튼 클릭 시 회원가입 성공 메시지 띄우기
  const handleSignUp = () => {
    alert('회원가입 성공!');
  };

  // 비밀번호 보이기/숨기기 토글 함수
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // 아이디 입력 칸 초기화 함수
  const clearUsername = () => {
    setUsername('');
  };
    
    return(
    <div className="login_page">
      <img src="//static.coupangcdn.com/image/static/login/logo-coupang.x2.20201201.png" alt=""/>
      <br/>
      {/* 아이디(이메일) 입력 필드와 아이콘 */}
      <div className="input_with_icon">
        {/* 메일 아이콘 사용 */}
        <label className="login_label" htmlFor="login_input">
          <FontAwesomeIcon icon={faEnvelope} />
        </label>
        <input className="login" id="login_input" placeholder='아이디(이메일)' value={username} onChange={(e) => setUsername(e.target.value)} />
        <button className="login_button" onClick={clearUsername}><FontAwesomeIcon icon={faXmark}/></button>
      </div>
      <br/>
      {/* 비밀번호 입력 필드와 아이콘 */}
      <div className="input_with_icon">
        <label htmlFor="password_input" className="password_label">
          <FontAwesomeIcon icon={faLock} />
        </label>
        <input className="password" placeholder='비밀번호' type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="password_button" onClick={togglePasswordVisibility}>
          <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
        </button>
      </div>
      <br/>
      <button className="login_btn" onClick={handleLogin}>로그인</button>
      <br/>
      <button className="password_btn" onClick={handleSignUp}>회원가입</button>
    </div>
    )
}
