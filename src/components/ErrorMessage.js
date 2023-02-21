import { AppText } from "components";

function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;

  return (
    <AppText className="text-error text-[13px] absolute left-1 bottom-0">
      {error}
    </AppText>
  );
}

export default ErrorMessage;
