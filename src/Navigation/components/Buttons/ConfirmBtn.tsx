type ConfirmBtnType = {
  isLastForm: number | null;
};

function ConfirmBtn(props: ConfirmBtnType) {
  const { isLastForm } = props;
  return (
    <>
      {isLastForm === 4 && (
        <button className=" font-regular bg-purplishBlue rounded-lg px-4 py-2 text-white text-[14px] sm:block self-end">
          Confirm
        </button>
      )}
    </>
  );
}

export default ConfirmBtn;
