import React from "react";

import { CustomeButtonContainer } from "./custom-button.styles";

const CustomButton = ({children, ...props}) => (
    <CustomeButtonContainer {...props}>
        {children}
    </CustomeButtonContainer>
);

export default CustomButton;