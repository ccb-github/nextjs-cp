'use client'
import ConfirmContext from "#/context/ConfirmContext";

const defaultConfirmState = {
  confirmed: false,
  text: "Confirm the action(The default text for confirm hook)"
}
export const ConfirmContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <ConfirmContext.Provider value={defaultConfirmState}>
      {children}
    </ConfirmContext.Provider>
  );
};