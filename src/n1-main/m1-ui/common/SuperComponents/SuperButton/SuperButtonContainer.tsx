import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import style from "./SuperButton.module.css";

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
type SuperButtonPropsType = DefaultButtonPropsType & {
    red?: boolean,
    value?: string
}

const SuperButton: React.FC<SuperButtonPropsType> = ({
                  red,
                  className,
                  ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
                                                     }
) => {

    const finalClassName = `${red ? style.red : style.default} ${className}`;

     return (
        <button
            className={finalClassName}
             {...restProps}
        >
            {/*it should lokks like this????*/}
            {/*{{...restProps}.value}*/}

        </button>
    );
}

export default SuperButton;
