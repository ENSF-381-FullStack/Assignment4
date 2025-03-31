import React, { useContext } from 'react';
import DisplayStatus from './DisplayStatus';
import { AuthContext } from './LoginForm';

function AuthMessage() {
  const { authStatus } = useContext(AuthContext);
  return (
    <div>
      {authStatus && (
        <DisplayStatus type={authStatus.type} message={authStatus.message} />
      )}
    </div>
  );
}

export default AuthMessage;
