export const isRequiredInput = (value) => {
    if (!value) {
      return (
        <div>
          This field is required!
        </div>
      );
    }
  };