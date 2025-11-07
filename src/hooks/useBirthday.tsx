import { useSelector, useDispatch } from "react-redux";
import { setShowBirthday } from "../store/store.tsx";

export const useBirthday = () => {
  const dispatch = useDispatch();
  const show = useSelector((state: any) => state.birthdayPopup.show);

  const showBirthdayPopup = () => dispatch(setShowBirthday(true));
  const hideBirthdayPopup = () => dispatch(setShowBirthday(false));

  return { show, showBirthdayPopup, hideBirthdayPopup };
};
