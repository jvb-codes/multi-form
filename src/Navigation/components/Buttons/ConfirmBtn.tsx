type ConfirmBtnType = {
  isLastForm: number | null;
  handleNextForm: () => void;
};

function ConfirmBtn(props: ConfirmBtnType) {
  const { isLastForm, handleNextForm } = props;
  return (
    <>
      {isLastForm === 4 && (
        <button
          onClick={handleNextForm}
          className=" font-regular bg-purplishBlue rounded-lg px-4 py-2 text-white text-[14px] sm:block self-end outline"
        >
          Confirm
        </button>
      )}
    </>
  );
}

export default ConfirmBtn;
