import { Link, useNavigate } from 'react-router-dom';
import { useState, ChangeEvent, FormEvent } from 'react';

interface LoginFormData {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    try {
     
      const { email, password } = event.currentTarget.elements as unknown as {
        email: { value: string };
        password: { value: string };
      };
      const loginData: LoginFormData = { email: email.value, password: password.value };
     
      console.log(loginData);
     
      event.currentTarget.reset();
      
      navigate('/dashboard');
    } catch (error) {
      console.log(error);
      setIsSnackbarOpen(true);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    
    const { name, value } = event.target;
    
  };

  return (
    <div>
      <div>
        <h1>Sign in</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input type="email" name="email" onChange={handleChange} />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" name="password" onChange={handleChange} />
          </div>
          <div>
            <button type="submit">Sign In</button>
          </div>
        </form>
        <div>
          <p>Forgot password?</p>
          <p>
            Don't have an account? <Link to="/register">Sign Up</Link>
          </p>
        </div>
      </div>
      {isSnackbarOpen && (
        <div>
          <p>Incorrect Credentials</p>
        </div>
      )}
    </div>
  );
};

export default Login;
