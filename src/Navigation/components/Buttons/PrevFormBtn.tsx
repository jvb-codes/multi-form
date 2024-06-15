type PrevFormBtnType = {
  isFirstForm: number | null;
  handlePreviousForm: () => void;
};

function PrevFormBtn(props: PrevFormBtnType) {
  const { isFirstForm, handlePreviousForm } = props;
  return (
    <>
      {isFirstForm !== 1 && (
        <p onClick={handlePreviousForm} className="cursor-pointer text-denim ">
          Go back
        </p>
      )}
    </>
  );
}

export default PrevFormBtn;
