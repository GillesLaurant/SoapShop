import { PropsWithChildren, useContext } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { UserContext } from "../../context/AdminContext";

// TYPES
type Props = PropsWithChildren<{
  open: Function;
}>;

/*****      AUTHENTIFICATION     *****/
export default function Authentification({ open }: Props) {
  // Context
  const { userLog } = useContext(UserContext);

  return (
    <ButtonGroup
      className="header_account col px-3"
      aria-label="account_buttons"
    >
      {!userLog.loggin && !userLog.admin && (
        <>
          <Button variant="outline-secondary" onClick={() => open("signin")}>
            sign in
          </Button>
          <Button variant="outline-secondary" onClick={() => open("signup")}>
            sign up
          </Button>
        </>
      )}
      {(userLog.loggin || userLog.admin) && (
        <Button variant="outline-secondary" onClick={() => open("loggout")}>
          loggout
        </Button>
      )}
    </ButtonGroup>
  );
}
