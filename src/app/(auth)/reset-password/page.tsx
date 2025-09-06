import { resetPassword } from "../../../lib/actions";

export default function ResetPassword() {
  return (
    <div>
      <form action={resetPassword}>
        <input type="email" name="email" />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
}
