import React, {FC} from 'react';

export enum CardVariant{
    outline = 'outline',
    primary = 'primary'
}

interface CardProps {
    width?: string,
    height?: string,
    variant: CardVariant.outline | CardVariant.primary,
    onClick: (num: number)=> void,
}

const Card: FC<CardProps> = ({width,height,variant, onClick}) => {
    return (
        <div onClick={()=>onClick(5)} style={{width,height,  border: variant===CardVariant.outline? '1px solid blue':'none',
            background:variant === CardVariant.primary? 'green':'',
        }}>
            <div>HI</div>
        </div>
    );
};

export default Card;