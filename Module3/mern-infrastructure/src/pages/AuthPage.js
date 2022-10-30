import SignUpForm from "../components/SignUpForm/SignUpForm";

const AuthPage = ({setUser}) => {
  return (
    <div>
      <h1>AuthPage</h1>
      <SignUpForm setUser={setUser}/>
    </div>
  );
};
export default AuthPage;
