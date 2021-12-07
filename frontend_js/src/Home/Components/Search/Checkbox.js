import React from "react";
const Checkbox = () => {
    const [checkedOne, setCheckedOne] = React.useState(false);

    const handleChangeOne = () => {
        setCheckedOne(!checkedOne);
    };

    return (
        <div>
            <Checkbox
                label="Value 1"
                value={checkedOne}
                onChange={handleChangeOne}
            />

        </div>
    );
};
export default Checkbox;