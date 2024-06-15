type NextFormBtnType = {
  handleNextForm: () => void;
  validation: boolean;
  isLastForm: number | null;
};

//use validation prop

function NextFormBtn(props: NextFormBtnType) {
  const { validation, handleNextForm, isLastForm } = props;

  return (
    <>
      {isLastForm !== 4 && (
        <button
          disabled={validation}
          onClick={handleNextForm}
          className=" font-regular bg-denim rounded-lg px-4 py-2 text-white text-[14px]  sm:block self-end disabled:opacity-60 "
        >
          Next Step
        </button>
      )}
    </>
  );
}

export default NextFormBtn;
